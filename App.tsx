
import React, { useState, useEffect } from 'react';
import HomeTab from './components/HomeTab';
import ScheduleTab from './components/ScheduleTab';
import HotelTab from './components/HotelTab';
import SurvivalTab from './components/SurvivalTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'SCHEDULE' | 'HOTEL' | 'SURVIVAL'>('HOME');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-usanaBlue text-white p-4 sticky top-0 z-50 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <i className="fas fa-u text-usanaBlue font-bold"></i>
          </div>
          <h1 className="text-lg font-bold tracking-tight">USANA 2026 MALAYSIA</h1>
        </div>
        <div className="text-xs text-usanaGold font-medium">CONVENTION GUIDE</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-24 overflow-y-auto">
        {activeTab === 'HOME' && <HomeTab />}
        {activeTab === 'SCHEDULE' && <ScheduleTab />}
        {activeTab === 'HOTEL' && <HotelTab />}
        {activeTab === 'SURVIVAL' && <SurvivalTab />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] safe-bottom z-50">
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
    className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
      active ? 'text-usanaBlue' : 'text-gray-400'
    }`}
  >
    <i className={`fas ${icon} text-xl`}></i>
    <span className="text-[9px] font-medium leading-tight">{label}</span>
  </button>
);

export default App;
