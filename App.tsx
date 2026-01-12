
import React, { useState } from 'react';
import HomeTab from './components/HomeTab';
import ScheduleTab from './components/ScheduleTab';
import HotelTab from './components/HotelTab';
import SurvivalTab from './components/SurvivalTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'SCHEDULE' | 'HOTEL' | 'SURVIVAL'>('HOME');
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 고정 헤더 섹션 */}
      <div className="sticky top-0 z-50 shadow-lg">
        {/* 상단 텍스트 로고 및 제목 영역 */}
        <header className="bg-usanaBlue text-white p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center bg-white rounded-lg p-1.5 px-3 shadow-inner min-w-[80px]">
                <img 
                  src="https://www.usana.com/ux/dotcom/images/global/logos/usana-logo-blue.svg" 
                  alt="USANA" 
                  className="h-4 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    if ((e.target as HTMLImageElement).parentElement) {
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<span style="color: #003399; font-weight: 900; font-size: 15px; letter-spacing: -0.05em;">USANA</span>';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col border-l border-white/20 pl-3">
                <div className="flex items-center space-x-1">
                  <h1 className="text-[14px] font-black tracking-tighter leading-none uppercase italic text-white">2026 Malaysia</h1>
                  <span className="text-[10px] font-black text-usanaGold italic tracking-tighter">(WITH TEAM)</span>
                </div>
                <span className="text-[9px] text-white/70 font-bold tracking-[0.2em] mt-1 uppercase leading-none">Convention Guide</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
               <div className="bg-white/10 px-2 py-1 rounded text-[10px] border border-white/20 font-bold text-usanaGold">KL 2026</div>
            </div>
          </div>
        </header>

        {/* 비주얼 영역: 컨벤션 느낌을 강조한 레이아웃 */}
        <div className="w-full h-44 relative overflow-hidden bg-[#001f4d] flex items-center justify-center">
          {/* 기본 배경 (이미지 로딩 전) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#010b1a] via-usanaBlue to-[#001f4d]"></div>
          
          {/* 장식용 아이콘 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <i className="fas fa-globe-asia text-white text-[150px]"></i>
          </div>

          {/* 메인 비주얼: 말레이시아 랜드마크 & 컨벤션 이미지 */}
          <img 
            src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=1200" 
            alt="Kuala Lumpur" 
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/MITEC_Exterior.jpg/1200px-MITEC_Exterior.jpg";
            }}
          />

          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20"></div>

          {/* 헤더 하단 텍스트 정보 */}
          <div className="absolute bottom-4 left-5 right-5 z-30 flex justify-between items-end">
            <div className="flex flex-col">
               <div className="inline-flex items-center space-x-2 bg-usanaGold/90 px-2 py-0.5 rounded-sm mb-2 w-max shadow-lg">
                 <span className="text-white text-[9px] font-black uppercase tracking-widest">Official Convention Venue</span>
               </div>
               <h2 className="text-2xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl uppercase italic">
                 Unstoppable <span className="text-usanaGold">Together</span>
               </h2>
            </div>
            
            <div className="flex flex-col items-end">
               <span className="text-white/60 text-[8px] font-bold uppercase mb-1">MITEC Exhibition Centre</span>
               <button 
                onClick={() => window.open('https://www.google.com/search?q=MITEC+Kuala+Lumpur&tbm=isch', '_blank')}
                className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center space-x-1 border border-white/30 active:scale-95 transition-transform"
              >
                <i className="fas fa-camera text-[10px]"></i>
                <span className="text-[10px] font-bold uppercase">Gallery</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow pb-24 overflow-y-auto bg-gray-50">
        {activeTab === 'HOME' && <HomeTab />}
        {activeTab === 'SCHEDULE' && <ScheduleTab />}
        {activeTab === 'HOTEL' && <HotelTab />}
        {activeTab === 'SURVIVAL' && <SurvivalTab />}
      </main>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-8px_25px_rgba(0,0,0,0.08)] safe-bottom z-50">
        <div className="flex justify-around items-center h-16 px-2">
          <NavButton 
            icon="fa-house" 
            label="홈" 
            active={activeTab === 'HOME'} 
            onClick={() => setActiveTab('HOME')} 
          />
          <NavButton 
            icon="fa-calendar-days" 
            label="일정" 
            active={activeTab === 'SCHEDULE'} 
            onClick={() => setActiveTab('SCHEDULE')} 
          />
          <NavButton 
            icon="fa-hotel" 
            label="호텔/장소" 
            active={activeTab === 'HOTEL'} 
            onClick={() => setActiveTab('HOTEL')} 
          />
          <NavButton 
            icon="fa-shield-halved" 
            label="가이드" 
            active={activeTab === 'SURVIVAL'} 
            onClick={() => setActiveTab('SURVIVAL')} 
          />
        </div>
      </nav>
    </div>
  );
};

interface NavButtonProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
      active ? 'text-usanaBlue scale-105' : 'text-gray-400'
    }`}
  >
    <div className={`flex items-center justify-center w-11 h-11 rounded-2xl transition-all ${active ? 'bg-blue-50' : 'bg-transparent'}`}>
      <i className={`fas ${icon} ${active ? 'text-lg' : 'text-xl'}`}></i>
    </div>
    <span className={`text-[10px] leading-tight transition-all ${active ? 'font-black' : 'font-medium'}`}>{label}</span>
  </button>
);

export default App;
