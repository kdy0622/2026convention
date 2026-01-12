
import React, { useState, useEffect } from 'react';
import HomeTab from './components/HomeTab';
import ScheduleTab from './components/ScheduleTab';
import HotelTab from './components/HotelTab';
import SurvivalTab from './components/SurvivalTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'SCHEDULE' | 'HOTEL' | 'SURVIVAL'>('HOME');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky Top Header Section */}
      <div className="sticky top-0 z-50 shadow-md">
        {/* Text Header */}
        <header className="bg-usanaBlue text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0">
                <i className="fas fa-u text-usanaBlue font-black text-xl"></i>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-black tracking-tighter leading-none">USANA 2026 MALAYSIA</h1>
                <span className="text-[10px] text-usanaGold font-black tracking-[0.2em] mt-1 uppercase">
                  Unstoppable Convention
                </span>
              </div>
            </div>
            <div className="bg-white/10 p-2 rounded-lg">
               <i className="fas fa-globe-asia text-usanaGold"></i>
            </div>
          </div>
        </header>

        {/* Visual Header Image - Malaysia Iconic View */}
        <div className="w-full bg-usanaBlue overflow-hidden border-t border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5cf?auto=format&fit=crop&q=80&w=1000" 
            alt="Kuala Lumpur Skyline" 
            className="w-full h-32 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000';
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pb-24 overflow-y-auto">
        {activeTab === 'HOME' && <HomeTab />}
        {activeTab === 'SCHEDULE' && <ScheduleTab />}
        {activeTab === 'HOTEL' && <HotelTab />}
        {activeTab === 'SURVIVAL' && <SurvivalTab />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_15px_rgba(0,0,0,0.08)] safe-bottom z-50">
        <div className="flex justify-around items-center h-16">
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
            label="호텔 & 행사장" 
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
      active ? 'text-usanaBlue scale-110' : 'text-gray-400'
    }`}
  >
    <i className={`fas ${icon} text-xl`}></i>
    <span className="text-[10px] font-bold leading-tight">{label}</span>
  </button>
);

export default App;
