
import React, { useState } from 'react';

const HotelTab: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const imgSearch = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q + " Kuala Lumpur")}&tbm=isch`;
  const mapSearch = (q: string) => `https://www.google.com/maps/search/${encodeURIComponent(q + " Kuala Lumpur")}`;

  const poiData: Record<string, any> = {
    hotelFood: {
      items: [
        { name: "Hakkarini", desc: "고급 말레이시아 요리", info: "숯불향 사테와 코코넛 나시르막", ingredients: "닭고기, 코코넛밀크, 삼발소스", taste: "매콤달콤한 현지 최고의 풍미", price: "40~70 MYR", map: mapSearch("Hakkarini") },
        { name: "Din Tai Fung", desc: "딤섬 전문점", info: "육즙 샤오롱바오", ingredients: "돼지고기, 생강, 밀가루", taste: "담백하고 고소한 육수 맛", price: "30~60 MYR", map: mapSearch("Din Tai Fung Pavilion") },
        { name: "Atmosphere 360", desc: "회전 뷔페", info: "말레이시아 전역 요리", ingredients: "랍스터, 양고기, 각종 향신료", taste: "다양한 맛의 대향연", price: "180~300 MYR", map: mapSearch("Atmosphere 360") },
        { name: "Bijan Bar", desc: "전통 말레이 퀴진", info: "렌당 다깅(소고기 찜)", ingredients: "소고기, 코코넛, 갈랑갈", taste: "진하고 부드러운 고기 맛", price: "60~120 MYR", map: mapSearch("Bijan Bar") },
        { name: "VCR Cafe", desc: "브런치 카페", info: "빅 브렉퍼스트, 커피", ingredients: "아보카도, 소시지, 스페셜티 커피", taste: "세련된 도심 속 여유의 맛", price: "35~55 MYR", map: mapSearch("VCR Bukit Bintang") },
        { name: "Al-Amar", desc: "레바논 요리", info: "훔무스, 팔라펠", ingredients: "병아리콩, 양고기, 피타 브레드", taste: "건강하고 이국적인 중동 맛", price: "50~90 MYR", map: mapSearch("Al-Amar Pavilion") },
        { name: "Marini's On 57", desc: "이탈리안 레스토랑", info: "파스타, 스테이크", ingredients: "트러플, 와규, 파스타면", taste: "최고급 재료의 이탈리안 맛", price: "200~400 MYR", map: mapSearch("Marini's On 57") },
        { name: "Lot 10 Hutong", desc: "푸드코트", info: "현지 유명 맛집 집합소", ingredients: "누들, 라이스 등 다양", taste: "말레이시아 노포의 맛", price: "15~30 MYR", map: mapSearch("Lot 10 Hutong") },
        { name: "Precious Old China", desc: "바바뇨냐 요리", info: "락사, 블루 라이스", ingredients: "생선 육수, 허브, 판단", taste: "새콤매콤한 전통의 맛", price: "40~80 MYR", map: mapSearch("Precious Old China") },
        { name: "Jalan Alor", desc: "노천 식당가", info: "칠리 크랩, 꼬치 구이", ingredients: "게, 해산물, 바비큐 소스", taste: "활기찬 야시장의 불맛", price: "30~100 MYR", map: mapSearch("Jalan Alor") }
      ]
    },
    hotelShop: {
      items: [
        { name: "Pavilion KL", desc: "럭셔리 백화점", history: "쿠알라룸푸르 최고의 쇼핑 성지", map: mapSearch("Pavilion KL") },
        { name: "Suria KLCC", desc: "트윈타워 아래 쇼핑몰", history: "랜드마크와 연결된 쇼핑 포인트", map: mapSearch("Suria KLCC") },
        { name: "Fahrenheit88", desc: "트렌디 패션몰", history: "젊은 층을 위한 브랜드 밀집", map: mapSearch("Fahrenheit88") },
        { name: "Lot 10", desc: "전통 쇼핑몰", history: "부킷빈탕의 상징적인 쇼핑 센터", map: mapSearch("Lot 10") },
        { name: "Starhill Gallery", desc: "하이엔드 럭셔리", history: "세계적인 명품 브랜드 갤러리", map: mapSearch("Starhill Gallery") },
        { name: "Sungei Wang Plaza", desc: "가성비 쇼핑", history: "로컬 의류와 전자제품", map: mapSearch("Sungei Wang Plaza") },
        { name: "ISETAN The Japan Store", desc: "일본 컨셉 백화점", history: "프리미엄 일본 제품 큐레이션", map: mapSearch("ISETAN Lot 10") },
        { name: "Central Market", desc: "전통 수공예 시장", history: "기념품 쇼핑의 최적지", map: mapSearch("Central Market") },
        { name: "Petaling Street", desc: "차이나타운 시장", history: "활기찬 노점과 가품 쇼핑", map: mapSearch("Petaling Street") },
        { name: "Low Yat Plaza", desc: "IT 기기 전문몰", history: "말레이시아 최대 디지털 가전 상가", map: mapSearch("Low Yat Plaza") }
      ]
    },
    hotelHot: {
      items: [
        { name: "Petronas Twin Towers", desc: "트윈 타워", history: "말레이시아를 상징하는 랜드마크", map: mapSearch("Petronas Twin Towers") },
        { name: "KL Tower", desc: "통신 타워 전망대", history: "시내 전경을 한눈에 조망", map: mapSearch("KL Tower") },
        { name: "Merdeka Square", desc: "독립 광장", history: "영국으로부터의 독립이 선포된 장소", map: mapSearch("Merdeka Square") },
        { name: "Batu Caves", desc: "힌두교 성지", history: "거대 황금상과 석회동굴", map: mapSearch("Batu Caves") },
        { name: "KLCC Park", desc: "도심 정원", history: "분수쇼와 트윈타워 포토존", map: mapSearch("KLCC Park") },
        { name: "Saloma Bridge", desc: "LED 육교", history: "화려한 조명의 최신 포토스팟", map: mapSearch("Saloma Bridge") },
        { name: "Bukit Bintang Crossing", desc: "쿠알라룸푸르의 시부야", history: "가장 붐비는 횡단보도 사거리", map: mapSearch("Bukit Bintang Crossing") },
        { name: "Royal Selangor", desc: "주석 센터", history: "세계 최대 주석 브랜드의 본사", map: mapSearch("Royal Selangor Visitor Centre") },
        { name: "Heli Lounge Bar", desc: "헬기장 루프탑", history: "실제 헬기장에서 즐기는 선셋 야경", map: mapSearch("Heli Lounge Bar") },
        { name: "Islamic Arts Museum", desc: "이슬람 예술 박물관", history: "아름다운 돔과 예술 유물", map: mapSearch("Islamic Arts Museum") }
      ]
    },
    mitecFood: {
      items: [
        { name: "The Daily Chicken", info: "한국식 치킨", taste: "바삭한 튀김옷과 비법 양념", price: "40~55 MYR", map: mapSearch("The Daily Chicken MITEC") },
        { name: "Nasi Lemak Ong", info: "나시르막 전문", taste: "고소한 코코넛밥과 매콤 삼발", price: "15~25 MYR", map: mapSearch("Nasi Lemak Ong") },
        { name: "Burger Lab", info: "수제 버거", taste: "특제 소스와 육즙 패티", price: "35~50 MYR", map: mapSearch("Burger Lab") },
        { name: "Sushi Mentai", info: "회전 초밥", taste: "감칠맛 나는 멘타이 소스", price: "20~40 MYR", map: mapSearch("Sushi Mentai") },
        { name: "Pasta Panas", info: "퓨전 파스타", taste: "매콤한 말레이풍 파스타", price: "25~40 MYR", map: mapSearch("Pasta Panas MITEC") },
        { name: "Kyochon 1991", info: "한국 치킨", taste: "마늘 간장의 단짠 조화", price: "45~70 MYR", map: mapSearch("Kyochon MITEC") },
        { name: "Secret Recipe", info: "케이크 & 식사", taste: "진한 치즈케이크와 현지식", price: "30~60 MYR", map: mapSearch("Secret Recipe MITEC") },
        { name: "Boost Juice", info: "과일 주스", taste: "신선한 과일 스무디", price: "15~22 MYR", map: mapSearch("Boost Juice MITEC") },
        { name: "Dunkin Donuts", info: "도넛 & 커피", taste: "간편한 간식과 커피", price: "10~25 MYR", map: mapSearch("Dunkin Donuts MITEC") },
        { name: "Pizza Hut", info: "배달 피자", taste: "친숙한 피자 맛", price: "40~60 MYR", map: mapSearch("Pizza Hut MITEC") }
      ]
    },
    mitecShop: {
      items: [
        { name: "Publika Gallery", desc: "아트 테마 몰", history: "MITEC 인근의 세련된 쇼핑몰", map: mapSearch("Publika Gallery") },
        { name: "Solaris Dutamas", desc: "트렌디 상업지구", history: "카페와 로컬 샵 밀집", map: mapSearch("Solaris Dutamas") },
        { name: "1 Mont Kiara", desc: "가족 중심 몰", history: "깔끔한 내부와 다양한 브랜드", map: mapSearch("1 Mont Kiara") },
        { name: "Hartamas Shopping Centre", desc: "로컬 쇼핑몰", history: "조용하고 편안한 쇼핑 공간", map: mapSearch("Hartamas Shopping Centre") },
        { name: "Village Grocer Publika", desc: "프리미엄 마트", history: "신선한 식료품과 선물용 커피 쇼핑", map: mapSearch("Village Grocer Publika") },
        { name: "Plaza Damas", desc: "복합 상가", history: "다양한 로컬 상점과 맛집", map: mapSearch("Plaza Damas") },
        { name: "Ben's Independent Grocer", desc: "고급 마트", history: "기념품과 수입 식료품", map: mapSearch("B.I.G. Publika") },
        { name: "Mont Kiara Shoppers", desc: "커뮤니티 몰", history: "거주민들이 선호하는 깔끔한 상가", map: mapSearch("Mont Kiara Shoppers") },
        { name: "Gateway Kiaramas", desc: "소규모 상가", history: "필수 편의시설 밀집", map: mapSearch("Gateway Kiaramas") },
        { name: "Arcoris Mont Kiara", desc: "모던 복합 몰", history: "최신 건축미와 트렌디한 샵", map: mapSearch("Arcoris Mont Kiara") }
      ]
    },
    mitecHot: {
      items: [
        { name: "Publika Art Walk", desc: "예술의 거리", history: "조형물과 그래피티가 있는 산책로", map: mapSearch("Publika Art Walk") },
        { name: "Istana Negara", desc: "새 왕궁", history: "말레이시아 국왕이 거주하는 웅장한 궁", map: mapSearch("Istana Negara") },
        { name: "Federal Territory Mosque", desc: "연방 직할지 모스크", history: "아름다운 터키풍 블루 돔 모스크", map: mapSearch("Federal Territory Mosque") },
        { name: "Kuala Lumpur Courts Complex", desc: "웅장한 법원 건물", history: "거대한 규모의 신고전주의 건축물", map: mapSearch("Kuala Lumpur Courts Complex") },
        { name: "Bamboo Hills", desc: "자연 친화적 핫플", history: "대나무 숲 사이의 트렌디 레스토랑", map: mapSearch("Bamboo Hills") },
        { name: "Kepong Metropolitan Park", desc: "연날리기 공원", history: "대형 연을 날리는 현지인들의 휴식처", map: mapSearch("Kepong Metropolitan Park") },
        { name: "The Waterfront Desa ParkCity", desc: "수변 공원", history: "반려견과 산책하기 좋은 고급 산책로", map: mapSearch("Desa ParkCity Waterfront") },
        { name: "MATRADE Exhibition Centre", desc: "전시 컨벤션", history: "MITEC 바로 옆의 역사적인 전시장", map: mapSearch("MATRADE") },
        { name: "MITEC Rooftop", desc: "행사장 전경", history: "컨벤션 센터의 모던한 외관 감상", map: mapSearch("MITEC") },
        { name: "Plaza Mont Kiara Weekend Market", desc: "벼룩 시장", history: "주말마다 열리는 다양한 로컬 마켓", map: mapSearch("Plaza Mont Kiara Market") }
      ]
    }
  };

  const Section = ({ id, title, subtitle, address, mapLink, color, icon }: any) => (
    <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden mb-4">
      <div className={`p-5 ${color} text-white`}>
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <span className="text-[10px] font-black opacity-80 uppercase tracking-widest">{subtitle}</span>
            <h3 className="text-lg font-black mt-1 leading-tight">{title}</h3>
            <p className="text-[10px] opacity-90 mt-2 flex items-center"><i className="fas fa-location-dot mr-1"></i> {address}</p>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center flex-shrink-0"><i className={`fas ${icon} text-2xl`}></i></div>
        </div>
        <a href={mapLink} target="_blank" className="mt-4 w-full py-3 bg-white text-gray-800 rounded-xl font-bold text-sm flex items-center justify-center shadow-lg active:scale-95">
          <i className="fas fa-map-marked-alt mr-2 text-blue-600"></i> 위치 검색 / 길찾기
        </a>
      </div>
      <div className="p-2 grid grid-cols-3 gap-2">
        {['Food', 'Shop', 'Hot'].map(type => (
          <button key={type} onClick={() => setExpandedId(expandedId === id + type ? null : id + type)} className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-2xl">
            <i className={`fas ${type === 'Food' ? 'fa-utensils text-orange-400' : type === 'Shop' ? 'fa-bag-shopping text-pink-400' : 'fa-fire text-red-500'} mb-1`}></i>
            <span className="text-[10px] font-bold">{type === 'Food' ? '맛집' : type === 'Shop' ? '쇼핑' : '핫플'}</span>
          </button>
        ))}
      </div>
      {expandedId && expandedId.startsWith(id) && poiData[expandedId] && (
        <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-4 animate-fadeIn">
          {poiData[expandedId].items.map((item: any, idx: number) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-black text-gray-800 text-sm leading-tight pr-2">{item.name}</h5>
                <div className="flex space-x-2 shrink-0">
                  <a href={imgSearch(item.name)} target="_blank" className="text-[9px] text-blue-500 font-bold border border-blue-100 px-2 py-1 rounded-full"><i className="fas fa-image mr-1"></i>사진</a>
                  <a href={mapSearch(item.name)} target="_blank" className="text-[9px] text-green-500 font-bold border border-green-100 px-2 py-1 rounded-full"><i className="fas fa-location-arrow mr-1"></i>지도</a>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mb-2 leading-relaxed">{item.desc}</p>
              <div className="space-y-1 text-[10px] bg-gray-50 p-3 rounded-xl border border-gray-50">
                {item.info && <p>🥘 <strong>안내:</strong> {item.info}</p>}
                {item.taste && <p>👅 <strong>맛:</strong> {item.taste}</p>}
                {item.price && <p className="text-usanaBlue font-black">💵 <strong>가격:</strong> {item.price}</p>}
                {item.history && <p className="text-gray-500 italic leading-snug">📜 {item.history}</p>}
              </div>
              <button 
                onClick={() => window.open(imgSearch(item.name), '_blank')}
                className="mt-3 w-full py-2 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black border border-blue-100 flex items-center justify-center active:bg-blue-100 transition-colors"
              >
                <i className="fas fa-images mr-2"></i>이 장소의 사진 더보기
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 space-y-2 animate-fadeIn pb-16">
      <Section id="hotel" title="로얄출란 쿠알라룸푸르" subtitle="HOTEL & BASE" address="5, Jalan Conlay, 50450 KL" mapLink={mapSearch("Royale Chulan Kuala Lumpur")} color="bg-gradient-to-r from-blue-700 to-indigo-800" icon="fa-hotel" />
      <Section id="mitec" title="MITEC 컨벤션 센터" subtitle="CONVENTION VENUE" address="8, Jalan Dutamas 2, 50480 KL" mapLink={mapSearch("MITEC Kuala Lumpur")} color="bg-gradient-to-r from-usanaGold to-yellow-600" icon="fa-building-columns" />
    </div>
  );
};

export default HotelTab;
