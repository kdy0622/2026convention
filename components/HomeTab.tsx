
import React, { useState, useEffect } from 'react';

const HomeTab: React.FC = () => {
  const [klTime, setKlTime] = useState<string>('');
  const [klDate, setKlDate] = useState<string>('');
  const [myrAmount, setMyrAmount] = useState<string>('');
  const [krwAmount, setKrwAmount] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const EXCHANGE_RATE = 360;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Kuala_Lumpur',
        month: 'short', day: 'numeric', weekday: 'short' 
      };
      const klFormatter = new Intl.DateTimeFormat('ko-KR', options);
      const klTimeFormatter = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit', minute: '2-digit', hour12: false
      });
      setKlDate(klFormatter.format(now));
      setKlTime(klTimeFormatter.format(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMyrChange = (val: string) => {
    setMyrAmount(val);
    setKrwAmount(val === '' ? '' : (Number(val) * EXCHANGE_RATE).toString());
  };

  const handleKrwChange = (val: string) => {
    setKrwAmount(val);
    setMyrAmount(val === '' ? '' : (Number(val) / EXCHANGE_RATE).toFixed(2));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => setImages(prev => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <div className="p-4 space-y-4 animate-fadeIn pb-10">
      {/* Optimized Horizontal Time Display */}
      <section className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <i className="fas fa-clock text-usanaBlue text-lg"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 font-black uppercase tracking-wider">KL LOCAL TIME</span>
            <p className="text-[11px] text-gray-500 font-bold leading-none mt-0.5">{klDate}</p>
          </div>
        </div>
        <span className="text-2xl font-black text-usanaBlue tracking-tighter">{klTime || '--:--'}</span>
      </section>

      {/* Currency */}
      <div className="bg-gradient-to-br from-usanaBlue to-blue-900 p-6 rounded-[2rem] shadow-xl text-white">
        <div className="flex justify-between items-center mb-5">
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white">CURRENCY (1 MYR = 360 KRW)</span>
          <i className="fas fa-coins opacity-50"></i>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <input type="number" value={myrAmount} onChange={(e) => handleMyrChange(e.target.value)} placeholder="0.00" className="bg-white bg-opacity-10 border border-white border-opacity-10 rounded-2xl pl-4 pr-14 py-3 w-full text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-usanaGold"/>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-usanaGold text-sm">MYR</span>
          </div>
          <div className="relative">
            <input type="number" value={krwAmount} onChange={(e) => handleKrwChange(e.target.value)} placeholder="0" className="bg-white bg-opacity-10 border border-white border-opacity-10 rounded-2xl pl-4 pr-14 py-3 w-full text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-usanaGold"/>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-usanaGold text-sm">KRW</span>
          </div>
        </div>
      </div>

      {/* Gallery Drawer */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <button onClick={() => setIsGalleryOpen(!isGalleryOpen)} className="w-full flex items-center justify-between p-6 active:bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-50 text-usanaBlue rounded-xl flex items-center justify-center"><i className="fas fa-images"></i></div>
            <div className="text-left">
              <h3 className="font-black text-gray-800 text-sm">나의 여행 보관함</h3>
              <p className="text-[10px] text-gray-400">{images.length}개의 항목 보관 중</p>
            </div>
          </div>
          <i className={`fas fa-chevron-down text-gray-300 transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`}></i>
        </button>
        {isGalleryOpen && (
          <div className="px-6 pb-6 pt-2 animate-slideDown">
            <div className="mb-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-[11px] text-blue-800 leading-relaxed font-medium">
                <i className="fas fa-info-circle mr-1"></i>
                여권 사본, 항공권 E-티켓, 호텔 예약증 등을 촬영하거나 캡처하여 보관하세요. 비상시 오프라인에서도 확인이 가능합니다.
              </p>
            </div>
            <label className="mb-4 block w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-center text-xs text-gray-400 font-bold cursor-pointer active:bg-gray-50 transition-colors">
              <i className="fas fa-camera mr-2"></i>사진 촬영 및 업로드
              <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" multiple />
            </label>
            {images.length === 0 ? (
              <p className="text-center py-8 text-[11px] text-gray-300">보관된 사진이 없습니다.</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm" onClick={() => setSelectedImg(img)}>
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4">
          <div className="w-full flex justify-end space-x-6 mb-6">
            <a href={selectedImg} download="travel-doc.png" className="text-white text-2xl p-2"><i className="fas fa-download"></i></a>
            <button onClick={() => setSelectedImg(null)} className="text-white text-2xl p-2"><i className="fas fa-times"></i></button>
          </div>
          <div className="flex-grow flex items-center justify-center w-full">
            <img src={selectedImg} className="max-w-full max-h-full object-contain shadow-2xl" />
          </div>
        </div>
      )}

      <div className="text-center pt-2"><p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Usana Unstoppable 2026</p></div>
    </div>
  );
};

export default HomeTab;
