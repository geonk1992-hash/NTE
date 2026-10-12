const TEXT_PHRASES_KO = [
  [
    "한국 공략은 출시 전 중국 서버 데이터라고 명시. Awakening A1 계수 충돌은 원자료 양쪽을 보존함.",
    "한국어 공략은 출시 전 중국 서버 데이터를 기준으로 작성되었습니다. 각성 1단계 계수는 출처별 차이가 있어 양쪽 수치를 보존했습니다."
  ],

  [
    "한국어 공략은 출시 전 중국 서버 데이터를 사용했다고 밝히며 일부 자원·기술명에 가칭을 표시한다. 레이븐은 공식 한국어 1.4 " +
      "공지의 표기를 사용했다. 메인/서브 딜러 구분은 자료마다 달라 고정 분류로 저장하지 않았다.",
    "한국어 공략은 출시 전 중국 서버 데이터를 사용했다고 밝히며 일부 자원과 기술명은 임시 표기입니다. 레이븐은 한국어 1.4 공식 " +
      "공지의 명칭을 따랐습니다. 메인·서브 딜러 구분은 자료마다 달라 별도로 고정하지 않았습니다."
  ],

  [
    "기존 한국 커뮤니티 도감의 우미츠키와 영문 Aurelia를 같은 캐릭터로 연결했다.",
    "한국 커뮤니티 도감의 우미츠키와 동일 인물로 연결했습니다."
  ],

  [
    "영문 가이드 음성 출연진 칸은 네 언어 모두 미공개(-)로 표시한다.",
    "가이드에서는 네 언어의 성우 정보가 모두 미공개로 표시되어 있습니다."
  ],

  [
    "한국어 목록에서 남성형·여성형 제로가 두 줄로 잡히지만 동일 ID로 병합했다. 성우는 선택된 표현형에 따라 다르므로 한 캐릭터의 복수 음성으로 보존했다.",
    "한국어 목록에서는 남성형과 여성형 제로가 각각 표시되지만, 데이터는 하나의 캐릭터로 통합했습니다. 성우 정보는 선택한 외형에 따라 달라질 수 있어 함께 보존했습니다."
  ],

  [
    "원문은 hit-string가 긴 다형태 캐릭터. 이 파일에는 대표 계수만 요약하고 세부 레벨 테이블은 원문 검수 대상으로 남김.",
    "원문에는 여러 형태의 타격 계수가 상세히 기록되어 있습니다. 여기에는 대표 계수만 요약했으며, 레벨별 상세표는 출처와 대조 중입니다."
  ],

  [
    "Icy Veins는 공개 방송·데이터마이닝 기반이며 정식 출시 전 변경 가능성을 명시하고, 기술명·각성·성우 일부가 미정이다. " +
      "Mone에는 더 많은 상세 정보가 있으나 사전 공략이라 수치와 세부 효과는 확정값으로 채택하지 않았다.",
    "아이스바이브스는 공개 방송과 데이터 분석을 토대로 작성되었으며, 정식 출시 전에 내용이 바뀔 수 있다고 안내합니다. 기술명과 " +
      "각성 효과, 일부 성우 정보는 미정입니다. 모네에 더 많은 정보가 있지만 사전 공략 자료이므로 수치와 세부 효과는 확정값으로 반영하지 않았습니다."
  ],

  [
    "Source lists normal-form hit strings",
    "원문에는 일반 형태의 타격 계수가 기재되어 있습니다"
  ],

  [
    "form/resource-specific values need full client-level audit",
    "형태와 자원별 수치는 게임 내 확인이 필요합니다"
  ],

  [
    "exact full hit table retained on linked page",
    "전체 타격 계수표는 연결된 출처에 보존했습니다"
  ],

  [
    "Source page contains hit-by-hit string with selector unresolved",
    "원문에는 타격별 계수가 있으나 레벨 선택값은 확인되지 않았습니다"
  ],

  [
    "Source separates normal and transformed strings",
    "원문은 일반 형태와 변신 형태의 계수를 나누어 표기합니다"
  ],

  [
    "Lv.80 stats and coefficient values are community database values; skill level selector unresolved.",
    "80레벨 능력치와 계수는 커뮤니티 데이터베이스 자료이며, 스킬 레벨 선택값은 확인되지 않았습니다."
  ],

  [
    "Korean guide states that it uses pre-release China server data.",
    "한국어 공략은 출시 전 중국 서버 데이터를 사용했다고 안내합니다."
  ],

  [
    "A4 coefficient is a page template placeholder; value unconfirmed.",
    "각성 4 계수는 페이지 서식의 임시 값으로, 실제 수치는 확인되지 않았습니다."
  ],

  ["Prydwen English description", "프리드웬 영문 설명"],

  ["normal-form", "일반 형태"],
  ["Witch-form", "마녀 형태"],
  ["end-of-Night Star passive", "밤의 별 종료 패시브"],

  ["special parry", "특수 회피반격"],
  ["dodge projectile", "회피 투사체"],
  ["charged branch", "강공격 분기"],

  ["charged branches", "강공격 분기"],
  ["altered-form combo", "변형 형태 연속 공격"],
  ["empowered dive", "강화 낙하 공격"],

  ["field entry", "필드 진입"],
  ["support skill", "지원 스킬"],
  ["team ATK", "팀 공격력"],
  ["party ATK", "파티 공격력"],

  ["max Crime", "범죄 수치 최대치"],
  ["Max HP", "최대 체력"],
  ["per hit", "타격당"],
  ["each second", "매초"],

  ["every second", "매초"],
  ["per target", "대상당"],
  ["on a lone target", "단일 대상에게"],
  ["per stack", "중첩당"],

  ["follow-up string", "후속 공격"],
  ["follow-up", "후속 공격"],
  ["cast heal", "사용 시 회복"],
  ["cast damage", "사용 시 피해"],

  ["periodic heal", "지속 회복"],
  ["periodic damage", "지속 피해"],
  ["shared damage", "분담 피해"],
  ["shared damage ratio", "분담 피해 비율"],

  ["basic ATK", "기본 공격력"],
  ["base ATK", "기본 공격력"],
  ["critical damage", "치명 피해"],
  ["crit damage", "치명 피해"],

  ["crit rate", "치명 확률"],
  ["off-field", "대기 중"],
  ["same-element", "동일 속성"],
  ["hit-by-hit", "타격별"],

  ["Daydream", "백일몽"],
  ["Lucid Dream", "자각몽"],
  ["Cadenza Aria", "카덴차 아리아"],
  ["Night Star", "밤의 별"],

  ["Silent Thought", "고요한 생각"],
  ["Such Guilt", "그런 죄"],
  ["Netherplume Rite", "어둠깃 의식"],

  ["Flames of Deliverance", "구원의 불꽃"],
  ["Requies Animarum", "영혼의 안식"],
  ["Judgment Upon Me", "내게 내린 심판"],

  ["Naught but Mercy", "자비뿐"],
  ["Lost Bird", "잃어버린 새"],
  ["Hound", "사냥개"],
  ["Warrant", "수배 표식"],

  ["Jin Gu", "금곡"],
  ["Phantom Shift", "환영 이동"],
  ["Wild Current", "거친 흐름"],
  ["Aerial Command", "공중 지휘"],

  ["Quick Delivery", "신속 배달"],
  ["Morning Tomato", "아침 토마토"],
  ["Devilish Gift", "악마의 선물"],

  ["Underboss", "부두목"],
  ["Justice from Above", "하늘에서 내린 심판"],
  ["Fang Shadow", "송곳니 그림자"],

  ["Shadow Chase", "그림자 추격"],
  ["Blood Banquet", "피의 연회"],
  ["Appraise and Engrave", "감정과 각인"],

  ["Crime", "범죄 수치"],
  ["Malice", "악의"],
  ["Silence", "침묵"],
  ["Censure", "질책"],
  ["Blessing", "축복"],

  ["Psyche", "혼속성"],
  ["Cosmos", "빛속성"],
  ["Incantation", "주속성"],
  ["Lakshana", "상속성"],

  ["Anima", "령속성"],
  ["Chaos", "암속성"],
  ["Mental", "혼속성"],
  ["Nova", "노바"],
  ["Scorch", "스코치"],

  ["Stain", "스테인"],
  ["Remora", "레모라"],
  ["Silent Garden", "고요한 정원"],
  ["Black Tome", "검은 서"],

  ["Wastelab", "황야 실험실"],
  ["Wastetime", "황야 시간"],
  ["Break Intensity", "브레이크 강도"],

  ["Attachment", "부착"],
  ["Eclipse", "일식"],
  ["Pons", "폰스"],
  ["DoT", "지속 피해"],

  ["ATK", "공격력"],
  ["DEF", "방어력"],
  ["HP", "체력"],
  ["QTE", "지원 연계"],
  ["aim", "조준 공격"],

  ["plunge", "낙하 공격"],
  ["parry", "회피반격"],
  ["dodge", "회피"],
  ["projectile", "투사체"],

  ["cycle", "사이클 에너지"],
  ["damage", "피해"],
  ["heal", "회복"],
  ["energy", "에너지"],

  ["cooldown", "재사용 대기시간"],
  ["shield", "보호막"],
  ["hit", "타격"],
  ["hits", "타격"],
  ["target", "대상"],

  ["each", "각"],
  ["every", "매"],
  ["second", "초"],
  ["minute", "분"],
  ["duration", "지속시간"],

  ["state", "상태"],
  ["form", "형태"],
  ["normal", "일반"],
  ["transformed", "변신"],
  ["empowered", "강화"],

  ["extra", "추가"],
  ["additional", "추가"],
  ["bonus", "보너스"],
  ["passive", "패시브"],
  ["active", "활성"],

  ["attack", "공격"],
  ["branch", "분기 공격"],
  ["charged", "강공격"],
  ["tap", "짧게 누르기"],
  ["hold", "길게 누르기"],

  ["spread", "확산"],
  ["converging", "집중"],
  ["explosion", "폭발"],
  ["missile", "미사일"],
  ["bullet", "탄환"],

  ["projectiles", "투사체"],
  ["stagger", "경직"],
  ["stack", "중첩"],
  ["stacks", "중첩"],
  ["consumed", "소모"],

  ["gained", "획득"],
  ["grants", "부여"],
  ["grants", "부여"],
  ["extra", "추가"],
  ["normal-form", "일반 형태"],

  ["enemy", "적"],
  ["ally", "아군"],
  ["team", "팀"],
  ["party", "파티"],
  ["field", "필드"],
  ["entry", "진입"],

  ["source", "출처"],
  ["lists", "기록"],
  ["values", "수치"],
  ["value", "수치"],
  ["string", "계수"],
  ["strings", "계수"],

  ["retained", "보존"],
  ["linked", "연결된"],
  ["page", "페이지"],
  ["selector", "선택값"],
  ["unresolved", "미확인"],

  ["unconfirmed", "미확정"],
  ["confirmed", "확정"],
  ["level", "레벨"],
  ["stats", "능력치"],
  ["skill", "스킬"],

  ["values", "수치"],
  ["for", "동안"],
  ["from", "에서"],
  ["with", "함께"],
  ["and", "및"],
  ["plus", "+"],

  ["up to", "최대"],
  ["max", "최대"],
  ["per", "당"],
  ["on", "시"],
  ["when", "때"],
  ["after", "후"],

  ["while", "동안"],
  ["for", "동안"],
  ["at", "에서"],
  ["vs", "대상"],
  ["equal", "같은"],
  ["lower", "낮은"],

  ["higher", "높은"],
  ["attackers", "공격자"],
  ["ultimate", "울티메이트"],
  ["basic", "일반 공격"],

  ["support", "지원 스킬"],
  ["skill", "스킬"],
  ["energy", "에너지"],
  ["Rage", "분노"],

  ["need", "필요"],
  ["full", "전체"],
  ["client", "게임"],
  ["audit", "검수"],
  ["resource", "자원"],

  ["specific", "별도"],
  ["jelly", "해파리"],
  ["glyph", "문양"],
  ["shots", "사격"],
  ["shot", "사격"],

  ["mark", "표식"],
  ["tick", "지속 피해"],
  ["insight", "통찰"],
  ["emergency", "긴급"],
  ["delivery", "배달"],

  ["records", "기록"],
  ["record", "기록"],
  ["sword", "검"],
  ["spin", "회전"],
  ["settlement", "결산"],

  ["rose", "장미"],
  ["melee", "근접"],
  ["ranged", "원거리"],
  ["adds", "부여"],
  ["add", "부여"],

  ["broken", "브레이크된"],
  ["discord", "불협화음"],
  ["calls", "호출"],
  ["ghost", "유령"],

  ["synchronized", "동기화"],
  ["strike", "타격"],
  ["airborne", "공중"],
  ["wearer", "착용자"],

  ["holder", "착용자"],
  ["effect", "효과"],
  ["effects", "효과"],
  ["condition", "조건"],
  ["conditions", "조건"],

  ["trigger", "발동"],
  ["triggered", "발동 시"],
  ["activates", "발동합니다"],
  ["during", "동안"],

  ["current", "현재"],
  ["existing", "기존"],
  ["reset", "초기화"],
  ["resets", "초기화합니다"],

  ["unlocks", "해금합니다"],
  ["unlock", "해금"],
  ["available", "사용 가능"],
  ["performs", "수행합니다"],

  ["summons", "소환합니다"],
  ["summon", "소환"],
  ["receives", "받습니다"],
  ["receive", "받다"],

  ["randomly", "무작위로"],
  ["random", "무작위"],
  ["chance", "확률"],
  ["maximum", "최대"],

  ["duration", "지속시간"],
  ["increases", "증가합니다"],
  ["increased", "증가"],
  ["increase", "증가"],

  ["decreases", "감소합니다"],
  ["decreased", "감소"],
  ["decrease", "감소"],
  ["ignore", "무시"],

  ["ignores", "무시합니다"],
  ["consume", "소모"],
  ["consuming", "소모 시"],
  ["remaining", "남은"],

  ["interval", "간격"],
  ["minimum", "최소"],
  ["maximum", "최대"],
  ["calculation", "계산"],

  ["final", "마지막"],
  ["finale", "종결"],
  ["finisher", "마무리 공격"],
  ["state damage", "상태 피해"],

  ["base", "기본"],
  ["maximum-level", "최대 레벨"],
  ["equal-level", "동일 레벨"],
  ["lower-level", "낮은 레벨"],

  ["every", "매"],
  ["each", "각"],
  ["per", "당"],
  ["after", "후"],
  ["before", "전"],

  ["using", "사용하면"],
  ["use", "사용"],
  ["successful", "성공한"],
  ["success", "성공"],

  ["times", "회"],
  ["time", "시간"],
  ["stage", "단계"],
  ["stages", "단계"],
  ["stacking", "중첩"],

  ["normal", "일반"],
  ["alternate", "대체"],
  ["alternate-form", "대체 형태"],
  ["fire", "화염"],

  ["slow", "둔화"],
  ["slowly", "느리게"],
  ["heal amount", "회복량"],
  ["damage ratio", "피해 비율"],

  ["physical", "물리"],
  ["increase", "증가"],
  ["decrease", "감소"],
  ["critically", "치명적으로"]
];

const EXTRA_WORDS_KO = {
  a: "",
  above: "위에서",
  actions: "행동",
  appmedia: "앱미디어",
  appraise: "감정",
  apply: "적용",
  are: "",
  aria: "아리아",

  aurelia: "우미츠키",
  awakening: "각성",
  bang: "펑",
  banquet: "연회",
  black: "검은",
  blackbird: "레이븐",

  blood: "피",
  buff: "강화 효과",
  burst: "폭발",
  but: "하지만",
  c: "씨",
  cap: "최대",
  car: "자동차",
  censure: "질책",

  charge: "충전",
  chase: "추격",
  "client-level": "게임 내",
  coefficient: "계수",
  combo: "연속 공격",

  command: "지휘",
  community: "커뮤니티",
  companion: "동료",
  consumed: "소모",
  contains: "포함",
  copies: "회",
  cycles: "사이클",

  core: "핵심",
  cost: "소모량",
  crit: "치명",
  dash: "돌진",
  database: "데이터베이스",
  daydream: "백일몽",

  db: "데이터베이스",
  deliverance: "구원의 불꽃",
  devilish: "악마의",
  dive: "낙하 공격",
  dmg: "피해",

  dream: "꿈",
  eclipse: "일식",
  efficiency: "효율",
  emergency: "긴급",
  empty: "비어 있음",
  ensemble: "합주",

  equal: "같은",
  exact: "정확한",
  execution: "처단",
  exit: "퇴장",
  fang: "송곳니",
  fire: "화염",

  first: "첫 번째",
  flames: "불꽃",
  ghost: "악령",
  glyph: "문양",
  glyphs: "문양",
  gu: "금곡",

  guaranteed: "확정",
  guilt: "죄",
  half: "절반",
  hold: "길게 누르기",
  hound: "사냥개",
  icy: "아이스 바이브스",

  id: "식별자",
  illusion: "환영",
  immobilize: "속박",
  insight: "통찰",
  intensity: "강도",
  interval: "간격",

  iroi: "일로이",
  jelly: "해파리",
  jin: "금곡",
  judgment: "심판",
  justice: "정의",
  k: "케이",

  linked: "연결된",
  linko: "링코",
  listed: "기재된",
  lone: "단일 대상",
  "lower-level": "낮은 레벨",

  lucid: "자각몽",
  malice: "악의",
  mark: "표식",
  market: "시장",
  me: "나",
  melee: "근접",
  mone: "모네",

  motorcycle: "오토바이",
  move: "이동",
  multiplier: "계수",
  naught: "자비뿐",
  need: "필요",
  netherplume: "어둠깃",

  nightmare: "악몽",
  non: "미적용",
  "non-crit": "치명타 미적용",
  nova: "노바",
  ntebuild: "이환 빌드",

  ntegame: "이환 가이드",
  off: "대기",
  one: "하나",
  palm: "손바닥",
  periodic: "지속",
  placeholder: "임시 표기",

  poise: "경직 저항",
  preview: "미리보기",
  prydwen: "프리드웬",
  quick: "신속",
  r: "알",
  rage: "분노",

  ranged: "원거리",
  rate: "확률",
  ratio: "비율",
  regression: "회귀",
  remora: "레모라",
  requies: "영혼의 안식",

  rerorero: "레로레로",
  resonance: "공명",
  "resource-specific": "자원별",
  retained: "보존했습니다",
  rite: "의식",

  of: "의",
  rose: "장미",
  sakiri: "사키리",
  scales: "비례합니다",
  sheep: "양",
  shift: "전환",
  shown: "표시된",

  silent: "고요한",
  special: "특수",
  stagger: "경직",
  stain: "스테인",
  star: "별",
  stats: "능력치",
  stop: "중단",

  sustained: "지속",
  sword: "검",
  table: "표",
  template: "서식",
  thorn: "가시",
  threshold: "기준치",

  time: "시간",
  tomato: "토마토",
  tome: "서",
  truck: "트럭",
  underboss: "부두목",
  unresolved: "확인되지 않음",

  to: "로",
  upon: "내린",
  veins: "바이브스",
  wastelab: "황야 실험실",
  wastetime: "황야 시간",
  wild: "들불",

  witch: "마녀",
  "witch-form": "마녀 형태",
  "hit-by-hit": "타격별",
  "hit-string": "타격 계수표",

  "form-changing": "형태 전환",
  aerial: "공중",
  airborne: "공중",
  arc: "아크",
  as: "처럼",

  attacks: "공격",
  branches: "분기 공격",
  break: "브레이크",
  "broken-target": "브레이크 상태 대상",

  bullets: "탄환",
  cadenza: "카덴차",
  count: "횟수",
  enhanced: "강화",
  "end-of-night": "밤의 별 종료",

  animarum: "영혼의 안식",
  missiles: "미사일",
  shots: "사격",
  separates: "구분합니다",
  synchronized: "동기화",

  "altered-form": "변형 형태"
};

export const ROLE_NAMES_KO = {
  Survival: "생존 담당",
  Damage: "공격 담당",
  Buff: "지원 담당",
  "Damage (preview)": "공격 담당(출시 전)"
};

export function translateArchiveText(value) {
  let text = String(value ?? "");

  TEXT_PHRASES_KO.slice()
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([from, to]) => {
      const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      text = text.replace(
        new RegExp("(^|[^A-Za-z0-9])" + escaped + "(?=$|[^A-Za-z0-9])", "gi"),
        (match, prefix) => prefix + to
      );
    });

  text = text
    .replace(/(\d+(?:\.\d+)?)\s*s\b/gi, "$1초")
    .replace(/\bA([1-6])\b/gi, "각성 $1")
    .replace(/\bR([1-6])\b/gi, "공명 $1단계")
    .replace(/\bLv\.?\s*(\d+)/gi, "$1레벨");

  text = text.replace(/\b[A-Za-z][A-Za-z'-]*\b/g, (token) => {
    const found = TEXT_PHRASES_KO.find(
      ([from]) => from.toLowerCase() === token.toLowerCase()
    );
    return EXTRA_WORDS_KO[token.toLowerCase()] ?? (found ? found[1] : "기술");
  });

  return text;
}
