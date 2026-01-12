
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
                  <h1 className="text-[15px] font-black tracking-tighter leading-none uppercase italic text-white">2026 Malaysia</h1>
                  <span className="text-[11px] font-black text-usanaGold italic">(WITH TEAM)</span>
                </div>
                <span className="text-[9px] text-white/70 font-bold tracking-[0.2em] mt-1 uppercase">Convention Guide</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
               <i className="fas fa-users text-usanaGold"></i>
            </div>
          </div>
        </header>

        {/* 비주얼 영역: 실제 컨벤션 센터 이미지 적용 */}
        <div className="w-full h-44 relative overflow-hidden bg-[#001f4d] flex items-center justify-center">
          {/* 기본 배경 (이미지 로딩 전) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#010b1a] via-usanaBlue to-[#001f4d]"></div>
          
          {/* 장식용 아이콘 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <i className="fas fa-building-columns text-white text-[120px]"></i>
          </div>

          {/* 메인 비주얼: MITEC 컨벤션 센터 (안정적인 위키미디어 주소 사용) */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/MITEC_Exterior.jpg/1200px-MITEC_Exterior.jpg" 
            alt="MITEC Convention Centre" 
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              // 실패 시 대체 주소 (Pixabay)
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('pixabay')) {
                target.src = "https://cdn.pixabay.com/photo/2016/11/14/03/48/kuala-lumpur-1822527_1280.jpg";
              }
            }}
          />

          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20"></div>

          {/* 헤더 하단 텍스트 정보 */}
          <div className="absolute bottom-4 left-5 right-5 z-30 flex justify-between items-end">
            <div className="flex flex-col">
               <div className="inline-flex items-center space-x-2 bg-usanaBlue/60 backdrop-blur-md px-2 py-1 rounded-md mb-2 border border-white/10 w-max">
                 <i className="fas fa-location-dot text-usanaGold text-[10px]"></i>
                 <span className="text-white text-[10px] font-bold uppercase tracking-widest">MITEC, Kuala Lumpur</span>
               </div>
               <h2 className="text-2xl font-black text-white tracking-tighter leading-tight drop-shadow-xl uppercase italic">
                 Unstoppable <span className="text-usanaGold text-3xl">2026</span>
               </h2>
            </div>
            
            <button 
              onClick={() => window.open('https://www.google.com/search?q=MITEC+Kuala+Lumpur+interior&tbm=isch', '_blank')}
              className="bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-xl flex flex-col items-center justify-center active:scale-95 transition-transform border border-white/20"
            >
              <i className="fas fa-expand text-xs mb-0.5 text-usanaGold"></i>
              <span className="text-[9px] font-black uppercase">전경 보기</span>
            </button>
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
