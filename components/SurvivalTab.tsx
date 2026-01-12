
import React, { useState } from 'react';

const SurvivalTab: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const speak = (t: string) => { const u = new SpeechSynthesisUtterance(t); u.lang = 'en-US'; window.speechSynthesis.speak(u); };

  const cultureInfo = [
    { title: "말레이시아 문화", info: "다민족(말레이, 중국, 인도) 국가입니다. 사원 방문 시 슬리퍼나 반바지는 피하세요. 인사는 가볍게 목례를 하거나 오른손으로 악수합니다." },
    { title: "필수 쇼핑 리스트", info: "BOH 홍차, 카야 잼, 주석 잔(Royal Selangor), 올드타운 화이트 커피, 히말라야 수분크림, 핀 빈 바오(과자) 등이 인기입니다." },
    { title: "교통 팁 (Grab)", info: "그랩(Grab)은 부를 때 가격이 고정되므로 바가지 걱정이 없습니다. 호텔 로비나 'Grab Point'에서 기다리세요." }
  ];

  const categories = [
    { id: 'customs', name: '세관 & 주의사항', icon: 'fa-shield-halved', color: 'bg-red-500', isInfo: true, content: "전자담배 포함 모든 담배는 과세 대상입니다. 주류는 1리터까지만 면세됩니다. 육가공품(소시지 등)은 반입이 제한됩니다." },
    { id: 'airport', name: '공항 & 기내', icon: 'fa-plane', color: 'bg-blue-500', phrases: [
      { en: "Water, please.", ko: "물 좀 주세요." },
      { en: "May I have a blanket?", ko: "담요 하나 주시겠어요?" },
      { en: "Where is the immigration?", ko: "입국 심사대가 어디인가요?" },
      { en: "I am here for a convention.", ko: "컨벤션 참석차 왔습니다." },
      { en: "Where can I pick up my luggage?", ko: "짐 찾는 곳이 어디인가요?" }
    ]},
    { id: 'transport', name: '교통 (그랩/택시)', icon: 'fa-car', color: 'bg-green-600', phrases: [
      { en: "To this hotel, please.", ko: "이 호텔로 가주세요." },
      { en: "Please open the trunk.", ko: "트렁크 좀 열어주세요." },
      { en: "How long does it take?", ko: "얼마나 걸리나요?" },
      { en: "Keep the change, please.", ko: "잔돈은 가지세요." },
      { en: "Where is the Grab pickup point?", ko: "그랩 픽업 장소가 어디인가요?" }
    ]},
    { id: 'shopping', name: '쇼핑 관광영어', icon: 'fa-bag-shopping', color: 'bg-pink-500', phrases: [
      { en: "How much is this?", ko: "이거 얼마예요?" }, 
      { en: "Can I get a discount?", ko: "할인 되나요?" }, 
      { en: "I'll take it.", ko: "이걸로 살게요." }, 
      { en: "Do you have this in a larger size?", ko: "더 큰 사이즈 있나요?" }, 
      { en: "Where is the tax-refund desk?", ko: "텍스 리펀 어디서 하나요?" }
    ]},
    { id: 'restaurant', name: '식당 & 카페', icon: 'fa-utensils', color: 'bg-orange-500', phrases: [
      { en: "No spicy, please.", ko: "맵지 않게 해주세요." },
      { en: "No cilantro, please.", ko: "고수 빼주세요." },
      { en: "A table for two, please.", ko: "두 명 자리 있나요?" },
      { en: "Check, please.", ko: "계산서 좀 주시겠어요?" },
      { en: "Can I pay by card?", ko: "카드로 결제 가능한가요?" }
    ]},
    { id: 'emergency', name: '긴급 & 의료영어', icon: 'fa-briefcase-medical', color: 'bg-orange-600', phrases: [
      { en: "I need a doctor, please.", ko: "의사가 필요해요." }, 
      { en: "Where is the nearest pharmacy?", ko: "가까운 약국이 어디인가요?" }, 
      { en: "I have a headache.", ko: "머리가 아파요." }, 
      { en: "I lost my passport.", ko: "여권을 잃어버렸어요." }, 
      { en: "Please call the Korean Embassy.", ko: "한국 대사관에 연락해 주세요." }
    ]}
  ];

  return (
    <div className="p-4 space-y-4 animate-fadeIn pb-16">
      <div className="grid grid-cols-2 gap-3 mb-2">
        <a href="https://www.grab.com/my/download/" target="_blank" className="bg-green-500 p-4 rounded-3xl text-white flex flex-col items-center shadow-md"><i className="fas fa-car mb-2"></i><span className="text-xs font-black">GRAB 앱</span></a>
        <a href="https://papago.naver.com/" target="_blank" className="bg-blue-600 p-4 rounded-3xl text-white flex flex-col items-center shadow-md"><i className="fas fa-language mb-2"></i><span className="text-xs font-black">파파고</span></a>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="font-black text-sm text-gray-800 border-b pb-2"><i className="fas fa-globe mr-2 text-usanaGold"></i>말레이시아 문화 & 선물</h3>
        {cultureInfo.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <h4 className="text-xs font-bold text-usanaBlue">{item.title}</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">{item.info}</p>
          </div>
        ))}
        <a href="https://www.google.com/maps/search/souvenirs+near+Royale+Chulan" target="_blank" className="block text-center text-[10px] font-bold text-usanaGold border border-usanaGold py-2 rounded-xl">주변 기념품점 찾기</a>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <button onClick={() => setActiveCat(activeCat === cat.id ? null : cat.id)} className="w-full flex items-center justify-between p-5">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${cat.color} text-white rounded-2xl flex items-center justify-center shadow-md`}><i className={`fas ${cat.icon} text-xl`}></i></div>
                <div className="text-left"><h3 className="font-black text-gray-800 text-sm">{cat.name}</h3><p className="text-[10px] text-gray-400">터치하여 문장 보기</p></div>
              </div>
              <i className={`fas fa-chevron-down text-gray-300 transition-transform ${activeCat === cat.id ? 'rotate-180' : ''}`}></i>
            </button>
            {activeCat === cat.id && (
              <div className="px-5 pb-5 space-y-3 animate-slideDown">
                {cat.isInfo ? (
                  <div className="p-4 bg-red-50 text-red-700 text-xs rounded-2xl font-bold leading-relaxed">{cat.content}</div>
                ) : (
                  cat.phrases?.map((p, idx) => (
                    <button key={idx} onClick={() => speak(p.en)} className="w-full text-left p-4 bg-gray-50 rounded-2xl border border-gray-100 active:bg-blue-50 flex justify-between items-center group">
                      <div><p className="text-sm font-bold text-gray-800 mb-1">{p.en}</p><p className="text-xs text-gray-500">{p.ko}</p></div>
                      <i className="fas fa-play-circle text-usanaBlue opacity-40 group-active:opacity-100"></i>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurvivalTab;
