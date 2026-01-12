
import React, { useState } from 'react';

const ScheduleTab: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const imgSearch = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q + " Kuala Lumpur")}&tbm=isch`;
  const mapSearch = (q: string) => `https://www.google.com/maps/search/${encodeURIComponent(q + " Kuala Lumpur")}`;

  const scheduleData = [
    {
      day: '1월 28일 (수요일)',
      items: [
        { id: '1-1', time: '03:40', title: '인천공항 1터미널 집결', desc: 'N카운터 여행사 미팅', 
          details: '최종 일정표 및 티켓 수령. 수하물 위탁 시 보조배터리는 반드시 휴대.', 
          guide: { title: "인천국제공항 터미널 1", info: "한국의 관문이자 세계 최고의 공항. 1터미널은 아시아나 및 외항사 전용입니다.", facts: "면세구역 내 24시간 라운지와 무료 샤워실이 운영됩니다." }, icon: 'fa-users' },
        { id: '1-2', time: '12:30', title: '쿠알라룸푸르 도착 및 입국', desc: 'KLIA 터미널 1', 
          details: '입국 심사 시 MDAC 확인서 준비. 입국 게이트에서 가이드 미팅.', icon: 'fa-plane-arrival' },
        { id: '1-3', time: '15:00', title: '푸트라자야 시티투어', desc: '말레이시아 행정 수도', 
          guide: { title: "Putrajaya (푸트라자야)", info: "핑크 모스크와 총리 관저가 있는 행정 중심지입니다.", facts: "도시의 38%가 녹지로 조성된 인공 정원도시입니다.", map: mapSearch("Putrajaya") }, icon: 'fa-landmark' },
        { id: '1-4', time: '18:00', title: '반딧불 투어 및 현지식 석식', desc: '셀랑고르 강변', 
          guide: { title: "Selangor Firefly Park", info: "전통 나룻배를 타고 맹그로브 숲의 반딧불이를 감상합니다.", facts: "세계 3대 반딧불 서식지로 꼽힙니다.", map: mapSearch("Selangor Firefly Park") }, icon: 'fa-moon' }
      ]
    },
    {
      day: '1월 29일 (목요일)',
      items: [
        { id: '2-1', time: '08:00', title: '조식 및 자유시간', desc: '호텔 인근 산책', 
          dining: { title: "호텔 인근 조식/브런치 (10곳)", links: [
            { name: "VCR Cafe", url: mapSearch("VCR Cafe Bukit Bintang") },
            { name: "The Orchid Room", url: mapSearch("The Orchid Room") },
            { name: "OldTown White Coffee", url: mapSearch("OldTown White Coffee") },
            { name: "PappaRich", url: mapSearch("PappaRich Pavilion") },
            { name: "Feeka Coffee Roasters", url: mapSearch("Feeka Coffee Roasters") },
            { name: "Merchant's Lane", url: mapSearch("Merchant's Lane") },
            { name: "Breakfast Thieves", url: mapSearch("Breakfast Thieves") },
            { name: "Levain Boulangerie", url: mapSearch("Levain Boulangerie") },
            { name: "Common Man Coffee", url: mapSearch("Common Man Coffee") },
            { name: "Lisette's Cafe", url: mapSearch("Lisette's Cafe") }
          ]}, icon: 'fa-coffee' },
        { id: '2-2', time: '13:00', title: '유사나 체험존 오픈', desc: 'MITEC 1층 체험존', 
          details: '신제품 시음 및 브랜드 히스토리 체험관 운영.', icon: 'fa-flask' },
        { id: '2-3', time: '18:00', title: '갈라 나이트 디너', desc: 'MITEC 그랜드볼룸', 
          details: '공식 석식 제공. 2025 성취자 축하 및 갈라 쇼.', icon: 'fa-star' }
      ]
    },
    {
      day: '1월 30일 (금요일)',
      items: [
        { id: '3-1', time: '09:00', title: '제1세션: 글로벌 비전', desc: '메인 홀 (Main Hall)', 
          details: '제목: Unstoppable Future. 강사: 짐 브라운(CEO). 유사나의 글로벌 미래 전략 발표. 한국어 통역 제공.', icon: 'fa-microphone' },
        { id: '3-2', time: '12:00', title: '점심 시간 (MITEC 인근)', desc: '배달/식당 이용 권장', 
          dining: { title: "MITEC 인근 배달/맛집 (10곳)", links: [
            { name: "Nasi Lemak Ong", url: mapSearch("Nasi Lemak Ong") },
            { name: "Burger Lab", url: mapSearch("Burger Lab MITEC") },
            { name: "The Daily Chicken", url: mapSearch("The Daily Chicken") },
            { name: "Sushi Mentai", url: mapSearch("Sushi Mentai") },
            { name: "Pasta Panas", url: mapSearch("Pasta Panas") },
            { name: "Kyochon 1991", url: mapSearch("Kyochon MITEC") },
            { name: "Secret Recipe", url: mapSearch("Secret Recipe") },
            { name: "Boost Juice", url: mapSearch("Boost Juice") },
            { name: "Pizza Hut", url: mapSearch("Pizza Hut") },
            { name: "MyeongDong Topokki", url: mapSearch("MyeongDong Topokki") }
          ]}, icon: 'fa-utensils' },
        { id: '3-3', time: '14:30', title: '제2세션: Recognition', desc: '아시아 퍼시픽 시상식', 
          details: '아시아 각국의 성장 리더 시상 및 성공 사례 공유. 한국어 통역 제공.', icon: 'fa-trophy' },
        { id: '3-4', time: '18:30', title: '코리아 마켓 미팅 및 석식', desc: '호텔 인근 자유 식사', 
          dining: { title: "부킷빈탕 석식 추천 (10곳)", links: [
            { name: "Hakkarini", url: mapSearch("Hakkarini") },
            { name: "Jalan Alor", url: mapSearch("Jalan Alor") },
            { name: "Din Tai Fung", url: mapSearch("Din Tai Fung Pavilion") },
            { name: "Bijan Bar", url: mapSearch("Bijan Bar") },
            { name: "Opium KL", url: mapSearch("Opium KL") },
            { name: "El Cerdo", url: mapSearch("El Cerdo") },
            { name: "Lot 10 Hutong", url: mapSearch("Lot 10 Hutong") },
            { name: "Precious Old China", url: mapSearch("Precious Old China") },
            { name: "Haidilao", url: mapSearch("Haidilao Pavilion") },
            { name: "Marini's On 57", url: mapSearch("Marini's On 57") }
          ]}, icon: 'fa-users' }
      ]
    },
    {
      day: '1월 31일 (토요일)',
      items: [
        { id: '4-1', time: '09:00', title: '리더십 트레이닝', desc: '강사: 제이슨 시에', 
          details: '주제: Elevating U. 팀 빌딩과 멘탈 관리 전략. 한국어 동시통역 제공.', icon: 'fa-graduation-cap' },
        { id: '4-2', time: '12:00', title: '점심 시간 (자유)', desc: 'MITEC 푸드코트/배달', 
          dining: { title: "MITEC 배달 추천 (10곳)", links: [
            { name: "GrabFood: Nasi Kerabu", url: mapSearch("Nasi Kerabu") },
            { name: "KFC MITEC", url: mapSearch("KFC MITEC") },
            { name: "McDonald's MITEC", url: mapSearch("McDonald's MITEC") },
            { name: "Subway MITEC", url: mapSearch("Subway MITEC") },
            { name: "Tealive", url: mapSearch("Tealive MITEC") },
            { name: "Texas Chicken", url: mapSearch("Texas Chicken") },
            { name: "Nando's", url: mapSearch("Nando's MITEC") },
            { name: "Kenny Rogers", url: mapSearch("Kenny Rogers") },
            { name: "A&W", url: mapSearch("A&W Malaysia") },
            { name: "OldTown MITEC", url: mapSearch("OldTown MITEC") }
          ]}, icon: 'fa-utensils' },
        { id: '4-3', time: '14:00', title: '피날레 세션', desc: 'Unstoppable Usana', 
          details: '글로벌 경영진의 마지막 메시지 및 2027 컨벤션 예고.', icon: 'fa-bolt' }
      ]
    },
    {
      day: '2월 1일 (일요일)',
      items: [
        { id: '5-1', time: '09:00', title: '쿠알라룸푸르 시내 관광', desc: '바투 동굴, 메르데카 광장', 
          guide: { title: "Batu Caves & Merdeka", info: "272개의 계단이 있는 힌두 성지와 독립의 상징인 메르데카 광장입니다.", facts: "바투 동굴의 금색 동상은 높이가 42.7m에 달합니다.", map: mapSearch("Batu Caves") }, icon: 'fa-camera' },
        { id: '5-2', time: '14:00', title: '기념품 쇼핑 및 티타임', desc: '파빌리온 몰 자유 시간', 
          guide: { title: "Pavilion KL Shopping", info: "말레이시아 최고의 쇼핑몰로 BOH 홍차, 카야잼 쇼핑이 용이합니다.", map: mapSearch("Pavilion KL") }, icon: 'fa-bag-shopping' },
        { id: '5-3', time: '22:00', title: '공항 이동 및 출발', desc: 'OD820 바틱항공 탑승', icon: 'fa-plane-departure' }
      ]
    },
    {
      day: '2월 2일 (월요일)',
      items: [
        { id: '6-1', time: '06:30', title: '인천국제공항 도착', desc: '귀국 및 해산', icon: 'fa-house-user' }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-6 animate-fadeIn pb-24">
      {scheduleData.map((day, dIdx) => (
        <div key={dIdx} className="space-y-4">
          <div className="flex items-center space-x-2 border-l-4 border-usanaBlue pl-3 py-1">
            <h2 className="text-lg font-black text-gray-800">{day.day}</h2>
          </div>
          <div className="space-y-3">
            {day.items.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className={`bg-white rounded-3xl border transition-all duration-300 ${expandedId === item.id ? 'border-usanaBlue ring-4 ring-blue-50 shadow-lg' : 'border-gray-100 shadow-sm'}`}
              >
                <div className="p-4 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-50 px-2 py-3 rounded-2xl min-w-[55px] text-center">
                      <p className="text-[11px] font-black text-usanaBlue leading-none">{item.time}</p>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[13px] font-bold text-gray-800 leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <i className={`fas ${expandedId === item.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-200 text-xs`}></i>
                </div>
                {expandedId === item.id && (
                  <div className="px-5 pb-5 pt-1 space-y-4 animate-slideDown">
                    {item.details && (
                      <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                        <p className="text-xs text-blue-900 leading-relaxed font-medium"><strong>📝 상세:</strong> {item.details}</p>
                      </div>
                    )}
                    
                    {item.guide && (
                      <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-xs font-black text-gray-800">🏰 {item.guide.title}</p>
                           <a href={imgSearch(item.guide.title)} target="_blank" className="text-[10px] text-blue-500 font-bold"><i className="fas fa-search mr-1"></i>사진</a>
                        </div>
                        <p className="text-[11px] text-gray-600 mb-2">{item.guide.info}</p>
                        <p className="text-[10px] italic text-usanaGold font-medium">💡 {item.guide.facts}</p>
                        {item.guide.map && (
                          <a href={item.guide.map} target="_blank" className="mt-3 block text-center py-2 bg-white border border-gray-200 rounded-xl text-[10px] font-bold text-gray-700">
                             <i className="fas fa-map-location-dot mr-1"></i>지도 보기
                          </a>
                        )}
                      </div>
                    )}

                    {item.dining && (
                      <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                        <p className="text-xs font-black text-orange-800 mb-3"><i className="fas fa-utensils mr-2"></i>{item.dining.title}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {item.dining.links.map((link, lIdx) => (
                            <a key={lIdx} href={link.url} target="_blank" className="bg-white p-2 rounded-xl text-[10px] font-bold text-gray-700 border border-orange-100 flex items-center justify-between">
                              <span className="truncate">{link.name}</span>
                              <i className="fas fa-external-link-alt text-[8px] opacity-30"></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTab;
