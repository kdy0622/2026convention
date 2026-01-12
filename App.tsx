
import React, { useState, useEffect } from 'react';
import HomeTab from './components/HomeTab';
import ScheduleTab from './components/ScheduleTab';
import HotelTab from './components/HotelTab';
import SurvivalTab from './components/SurvivalTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'SCHEDULE' | 'HOTEL' | 'SURVIVAL'>('HOME');
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Time States
  const [times, setTimes] = useState({
    kl: { time: '--:--', date: '', day: '' },
    kr: { time: '--:--', date: '', day: '' }
  });

  // 탭 변경 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      const getLocaleInfo = (tz: string) => {
        const timeStr = new Intl.DateTimeFormat('ko-KR', {
          timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false
        }).format(now);
        const dateStr = new Intl.DateTimeFormat('ko-KR', {
          timeZone: tz, month: 'numeric', day: 'numeric'
        }).format(now);
        const dayStr = new Intl.DateTimeFormat('ko-KR', {
          timeZone: tz, weekday: 'short'
        }).format(now);
        return { time: timeStr, date: dateStr, day: dayStr };
      };

      setTimes({
        kl: getLocaleInfo('Asia/Kuala_Lumpur'),
        kr: getLocaleInfo('Asia/Seoul')
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const HEADER_IMAGE_URL = "https://cdn.pixabay.com/photo/2014/10/24/08/31/kuala-lumpur-500923_1280.jpg";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 고정 헤더 영역 */}
      <div className="sticky top-0 z-50 shadow-xl bg-gray-50">
        {/* Slim Top Header */}
        <header className="bg-[#001a4d] text-white p-3 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center bg-white rounded-md p-1 px-2 shadow-inner min-w-[60px]">
                <img 
                  src="https://www.usana.com/ux/dotcom/images/global/logos/usana-logo-blue.svg" 
                  alt="USANA" 
                  className="h-3 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col border-l border-white/20 pl-3">
                <h1 className="text-[12px] font-black tracking-tighter leading-none uppercase italic text-white">2026 Malaysia</h1>
                <span className="text-[8px] text-white/50 font-bold tracking-[0.1em] mt-0.5 uppercase leading-none italic">Unstoppable Together</span>
              </div>
            </div>
            <div className="bg-usanaGold/20 px-2 py-0.5 rounded text-[9px] border border-usanaGold/30 font-black text-usanaGold">EST. 2026</div>
          </div>
        </header>

        {/* Compact Visual & Time Board */}
        <div className="w-full h-40 relative overflow-hidden bg-[#001233] flex flex-col justify-end">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001233] via-[#001a4d] to-[#002266]"></div>
          <img 
            src={HEADER_IMAGE_URL} 
            alt="Kuala Lumpur" 
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 mix-blend-overlay opacity-50 ${imgLoaded ? 'scale-105' : 'scale-100'}`}
            onLoad={() => setImgLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001a4d]/40 to-black/90 z-20"></div>

          {/* Compact Dual Time Layout */}
          <div className="relative z-30 px-4 pb-3 flex flex-col">
            <div className="flex items-end justify-between mb-2">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-0.5">
                  <span className="bg-usanaGold text-[8px] font-black px-1 rounded text-[#001a4d]">KL</span>
                  <span className="text-white/70 text-[10px] font-bold">{times.kl.date} ({times.kl.day})</span>
                </div>
                <span className="text-4xl font-black text-white tracking-tighter tabular-nums leading-none">
                  {times.kl.time}
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-1.5 px-3 rounded-xl flex items-center space-x-3 mb-0.5">
                <div className="text-right">
                  <p className="text-[7px] text-white/40 font-black leading-none uppercase tracking-tighter mb-0.5">KOR</p>
                  <p className="text-[9px] text-white/70 font-bold leading-none">{times.kr.date}</p>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <span className="text-lg font-black text-usanaGold tracking-tighter tabular-nums leading-none">
                  {times.kr.time}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1.5 border-t border-white/10">
               <div className="flex items-center space-x-1.5">
                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(74,222,128,0.8)]"></div>
                 <span className="text-white/60 text-[8px] font-black uppercase tracking-widest">Global Live</span>
               </div>
               <span className="text-white/30 text-[8px] font-bold uppercase tracking-widest italic">Kuala Lumpur, MY</span>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠: 헤더가 sticky이므로 별도의 padding-top 없이도 자연스럽게 이어짐 */}
      <main className="flex-grow pb-24 bg-gray-50">
        {activeTab === 'HOME' && <HomeTab />}
        {activeTab === 'SCHEDULE' && <ScheduleTab />}
        {activeTab === 'HOTEL' && <HotelTab />}
        {activeTab === 'SURVIVAL' && <SurvivalTab />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] safe-bottom z-50">
        <div className="flex justify-around items-center h-16 px-2 py-1">
          <NavButton icon="fa-house" label="홈" active={activeTab === 'HOME'} onClick={() => setActiveTab('HOME')} />
          <NavButton icon="fa-calendar-days" label="일정" active={activeTab === 'SCHEDULE'} onClick={() => setActiveTab('SCHEDULE')} />
          <NavButton icon="fa-hotel" label="호텔/장소" active={activeTab === 'HOTEL'} onClick={() => setActiveTab('HOTEL')} />
          <NavButton icon="fa-shield-halved" label="가이드" active={activeTab === 'SURVIVAL'} onClick={() => setActiveTab('SURVIVAL')} />
        </div>
      </nav>
    </div>
  );
};

interface NavButtonProps { icon: string; label: string; active: boolean; onClick: () => void; }

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-full h-full py-1.5 space-y-1 transition-all duration-300 ${active ? 'text-usanaBlue translate-y-[-1px]' : 'text-gray-400'}`}>
    <div className={`flex items-center justify-center w-10 h-8 rounded-xl transition-all ${active ? 'bg-blue-50/70' : 'bg-transparent'}`}>
      <i className={`fas ${icon} text-lg`}></i>
    </div>
    <span className={`text-[9px] leading-tight transition-all ${active ? 'font-black' : 'font-medium'}`}>{label}</span>
    {active && <div className="w-1 h-1 bg-usanaBlue rounded-full mt-0.5"></div>}
  </button>
);

export default App;
