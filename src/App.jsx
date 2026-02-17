import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, UserPlus, Settings, History, Mic, Play, SkipForward, 
  CheckCircle, Truck, Users, FileText, AlertCircle, Trash2, 
  Volume2, Clock, Grid, Search, Droplet, Speaker, FileSpreadsheet, 
  Upload, Save, Edit3, Sparkles, Loader2, MessageSquare, 
  Database, Layers, Download, Calendar, Home, LogOut, Menu, 
  Wifi, WifiOff, BarChart2, MapPin, Youtube, Shuffle, ListOrdered, Plus
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { 
  getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, 
  onSnapshot, query, getDoc, setDoc, serverTimestamp 
} from 'firebase/firestore';
import * as XLSX from 'xlsx';

// ============================================================================
// ⚠️ CONFIGURATION: ใส่ค่า Config จาก Firebase Console ของคุณที่นี่
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyC2J9j3tcBw9lvkTzDPwsf7s3R9zbWLqD8",
  authDomain: "ptg-smart-queue.firebaseapp.com",
  projectId: "ptg-smart-queue",
  storageBucket: "ptg-smart-queue.firebasestorage.app",
  messagingSenderId: "351203200844",
  appId: "1:351203200844:web:11ff3e0a7a15539aaa09e9"
};

// ⚠️ ใส่ Gemini API Key ของคุณตรงนี้ (ถ้าต้องการใช้ฟีเจอร์ AI)
const apiKey = ""; 

// ✅ โลโก้ PTG Energy
const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/PTG_Energy_Logo.svg/200px-PTG_Energy_Logo.svg.png";

// --- ข้อมูลเริ่มต้น ---
const INITIAL_HEADERS = [
  "Trip No.", "ชื่อลูกค้า", "เบอร์รถ", "เที่ยว", "คลังที่รับ", "ดีเซล B7", "แก๊ส 91", "E20", "แก๊ส 95", "เบนซิน", "รวม", "เวลา"
];

const INITIAL_ROWS = [];

const EXTERNAL_STATUS_OPTIONS = [
  "รอรับตั๋ว",
  "รอตัดเงิน",
  "รอโอนเงิน",
  "รอวัดถัง",
  "รอตัดหนี้",
  "เสร็จสิ้น"
];

export default function App() {
  // --- Firebase State ---
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [user, setUser] = useState(null);
  const [db, setDb] = useState(null);
  const [appId, setAppId] = useState('main-station'); 

  // --- App State ---
  const [activeTab, setActiveTab] = useState('home'); // home, kiosk, tv, admin
  const [adminTab, setAdminTab] = useState('dashboard'); // dashboard, trips, stats, youtube, history

  const [queues, setQueues] = useState([]);
  const [history, setHistory] = useState([]);
  const [sheets, setSheets] = useState([{ id: 'default', name: "ข้อมูลตัวอย่าง", headers: INITIAL_HEADERS, rows: INITIAL_ROWS }]);
  const [activeSheetId, setActiveSheetId] = useState('default');
  
  // Settings
  const [youtubeConfig, setYoutubeConfig] = useState({ mode: 'sequential', playlist: [] });
  const [youtubeId, setYoutubeId] = useState("jfKfPfyJRdk"); 
  const [voices, setVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const [voiceRate, setVoiceRate] = useState(0.8);
  const [voicePitch, setVoicePitch] = useState(1.0);

  // --- 1. Initialization System ---
  useEffect(() => {
    // Load XLSX from CDN
    if (!window.XLSX) {
      const script = document.createElement('script');
      script.src = "https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Routing Logic
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['kiosk', 'tv', 'admin'].includes(hash)) {
        setActiveTab(hash);
      } else if (['dashboard', 'trips', 'stats', 'youtube', 'history'].includes(hash)) {
        setActiveTab('admin');
        setAdminTab(hash);
      } else {
        setActiveTab('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    // Firebase Init Logic
    try {
      let config = localFirebaseConfig;
      let currentAppId = 'main-station';

      // ตรวจสอบสภาพแวดล้อม
      if (typeof __firebase_config !== 'undefined') {
          config = JSON.parse(__firebase_config);
          if (typeof __app_id !== 'undefined') {
            currentAppId = __app_id.replace(/[^a-zA-Z0-9_-]/g, '_');
          }
      }
      
      if (config.apiKey && config.apiKey !== "AIzaSy...") {
        const app = initializeApp(config);
        const authInstance = getAuth(app);
        const dbInstance = getFirestore(app);
        
        setDb(dbInstance);
        setAppId(currentAppId);

        const initAuth = async () => {
            if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(authInstance, __initial_auth_token);
            } else {
            await signInAnonymously(authInstance);
            }
        };

        initAuth().catch(console.error);

        const unsubscribe = onAuthStateChanged(authInstance, (u) => {
            if (u) {
            setUser(u);
            setFirebaseInitialized(true);
            } else {
            setFirebaseInitialized(false);
            }
        });
        return () => { window.removeEventListener('hashchange', handleHashChange); unsubscribe(); };
      } else {
        console.warn("Using offline mode (No Firebase Config)");
        setFirebaseInitialized(true); 
      }
    } catch (e) {
      console.error("Firebase Init Error:", e);
      setFirebaseInitialized(true); 
    }
  }, []);

  // Update Hash
  const navigateTo = (path) => { window.location.hash = `#/${path}`; };
  
  // --- 2. Real-time Data Listeners ---
  useEffect(() => {
    if (!user || !db) return;

    // Helper to safe data
    const safeData = (doc) => { const d = doc.data(); return d ? { id: doc.id, ...d } : null; };

    const qQueues = collection(db, 'artifacts', appId, 'public', 'data', 'queues');
    const unsubQueues = onSnapshot(qQueues, (snap) => {
      const data = snap.docs.map(safeData).filter(x=>x);
      data.sort((a, b) => (a.createdAt?.toMillis?.() || 0) - (b.createdAt?.toMillis?.() || 0));
      setQueues(data);
    }, err => console.log("Offline or Perms Error"));

    const qHistory = collection(db, 'artifacts', appId, 'public', 'data', 'history');
    const unsubHistory = onSnapshot(qHistory, (snap) => {
      const data = snap.docs.map(safeData).filter(x=>x);
      data.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
      setHistory(data);
    }, err => console.log("Offline or Perms Error"));

    const qSheets = collection(db, 'artifacts', appId, 'public', 'data', 'sheets');
    const unsubSheets = onSnapshot(qSheets, (snap) => {
      const data = snap.docs.map(safeData).filter(x=>x);
      if (data.length > 0) {
        data.sort((a, b) => a.name.localeCompare(b.name));
        setSheets(data);
        setActiveSheetId(prev => {
            const exists = data.find(s => s.id === prev);
            return exists ? prev : data[0].id;
        });
      }
    }, err => console.log("Offline or Perms Error"));

    const qYoutube = doc(db, 'artifacts', appId, 'public', 'data', 'config', 'youtube');
    const unsubYoutube = onSnapshot(qYoutube, (docSnap) => {
        if (docSnap.exists()) setYoutubeConfig(docSnap.data());
    }, err => console.log("Offline or Perms Error"));

    return () => { unsubQueues(); unsubHistory(); unsubSheets(); unsubYoutube(); };
  }, [user, db, appId]);

  // --- 3. Voice & AI ---
  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
      if (!localStorage.getItem('voiceURI')) {
        const thVoice = v.find(x => x.name.includes('Google') && x.lang.includes('th')) || v.find(x => x.lang.includes('th'));
        if (thVoice) {
            setSelectedVoiceURI(thVoice.voiceURI);
            localStorage.setItem('voiceURI', thVoice.voiceURI);
        }
      } else {
        setSelectedVoiceURI(localStorage.getItem('voiceURI'));
      }
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speakPhrase = (text, forceVoiceURI = null, rate = null, pitch = null) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH';
    utterance.rate = rate !== null ? rate : voiceRate; 
    utterance.pitch = pitch !== null ? pitch : voicePitch;
    const targetURI = forceVoiceURI || selectedVoiceURI;
    const v = voices.find(x => x.voiceURI === targetURI);
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  };
  
  const handleRateChange = (e) => setVoiceRate(parseFloat(e.target.value));
  const handlePitchChange = (e) => setVoicePitch(parseFloat(e.target.value));
  const handleVoiceChange = (e) => {
      setSelectedVoiceURI(e.target.value);
      localStorage.setItem('voiceURI', e.target.value);
      speakPhrase("ทดสอบเสียง 1 2 3", e.target.value);
  };

  const callGemini = async (prompt) => {
    if (!apiKey) return null;
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const d = await res.json();
      return d.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (e) { console.error(e); return null; }
  };

  // --- 4. Logic Functions ---
  const findTripByPlate = (input) => {
    if (!input) return null;
    const cleanInput = input.trim().toLowerCase();
    for (const sheet of sheets) {
        const { headers, rows } = sheet;
        let pIdx = headers.findIndex(h => h && h.toString().includes("เบอร์รถ"));
        let sIdx = headers.findIndex(h => h && h.toString().includes("ชื่อลูกค้า"));
        let tIdx = headers.findIndex(h => h && h.toString().includes("Trip No."));
        let dIdx = headers.findIndex(h => h && h.toString().includes("คลังที่รับ"));

        if (pIdx === -1) pIdx = 2;
        if (sIdx === -1) sIdx = 1;
        if (tIdx === -1) tIdx = 0;
        if (dIdx === -1) dIdx = 4;

        const foundRow = rows.find(row => {
          const cellVal = row.cells[pIdx];
          const p = cellVal ? String(cellVal).toLowerCase() : '';
          return p === cleanInput || p.startsWith(cleanInput + '-') || p.includes(cleanInput);
        });

        if (foundRow) {
          return {
            plate: foundRow.cells[pIdx] || '',
            station: foundRow.cells[sIdx] || '',
            tripNo: foundRow.cells[tIdx] || '',
            depot: foundRow.cells[dIdx] || '',
            sheetId: sheet.id, 
            rowId: foundRow.id 
          };
        }
    }
    return null;
  };

  const extractYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const addToQueue = async (data) => {
    if (!db) return;
    try {
        const configRef = doc(db, 'artifacts', appId, 'public', 'data', 'config', 'metadata');
        const configSnap = await getDoc(configRef);
        let nextCounter = 1;
        if (configSnap.exists()) next = (configSnap.data().queueCounter || 0) + 1;

        // Clean undefined values
        const cleanData = JSON.parse(JSON.stringify(data));
        
        const newQueue = {
            ...cleanData,
            queueNumber: `Q${next.toString().padStart(3, '0')}`,
            status: 'waiting', 
            statusText: data.type === 'external' ? 'รอรับตั๋ว' : 'รอเรียกคิว',
            createdAt: serverTimestamp(),
            timestamp: new Date().toISOString()
        };
        
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'queues'), newQueue);
        await setDoc(configRef, { queueCounter: nextCounter }, { merge: true });
        
        alert(`จองคิวสำเร็จ! หมายเลขคิวของคุณคือ ${newQueue.queueNumber}`);
    } catch (e) { alert("Error adding queue: " + e.message); }
  };

  const updateStatus = async (id, st, txt) => {
    if (!db) return;
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'queues', id), {
        status: st, statusText: txt || undefined, calledAt: st==='called'?new Date().toISOString():undefined
    });
  };

  const callQueue = async (q) => {
    window.speechSynthesis.cancel();
    speakPhrase("เชิญครับ");
    if (q.type === 'internal') {
      const parts = q.plateNumber.split('-');
      speakPhrase(`รถเบอร์ ${parts[0].trim()}`);
      if (parts[1]) speakPhrase(`คุณ${parts[1].trim()}`);
      if (q.station && q.station !== '-') speakPhrase(`ปลายทาง ${q.station.replace(/^[A-Z0-9]+\s*-\s*/i, '').split('-')[0]}`);
      
      if (q.sourceTrip) {
        try {
            const sRef = doc(db, 'artifacts', appId, 'public', 'data', 'sheets', String(q.sourceTrip.sheetId));
            const sSnap = await getDoc(sRef);
            if (sSnap.exists()) {
              const rows = sSnap.data().rows.filter(r => r.id !== q.sourceTrip.rowId);
              await updateDoc(sRef, { rows });
            }
        } catch(e) {}
      }
    } else {
      speakPhrase(`บริษัท ${q.company}`);
      speakPhrase(`รถทะเบียน ${q.name.replace(/([ก-ฮ]+)(\d+)/, '$1 $2')}`);
    }
    speakPhrase("รับตั๋วครับ");
    await updateStatus(q.id, 'called', 'กำลังเรียกคิว');
  };

  const completeQueue = async (q) => {
    if (!db) return;
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'history'), { ...q, completedAt: new Date().toISOString() });
    await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'queues', q.id));
  };
  
  const skipQueue = async (id) => updateStatus(id, 'skipped', 'ข้ามคิว');

  const saveSheet = async (sheetObj) => {
      if (!db) return;
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'sheets', String(sheetObj.id)), sheetObj);
  };
  
  const saveYoutubeConfig = async (newConfig) => {
      if (!db) return;
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'config', 'youtube'), newConfig);
  };

  // --- Views ---

  const KioskView = () => {
    const [type, setType] = useState('internal');
    const [formData, setFormData] = useState({ plateNumber:'', matchedPlate:'', station:'', route:'', depot:'', name:'', company:'', dieselB7:'', gas91:'', e20:'', gas95:'', sourceSheetId:null, sourceRowId:null });
    const [aiLoading, setAiLoading] = useState(false);
    const [aiInput, setAiInput] = useState('');

    const handlePlate = (val) => {
      const t = findTripByPlate(val);
      setFormData({ 
        ...formData, plateNumber: val, 
        matchedPlate: t?.plate||'', station: t?.station||'', route: t?.tripNo||'', depot: t?.depot||'',
        sourceSheetId: t?.sheetId||null, sourceRowId: t?.rowId||null
      });
    };

    const handleMagic = async () => {
        if(!aiInput) return; setAiLoading(true);
        const json = await callGemini(`Extract Thai fuel order from: "${aiInput}". Fields: company, plateNumber, dieselB7, gas91, e20, gas95. Return JSON only.`);
        if(json) {
            try {
                const d = JSON.parse(json.replace(/```json|```/g, '').trim());
                setFormData(p => ({...p, company: d.company||'', name: d.plateNumber||'', dieselB7: d.dieselB7||'', gas91: d.gas91||'', e20: d.e20||'', gas95: d.gas95||'' }));
                setAiInput('');
            } catch(e){}
        }
        setAiLoading(false);
    };

    const submit = (e) => {
        e.preventDefault();
        let fuelList = '-', rawFuels = {};
        if(type==='external') {
            const arr = [];
            if(formData.dieselB7) arr.push(`B7:${formData.dieselB7}`);
            if(formData.gas91) arr.push(`91:${formData.gas91}`);
            if(formData.e20) arr.push(`E20:${formData.e20}`);
            if(formData.gas95) arr.push(`95:${formData.gas95}`);
            fuelList = arr.join(', ');
            rawFuels = { dieselB7: formData.dieselB7, gas91: formData.gas91, e20: formData.e20, gas95: formData.gas95 };
        }
        addToQueue({ 
            type, plateNumber: formData.matchedPlate || formData.plateNumber,
            station: formData.station||'-', route: formData.route||'-', depot: formData.depot||'-',
            name: formData.name, company: formData.company, fuelList, rawFuels,
            sourceTrip: (formData.sourceSheetId && formData.sourceRowId) ? { sheetId: formData.sourceSheetId, rowId: formData.sourceRowId } : null
        });
        setFormData({ plateNumber:'', matchedPlate:'', station:'', route:'', depot:'', name:'', company:'', dieselB7:'', gas91:'', e20:'', gas95:'', sourceSheetId:null, sourceRowId:null });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
                <button className={`flex-1 py-4 font-bold flex justify-center gap-2 ${type==='internal'?'bg-emerald-600 text-white':'bg-gray-100 text-gray-600'}`} onClick={()=>setType('internal')}><Truck/> ลูกค้าภายใน</button>
                <button className={`flex-1 py-4 font-bold flex justify-center gap-2 ${type==='external'?'bg-teal-600 text-white':'bg-gray-100 text-gray-600'}`} onClick={()=>setType('external')}><Users/> ลูกค้าภายนอก</button>
            </div>
            <form onSubmit={submit} className="p-8 space-y-6">
                {type==='internal' ? (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">เลขเบอร์รถ</label>
                            <div className="relative">
                                <Truck className="absolute left-3 top-3 text-gray-400" size={20}/>
                                <input className="w-full pl-10 p-3 border rounded text-xl" placeholder="เช่น 100" value={formData.plateNumber} onChange={e=>handlePlate(e.target.value)} required/>
                                {formData.matchedPlate && formData.matchedPlate !== formData.plateNumber && <div className="absolute right-3 top-3 text-emerald-600 font-bold flex gap-1 animate-pulse"><CheckCircle size={16}/> เจอ: {formData.matchedPlate}</div>}
                            </div>
                            <p className="text-xs text-gray-400 mt-1">*หากไม่พบข้อมูล สามารถกดออกบัตรคิวได้ทันที</p>
                        </div>
                        <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 grid grid-cols-2 gap-4">
                            <div><span className="text-xs text-gray-500">ปลายทาง</span><p className="font-bold text-lg text-gray-800">{formData.station||'-'}</p></div>
                            <div><span className="text-xs text-gray-500">คลัง</span><p className="font-bold text-gray-800">{formData.depot||'-'}</p></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-teal-50 p-4 rounded border border-teal-200 mb-4">
                            <label className="text-sm font-bold text-teal-800 flex gap-2 mb-2"><Sparkles size={16}/> Magic Fill</label>
                            <div className="flex gap-2">
                                <input className="flex-1 p-2 border rounded text-sm" placeholder="วางข้อความ..." value={aiInput} onChange={e=>setAiInput(e.target.value)}/>
                                <button type="button" onClick={handleMagic} disabled={aiLoading} className="bg-teal-600 text-white px-3 rounded text-sm">{aiLoading?'...':'AI'}</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="text-sm text-gray-700">ทะเบียนรถ</label><input className="w-full p-3 border rounded" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required/></div>
                            <div><label className="text-sm text-gray-700">บริษัท</label><input className="w-full p-3 border rounded" value={formData.company} onChange={e=>setFormData({...formData, company: e.target.value})} required/></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
                            {['dieselB7','gas91','e20','gas95'].map(f => (
                                <div key={f}><label className="text-xs text-gray-600 uppercase">{f}</label><input className="w-full p-2 border rounded text-right" placeholder="0" value={formData[f]} onChange={e=> /^\d*$/.test(e.target.value) && setFormData({...formData, [f]: e.target.value})}/></div>
                            ))}
                        </div>
                    </>
                )}
                <button type="submit" className={`w-full py-4 rounded text-white font-bold text-xl shadow-md ${type==='internal'?'bg-emerald-600 hover:bg-emerald-700':'bg-teal-600 hover:bg-teal-700'}`}>ออกบัตรคิว</button>
            </form>
        </div>
    );
  };

  const AdminDashboard = () => {
    const updateQ = async (id, st, txt) => { await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'queues', id), { status: st, statusText: txt || undefined, calledAt: st==='called'?new Date().toISOString():undefined }); };
    const completeQ = async (q) => { 
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'history'), { ...q, completedAt: new Date().toISOString() });
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'queues', q.id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
                 <h2 className="text-2xl font-bold text-emerald-800 flex gap-2"><Settings/> จัดการคิว ({queues.filter(q=>q.status!=='called').length})</h2>
                 <div className="flex gap-4 items-center bg-gray-100 p-2 rounded">
                    <Speaker size={18}/>
                    <div className="flex flex-col text-xs">
                        <label>Speed <input type="range" min="0.5" max="1.5" step="0.1" value={voiceRate} onChange={handleRateChange}/></label>
                        <label>Pitch <input type="range" min="0.5" max="1.5" step="0.1" value={voicePitch} onChange={handlePitchChange}/></label>
                    </div>
                 </div>
            </div>
            <div className="grid gap-4">
                {queues.map(q=>(
                    <div key={q.id} className={`bg-white p-4 rounded-xl shadow-sm border-l-4 flex justify-between items-center ${q.status==='called'?'border-emerald-500':'border-teal-500'}`}>
                        <div>
                            <div className="text-2xl font-bold">{q.type==='internal'?q.plateNumber:q.name} <span className="text-sm font-normal bg-gray-100 px-2 rounded text-gray-500">{q.queueNumber}</span></div>
                            <div className="text-gray-600">{q.type==='internal'?`${q.station}`:`${q.company}`}</div>
                            <div className="text-xs text-gray-400">สถานะ: {q.statusText}</div>
                        </div>
                        <div className="flex gap-2">
                            {q.type==='external' && <select className="border rounded text-sm" value={q.statusText} onChange={e=>updateQ(q.id, q.status, e.target.value)}>{EXTERNAL_STATUS_OPTIONS.map(o=><option key={o}>{o}</option>)}</select>}
                            <button onClick={()=>callQueue(q)} className="bg-emerald-600 text-white px-4 py-2 rounded"><Mic size={16}/></button>
                            <button onClick={()=>updateStatus(q.id,'skipped')} className="bg-orange-100 text-orange-600 px-3 py-2 rounded"><SkipForward size={16}/></button>
                            <button onClick={()=>completeQueue(q)} className="bg-green-100 text-green-600 px-3 py-2 rounded"><CheckCircle size={16}/></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  };

  const TripManager = () => {
    const fileRef = useRef();
    const [editingCell, setEditingCell] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0]; if(!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const wb = window.XLSX.read(evt.target.result, {type:'array'});
            const newSheets = wb.SheetNames.map((name, i) => {
                const json = window.XLSX.utils.sheet_to_json(wb.Sheets[name], {header:1});
                let headers=[], rows=[], start=false;
                json.forEach((r, idx) => {
                    const row = r.map(c=>String(c).trim());
                    if(!start && (row.includes('Trip No.') || row.includes('ชื่อลูกค้า'))) { start=true; headers=row; return; }
                    if(start) {
                         const norm = new Array(headers.length).fill('');
                         row.forEach((v,k)=>{if(k<headers.length)norm[k]=v!==undefined?v:''});
                         rows.push({id:Date.now()+idx, cells:norm});
                    }
                });
                return rows.length ? { id:'s'+Date.now()+i, name, headers, rows } : null;
            }).filter(Boolean);
            if(newSheets.length) { newSheets.forEach(s=>saveSheet(s)); alert('Imported!'); }
        };
        reader.readAsArrayBuffer(file);
    };

    const updateCell = async (rowId, colIdx, val) => {
        const cur = sheets.find(s=>s.id===activeSheetId);
        if(!cur) return;
        const newRows = cur.rows.map(r=>r.id===rowId?{...r, cells:r.cells.map((c,i)=>i===colIdx?val:c)}:r);
        await saveSheet({...cur, rows:newRows});
    };

    const curSheet = sheets.find(s=>s.id===activeSheetId) || sheets[0];
    const tripNoIdx = curSheet.headers.findIndex(h=>h?.includes('Trip'));
    const plateIdx = curSheet.headers.findIndex(h=>h?.includes('เบอร์รถ'));

    const commitEdit = async () => {
      if (editingCell) {
        const { sheetId, rowId, colIndex, value } = editingCell;
        const currentSheet = sheets.find(s => s.id === sheetId);
        if (currentSheet) {
            const updatedRows = currentSheet.rows.map(row => row.id===rowId ? {...row, cells: row.cells.map((c,i)=>i===colIndex?value:c)} : row);
            await saveSheet({ ...currentSheet, rows: updatedRows });
        }
        setEditingCell(null);
      }
    };
    const startEditing = (sheetId, rowId, colIndex, currentValue) => setEditingCell({ sheetId, rowId, colIndex, value: currentValue });
    const handleEditKeyDown = (e) => { if (e.key === 'Enter') commitEdit(); };

    return (
        <div className="bg-white rounded-xl shadow p-6 min-h-[600px] flex flex-col">
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex gap-2"><FileSpreadsheet className="text-emerald-600"/> ข้อมูลเที่ยวรถ</h2>
                <div><input type="file" ref={fileRef} hidden onChange={handleUpload}/><button onClick={()=>fileRef.current.click()} className="bg-emerald-600 text-white px-4 py-2 rounded flex gap-2"><Upload size={18}/> Import</button></div>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto">{sheets.map(s=><button key={s.id} onClick={()=>setActiveSheetId(s.id)} className={`px-4 py-2 rounded text-sm font-bold whitespace-nowrap ${activeSheetId===s.id?'bg-emerald-100 text-emerald-800 border-emerald-300 border':'bg-gray-100'}`}>{s.name}</button>)}</div>
            <div className="flex-1 overflow-auto border rounded relative">
                <table className="w-full text-left whitespace-nowrap bg-white border-collapse border border-gray-300">
                    <thead className="bg-gray-200 sticky top-0"><tr className="text-gray-700 text-sm">{curSheet.headers.map((h,i)=><th key={i} className={`p-2 border border-gray-300 font-bold ${i===tripNoIdx?'w-[80px]':''} ${i===plateIdx?'bg-yellow-100':''}`}>{h} {i===plateIdx&&'(แก้)'}</th>)}</tr></thead>
                    <tbody>
                        {curSheet.rows.map((r,ix)=>(
                            <tr key={r.id} className="hover:bg-emerald-50 text-sm">
                                <td className="p-1 border text-center text-gray-400 bg-gray-50">{ix+1}</td>
                                {r.cells.map((c,i)=>(
                                    <td key={i} className={`p-1 border border-gray-300 ${i===tripNoIdx?'w-[80px] truncate max-w-[80px]':''} ${i===plateIdx?'bg-yellow-50/50 cursor-pointer':''}`}>
                                        {i===plateIdx ? (
                                            editingCell?.rowId===r.id && editingCell?.colIndex===i ?
                                            <input autoFocus className="w-full bg-white border-blue-500 border rounded px-1" value={editingCell.value} onChange={e=>setEditingCell({...editingCell, value:e.target.value})} onBlur={commitEdit} onKeyDown={handleEditKeyDown}/> :
                                            <div onClick={()=>startEditing(curSheet.id, r.id, i, c)}>{c||'..'}</div>
                                        ) : <div className="truncate max-w-[200px]" title={c}>{c}</div>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
  };

  const YouTubeManager = () => {
      const [url, setUrl] = useState('');
      const { mode, playlist } = youtubeConfig;
      const addVideo = async () => {
          const id = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?.[1];
          if(id && id.length===11) {
             const newPlaylist = [...playlist, {id, url, addedAt: new Date().toISOString()}];
             await saveYoutubeConfig({mode, playlist: newPlaylist});
             setUrl('');
          } else alert('Link Error');
      };
      const remove = async (id) => await saveYoutubeConfig({mode, playlist: playlist.filter(v=>v.id!==id)});
      return (
          <div className="bg-white rounded-xl shadow p-6 h-full flex flex-col">
              <div className="flex justify-between mb-6">
                  <h2 className="text-xl font-bold flex gap-2"><Youtube className="text-red-600"/> จัดการวิดีโอ</h2>
                  <div className="flex gap-2">
                      <button onClick={()=>saveYoutubeConfig({...youtubeConfig, mode:'sequential'})} className={`px-3 py-1 rounded ${mode==='sequential'?'bg-blue-100 text-blue-700':'bg-gray-100'}`}><ListOrdered size={16}/> เรียง</button>
                      <button onClick={()=>saveYoutubeConfig({...youtubeConfig, mode:'random'})} className={`px-3 py-1 rounded ${mode==='random'?'bg-purple-100 text-purple-700':'bg-gray-100'}`}><Shuffle size={16}/> สุ่ม</button>
                  </div>
              </div>
              <div className="flex gap-2 mb-6"><input className="flex-1 border rounded px-4" placeholder="YouTube Link" value={url} onChange={e=>setUrl(e.target.value)}/><button onClick={addVideo} className="bg-red-600 text-white px-4 rounded"><Plus/></button></div>
              <div className="grid grid-cols-3 gap-3 overflow-auto">
                  {playlist.map((v,i)=>(<div key={i} className="border rounded p-2 relative group"><img src={`https://img.youtube.com/vi/${v.id}/default.jpg`} className="w-full h-24 object-cover rounded"/><button onClick={()=>remove(v.id)} className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500 opacity-0 group-hover:opacity-100"><Trash2 size={14}/></button></div>))}
              </div>
          </div>
      )
  };

  const StatsDashboard = () => { 
      const [selectedMonth, setSelectedMonth] = useState(() => `${new Date().getMonth()}-${new Date().getFullYear()}`);
      const getMonthOptions = () => {
          const opts = []; const today = new Date();
          for(let i=0; i<3; i++) {
              const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
              opts.push({ label: d.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' }), value: `${d.getMonth()}-${d.getFullYear()}` });
          }
          return opts;
      };
      const processStats = () => {
          const stats = { trucks: {}, stations: {}, external: {} };
          history.forEach(item => {
              const date = new Date(item.completedAt || item.timestamp);
              if (`${date.getMonth()}-${date.getFullYear()}` === selectedMonth) {
                  if (item.type === 'internal') {
                      const plate = item.plateNumber || 'Unknown'; stats.trucks[plate] = (stats.trucks[plate] || 0) + 1;
                      const cleanStation = (item.station || 'Unknown').split('-')[1]?.trim() || item.station; stats.stations[cleanStation] = (stats.stations[cleanStation] || 0) + 1;
                  } else {
                      const name = item.company || item.name || 'Unknown'; stats.external[name] = (stats.external[name] || 0) + 1;
                  }
              }
          });
          const sortDesc = (obj) => Object.entries(obj).sort(([,a], [,b]) => b - a);
          return { trucks: sortDesc(stats.trucks), stations: sortDesc(stats.stations), external: sortDesc(stats.external) };
      };
      const { trucks, stations, external } = processStats();
  
      return (
          <div className="space-y-6">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-2"><BarChart2 className="text-emerald-600"/> แดชบอร์ดสรุปสถิติ</h2>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border">
                      <Calendar size={16} className="text-gray-500"/>
                      <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="bg-transparent outline-none text-sm font-medium text-gray-700">
                          {getMonthOptions().map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2 pb-2 border-b"><Truck size={18} className="text-emerald-500"/> รถวิ่งมากที่สุด (Internal)</h3>
                      <div className="overflow-y-auto max-h-[300px]"><table className="w-full text-sm"><thead className="bg-gray-50 sticky top-0"><tr><th className="p-2 text-left">ทะเบียน</th><th className="p-2 text-right">เที่ยว</th></tr></thead><tbody>{trucks.length > 0 ? trucks.map(([plate, count], i) => (<tr key={plate} className="border-b last:border-0 hover:bg-gray-50"><td className="p-2 flex gap-2 items-center">{i < 3 && <span className="text-xs px-1.5 rounded bg-yellow-100 text-yellow-700 font-bold">{i+1}</span>}{plate}</td><td className="p-2 text-right font-bold text-emerald-600">{count}</td></tr>)) : <tr><td colSpan="2" className="p-4 text-center text-gray-400">ไม่มีข้อมูล</td></tr>}</tbody></table></div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2 pb-2 border-b"><MapPin size={18} className="text-teal-500"/> สถานีรับงานสูงสุด (Internal)</h3>
                      <div className="overflow-y-auto max-h-[300px]"><table className="w-full text-sm"><thead className="bg-gray-50 sticky top-0"><tr><th className="p-2 text-left">สถานี</th><th className="p-2 text-right">รอบ</th></tr></thead><tbody>{stations.length > 0 ? stations.map(([st, count], i) => (<tr key={st} className="border-b last:border-0 hover:bg-gray-50"><td className="p-2 truncate max-w-[150px]" title={st}>{i < 3 && <span className="text-xs px-1.5 rounded bg-yellow-100 text-yellow-700 font-bold mr-1">{i+1}</span>}{st}</td><td className="p-2 text-right font-bold text-teal-600">{count}</td></tr>)) : <tr><td colSpan="2" className="p-4 text-center text-gray-400">ไม่มีข้อมูล</td></tr>}</tbody></table></div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2 pb-2 border-b"><Users size={18} className="text-orange-500"/> ลูกค้าภายนอก (External)</h3>
                      <div className="overflow-y-auto max-h-[300px]"><table className="w-full text-sm"><thead className="bg-gray-50 sticky top-0"><tr><th className="p-2 text-left">บริษัท/ทะเบียน</th><th className="p-2 text-right">ครั้ง</th></tr></thead><tbody>{external.length > 0 ? external.map(([comp, count], i) => (<tr key={comp} className="border-b last:border-0 hover:bg-gray-50"><td className="p-2 truncate max-w-[150px]" title={comp}>{i < 3 && <span className="text-xs px-1.5 rounded bg-yellow-100 text-yellow-700 font-bold mr-1">{i+1}</span>}{comp}</td><td className="p-2 text-right font-bold text-orange-600">{count}</td></tr>)) : <tr><td colSpan="2" className="p-4 text-center text-gray-400">ไม่มีข้อมูล</td></tr>}</tbody></table></div>
                  </div>
              </div>
          </div>
      );
  };

  const HistoryPage = () => {
    const [filterMonth, setFilterMonth] = useState('all');
    const getAvailableMonths = () => { 
        const months = new Set(); history.forEach(h => months.add(`${new Date(h.timestamp).getMonth()}-${new Date(h.timestamp).getFullYear()}`));
        return Array.from(months);
    };
    const filteredHistory = history.filter(item => filterMonth === 'all' || `${new Date(item.timestamp).getMonth()}-${new Date(item.timestamp).getFullYear()}` === filterMonth);
    const exportCSV = () => { 
        const csvContent = "\uFEFF" + ["ลำดับ,เวลา,คิว,ทะเบียน,รายละเอียด"].concat(filteredHistory.map((h,i) => `${i+1},${h.timestamp},${h.queueNumber},${h.type==='internal'?h.plateNumber:h.name},${h.type==='internal'?h.station:h.company}`)).join("\n");
        const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([csvContent], {type:'text/csv'})); link.download = 'history.csv'; link.click();
    };

    return (
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2"><History/> ประวัติ</h2>
          <div className="flex gap-2">
             <select className="border rounded p-2" value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)}>
               <option value="all">ทั้งหมด</option>
               {getAvailableMonths().map(m => <option key={m} value={m}>{m}</option>)}
             </select>
             <button onClick={exportCSV} className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2"><Download size={16}/> Export</button>
             <button onClick={clearHistory} className="text-red-500 hover:text-red-700 px-4">ล้างประวัติ</button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead><tr className="border-b"><th>เวลา</th><th>คิว</th><th>รายละเอียด</th></tr></thead>
          <tbody>
            {filteredHistory.map((h, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2 text-sm text-gray-500">{new Date(h.timestamp).toLocaleString('th-TH')}</td>
                <td className="p-2 font-bold">{h.queueNumber}</td>
                <td className="p-2">{h.type === 'internal' ? h.plateNumber : h.name}</td>
                <td className="p-2 text-sm">{h.type === 'internal' ? h.station : `${h.company} (${h.fuelList})`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const TVDisplay = () => {
    const called = queues.filter(q=>q.status==='called').sort((a,b)=>new Date(b.calledAt)-new Date(a.calledAt)).slice(0,3);
    const waiting = queues.filter(q=>q.status==='waiting').slice(0,8);
    const { mode, playlist } = youtubeConfig;
    const getYoutubeSrc = () => {
        if (!playlist || playlist.length === 0) return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}`;
        let list = [...playlist];
        if(mode==='random') list.sort(() => Math.random() - 0.5);
        const ids = list.map(v=>v.id).join(',');
        return `https://www.youtube.com/embed/${list[0].id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ids}`;
    };

    return (
        <div className="h-screen flex flex-col bg-gray-900 text-white font-sans overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 p-4 flex justify-between items-center shadow-lg z-10">
                <div className="flex items-center gap-4">
                    <img src={LOGO_URL} className="h-12 w-12 object-contain bg-white rounded-full p-1"/>
                    <h1 className="text-3xl font-bold flex gap-3">คิวรับน้ำมัน</h1>
                </div>
                <div className="text-2xl font-mono font-bold bg-emerald-950 px-4 py-1 rounded-lg"><Clock size={20} className="inline mr-2"/>{new Date().toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'})}</div>
            </div>
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/2 p-4 flex flex-col gap-4 border-r border-gray-800">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-3 text-yellow-400 animate-pulse flex gap-2"><Mic/> กำลังเรียก</h2>
                        <div className="grid gap-3">
                            {called.map((q,i) => (
                                <div key={q.id} className={`p-4 rounded-xl border-l-8 border-yellow-400 flex flex-col justify-center ${i===0?'bg-emerald-900':'bg-gray-800'}`}>
                                    <div className="flex items-center justify-between w-full mb-2">
                                        <div className="text-5xl font-black text-white truncate max-w-[40%]">{q.type === 'internal' ? q.plateNumber : q.name}</div>
                                        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-xl animate-pulse shadow-lg mx-2">{q.type === 'external' ? q.statusText : (q.status==='called'?'เชิญรับตั๋ว':q.statusText)}</div>
                                        <div className="text-3xl font-bold text-emerald-200 truncate max-w-[30%] text-right">{q.type === 'internal' ? q.station : q.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="h-1/3 pt-4 border-t border-gray-700">
                        <h3 className="text-xl font-bold text-emerald-300 mb-3">คิวรอ</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {waiting.map(q=>(
                                <div key={q.id} className="bg-gray-800 p-3 rounded flex justify-between items-center border border-gray-700">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl text-white">{q.type==='internal'?q.plateNumber:q.name}</span>
                                        <span className="text-xs px-2 py-0.5 mt-1 rounded bg-blue-900 text-blue-200 border border-blue-700 w-fit">{q.statusText}</span>
                                    </div>
                                    <div className="text-right text-gray-400 text-sm truncate max-w-[100px]">{q.type==='internal'?q.station:q.company}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 relative bg-black">
                    <iframe className="w-full h-full absolute inset-0" src={getYoutubeSrc()} allow="autoplay"></iframe>
                    <div className="absolute bottom-0 w-full bg-red-700 py-2 text-white overflow-hidden whitespace-nowrap"><div className="animate-[marquee_20s_linear_infinite]">ประกาศ: กรุณาเตรียมเอกสารให้พร้อมก่อนเข้ารับบริการ...</div></div>
                </div>
            </div>
        </div>
    );
  };

  const AdminPage = ({ subTab }) => {
      return (
          <div className="min-h-screen bg-green-50 font-sans flex flex-col">
              <header className="bg-white shadow-sm sticky top-0 z-50">
                   <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                        <div className="text-xl font-bold text-emerald-800 flex gap-2 cursor-pointer" onClick={()=>navigateTo('home')}><img src={LOGO_URL} className="h-8"/> PTG Admin</div>
                        <div className="flex gap-2">
                            <button onClick={()=>setAdminSubTab('dashboard')} className={`px-3 py-2 rounded text-sm font-bold ${subTab==='dashboard'?'bg-emerald-100 text-emerald-800':'text-gray-500'}`}>คิว</button>
                            <button onClick={()=>setAdminSubTab('trips')} className={`px-3 py-2 rounded text-sm font-bold ${subTab==='trips'?'bg-emerald-100 text-emerald-800':'text-gray-500'}`}>เที่ยวรถ</button>
                            <button onClick={()=>setAdminSubTab('youtube')} className={`px-3 py-2 rounded text-sm font-bold ${subTab==='youtube'?'bg-emerald-100 text-emerald-800':'text-gray-500'}`}>วิดีโอ</button>
                            <button onClick={()=>setAdminSubTab('stats')} className={`px-3 py-2 rounded text-sm font-bold ${subTab==='stats'?'bg-emerald-100 text-emerald-800':'text-gray-500'}`}>สถิติ</button>
                            <button onClick={()=>setAdminSubTab('history')} className={`px-3 py-2 rounded text-sm font-bold ${subTab==='history'?'bg-emerald-100 text-emerald-800':'text-gray-500'}`}>ประวัติ</button>
                            <button onClick={()=>navigateTo('home')} className="text-red-500 px-2"><LogOut size={18}/></button>
                        </div>
                   </div>
              </header>
              <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
                  {subTab==='dashboard' && <AdminDashboard/>}
                  {subTab==='trips' && <TripManager/>}
                  {subTab==='youtube' && <YouTubeManager/>}
                  {subTab==='stats' && <StatsDashboard/>}
                  {subTab==='history' && <HistoryPage/>}
              </main>
          </div>
      );
  };
  
  const KioskPage = () => <KioskView />;
  const TVPage = () => <TVDisplay />;
  const LandingPage = () => (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 flex items-center justify-center font-sans">
          <div className="text-center">
              <img src={LOGO_URL} className="h-32 mx-auto mb-8 drop-shadow-md"/>
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-12">PTG Smart Queue</h1>
              <div className="grid grid-cols-3 gap-6">
                  <button onClick={()=>navigateTo('kiosk')} className="bg-white/70 p-8 rounded-2xl hover:bg-emerald-500 hover:text-white transition shadow-xl"><UserPlus size={48} className="mx-auto mb-4"/><h2 className="text-2xl font-bold">Kiosk</h2></button>
                  <button onClick={()=>navigateTo('tv')} className="bg-white/70 p-8 rounded-2xl hover:bg-teal-500 hover:text-white transition shadow-xl"><Monitor size={48} className="mx-auto mb-4"/><h2 className="text-2xl font-bold">TV</h2></button>
                  <button onClick={()=>navigateTo('admin')} className="bg-white/70 p-8 rounded-2xl hover:bg-green-600 hover:text-white transition shadow-xl"><Settings size={48} className="mx-auto mb-4"/><h2 className="text-2xl font-bold">Admin</h2></button>
              </div>
          </div>
      </div>
  );

  // --- Main Render Switch ---
  if (!firebaseInitialized) return <div className="h-screen flex items-center justify-center text-emerald-600"><Loader2 size={48} className="animate-spin"/></div>;
  
  if (activeTab === 'kiosk') return <KioskView />; 
  if (activeTab === 'tv') return <TVDisplay />;
  if (activeTab === 'admin') return <AdminPage subTab={adminSubTab} />;
  
  return <LandingPage />;
}