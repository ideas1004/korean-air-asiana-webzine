const articles = [
  {
    date: "2026.08.12",
    source: "연합뉴스",
    category: "milestone",
    title: "아시아나 주주총회, 대한항공과 합병안 가결",
    summary:
      "5년 넘게 이어진 통합 작업이 마지막 주주 승인 관문을 통과했다. 12월 17일 출범을 향한 막바지 절차를 정리한다.",
    url: "https://www.yna.co.kr/amp/view/AKR20260812045751003",
  },
  {
    date: "2026.07.10",
    source: "매일경제",
    category: "crew",
    title: "합병 앞두고 함께한 사회공헌, 팀워크를 만들다",
    summary:
      "대한항공 조종사와 아시아나 승무원이 함께 참여한 진로 교육 등 공동 조직문화 프로그램 사례를 다룬다.",
    url: "https://www.mk.co.kr/en/business/12095429",
  },
  {
    date: "2026.06.25",
    source: "국토교통부",
    category: "regulation",
    title: "대한항공·아시아나항공 합병 조건부 인가",
    summary:
      "안전운항과 소비자 편의를 보호하기 위한 조건을 포함해 정부가 합병을 인가한 공식 보도자료다.",
    url: "https://www.molit.go.kr/USR/NEWS/m_71/dtl.jsp?id=95092156",
  },
  {
    date: "2026.06.25",
    source: "연합뉴스",
    category: "milestone",
    title: "국토부, 양사 통합 인가…12월 출범 길 열려",
    summary:
      "정부 인가의 의미와 운항증명 체계, 향후 감독 방향을 영어 기사로 정리했다.",
    url: "https://en.yna.co.kr/view/AEN20260625011200320",
  },
  {
    date: "2026.06.23",
    source: "아시아나항공",
    category: "customer",
    title: "스타얼라이언스 제휴·엘리트 혜택 종료 안내",
    summary:
      "2026년 12월 16일 탈퇴를 앞두고 적립, 보너스 항공권, 우수회원 혜택의 종료 시점을 안내한 공식 공지다.",
    url: "https://m.flyasiana.com/C/US/EN/customer/notice/detail?id=CM202606090002529359",
  },
  {
    date: "2026.06.23",
    source: "Lufthansa Group",
    category: "customer",
    title: "아시아나항공, 스타얼라이언스 탈퇴",
    summary:
      "동맹 탈퇴 일정과 인천을 계속 운항하는 회원사 네트워크를 알린 스타얼라이언스 발표 재게시본이다.",
    url: "https://newsroom.lufthansagroup.com/en/asiana-airlines-to-exit-star-alliance/",
  },
  {
    date: "2026.06.19",
    source: "연합뉴스",
    category: "milestone",
    title: "통합 비용 최대 1조원…2028년 상쇄 전망",
    summary:
      "대한항공이 밝힌 통합 비용 범위와 시너지 손익분기 예상 시점을 전한다.",
    url: "https://en.yna.co.kr/view/AEN20260619010000315",
  },
  {
    date: "2026.06.15",
    source: "뉴스토마토",
    category: "crew",
    title: "아시아나 승무원, 대한항공편에서 서비스 체험",
    summary:
      "통합 출범을 앞두고 아시아나 객실승무원이 대한항공편에 탑승해 기내 서비스와 업무 체계를 직접 살펴본 표준화 프로그램을 취재했다.",
    url: "https://www.newstomato.com/ReadNews.aspx?no=1303979",
  },
  {
    date: "2026.05.29",
    source: "The Korea Times",
    category: "crew",
    title: "양사 승무원, 첫 공동 비상탈출 훈련 완료",
    summary:
      "각 사 객실승무원 14명씩이 참여한 합동 훈련을 통해 안전 절차 통합의 실제 모습을 보여준다.",
    url: "https://www.koreatimes.co.kr/business/companies/20260529/korean-air-asiana-complete-joint-emergency-drill-ahead-of-merger",
  },
  {
    date: "2026.05.18",
    source: "EUR-Lex",
    category: "regulation",
    title: "EU 집행위 결정 요약, 관보에 공개",
    summary:
      "여객·화물 시장 경쟁 우려와 시정 조치, 효율성 주장에 대한 EU의 공식 판단을 담은 결정 요약문이다.",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026M10149(02)",
  },
  {
    date: "2026.05.13",
    source: "대한항공 뉴스룸",
    category: "milestone",
    title: "12월 17일 ‘통합 대한항공’ 출범 공식화",
    summary:
      "합병 비율 1 대 0.2736432, 인허가 일정, 자산·부채·근로자 승계 계획을 담은 핵심 공식 발표다.",
    url: "https://news.koreanair.com/%EB%8C%80%ED%95%9C%ED%95%AD%EA%B3%B5-%EC%95%84%EC%8B%9C%EC%95%84%EB%82%98%ED%95%AD%EA%B3%B5-%ED%95%A9%EB%B3%91%EA%B3%84%EC%95%BD-%EC%B2%B4%EA%B2%B0-2026%EB%85%84-12%EC%9B%94-17%EC%9D%BC/",
  },
  {
    date: "2026.04.30",
    source: "The Korea Times",
    category: "people",
    title: "‘Journey Together’로 조직문화 통합 속도",
    summary:
      "공유 공간과 소통 프로그램을 통해 두 회사의 문화적 거리를 줄이려는 시도를 취재했다.",
    url: "https://www.koreatimes.co.kr/amp/business/companies/20260430/korean-air-pushes-for-organizational-integration-ahead-of-merger-with-asiana",
  },
  {
    date: "2026.04.14",
    source: "대한항공 뉴스룸",
    category: "crew",
    title: "두 유니폼이 함께 달린 ‘위런’의 하루",
    summary:
      "대한항공과 아시아나 객실승무원들이 가족·동료와 함께 달리며 통합 이후의 협업과 조직문화에 관해 나눈 이야기를 담았다.",
    url: "https://news.koreanair.com/ke-live-%EB%B0%9C%EA%B1%B8%EC%9D%8C-%EC%9C%84%EC%97%90-%EC%8C%93%EC%9D%B8-%EB%82%98%EB%88%94-%ED%95%98%EB%82%98%EC%9D%98-%ED%95%98%EB%8A%98%EC%9D%84-%ED%96%A5%ED%95%B4-%EB%8B%AC%EB%A6%AC%EB%8B%A4/",
  },
  {
    date: "2026.04.03",
    source: "AeroRoutes",
    category: "network",
    title: "대한항공·아시아나 공동운항 시작",
    summary:
      "2026년 여름 시즌부터 단계적으로 적용된 국내외 코드셰어 노선 목록을 항공 스케줄 데이터로 정리했다.",
    url: "https://www.aeroroutes.com/eng/260403-keozcodeshare",
  },
  {
    date: "2026.03.23",
    source: "연합뉴스",
    category: "customer",
    title: "아시아나 좌석번호 체계, 대한항공과 연동",
    summary:
      "통합 직전 운항편의 좌석 번호 체계를 맞추는 고객 접점의 구체적 변화를 전한다.",
    url: "https://www.yna.co.kr/amp/view/AKR20260323116900003",
  },
  {
    date: "2026.03.16",
    source: "UK CMA",
    category: "regulation",
    title: "런던–서울 슬롯 제공 합의 승인",
    summary:
      "버진 애틀랜틱의 2026년 노선 진입을 위한 슬롯 제공 약정을 포함한 영국 경쟁당국 사건 기록이다.",
    url: "https://www.gov.uk/cma-cases/korean-air-slash-asiana-airlines-merger-inquiry",
  },
  {
    date: "2026.02.27",
    source: "아시아경제",
    category: "people",
    title: "두 회사, 조직 통합에 총력",
    summary:
      "KE Way, 공유 근무공간, 내부 설문 등 ‘한 회사’가 되기 전 문화 통합 프로그램과 직원 반응을 취재했다.",
    url: "https://view.asiae.co.kr/en/article/2026022708175807267",
  },
  {
    date: "2026.01.26",
    source: "아주경제",
    category: "crew",
    title: "승무원들의 ‘불편한 동거’, 현장 공간은 과도기",
    summary:
      "T2 통합 배치 뒤 객실승무원과 현장 직원이 겪은 대기·주차 공간 부족을 통해 물리적 통합의 현실을 짚는다.",
    url: "https://www.ajunews.com/view/20260126145430219",
  },
  {
    date: "2026.01.19",
    source: "CAPA",
    category: "network",
    title: "통합 진에어가 바꿀 한국 LCC 시장",
    summary:
      "진에어·에어부산·에어서울의 2027년 1분기 통합 계획과 시장 경쟁 구도를 항공 전문매체가 분석했다.",
    url: "https://centreforaviation.com/analysis/reports/jin-air-set-to-strengthen-its-position-in-south-koreas-lcc-market-after-merger-736077",
  },
  {
    date: "2026.01.15",
    source: "뉴시스",
    category: "crew",
    title: "T2 첫날 드러난 승무원 조직문화의 간극",
    summary:
      "공동 비행준비실 사용 첫날 제기된 갈등과 교육·브리핑 공간 운영을 통해 화학적 결합의 과제를 살핀다.",
    url: "https://www.newsis.com/view/NISX20260115_0003478083",
  },
  {
    date: "2026.01.14",
    source: "연합뉴스",
    category: "customer",
    title: "아시아나, 인천공항 T2 운항 시작",
    summary:
      "OZ112편을 시작으로 터미널 2 공동 거점 시대가 열린 첫날 현장을 기록했다.",
    url: "https://www.yna.co.kr/amp/view/AKR20260114032501003",
  },
  {
    date: "2026.01.12",
    source: "대한TV",
    category: "crew",
    title: "양사 객실승무원, 김장 나눔으로 만든 한 팀",
    summary:
      "대한항공과 아시아나 객실승무원들이 지역 취약계층을 위해 함께 김장을 담그며 교류한 공동 봉사 현장 영상이다.",
    url: "https://www.youtube.com/watch?v=m1BAs-9G22M",
  },
  {
    date: "2026.01.06",
    source: "KDI·국토부",
    category: "regulation",
    title: "독과점 우려 노선 대체 항공사 선정",
    summary:
      "시애틀·호놀룰루·자카르타·제주 등 주요 노선의 슬롯과 운수권을 넘겨받을 대체 항공사 선정 결과다.",
    url: "https://eiec.kdi.re.kr/policy/materialView.do?num=275688&pg=1&pp=20&topic=P",
  },
  {
    date: "2026.01.07",
    source: "아시아나항공",
    category: "customer",
    title: "1월 14일부터 인천공항 T2로",
    summary:
      "체크인 카운터와 적용 시각, 공동운항편 유의사항을 담은 아시아나항공의 공식 터미널 이전 안내다.",
    url: "https://flyasiana.com/C/KR/KO/company/pr-channel/news-release/detail?id=CM202601070002527709",
  },
  {
    date: "2025.12.30",
    source: "뉴스핌",
    category: "crew",
    title: "객실승무원 ‘통합 비행 준비실’ 문 연다",
    summary:
      "아시아나의 T2 이전에 맞춰 두 회사 객실승무원이 공동 대기·휴게 공간을 쓰게 된 현장 통합 계획을 소개한다.",
    url: "https://www.newspim.com/news/view/20251230000501",
  },
  {
    date: "2025.12.08",
    source: "뉴스핌",
    category: "network",
    title: "통합 LCC, 2027년 1분기 출범 목표",
    summary:
      "진에어를 중심으로 에어부산·에어서울을 합치는 일정과 남은 절차를 다룬다.",
    url: "https://www.newspim.com/news/view/20251208001048",
  },
  {
    date: "2025.09.30",
    source: "대한TV",
    category: "crew",
    title: "호놀룰루 크루호텔에서 시작한 원팀 간담회",
    summary:
      "크루호텔 통합 운영을 계기로 대한항공과 아시아나 객실승무원이 한자리에 모여 협업 방향을 나눈 사내 행사 영상이다.",
    url: "https://www.youtube.com/watch?v=_gIYRT0-jHE",
  },
  {
    date: "2025.09.30",
    source: "아시아나항공",
    category: "customer",
    title: "대한항공·아시아나 마일리지 통합 안내",
    summary:
      "10년 별도 운영, 탑승 1:1·제휴 1:0.82 전환, 우수회원 매칭을 설명한 가장 상세한 공식 공지다.",
    url: "https://flyasiana.com/C/KR/KO/customer/notice/detail?dispCt=all&id=CM202509300002526466&page=1&searchOption=0",
  },
  {
    date: "2025.09.30",
    source: "대한항공 뉴스룸",
    category: "customer",
    title: "“아시아나 마일리지 10년간 그대로”",
    summary:
      "공정위 보완 요청 후 제출된 수정 통합안의 취지와 전환 구조를 대한항공 관점에서 설명한다.",
    url: "https://news.koreanair.com/%EC%95%84%EC%8B%9C%EC%95%84%EB%82%98%ED%95%AD%EA%B3%B5-%EB%A7%88%EC%9D%BC%EB%A6%AC%EC%A7%80-10%EB%85%84%EA%B0%84-%EA%B7%B8%EB%8C%80%EB%A1%9C-%EC%93%B0%EC%84%B8%EC%9A%94-%EB%8C%80/",
  },
  {
    date: "2025.08.26",
    source: "Associated Press",
    category: "network",
    title: "대한항공, 보잉 항공기 103대 구매 계획",
    summary:
      "777-9·787-10·737-10·777-8F 등 장기 기단 교체와 통합 후 운영 역량에 영향을 줄 대형 주문을 전한다.",
    url: "https://apnews.com/article/72da477d948558534cbe0112969c3136",
  },
  {
    date: "2025.08.01",
    source: "아시아나항공",
    category: "regulation",
    title: "아시아나 화물기사업 매각 마무리",
    summary:
      "화물기 11대와 관련 인력이 에어인천으로 이관되며 EU·일본의 승인 조건이 이행된 공식 기록이다.",
    url: "https://flyasiana.com/C/KR/KO/company/pr-channel/news-release/detail?id=CM202508010002525856",
  },
  {
    date: "2025.07.21",
    source: "서울경제",
    category: "crew",
    title: "아시아나, 30년 넘은 객실승무원 기수제 폐지",
    summary:
      "통합을 앞두고 객실승무원 조직을 기수 중심에서 직급·역량 중심으로 바꾼 조치와 현장 영향을 분석한다.",
    url: "https://v.daum.net/v/20250721150526276",
  },
  {
    date: "2025.03.12",
    source: "Korea JoongAng Daily",
    category: "brand",
    title: "대한항공의 새 얼굴: 더 짙고 단순한 파랑",
    summary:
      "새 CI와 항공기 도장, 전체 기단 적용 일정, 통합 항공사의 규모를 디자인 관점에서 소개한다.",
    url: "https://koreajoongangdaily.joins.com/news/2025-03-12/business/industry/Korean-Airs-new-look-Modern-glittery-and-darker-blue/2259635",
  },
  {
    date: "2025.03.11",
    source: "Reuters",
    category: "brand",
    title: "대한항공, 아시아나 통합 앞두고 새 브랜딩 공개",
    summary:
      "41년 만의 로고·도장 변경과 통합 항공사의 글로벌 규모를 로이터가 보도했다.",
    url: "https://m.investing.com/news/stock-market-news/korean-air-launches-new-branding-after-13-billion-asiana-acquisition-3919700?ampMode=1",
  },
  {
    date: "2024.12.12",
    source: "Reuters",
    category: "milestone",
    title: "지분 인수 완료…한국, 경쟁 보호책 예고",
    summary:
      "1.3 billion달러 규모 인수 완료와 통합 그룹의 국제 공급 규모, 한국 정부의 경쟁 촉진 대책을 다룬다.",
    url: "https://m.investing.com/news/stock-market-news/korean-air-completes-asiana-takeover-to-form-one-of-asias-biggest-airlines-3767848?ampMode=1",
  },
  {
    date: "2024.12.12",
    source: "대한항공 뉴스룸",
    category: "milestone",
    title: "아시아나항공 지분 63.88% 인수",
    summary:
      "1조5천억원 납입 완료와 자회사 편입, 약 2년의 통합 준비 기간을 밝힌 공식 발표다.",
    url: "https://news.koreanair.com/%EB%8C%80%ED%95%9C%ED%95%AD%EA%B3%B5-%EC%95%84%EC%8B%9C%EC%95%84%EB%82%98%ED%95%AD%EA%B3%B5-%EC%A7%80%EB%B6%84-63-88-%EC%9D%B8%EC%88%98/",
  },
  {
    date: "2024.12.12",
    source: "공정거래위원회",
    category: "regulation",
    title: "기업결합 심사 최종 마무리",
    summary:
      "시정조치 변경과 이행감독의 틀을 정리한 한국 경쟁당국의 공식 보도자료다.",
    url: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156665348",
  },
  {
    date: "2024.02.14",
    source: "European Commission",
    category: "regulation",
    title: "EU, 조건부 기업결합 승인",
    summary:
      "유럽 여객 4개 노선과 화물시장 경쟁 우려, 대한항공이 제시한 시정 조치를 설명한 공식 발표다.",
    url: "https://www.eeas.europa.eu/delegations/south-korea/commission-approves-acquisition-asiana-korean-air-subject-conditions_en",
  },
  {
    date: "2024.01.31",
    source: "Japan FTC",
    category: "regulation",
    title: "일본 공정위, 조건부로 인수 승인",
    summary:
      "한일 여객·화물 노선의 경쟁 분석과 슬롯·운송 조치를 전제로 한 일본 경쟁당국의 공식 결정이다.",
    url: "https://www.jftc.go.jp/en/pressreleases/yearly-2024/January/240131_1.pdf",
  },
  {
    date: "상시 업데이트",
    source: "대한항공 IR",
    category: "customer",
    title: "대한항공 공식 합병 FAQ",
    summary:
      "합병 목적, 일정, 주식, 고객·직원 관련 질문을 회사가 정리한 공식 FAQ다. 최신 변경 여부를 확인하기 좋다.",
    url: "https://www.koreanair.com/contents/footer/about-us/investor-relations/faq",
  },
];

const interfaceCopy = {
  ko: {
    categories: {
      milestone: "합병 절차",
      customer: "고객·마일리지",
      crew: "승무원",
      people: "조직·직원",
      network: "노선·기재",
      regulation: "규제",
      brand: "브랜드",
    },
    result: (visible) => `총 ${visible}개의 원문 링크`,
  },
  en: {
    categories: {
      milestone: "Merger",
      customer: "Customer",
      crew: "Crew",
      people: "People",
      network: "Network",
      regulation: "Regulation",
      brand: "Brand",
    },
    result: (visible) => `${visible} original-source links`,
  },
  ja: {
    categories: {
      milestone: "統合手続き",
      customer: "顧客・マイル",
      crew: "乗務員",
      people: "組織・社員",
      network: "路線・機材",
      regulation: "規制",
      brand: "ブランド",
    },
    result: (visible) => `原文リンク ${visible}件`,
  },
};
const pageLanguage = document.documentElement.lang.slice(0, 2);
const localizedUi = interfaceCopy[pageLanguage] || interfaceCopy.ko;
const categoryNames = localizedUi.categories;
const grid = document.querySelector("#article-grid");
const count = document.querySelector("#result-count");
const search = document.querySelector("#article-search");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
let activeFilter = "all";

function articleTemplate(article) {
  return `<a class="article-card" href="${article.url}" target="_blank" rel="noopener noreferrer" data-category="${article.category}" data-search="${(article.title + " " + article.source + " " + article.summary).toLowerCase()}">
    <div class="meta"><time>${article.date}</time><span class="tag">${categoryNames[article.category]}</span></div>
    <h3 lang="ko">${article.title}</h3>
    <p lang="ko">${article.summary}</p>
    <footer><span class="source">${article.source}</span><span class="arrow" aria-hidden="true">↗</span></footer>
  </a>`;
}

function renderArticles() {
  grid.innerHTML = articles.map(articleTemplate).join("");
  applyFilters();
}

function applyFilters() {
  const term = search.value.trim().toLowerCase();
  let visible = 0;
  grid.querySelectorAll(".article-card").forEach((card) => {
    const matchesFilter =
      activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = !term || card.dataset.search.includes(term);
    const show = matchesFilter && matchesSearch;
    card.classList.toggle("hidden", !show);
    if (show) visible += 1;
  });
  count.textContent = localizedUi.result(visible);
}

filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) =>
      item.classList.toggle("active", item === button),
    );
    applyFilters();
  }),
);
search.addEventListener("input", applyFilters);
renderArticles();

const header = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true },
);

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
  document.body.classList.toggle("menu-open", !open);
});
mobileNav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
    document.body.classList.remove("menu-open");
  }),
);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  document
    .querySelectorAll(".reveal")
    .forEach((el) => el.classList.add("in-view"));
} else {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08, rootMargin: "0px 0px -6%" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
