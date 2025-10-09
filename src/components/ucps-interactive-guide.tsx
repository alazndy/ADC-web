'use client';
import { useEffect, useRef, useState } from 'react';

const UCPSInteractiveGuide = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [obstacle, setObstacle] = useState({ x: 200, y: 150, w: 100, h: 60 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtx = useRef<AudioContext | null>(null);
  const beepInterval = useRef<any>(null);
  const specialBeepTimeout = useRef<any>(null);
  const continuousBeepNode = useRef<OscillatorNode | null>(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const activationTimer = useRef<any>(null);

  const [distances, setDistances] = useState({ left: 250, right: 250 });
  const [simState, setSimState] = useState({
      status: 'Sistem Aktif',
      view: 'normal',
      isMuted: false,
      isParked: false,
      isLocked: false,
      resetStep: 0, // 0: locked, 1: push button pressed
      activationCountdown: 0,
  });

  const [simSettings, setSimSettings] = useState({
      lockDistanceLeft: 30,
      lockDistanceRight: 30,
      activationDelay: 5, // Gecikme süresi (saniye)
      buzzerEnabled: true,
  });

  // --- AUDIO FUNCTIONS ---
  const setupAudio = () => {
      if (!audioCtx.current) {
          try {
              audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
          } catch (e) { console.error('Web Audio API is not supported'); }
      }
  };

  const playBeep = (duration = 80, freq = 1600) => {
      if (!audioCtx.current || !simSettings.buzzerEnabled || simState.isMuted) return;
      const oscillator = audioCtx.current.createOscillator();
      const gainNode = audioCtx.current.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.current.destination);
      gainNode.gain.setValueAtTime(0.1, audioCtx.current.currentTime);
      oscillator.frequency.setValueAtTime(freq, audioCtx.current.currentTime);
      oscillator.type = 'sine';
      oscillator.start(audioCtx.current.currentTime);
      oscillator.stop(audioCtx.current.currentTime + duration / 1000);
  };

  const playLockdownBeep = () => {
      if (!audioCtx.current || !simSettings.buzzerEnabled || simState.isMuted) return;
      stopContinuousBeep(); 
      const oscillator = audioCtx.current.createOscillator();
      const gainNode = audioCtx.current.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.current.destination);
      gainNode.gain.setValueAtTime(0.15, audioCtx.current.currentTime);
      oscillator.frequency.setValueAtTime(2000, audioCtx.current.currentTime);
      oscillator.type = 'sine';
      oscillator.start(audioCtx.current.currentTime);
      continuousBeepNode.current = oscillator;

      specialBeepTimeout.current = setTimeout(() => {
          stopContinuousBeep();
      }, 4000); // 4 saniye kesintisiz bip
  }

  const stopContinuousBeep = () => {
      if (continuousBeepNode.current) {
          continuousBeepNode.current.stop();
          continuousBeepNode.current.disconnect();
          continuousBeepNode.current = null;
      }
  };

  const clearAllTimers = () => {
      clearInterval(beepInterval.current);
      beepInterval.current = null;
      clearTimeout(specialBeepTimeout.current);
      specialBeepTimeout.current = null;
      stopContinuousBeep();
  };
  
  // --- CANVAS & SIMULATION LOGIC (UNCHANGED) ---
   useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawVisualization = (cmDistanceLeft: number, cmDistanceRight: number) => {
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = '#4a5568';
        ctx.fillRect(w * 0.2, h, w * 0.6, -30);
        
        const sensorLeftX = w * 0.40;
        const sensorRightX = w * 0.60;
        const sensorY = h - 30;
        ctx.fillStyle = '#a0aec0';
        ctx.beginPath();
        ctx.arc(sensorLeftX, sensorY, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sensorRightX, sensorY, 5, 0, 2 * Math.PI);
        ctx.fill();

        const drawBeam = (x: number, y: number, dist: number, lockDist: number) => {
            const maxRadius = canvas.height * 0.9;
            const radius = (dist / 250) * maxRadius; 
            
            let color = 'rgba(59, 130, 246, 0.2)';
            if (dist <= 60) color = 'rgba(245, 158, 11, 0.3)';
            if (dist <= lockDist) color = 'rgba(239, 68, 68, 0.4)';

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, radius, Math.PI, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        drawBeam(sensorLeftX, sensorY, cmDistanceLeft, simSettings.lockDistanceLeft);
        drawBeam(sensorRightX, sensorY, cmDistanceRight, simSettings.lockDistanceRight);

        ctx.fillStyle = '#e53e3e';
        ctx.fillRect(obstacle.x - obstacle.w / 2, obstacle.y - obstacle.h / 2, obstacle.w, obstacle.h);

        const roundedDistLeft = Math.round(cmDistanceLeft);
        const roundedDistRight = Math.round(cmDistanceRight);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`L:${roundedDistLeft} R:${roundedDistRight}`, obstacle.x, obstacle.y);
    }

    const getClosestDistanceToRect = (sensorX: number, sensorY: number, rect: any) => {
        const closestX = Math.max(rect.x - rect.w / 2, Math.min(sensorX, rect.x + rect.w / 2));
        const closestY = Math.max(rect.y - rect.h / 2, Math.min(sensorY, rect.y + rect.h / 2));
        const dx = sensorX - closestX;
        const dy = sensorY - closestY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    const updateSimulation = () => {
      const sensorLeftX = canvas.width * 0.40;
      const sensorRightX = canvas.width * 0.60;
      const sensorY = canvas.height - 30;
      const scale = 250 / (canvas.height - 30);
      
      const distancePixelsLeft = getClosestDistanceToRect(sensorLeftX, sensorY, obstacle);
      const distancePixelsRight = getClosestDistanceToRect(sensorRightX, sensorY, obstacle);

      const cmDistanceLeft = Math.min(250, distancePixelsLeft * scale);
      const cmDistanceRight = Math.min(250, distancePixelsRight * scale);

      setDistances({ left: cmDistanceLeft, right: cmDistanceRight });
      drawVisualization(cmDistanceLeft, cmDistanceRight);
    }
    
    updateSimulation();

    const handleMouseDown = (e: MouseEvent) => {
        if (simState.isLocked) return;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (mouseX > obstacle.x - obstacle.w / 2 && mouseX < obstacle.x + obstacle.w / 2 &&
            mouseY > obstacle.y - obstacle.h / 2 && mouseY < obstacle.y + obstacle.h / 2) {
            setIsDragging(true);
            setupAudio();
        }
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseOut = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const rect = canvas.getBoundingClientRect();
            setObstacle(prev => ({...prev, x: e.clientX - rect.left, y: e.clientY - rect.top}));
        }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearAllTimers();
    }

  }, [isDragging, obstacle, simState.isLocked, simSettings]);


  // --- CORE LOGIC EFFECT ---
  useEffect(() => {
    const isSystemActive = !simState.isParked && !simState.isLocked && simState.view === 'normal' && simState.activationCountdown === 0;
    if (!isSystemActive) {
        clearAllTimers();
        return;
    }

    const minDistance = Math.min(distances.left, distances.right);
    const lockDistance = Math.min(simSettings.lockDistanceLeft, simSettings.lockDistanceRight);

    // Kilitlenme Bölgesi
    if (minDistance <= lockDistance) {
        clearAllTimers();
        setSimState(s => ({ ...s, isLocked: true, status: 'ARAÇ KİLİTLENDİ', resetStep: 0 }));
        playLockdownBeep();
    } 
    // Uyarı Bölgesi
    else if (minDistance <= 60) {
        setSimState(s => ({ ...s, status: 'Cisim Algılandı' }));
        const intervalTime = 120 + (minDistance - 30) * 12; // Yaklaştıkça sıklaşır
        if (!beepInterval.current) {
             beepInterval.current = setInterval(() => playBeep(80), intervalTime);
        }
    } 
    // Güvenli Bölge
    else {
        clearAllTimers();
        setSimState(s => ({ ...s, status: 'Sistem Aktif' }));
    }

  }, [distances, simState.isParked, simState.isLocked, simState.view, simState.activationCountdown, simSettings]);

  // --- STATE CHANGE HANDLERS ---
  const handleParkToggle = () => {
      const isParking = !simState.isParked;
      setSimState(s => ({ ...s, isParked: isParking }));

      if (!isParking) { // Parktan çıkıyor
          setSimState(s => ({ ...s, activationCountdown: simSettings.activationDelay, status: `Sistem ${simSettings.activationDelay}sn içinde aktif` }));
          
          clearInterval(activationTimer.current);
          activationTimer.current = setInterval(() => {
              setSimState(s => {
                  if (s.activationCountdown <= 1) {
                      clearInterval(activationTimer.current);
                      return { ...s, activationCountdown: 0, status: 'Sistem Aktif' };
                  }
                  const newTime = s.activationCountdown - 1;
                  return { ...s, activationCountdown: newTime, status: `Sistem ${newTime}sn içinde aktif` };
              });
          }, 1000);
      } else { // Parka alınıyor
          clearInterval(activationTimer.current);
          setSimState(s => ({...s, activationCountdown: 0, status: 'Sistem Pasif'}));
      }
  }

  const handlePushButton = () => {
      if (simState.isLocked && simState.resetStep === 0) {
          setSimState(s => ({...s, resetStep: 1, status: 'RESET için Parka Al ve Ekrana Dokun'}));
      }
  }

  const handleScreenReset = () => {
      if (simState.isLocked && simState.resetStep === 1 && simState.isParked) {
          setSimState({ 
              ...simState,
              isLocked: false, 
              status: 'Sistem Aktif', 
              resetStep: 0, 
              view: 'normal' 
            });
          setObstacle({ x: 200, y: 150, w: 100, h: 60 });
      }
  }

  const switchView = (view: string) => setSimState(s => ({ ...s, view }));

  const handlePasswordInput = (char: string) => {
      if (char === 'del') setEnteredPassword(p => p.slice(0, -1));
      else if (enteredPassword.length < 4) setEnteredPassword(p => p + char);
  }

  const handlePasswordSubmit = () => {
      if (enteredPassword === '1234') {
          switchView('settings');
      } 
      setEnteredPassword('');
  }

  const adjustSetting = (key: keyof typeof simSettings, amount: number) => {
      setSimSettings(s => ({
          ...s,
          [key]: Math.max(30, Math.min(60, (s[key] as number) + amount))
      }))
  }

  // --- RENDER FUNCTIONS ---
  const displayDistLeft = Math.round(distances.left / 10) * 10;
  const displayDistRight = Math.round(distances.right / 10) * 10;

  const getBoxClasses = (dist: number, side: 'left' | 'right') => {
      const lockDist = side === 'left' ? simSettings.lockDistanceLeft : simSettings.lockDistanceRight;
      let classes = 'bg-gray-700/50 border-gray-600';
      if (dist <= 60 && !simState.isParked) classes = 'bg-orange-500/80 border-orange-400';
      if (dist <= lockDist && !simState.isParked) classes = 'bg-red-600/80 border-red-500';
      return `p-4 rounded-lg text-center w-full transition-all duration-300 ${classes}`;
  };

  const renderScreen = () => {
    switch(simState.view) {
        case 'password':
            return (
                <div className='text-center w-full max-w-sm'>
                    <div className="text-2xl font-bold mb-4 tracking-wide">ŞİFRE GİRİŞİ</div>
                    <div className="w-full h-12 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-3xl tracking-[.2em]">{'*'.repeat(enteredPassword.length)}</div>
                    <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => <button key={i+1} onClick={() => handlePasswordInput(String(i+1))} className="keypad-btn">{i+1}</button>)}
                        <button onClick={() => handlePasswordInput('del')} className="keypad-btn bg-yellow-600 hover:bg-yellow-500">SİL</button>
                        <button onClick={() => handlePasswordInput('0')} className="keypad-btn">0</button>
                        <button onClick={handlePasswordSubmit} className="keypad-btn bg-green-600 hover:bg-green-500">GİR</button>
                    </div>
                    <button onClick={() => { switchView('normal'); setEnteredPassword(''); }} className="w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 rounded-lg transition-colors">GERİ</button>
                </div>
            )
        case 'settings':
            return (
                <div className='text-center w-full'>
                    <div className="text-3xl font-bold mb-6 tracking-wide">AYARLAR</div>
                    <div className="space-y-3">
                        <button onClick={() => switchView('distance-settings')} className="w-full max-w-md mx-auto bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors text-lg">KİLİT MESAFE AYARI</button>
                    </div>
                    <button onClick={() => switchView('normal')} className="w-full max-w-xs mx-auto mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors text-lg">GERİ</button>
                </div>
            )
        case 'distance-settings':
             return (
                <div className='text-center w-full'>
                    <div className="text-2xl font-bold mb-4 tracking-wide">Kilit Mesafe Ayarı</div>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gray-700 w-40">
                            <div className="text-lg font-medium text-gray-300">SOL ARKA</div>
                            <div className="flex items-center justify-center space-x-2 my-1">
                                <button onClick={() => adjustSetting('lockDistanceLeft', -10)} className="text-3xl font-bold">-</button>
                                <div className="text-4xl font-bold w-20">{simSettings.lockDistanceLeft}cm</div>
                                <button onClick={() => adjustSetting('lockDistanceLeft', 10)} className="text-3xl font-bold">+</button>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-700 w-40">
                             <div className="text-lg font-medium text-gray-300">SAĞ ARKA</div>
                             <div className="flex items-center justify-center space-x-2 my-1">
                                <button onClick={() => adjustSetting('lockDistanceRight', -10)} className="text-3xl font-bold">-</button>
                                <div className="text-4xl font-bold w-20">{simSettings.lockDistanceRight}cm</div>
                                <button onClick={() => adjustSetting('lockDistanceRight', 10)} className="text-3xl font-bold">+</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => switchView('settings')} className="w-full max-w-xs mx-auto mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors text-lg">KAYDET & GERİ</button>
                </div>
            )
        default: // normal view
            return (
                <div className="text-center w-full h-full flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold mb-4 tracking-wide text-center">{simState.status}</div>
                    {simState.isLocked ? (
                        <div className='text-center'>
                           {simState.resetStep === 1 ? (
                               <button onClick={handleScreenReset} className={`font-bold py-4 px-8 rounded-lg transition-colors text-2xl ${simState.isParked ? 'bg-yellow-500 hover:bg-yellow-400 text-black' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>
                                   RESET
                               </button>
                           ) : (
                               <p className='text-lg'>Sistemi resetlemek için önce 'Arka Push Buton'a basın.</p>
                           )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 w-full">
                           <div className={getBoxClasses(distances.left, 'left')}>
                               <div className="text-lg font-medium text-gray-300">SOL ARKA</div>
                               <div className="text-5xl font-bold">{simState.isParked ? '--' : `${displayDistLeft} cm`}</div>
                           </div>
                           <div className={getBoxClasses(distances.right, 'right')}>
                               <div className="text-lg font-medium text-gray-300">SAĞ ARKA</div>
                               <div className="text-5xl font-bold">{simState.isParked ? '--' : `${displayDistRight} cm`}</div>
                           </div>
                        </div>
                    )}
                    {!simState.isLocked && <button onClick={() => switchView('password')} className="absolute bottom-4 left-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-lg transition-colors text-base">⚙️</button>}
                </div>
            )
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="bg-gray-800 p-2 rounded-xl shadow-2xl aspect-w-4 aspect-h-3">
            <div className="bg-black text-white rounded-lg p-4 min-h-[300px] flex flex-col justify-center items-center transition-all duration-300 relative aspect-w-4 aspect-h-3">
                {renderScreen()}
            </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow-2xl space-y-4 aspect-w-4 aspect-h-3">
            <div>
                <h4 className="font-bold text-center mb-2 text-white">Simülasyon Kontrolü</h4>
                <canvas ref={canvasRef} width="400" height="250" className="bg-gray-700 rounded-lg mx-auto cursor-move w-full"></canvas>
                <p className="text-center text-xs text-gray-400 mt-2">Engeli sürükleyerek sensör mesafelerini değiştirin.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <button 
                    onClick={handleParkToggle} 
                    disabled={simState.isLocked && simState.resetStep !== 1}
                    className={`w-full text-white font-bold py-2 px-2 rounded-lg transition-colors text-sm ${simState.isParked ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-600'} disabled:opacity-50 disabled:cursor-not-allowed`}>
                        {simState.isParked ? 'Sürüşe Devam' : '🅿️ Park / Fren'}
                </button>
                <button 
                    onClick={() => setSimState(s => ({...s, isMuted: !s.isMuted}))} 
                    className={`w-full text-white font-bold py-2 px-2 rounded-lg transition-colors text-sm ${simState.isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-yellow-500 hover:bg-yellow-600'}`}>
                        {simState.isMuted ? '🔇 Sesi Aç' : '🔊 Sesi Kapat'}
                </button>
            </div>
             <button 
                onClick={handlePushButton} 
                disabled={!simState.isLocked || simState.resetStep !== 0}
                className="w-full bg-gray-600 text-white font-bold py-2 px-2 rounded-lg transition-colors disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-sm">
                    Arka Push Buton
            </button>
        </div>
    </div>
  );
}

export default UCPSInteractiveGuide;
