const FILES = {
  index: "characters/index.json",
  arcs: "nte-character-signature-arcs-v1.4.json",
  consoles: "nte-cartridge-sets-v1.4.json",
  growth: "nte-character-growth-v1.4.json"
};
const ELEMENTS = {
  Anima: { name: "령", color: "#9fe6aa" }, Chaos: { name: "암", color: "#c797ff" },
  Cosmos: { name: "빛", color: "#f2d876" }, Incantation: { name: "주", color: "#ef9b85" },
  Lakshana: { name: "상", color: "#f1a0cb" }, Psyche: { name: "혼", color: "#86c8ff" }
};
const ELEMENT_ORDER = ["Cosmos", "Chaos", "Anima", "Incantation", "Lakshana", "Psyche"];
const ELEMENT_ICON_FILES = { Anima: "령.png", Chaos: "암.webp", Cosmos: "빛.webp", Incantation: "주.webp", Lakshana: "상.png", Psyche: "혼.png" };
const CHARACTER_IMAGE_FILES = {
  adler: "아들러", aurelia: "우미츠키", baicang: "백장", blackbird: "레이븐", chaos: "카오스",
  chiz: "치즈", daffodill: "다포딜", edgar: "에드가", fadia: "파디아", haniel: "하니엘",
  hathor: "하토르", hotori: "호토리", iroi: "일로이", jiuyuan: "구원", lacrimosa: "라크리모사",
  linko: "링코", mint: "민트", nanally: "나나리", sakiri: "사키리", shinku: "신쿠",
  skia: "스키아", zankou: "잔홍", zero: "제로"
};
const assetUrl = file => "./img/" + encodeURIComponent(file) + ".webp";
const elementIconUrl = element => "./img/" + encodeURIComponent(ELEMENT_ICON_FILES[element]);
const ARC_TYPES = { Condensate: "결합", Gas: "기체", Liquid: "액체", Plasma: "플라스마", Solid: "고체" };
const SKILLS = [["일반 공격", "basic"], ["바이레일 스킬", "skill"], ["울티메이트", "ultimate"], ["지원 스킬", "support"]];
const SKILL_NAMES_KO = {
  adler: { basic: "악업 초월", skill: "처단의 가호", ultimate: "만물 정화", support: "맑은 거울" },
  aurelia: { basic: "아카펠라", skill: "아리아의 카덴차", ultimate: "카논 합창", support: "불협화음" },
  baicang: { basic: "언행일치", skill: "아낌없는 가르침", ultimate: "가을 심판", support: "농땡이 끝" },
  chaos: { basic: "추적", skill: "혐의점 포착", ultimate: "죄업 청산", support: "강습" },
  chiz: { basic: "실향 검술", skill: "핑크퍼스 우선 원칙", ultimate: "제로섬 게임", support: "임시 입장" },
  daffodill: { basic: "잔잔한 수면", skill: "공명", ultimate: "피날레 장식", support: "극한 교차" },
  edgar: { basic: "실전체술", skill: "광류", ultimate: "피네간의 경야", support: "지식의 무게" },
  fadia: { basic: "무언의 부정", skill: "존재 증명의 체험", ultimate: "고통을 넘어선 환희", support: "이단자의 조롱" },
  haniel: { basic: "카이로세크 비술", skill: "조용한 달밤 숲의 수호자", ultimate: "「하니엘」이라는 이름의 선율", support: "쿠키 영상" },
  hathor: { basic: "초스피드 배송", skill: "공중 지령", ultimate: "라이더 익스프레스", support: "조준 낙하" },
  hotori: { basic: "유동하는 달빛", skill: "현실 리플레이", ultimate: "밀려드는 세상", support: "점주의 권위" },
  iroi: { basic: "분업 협동", skill: "미래 자기 연속성 가설", ultimate: "38억 년의 신기루", support: "펑!" },
  jiuyuan: { basic: "비밀이 생겨날 때", skill: "정보 사냥꾼", ultimate: "최종 결산", support: "시크릿 포착" },
  lacrimosa: { basic: "새콤달콤한 제재", skill: "히스테릭 모닝 / 악마의 선물", ultimate: "평일 최후의 심판", support: "긴급 각성" },
  linko: { basic: "악령 근접 전투술", skill: "전대역 공진", ultimate: "과부하 공명", support: "악령 레프트 잽!" },
  mint: { basic: "만점 수용술", skill: "오의·슈퍼 바람 할퀴기", ultimate: "오의·벽력 질풍참", support: "오의·무적 회오리검" },
  nanally: { basic: "콜린스 가문 비전 기술", skill: "콜린스·어흥술", ultimate: "콜린스·궁극술", support: "정의 강림" },
  sakiri: { basic: "키로마루 박치기", skill: "집어삼키기", ultimate: "폭식의 연회", support: "뭉개기!" },
  shinku: { basic: "특수 격투술 / 공포의 급습", skill: "고속 돌파 / 적염 강림", ultimate: "적염의 척결 / 척결의 용염", support: "돌파 전술" },
  skia: { basic: "구속 격투술", skill: "잠영 추격", ultimate: "울부짖는 개떼", support: "수배령" },
  zankou: { basic: "들불 / 악몽의 춤", skill: "진홍빛 잔영 / 갈라진 영혼", ultimate: "타버린 종말의 춤 / 핏기 어린 꿈", support: "불멸의 화염" },
  zero: { basic: "흔적 감정", skill: "틈새 감정", ultimate: "완벽 제거", support: "파열" }
};
const CHARACTER_DISPLAY_ORDER = [
  "blackbird", "linko", "zankou", "iroi", "shinku", "chaos", "lacrimosa", "hotori", "nanally",
  "zero", "chiz",
  "daffodill", "jiuyuan", "baicang", "sakiri", "hathor", "fadia"
];

const TABS = [["overview", "요약"], ["skills", "기술표"], ["awakening", "돌파·각성"], ["arcs", "전용 아크"], ["console", "콘솔·카트리지"], ["growth", "성장"]];
const TEXT_PHRASES_KO = [
  ["한국 공략은 출시 전 중국 서버 데이터라고 명시. Awakening A1 계수 충돌은 원자료 양쪽을 보존함.", "한국어 공략은 출시 전 중국 서버 데이터를 기준으로 작성되었습니다. 각성 1단계 계수는 출처별 차이가 있어 양쪽 수치를 보존했습니다."],
  ["한국어 공략은 출시 전 중국 서버 데이터를 사용했다고 밝히며 일부 자원·기술명에 가칭을 표시한다. 레이븐은 공식 한국어 1.4 공지의 표기를 사용했다. 메인/서브 딜러 구분은 자료마다 달라 고정 분류로 저장하지 않았다.", "한국어 공략은 출시 전 중국 서버 데이터를 사용했다고 밝히며 일부 자원과 기술명은 임시 표기입니다. 레이븐은 한국어 1.4 공식 공지의 명칭을 따랐습니다. 메인·서브 딜러 구분은 자료마다 달라 별도로 고정하지 않았습니다."],
  ["기존 한국 커뮤니티 도감의 우미츠키와 영문 Aurelia를 같은 캐릭터로 연결했다.", "한국 커뮤니티 도감의 우미츠키와 동일 인물로 연결했습니다."],
  ["영문 가이드 음성 출연진 칸은 네 언어 모두 미공개(-)로 표시한다.", "가이드에서는 네 언어의 성우 정보가 모두 미공개로 표시되어 있습니다."],
  ["한국어 목록에서 남성형·여성형 제로가 두 줄로 잡히지만 동일 ID로 병합했다. 성우는 선택된 표현형에 따라 다르므로 한 캐릭터의 복수 음성으로 보존했다.", "한국어 목록에서는 남성형과 여성형 제로가 각각 표시되지만, 데이터는 하나의 캐릭터로 통합했습니다. 성우 정보는 선택한 외형에 따라 달라질 수 있어 함께 보존했습니다."],
  ["원문은 hit-string가 긴 다형태 캐릭터. 이 파일에는 대표 계수만 요약하고 세부 레벨 테이블은 원문 검수 대상으로 남김.", "원문에는 여러 형태의 타격 계수가 상세히 기록되어 있습니다. 여기에는 대표 계수만 요약했으며, 레벨별 상세표는 출처와 대조 중입니다."],
  ["Icy Veins는 공개 방송·데이터마이닝 기반이며 정식 출시 전 변경 가능성을 명시하고, 기술명·각성·성우 일부가 미정이다. Mone에는 더 많은 상세 정보가 있으나 사전 공략이라 수치와 세부 효과는 확정값으로 채택하지 않았다.", "아이스바이브스는 공개 방송과 데이터 분석을 토대로 작성되었으며, 정식 출시 전에 내용이 바뀔 수 있다고 안내합니다. 기술명과 각성 효과, 일부 성우 정보는 미정입니다. 모네에 더 많은 정보가 있지만 사전 공략 자료이므로 수치와 세부 효과는 확정값으로 반영하지 않았습니다."],
  ["Source lists normal-form hit strings", "원문에는 일반 형태의 타격 계수가 기재되어 있습니다"],
  ["form/resource-specific values need full client-level audit", "형태와 자원별 수치는 게임 내 확인이 필요합니다"],
  ["exact full hit table retained on linked page", "전체 타격 계수표는 연결된 출처에 보존했습니다"],
  ["Source page contains hit-by-hit string with selector unresolved", "원문에는 타격별 계수가 있으나 레벨 선택값은 확인되지 않았습니다"],
  ["Source separates normal and transformed strings", "원문은 일반 형태와 변신 형태의 계수를 나누어 표기합니다"],
  ["Lv.80 stats and coefficient values are community database values; skill level selector unresolved.", "80레벨 능력치와 계수는 커뮤니티 데이터베이스 자료이며, 스킬 레벨 선택값은 확인되지 않았습니다."],
  ["Korean guide states that it uses pre-release China server data.", "한국어 공략은 출시 전 중국 서버 데이터를 사용했다고 안내합니다."],
  ["A4 coefficient is a page template placeholder; value unconfirmed.", "각성 4 계수는 페이지 서식의 임시 값으로, 실제 수치는 확인되지 않았습니다."],
  ["Prydwen English description", "프리드웬 영문 설명"],
  ["normal-form", "일반 형태"], ["Witch-form", "마녀 형태"], ["end-of-Night Star passive", "밤의 별 종료 패시브"],
  ["special parry", "특수 회피반격"], ["dodge projectile", "회피 투사체"], ["charged branch", "강공격 분기"],
  ["charged branches", "강공격 분기"], ["altered-form combo", "변형 형태 연속 공격"], ["empowered dive", "강화 낙하 공격"],
  ["field entry", "필드 진입"], ["support skill", "지원 스킬"], ["team ATK", "팀 공격력"], ["party ATK", "파티 공격력"],
  ["max Crime", "범죄 수치 최대치"], ["Max HP", "최대 체력"], ["per hit", "타격당"], ["each second", "매초"],
  ["every second", "매초"], ["per target", "대상당"], ["on a lone target", "단일 대상에게"], ["per stack", "중첩당"],
  ["follow-up string", "후속 공격"], ["follow-up", "후속 공격"], ["cast heal", "사용 시 회복"], ["cast damage", "사용 시 피해"],
  ["periodic heal", "지속 회복"], ["periodic damage", "지속 피해"], ["shared damage", "분담 피해"], ["shared damage ratio", "분담 피해 비율"],
  ["basic ATK", "기본 공격력"], ["base ATK", "기본 공격력"], ["critical damage", "치명 피해"], ["crit damage", "치명 피해"],
  ["crit rate", "치명 확률"], ["off-field", "대기 중"], ["same-element", "동일 속성"], ["hit-by-hit", "타격별"],
  ["Daydream", "백일몽"], ["Lucid Dream", "자각몽"], ["Cadenza Aria", "카덴차 아리아"], ["Night Star", "밤의 별"],
  ["Silent Thought", "고요한 생각"], ["Such Guilt", "그런 죄"], ["Netherplume Rite", "어둠깃 의식"],
  ["Flames of Deliverance", "구원의 불꽃"], ["Requies Animarum", "영혼의 안식"], ["Judgment Upon Me", "내게 내린 심판"],
  ["Naught but Mercy", "자비뿐"], ["Lost Bird", "잃어버린 새"], ["Hound", "사냥개"], ["Warrant", "수배 표식"],
  ["Jin Gu", "금곡"], ["Phantom Shift", "환영 이동"], ["Wild Current", "거친 흐름"], ["Aerial Command", "공중 지휘"],
  ["Quick Delivery", "신속 배달"], ["Morning Tomato", "아침 토마토"], ["Devilish Gift", "악마의 선물"],
  ["Underboss", "부두목"], ["Justice from Above", "하늘에서 내린 심판"], ["Fang Shadow", "송곳니 그림자"],
  ["Shadow Chase", "그림자 추격"], ["Blood Banquet", "피의 연회"], ["Appraise and Engrave", "감정과 각인"],
  ["Crime", "범죄 수치"], ["Malice", "악의"], ["Silence", "침묵"], ["Censure", "질책"], ["Blessing", "축복"],
  ["Psyche", "혼속성"], ["Cosmos", "빛속성"], ["Incantation", "주속성"], ["Lakshana", "상속성"],
  ["Anima", "령속성"], ["Chaos", "암속성"], ["Mental", "혼속성"], ["Nova", "노바"], ["Scorch", "스코치"],
  ["Stain", "스테인"], ["Remora", "레모라"], ["Silent Garden", "고요한 정원"], ["Black Tome", "검은 서"],
  ["Wastelab", "황야 실험실"], ["Wastetime", "황야 시간"], ["Break Intensity", "브레이크 강도"],
  ["Attachment", "부착"], ["Eclipse", "일식"], ["Pons", "폰스"], ["DoT", "지속 피해"],
  ["ATK", "공격력"], ["DEF", "방어력"], ["HP", "체력"], ["QTE", "지원 연계"], ["aim", "조준 공격"],
  ["plunge", "낙하 공격"], ["parry", "회피반격"], ["dodge", "회피"], ["projectile", "투사체"],
  ["cycle", "사이클 에너지"], ["damage", "피해"], ["heal", "회복"], ["energy", "에너지"],
  ["cooldown", "재사용 대기시간"], ["shield", "보호막"], ["hit", "타격"], ["hits", "타격"], ["target", "대상"],
  ["each", "각"], ["every", "매"], ["second", "초"], ["minute", "분"], ["duration", "지속시간"],
  ["state", "상태"], ["form", "형태"], ["normal", "일반"], ["transformed", "변신"], ["empowered", "강화"],
  ["extra", "추가"], ["additional", "추가"], ["bonus", "보너스"], ["passive", "패시브"], ["active", "활성"],
  ["attack", "공격"], ["branch", "분기 공격"], ["charged", "강공격"], ["tap", "짧게 누르기"], ["hold", "길게 누르기"],
  ["spread", "확산"], ["converging", "집중"], ["explosion", "폭발"], ["missile", "미사일"], ["bullet", "탄환"],
  ["projectiles", "투사체"], ["stagger", "경직"], ["stack", "중첩"], ["stacks", "중첩"], ["consumed", "소모"],
  ["gained", "획득"], ["grants", "부여"], ["grants", "부여"], ["extra", "추가"], ["normal-form", "일반 형태"],
  ["enemy", "적"], ["ally", "아군"], ["team", "팀"], ["party", "파티"], ["field", "필드"], ["entry", "진입"],
  ["source", "출처"], ["lists", "기록"], ["values", "수치"], ["value", "수치"], ["string", "계수"], ["strings", "계수"],
  ["retained", "보존"], ["linked", "연결된"], ["page", "페이지"], ["selector", "선택값"], ["unresolved", "미확인"],
  ["unconfirmed", "미확정"], ["confirmed", "확정"], ["level", "레벨"], ["stats", "능력치"], ["skill", "스킬"],
  ["values", "수치"], ["for", "동안"], ["from", "에서"], ["with", "함께"], ["and", "및"], ["plus", "+"],
  ["up to", "최대"], ["max", "최대"], ["per", "당"], ["on", "시"], ["when", "때"], ["after", "후"],
  ["while", "동안"], ["for", "동안"], ["at", "에서"], ["vs", "대상"], ["equal", "같은"], ["lower", "낮은"],
  ["higher", "높은"], ["attackers", "공격자"], ["ultimate", "울티메이트"], ["basic", "일반 공격"],
  ["support", "지원 스킬"], ["skill", "스킬"], ["energy", "에너지"], ["Rage", "분노"],
  ["need", "필요"], ["full", "전체"], ["client", "게임"], ["audit", "검수"], ["resource", "자원"],
  ["specific", "별도"], ["jelly", "해파리"], ["glyph", "문양"], ["shots", "사격"], ["shot", "사격"],
  ["mark", "표식"], ["tick", "지속 피해"], ["insight", "통찰"], ["emergency", "긴급"], ["delivery", "배달"],
  ["records", "기록"], ["record", "기록"], ["sword", "검"], ["spin", "회전"], ["settlement", "결산"],
  ["rose", "장미"], ["melee", "근접"], ["ranged", "원거리"], ["adds", "부여"], ["add", "부여"],
  ["broken", "브레이크된"], ["discord", "불협화음"], ["calls", "호출"], ["ghost", "유령"],
  ["synchronized", "동기화"], ["strike", "타격"], ["airborne", "공중"], ["wearer", "착용자"],
  ["holder", "착용자"], ["effect", "효과"], ["effects", "효과"], ["condition", "조건"], ["conditions", "조건"],
  ["trigger", "발동"], ["triggered", "발동 시"], ["activates", "발동합니다"], ["during", "동안"],
  ["current", "현재"], ["existing", "기존"], ["reset", "초기화"], ["resets", "초기화합니다"],
  ["unlocks", "해금합니다"], ["unlock", "해금"], ["available", "사용 가능"], ["performs", "수행합니다"],
  ["summons", "소환합니다"], ["summon", "소환"], ["receives", "받습니다"], ["receive", "받다"],
  ["randomly", "무작위로"], ["random", "무작위"], ["chance", "확률"], ["maximum", "최대"],
  ["duration", "지속시간"], ["increases", "증가합니다"], ["increased", "증가"], ["increase", "증가"],
  ["decreases", "감소합니다"], ["decreased", "감소"], ["decrease", "감소"], ["ignore", "무시"],
  ["ignores", "무시합니다"], ["consume", "소모"], ["consuming", "소모 시"], ["remaining", "남은"],
  ["interval", "간격"], ["minimum", "최소"], ["maximum", "최대"], ["calculation", "계산"],
  ["final", "마지막"], ["finale", "종결"], ["finisher", "마무리 공격"], ["state damage", "상태 피해"],
  ["base", "기본"], ["maximum-level", "최대 레벨"], ["equal-level", "동일 레벨"], ["lower-level", "낮은 레벨"],
  ["every", "매"], ["each", "각"], ["per", "당"], ["after", "후"], ["before", "전"],
  ["using", "사용하면"], ["use", "사용"], ["successful", "성공한"], ["success", "성공"],
  ["times", "회"], ["time", "시간"], ["stage", "단계"], ["stages", "단계"], ["stacking", "중첩"],
  ["normal", "일반"], ["alternate", "대체"], ["alternate-form", "대체 형태"], ["fire", "화염"],
  ["slow", "둔화"], ["slowly", "느리게"], ["heal amount", "회복량"], ["damage ratio", "피해 비율"],
  ["physical", "물리"], ["increase", "증가"], ["decrease", "감소"], ["critically", "치명적으로"]
];
const CHINESE_TERMS_KO = [
  ["援护技：「恶灵左直拳！」伤害倍率", "지원 스킬: 악령 레프트 잽 피해 계수"],
  ["援护技", "지원 스킬"], ["普通攻击", "일반 공격"], ["普攻", "일반 공격"], ["魔女", "마녀 형태"], ["副手", "보조 캐릭터"],
  ["近战普攻", "근접 일반 공격"], ["远程普攻", "원거리 일반 공격"], ["下落攻击", "낙하 공격"], ["下落伤害", "낙하 공격 피해"],
  ["特殊极限反击", "특수 회피반격"], ["极限反击", "회피반격"], ["瞄准攻击", "조준 공격"], ["长按", "길게 누르기"],
  ["分支攻击", "강공격"], ["分支", "분기"], ["伤害倍率", "피해 계수"], ["范围伤害", "범위 피해"], ["多段伤害", "연속 피해"],
  ["持续伤害", "지속 피해"], ["额外伤害", "추가 피해"], ["追加攻击", "추가 공격"], ["追击", "추격"], ["攻击力", "공격력"],
  ["防御力", "방어력"], ["防御值", "방어력"], ["生命上限", "최대 체력"], ["生命值", "체력"], ["固定值", "고정 수치"],
  ["治疗倍率", "회복 계수"], ["治疗", "회복"], ["持续", "지속"], ["每段", "타격당"], ["每秒", "초당"], ["单次", "1회"],
  ["倍率", "계수"], ["命中", "적중"], ["爆炸", "폭발"], ["飞弹", "미사일"], ["射弹", "투사체"], ["子弹", "탄환"],
  ["强化", "강화"], ["变轨", "바이레일"], ["技能", "스킬"], ["终结", "마무리"], ["直接", "직접"], ["范围", "범위"],
  ["释放后", "사용 후"], ["每层", "중첩당"], ["触发", "발동"], ["造成", "가하는"], ["噩梦", "악몽"], ["白日梦", "백일몽"],
  ["清明梦", "자각몽"], ["空仓", "탄창 비움"], ["半仓", "탄창 절반"], ["满仓", "탄창 가득"], ["协同攻击", "협동 공격"],
  ["恶灵", "악령"], ["幻境", "환상"], ["现实", "현실"], ["重击", "강공격"], ["普通", "일반"], ["远程", "원거리"],
  ["近战", "근접"], ["攻击", "공격"], ["后", "후"]
];
const EXTRA_WORDS_KO = {
  a: "", above: "위에서", actions: "행동", appmedia: "앱미디어", appraise: "감정", apply: "적용", are: "", aria: "아리아",
  aurelia: "우미츠키", awakening: "각성", bang: "펑", banquet: "연회", black: "검은", blackbird: "레이븐",
  blood: "피", buff: "강화 효과", burst: "폭발", but: "하지만", c: "씨", cap: "최대", car: "자동차", censure: "질책",
  charge: "충전", chase: "추격", "client-level": "게임 내", coefficient: "계수", combo: "연속 공격",
  command: "지휘", community: "커뮤니티", companion: "동료", consumed: "소모", contains: "포함", copies: "회", cycles: "사이클",
  core: "핵심", cost: "소모량", crit: "치명", dash: "돌진", database: "데이터베이스", daydream: "백일몽",
  db: "데이터베이스", deliverance: "구원의 불꽃", devilish: "악마의", dive: "낙하 공격", dmg: "피해",
  dream: "꿈", eclipse: "일식", efficiency: "효율", emergency: "긴급", empty: "비어 있음", ensemble: "합주",
  equal: "같은", exact: "정확한", execution: "처단", exit: "퇴장", fang: "송곳니", fire: "화염",
  first: "첫 번째", flames: "불꽃", ghost: "악령", glyph: "문양", glyphs: "문양", gu: "금곡",
  guaranteed: "확정", guilt: "죄", half: "절반", hold: "길게 누르기", hound: "사냥개", icy: "아이스 바이브스",
  id: "식별자", illusion: "환영", immobilize: "속박", insight: "통찰", intensity: "강도", interval: "간격",
  iroi: "일로이", jelly: "해파리", jin: "금곡", judgment: "심판", justice: "정의", k: "케이",
  linked: "연결된", linko: "링코", listed: "기재된", lone: "단일 대상", "lower-level": "낮은 레벨",
  lucid: "자각몽", malice: "악의", mark: "표식", market: "시장", me: "나", melee: "근접", mone: "모네",
  motorcycle: "오토바이", move: "이동", multiplier: "계수", naught: "자비뿐", need: "필요", netherplume: "어둠깃",
  nightmare: "악몽", non: "미적용", "non-crit": "치명타 미적용", nova: "노바", ntebuild: "이환 빌드",
  ntegame: "이환 가이드", off: "대기", one: "하나", palm: "손바닥", periodic: "지속", placeholder: "임시 표기",
  poise: "경직 저항", preview: "미리보기", prydwen: "프리드웬", quick: "신속", r: "알", rage: "분노",
  ranged: "원거리", rate: "확률", ratio: "비율", regression: "회귀", remora: "레모라", requies: "영혼의 안식",
  rerorero: "레로레로", resonance: "공명", "resource-specific": "자원별", retained: "보존했습니다", rite: "의식",
  of: "의", rose: "장미", sakiri: "사키리", scales: "비례합니다", sheep: "양", shift: "전환", shown: "표시된",
  silent: "고요한", special: "특수", stagger: "경직", stain: "스테인", star: "별", stats: "능력치", stop: "중단",
  sustained: "지속", sword: "검", table: "표", template: "서식", thorn: "가시", threshold: "기준치",
  time: "시간", tomato: "토마토", tome: "서", truck: "트럭", underboss: "부두목", unresolved: "확인되지 않음",
  to: "로", upon: "내린", veins: "바이브스", wastelab: "황야 실험실", wastetime: "황야 시간", wild: "들불",
  witch: "마녀", "witch-form": "마녀 형태", "hit-by-hit": "타격별", "hit-string": "타격 계수표",
  "form-changing": "형태 전환", aerial: "공중", airborne: "공중", arc: "아크", as: "처럼",
  attacks: "공격", branches: "분기 공격", break: "브레이크", "broken-target": "브레이크 상태 대상",
  bullets: "탄환", cadenza: "카덴차", count: "횟수", enhanced: "강화", "end-of-night": "밤의 별 종료",
  animarum: "영혼의 안식", missiles: "미사일", shots: "사격", separates: "구분합니다", synchronized: "동기화",
  "altered-form": "변형 형태"
};
const ROLE_NAMES_KO = { Survival: "생존 담당", Damage: "공격 담당", Buff: "지원 담당", "Damage (preview)": "공격 담당(출시 전)" };
function translateArchiveText(value) {
  let text = String(value ?? "");
  TEXT_PHRASES_KO.slice().sort((a, b) => b[0].length - a[0].length).forEach(([from, to]) => {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    text = text.replace(new RegExp("(^|[^A-Za-z0-9])" + escaped + "(?=$|[^A-Za-z0-9])", "gi"), (match, prefix) => prefix + to);
  });
  text = text.replace(/(\d+(?:\.\d+)?)\s*s\b/gi, "$1초")
    .replace(/\bA([1-6])\b/gi, "각성 $1")
    .replace(/\bR([1-6])\b/gi, "공명 $1단계")
    .replace(/\bLv\.?\s*(\d+)/gi, "$1레벨");
  text = text.replace(/\b[A-Za-z][A-Za-z'-]*\b/g, token => {
    if (/^(?:II|III|IV)$/i.test(token)) return token.toUpperCase();
    const found = TEXT_PHRASES_KO.find(([from]) => from.toLowerCase() === token.toLowerCase());
    return EXTRA_WORDS_KO[token.toLowerCase()] ?? (found ? found[1] : "기술");
  });
  CHINESE_TERMS_KO.forEach(([from, to]) => { text = text.split(from).join(to); });
  return text.replace(/[\u3400-\u9fff]+/g, "기술")
    .replace(/\b(IV|III|II)\b/g, value => ({ II: "2", III: "3", IV: "4" })[value])
    .replace(/변궤/g, "바이레일")
    .replace(/궁극기/g, "울티메이트")
    .replace(/말리스/g, "악의");
}
function translateR3Row(value) {
  const parts = String(value).split("=");
  const label = translateArchiveText(parts.shift() || "");
  const translatedLabel = /[A-Za-z\u3400-\u9fff]/.test(label) ? "기술 계수" : label;
  return translatedLabel + " " + translateArchiveText(parts.join("="));
}
let db, selectedId = "blackbird", activeTab = "overview", skillLevel = 1, activeSkillGroup = "basic", growthTargetLevel = 80;
const $ = selector => document.querySelector(selector);
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const elem = id => ELEMENTS[id] || { name: id || "—", color: "#aab5bf" };
const fmt = value => Number(value).toLocaleString("ko-KR");

function formatCoefficientLabel(label) {
  const normalized = label.trim().toLowerCase().replace(/\s+/g, " ");
  const labels = {
    "special parry": "특수 회피반격",
    parry: "회피반격",
    plunge: "낙하 공격",
    aim: "조준 공격",
    "dodge projectile": "회피 투사체",
    cycle: "사이클 에너지"
  };
    return labels[normalized] || translateArchiveText(label.trim());
}

function formatCoefficientValue(value) {
  return translateArchiveText(value.trim()).replace(/\s*\*\s*/g, " * ");
}

function renderCoefficientLines(raw) {
  if (!raw) return '<div class="coeff-line">수집된 계수가 없습니다.</div>';
  const lines = [];
  let hit = 0;
  String(raw).split(/\s*;\s*/).filter(Boolean).forEach(part => {
    const coefficientAt = part.search(/\d+(?:\.\d+)?%/);
    if (coefficientAt === 0) {
      hit += 1;
      lines.push(hit + "타 " + formatCoefficientValue(part));
      return;
    }

    if (coefficientAt > 0) {
      const label = formatCoefficientLabel(part.slice(0, coefficientAt));
      const values = part.slice(coefficientAt).split(/,\s*(?=\d+(?:\.\d+)?%)/).filter(Boolean);
      if (values.length > 1) {
        values.forEach((value, index) => lines.push(label + " " + (index + 1) + "타 " + formatCoefficientValue(value)));
      } else {
        lines.push(label + " " + formatCoefficientValue(part.slice(coefficientAt)));
      }
      hit = 0;
      return;
    }

    const labelOnly = part.match(/^([a-z][a-z -]*?)\s+(.+)$/i);
    if (labelOnly) {
      lines.push(formatCoefficientLabel(labelOnly[1]) + ": " + formatCoefficientValue(labelOnly[2]));
      hit = 0;
    } else {
      lines.push(translateArchiveText(part.trim()));
    }
  });
  return lines.map(line => '<div class="coeff-line">' + esc(line) + '</div>').join("");
}

function bindCharacterIllustration() {
  const visual = $("#main-content .hero-visual");
  const image = visual?.querySelector(".character-illustration");
  if (!visual || !image) return;
  image.addEventListener("load", () => visual.classList.add("has-image"), { once: true });
  image.addEventListener("error", () => image.remove(), { once: true });
  if (image.complete && image.naturalWidth > 0) visual.classList.add("has-image");
}

function formatPercent(value) {
  const percent = Math.round(Number(value) * 1000) / 10;
  return (Number.isInteger(percent) ? percent.toLocaleString("ko-KR") : percent.toFixed(1)) + "%";
}

function decodeBase64Bytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodeCoefficientArchive(fileText) {
  const parts = String(fileText).trim().split(/\r?\n/);
  if (parts.length !== 2) throw new Error("스킬 계수 자료 형식이 올바르지 않습니다.");
  const alphabet = Array.from(new TextDecoder().decode(decodeBase64Bytes(parts[0])));
  const encodedCodes = decodeBase64Bytes(parts[1]);
  if (!alphabet.length || encodedCodes.length < 2 || encodedCodes.length % 2) throw new Error("스킬 계수 자료가 손상되었습니다.");
  const dictionary = alphabet.slice();
  let currentCode = (encodedCodes[0] << 8) | encodedCodes[1];
  let current = dictionary[currentCode];
  if (current === undefined) throw new Error("스킬 계수 자료를 해독하지 못했습니다.");
  const chunks = [current];
  for (let i = 2; i < encodedCodes.length; i += 2) {
    const code = (encodedCodes[i] << 8) | encodedCodes[i + 1];
    let entry = dictionary[code];
    if (entry === undefined && code === dictionary.length) entry = current + Array.from(current)[0];
    if (entry === undefined) throw new Error("스킬 계수 자료를 해독하지 못했습니다.");
    chunks.push(entry);
    dictionary.push(current + Array.from(entry)[0]);
    current = entry;
  }
  return JSON.parse(chunks.join(""));
}

function getCoefficientTables(profile, group) {
  const tables = profile.coefficients?.tables || [];
  return tables.filter(table => table.g === group || (group === "basic" && table.g === "ability"));
}

function coefficientLabel(header, group, index) {
  const groupName = ({ basic: "일반 공격", skill: "바이레일 스킬", ultimate: "울티메이트", support: "지원 스킬", ability: "추가 능력" })[group] || "기술";
  let raw = String(header || "").trim();
  let rage = /(?:_Rage|Rage)$/i.test(raw);
  raw = raw.replace(/_Rage$/i, "").replace(/Rage$/i, "").replace(/_Damage\d*$/i, "");
  const phaseMatch = raw.match(/((?:_\d+)+)$/);
  const phases = phaseMatch ? phaseMatch[1].slice(1).split("_") : [];
  if (phaseMatch) raw = raw.slice(0, -phaseMatch[1].length);
  const suffix = (label, hitNumber, isHit = true) => {
    const number = hitNumber ? String(hitNumber) + (isHit ? "타" : "단계") : "";
    return [label, number, phases.length ? "세부 " + phases.join("-") + "단" : "", rage ? "분노 상태" : ""].filter(Boolean).join(" · ");
  };
  const hitPatterns = [
    [/^UltraSkill普通攻击(\d*)$/i, "울티메이트 일반 공격"], [/^Magic普通攻击(\d*)$/i, "마녀 형태 일반 공격"],
    [/^魔女普通攻击(\d*)$/, "마녀 형태 일반 공격"], [/^副手普通攻击(\d*)$/, "보조 캐릭터 일반 공격"],
    [/^近战普攻(\d*)$/, "근접 일반 공격"], [/^远程普攻(\d*)$/, "원거리 일반 공격"], [/^幻境普通攻击(\d*)$/, "환상 일반 공격"],
    [/^现实普通攻击(\d*)$/, "현실 일반 공격"], [/^太刀普通攻击(\d*)$/, "태도 일반 공격"], [/^普通攻击(\d*)$/, ""],
    [/^副手Branch(\d*)$/i, "보조 캐릭터 강공격"], [/^MagicBranch(\d*)$/i, "마녀 형태 강공격"],
    [/^Branch(\d*)$/i, "강공격"], [/^UltraSkill(\d*)$/i, "울티메이트"], [/^MagicUltraSkill(\d*)$/i, "마녀 형태 울티메이트"],
    [/^ForceUltraSkill(\d*)$/i, "강제 울티메이트"], [/^Skill(\d*)$/i, "바이레일 스킬"], [/^EntryAttack(\d*)$/i, "필드 진입 공격"],
    [/^ExtraAtkIntro(\d*)$/i, "등장 추가 공격"], [/^ExtraAtk(\d*)$/i, "추가 공격"], [/^Melee(\d*)$/i, "근접 공격"],
    [/^远程切近战$/, "근접 형태 전환"], [/^近战切远程$/, "원거리 형태 전환"]
  ];
  for (const [pattern, label] of hitPatterns) {
    const match = raw.match(pattern);
    if (match) return suffix(label, match[1], Boolean(match[1]));
  }
  const heavyNormal = raw.match(/^普通攻击(\d+)h$/);
  if (heavyNormal) return suffix("강공격", heavyNormal[1], true);

  const parry = raw.match(/^(?:(特殊|魔女|副手))?极限反击(\d*)$/);
  if (parry) {
    const label = parry[1] === "魔女" ? "마녀 형태 회피반격" : parry[1] === "副手" ? "보조 캐릭터 회피반격" : parry[1] === "特殊" ? "특수 회피반격" : "회피반격";
    return suffix(label, parry[2], Boolean(parry[2]));
  }
  if (/^PerfectEvadeAttack/i.test(raw) || /^Parry\d*$/i.test(raw)) return suffix("회피반격", "", false);
  if (/^SpecialParry\d*$/i.test(raw)) return suffix("특수 회피반격", "", false);
  if (/^Evade\d*$/i.test(raw)) return suffix("회피 공격", raw.match(/\d+/)?.[0], true);
  if (/^下落(?:伤害|攻击)$/.test(raw) || /^副手下落伤害$/.test(raw) || /^魔女下落伤害$/.test(raw)) return suffix(raw.startsWith("副手") ? "보조 캐릭터 낙하 공격" : raw.startsWith("魔女") ? "마녀 형태 낙하 공격" : "낙하 공격", "", false);
  if (/^(?:瞄准攻击|瞄准伤害)$/.test(raw)) return suffix("조준 공격", "", false);
  if (/^(?:援护技|魔女援护技|副手援护技)(?:\d*)$/.test(raw)) return suffix(raw.startsWith("魔女") ? "마녀 형태 지원 스킬" : raw.startsWith("副手") ? "보조 캐릭터 지원 스킬" : "지원 스킬", raw.match(/\d+/)?.[0], Boolean(raw.match(/\d+/)));
  if (/^分支攻击\d*$/.test(raw) || /^分支\d*$/.test(raw)) return suffix("강공격", raw.match(/\d+/)?.[0], Boolean(raw.match(/\d+/)));
  if (/^(?:直接长按分支攻击|普攻中长按分支攻击)$/.test(raw)) return suffix("길게 누르기 강공격", "", false);
  if (/^长按/.test(raw)) return suffix("길게 누르기 " + translateArchiveText(raw.slice(2)), "", false);
  if (/^(?:Skill_Gun|Skill_Syringe|Skill_Trumpet)$/i.test(raw)) return suffix("바이레일 스킬 " + ({ Skill_Gun: "총격", Skill_Syringe: "주사기 공격", Skill_Trumpet: "트럼펫 공격" })[raw], "", false);
  if (/^(?:伤害倍率|范围伤害倍率|多段伤害倍率|直接伤害倍率|持续伤害倍率)(\d+)$/.test(raw)) return suffix(translateArchiveText(raw.replace(/\d+$/, "")), raw.match(/\d+$/)[0], false);
  const translated = translateArchiveText(raw).replace(/\s+/g, " ").trim();
  if (!translated || translated.includes("기술") || /[\u3400-\u9fffA-Za-z]/.test(translated)) return groupName + " 계수 " + index;
  return suffix(translated, "", false);
}

function coefficientValue(table, header, value) {
  const format = table.f?.[header] || {};
  const number = Number(value);
  let result = format.type === "integer" ? fmt(number) : formatPercent(number);
  if (format.suffix) result += " " + translateArchiveText(format.suffix);
  const count = Number(table.m?.[header]);
  if (Number.isFinite(count) && count > 1) result += " * " + fmt(count);
  return result;
}

function renderCoefficientTable(table, group, level, heading) {
  const values = table.r?.[level - 1];
  if (!values) return '<div class="coeff-table-block"><h4 class="coeff-table-heading">' + esc(heading) + '</h4><p class="coeff-missing">출처 자료가 ' + esc((table.r || []).length) + '레벨까지 제공되어 ' + level + '레벨 계수는 확인되지 않았습니다.</p></div>';
  const rows = (table.h || []).map((header, index) => '<div class="coeff-row"><span class="coeff-row-label">' + esc(coefficientLabel(header, table.g || group, index + 1)) + '</span><strong class="coeff-row-value">' + esc(coefficientValue(table, header, values[index])) + '</strong></div>').join("");
  return '<div class="coeff-table-block"><h4 class="coeff-table-heading">' + esc(heading) + '</h4><div class="coeff-value">' + rows + '</div></div>';
}

async function start() {
  try {
    const pairs = await Promise.all(Object.entries(FILES).map(async ([key, file]) => {
      const response = await fetch("./data/" + file);
      if (!response.ok) throw new Error("자료 파일을 불러오지 못했습니다: " + file);
      return [key, await response.json()];
    }));
    const shared = Object.fromEntries(pairs);
    const index = shared.index;
    const ids = [...index.releasedCharacterIds, ...index.upcomingCharacterIds];
    if (new Set(ids).size !== ids.length) throw new Error("캐릭터 목록에 중복 ID가 있습니다.");
    const characterEntries = await Promise.all(ids.map(async id => {
      const response = await fetch("./data/characters/" + encodeURIComponent(id) + ".json");
      if (!response.ok) throw new Error("캐릭터 자료를 불러오지 못했습니다: " + id);
      const character = await response.json();
      if (character.id !== id || character.roster?.id !== id) throw new Error("캐릭터 파일의 ID가 목록과 일치하지 않습니다: " + id);
      return [id, character];
    }));
    const characters = Object.fromEntries(characterEntries);
    db = {
      ...shared,
      characters,
      roster: {
        ...index.rosterMetadata,
        characters: index.releasedCharacterIds.map(id => characters[id].roster),
        confirmedUpcoming: index.upcomingCharacterIds.map(id => characters[id].roster),
        watchlist: index.watchlist || []
      }
    };
    init();
  } catch (error) {
    $("#main-content").innerHTML = '<div class="error-state"><div><p class="eyebrow">자료를 열 수 없습니다</p><h2>자료를 불러오지 못했습니다</h2><p>' + esc(error.message) + '</p><p class="source-note">사이트 주소로 다시 열어 주세요.</p></div></div>';
  }
}

function init() {
  const released = db.roster.characters.filter(c => c.released);
  $("#header-count").textContent = fmt(released.length);
  $("#roster-count").textContent = String(released.length).padStart(2, "0");
  ELEMENT_ORDER.forEach(key => {

    const value = ELEMENTS[key];
    const option = document.createElement("option");
    option.value = key; option.textContent = value.name + "속성"; $("#element-filter").append(option);
  });
  $("#character-search").addEventListener("input", renderRoster);
  $("#element-filter").addEventListener("change", renderRoster);
  $("#roster-list").addEventListener("click", event => {
    const row = event.target.closest("[data-id]");
    if (!row) return;
    selectedId = row.dataset.id; activeTab = "overview"; skillLevel = 1; activeSkillGroup = "basic"; renderRoster(); renderProfile();
    if (matchMedia("(max-width: 700px)").matches) $("#main-content").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#main-content").addEventListener("click", event => {
    const groupButton = event.target.closest("[data-skill-group]");
    if (groupButton) { activeSkillGroup = groupButton.dataset.skillGroup; refreshActiveTab(); return; }
    const levelButton = event.target.closest("[data-skill-level-step]");
    if (levelButton) {
      skillLevel = Math.max(1, Math.min(11, skillLevel + Number(levelButton.dataset.skillLevelStep)));
      refreshSkillLevel();
      return;
    }
    const tab = event.target.closest("[data-tab]");
    if (!tab) return;
    activeTab = tab.dataset.tab;
    refreshActiveTab();
  });
  $("#main-content").addEventListener("change", event => {
    const growthTarget = event.target.closest("[data-growth-target]");    if (growthTarget) {      growthTargetLevel = Math.max(20, Math.min(80, Number(growthTarget.value) || 80));      refreshActiveTab();      return;    }    const levelRange = event.target.closest("[data-skill-level]");    if (!levelRange) return;
    skillLevel = Math.max(1, Math.min(11, Number(levelRange.value) || 1));
    refreshSkillLevel();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) {
      event.preventDefault(); $("#character-search").focus();
    }
  });
  renderRoster(); renderProfile();
}

function renderRoster() {
  const term = $("#character-search").value.trim().toLowerCase(), filter = $("#element-filter").value;
  const characters = db.roster.characters.filter(c => {
    const searchable = [c.names.ko,c.names.en,c.names.zhHans].join(" ").toLowerCase();
    return c.released && (!term || searchable.includes(term)) && (!filter || c.element === filter);
  }).sort((a, b) => {
    const aIsA = a.rarity === "A", bIsA = b.rarity === "A";
    if (aIsA !== bIsA) return aIsA ? 1 : -1;
    if (aIsA) return a.names.ko.localeCompare(b.names.ko, "ko");
    const aOrder = CHARACTER_DISPLAY_ORDER.indexOf(a.id);
    const bOrder = CHARACTER_DISPLAY_ORDER.indexOf(b.id);
    if (aOrder < 0 && bOrder >= 0) return 1;
    if (aOrder >= 0 && bOrder < 0) return -1;
    if (aOrder < 0 && bOrder < 0) return a.names.ko.localeCompare(b.names.ko, "ko");
    return aOrder - bOrder;
  });
  $("#roster-list").innerHTML = characters.length ? characters.map(c => {
    const e = elem(c.element);
    return '<button class="character-row rarity-' + esc(c.rarity) + '" role="option" aria-selected="' + (c.id === selectedId) +
      '" data-id="' + esc(c.id) + '" style="--row-color:' + e.color + '"><span class="row-mark"><img class="element-icon element-icon-row" src="' + esc(elementIconUrl(c.element)) + '" alt=""></span>' +
      '<span class="row-copy"><strong>' + esc(c.names.ko) +
      '</strong></span><span class="rarity-mark">' + esc(c.rarity) + '급</span></button>';
  }).join("") : '<div class="roster-empty">조건에 맞는 캐릭터가 없습니다.<br>검색어나 속성 필터를 바꿔 보세요.</div>';
}

function getProfile(id) {
  const character = db.characters[id];
  if (!character) return null;
  return {
    roster: character.roster,
    detail: character.detail,
    setting: character.setting || null,
    mechanics: character.mechanics,
    console: character.console,
    signature: db.arcs.characters.find(x => x.characterId === id),
    growth: db.growth.characters[id] || null,
    r3: character.r3 || null,
    coefficients: character.coefficients || null,
    crosscheck: character.crosscheck?.progression || null,
    fieldSkills: character.fieldSkills || null
  };
}
function refreshSkillLevel() {
  const panel = $("#tab-panel");
  const coefficientPanel = panel?.querySelector(".skill-coefficient-panel");
  if (!coefficientPanel) { refreshActiveTab(); return; }
  const p = getProfile(selectedId);
  const [category, key] = SKILLS.find(([,group]) => group === activeSkillGroup) || SKILLS[0];
  const tables = getCoefficientTables(p, key);
  const details = tables.map(table => renderCoefficientTable(table, key, skillLevel, table.g === "ability" ? "추가 능력" : category)).join("");
  const content = coefficientPanel.querySelector(".coefficient-content");
  if (content) content.innerHTML = details || '<p class="coeff-missing">이 기술의 계수 자료가 없습니다.</p>';
  const levelLabel = coefficientPanel.querySelector("[data-skill-level-label]");
  if (levelLabel) levelLabel.textContent = skillLevel + "레벨 계수";
  const levelValue = coefficientPanel.querySelector(".skill-level-box-head strong");
  if (levelValue) levelValue.textContent = skillLevel + "레벨";
  const range = coefficientPanel.querySelector("[data-skill-level]");
  if (range) range.value = String(skillLevel);
  coefficientPanel.querySelectorAll("[data-skill-level-step]").forEach(button => {
    const step = Number(button.dataset.skillLevelStep);
    button.disabled = step < 0 ? skillLevel <= 1 : skillLevel >= 11;
  });
}
function refreshActiveTab() {
  const panel = $("#tab-panel");
  if (!panel) return;
  const focused = document.activeElement;
  let focusSelector = "";
  if (focused?.dataset.skillGroup) focusSelector = '[data-skill-group="' + focused.dataset.skillGroup + '"]';
  else if (focused?.dataset.skillLevelStep) focusSelector = '[data-skill-level-step="' + focused.dataset.skillLevelStep + '"]';
  else if (focused?.hasAttribute("data-skill-level")) focusSelector = "[data-skill-level]";  else if (focused?.hasAttribute("data-growth-target")) focusSelector = "[data-growth-target]";  panel.innerHTML = renderTab(getProfile(selectedId));
  $("#main-content").querySelectorAll(".tab-button").forEach(button => {
    button.setAttribute("aria-selected", String(button.dataset.tab === activeTab));
  });
  if (focusSelector) panel.querySelector(focusSelector)?.focus({ preventScroll: true });
}

function renderCharacterIntroDetails(setting) {
  if (!setting) return "";
  const fields = [["생일", setting.birthday], ["소속", setting.faction], ["이능력", setting.ability]];
  return '<dl class="hero-intro-details">' + fields.map(([label, value]) =>
    '<div><dt>' + esc(label) + '</dt><dd>' + esc(value) + '</dd></div>'
  ).join("") + '</dl>';
}
function renderProfile() {
  const p = getProfile(selectedId);
  if (!p.roster) return;
  const e = elem(p.roster.element);

  const illustration = CHARACTER_IMAGE_FILES[p.roster.id] || p.roster.names.ko;
  document.documentElement.style.setProperty("--accent", e.color);
  const order = String(db.roster.characters.findIndex(x => x.id === selectedId) + 1).padStart(2, "0");
  $("#main-content").innerHTML =
    '<div class="profile-topline"><span>캐릭터 데이터 / ' + esc(p.roster.names.ko) +
    '</span><span>수집 기준 · 글로벌 1.4 · 2026.10.02</span></div>' +
    '<section class="profile-hero" style="--element-color:' + e.color + '"><div class="hero-copy">' +
      '<div class="hero-tags"><span class="tag element"><img class="element-icon" src="' + esc(elementIconUrl(p.roster.element)) + '" alt="">' + esc(e.name) + '속성</span><span class="tag">' + esc(ARC_TYPES[p.roster.arcType] || p.roster.arcType) +
      '</span><span class="tag rarity">' + esc(p.roster.rarity) + '등급</span></div>' +
      '<div class="hero-titleline"><h1>' + esc(p.roster.names.ko) + '</h1></div>' +
      '<p class="hero-role">' + esc(p.roster.communityRoleKo || ROLE_NAMES_KO[p.detail?.guideRoleEn] || translateArchiveText(p.detail?.guideRoleEn) || "역할 미분류") + '</p>' +
      '<p class="hero-intro-label">캐릭터 소개</p>' +
      '<p class="hero-intro">' + esc(p.setting?.summary || "캐릭터 소개를 준비 중입니다.") + '</p>' +
      renderCharacterIntroDetails(p.setting) + '</div>' +
      '<div class="hero-visual" aria-hidden="true"><div class="hero-index">' + order + '<small>현장 기록</small></div>' +
      '<img class="character-illustration" src="' + esc(assetUrl(illustration)) + '" alt=""></div></section>' +
    renderStats(p.mechanics) +

    '<nav class="tabs" role="tablist" aria-label="캐릭터 데이터">' +
      TABS.map(([id,label]) => '<button class="tab-button" role="tab" aria-selected="' + (activeTab === id) + '" aria-controls="tab-panel" data-tab="' + id + '">' + label + '</button>').join("") +
    '</nav><section id="tab-panel" class="tab-content" role="tabpanel">' + renderTab(p) + '</section>' +
    '<footer class="main-footer"><span>커뮤니티 DB와 공략에서 수집한 기록</span><a href="./data/nte-character-source-audit.md" target="_blank" rel="noopener noreferrer">출처·검수 기록</a></footer>';
  bindCharacterIllustration();
}
function renderStats(m) {
  const s = m?.level80BaseStats;
  const item = (name,value) => '<div class="stat-card"><span>' + name + '</span><strong>' + esc(value) + '</strong></div>';
  return '<div class="stats-grid">' + (s ? item("체력",fmt(s.hp))+item("공격력",fmt(s.atk))+item("방어력",fmt(s.def))+item("치명 확률",s.critRatePct+"%")+item("치명 피해",s.critDamagePct+"%") : item("80레벨 기본 능력치","자료 없음")) + '</div>';
}

function renderTab(p) {
  if (activeTab === "skills") return renderSkills(p);
  if (activeTab === "awakening") return renderAwakening(p);
  if (activeTab === "arcs") return renderArcs(p);
  if (activeTab === "console") return renderConsole(p);  if (activeTab === "growth") return renderGrowth(p);
  return renderOverview(p);
}

function sourceLinks(p) {
  const urls = new Set();
  [p.roster.englishProfile,p.detail?.source,p.mechanics?.sourceUrl,p.coefficients?.url].forEach(x => x && urls.add(x));
  (p.console?.sourceUrls || []).forEach(x => urls.add(x));
  const arc = db.arcs.arcs.find(a => a.characterId === p.roster.id);
  Object.values(arc?.sources || {}).forEach(x => typeof x === "string" && urls.add(x));
  const coefficientUrl = p.coefficients?.url;
  return '<details class="source-block"><summary>자료 출처와 검수 상태</summary><div class="source-links">' +
    Array.from(urls).map((url,i) => '<a class="source-link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + (url === coefficientUrl ? '레벨별 계수 원자료' : '자료 ' + (i+1)) + '</a>').join("") +
    '</div><p class="source-note">레벨별 계수는 NTE Station 기술표의 단계별 원자료를 반영했습니다. 출처에서 11레벨을 제공하지 않는 항목은 수치를 추정하지 않습니다.</p></details>';
}
function renderOverview(p) {  const data = p.fieldSkills;  const passiveRows = (data?.passives || []).map(item => '<article class="profile-skill-row">' +    '<div class="profile-skill-heading"><strong>' + esc(item.nameKo) + '</strong><span class="profile-skill-tag">돌파 ' + esc(item.unlock) + '</span></div>' +    '<p>' + esc(item.effectKo) + '</p></article>').join("");  const cityRows = (data?.citySkills || []).map(item => '<article class="profile-skill-row">' +    '<div class="profile-skill-heading"><strong>' + esc(item.nameKo) + '</strong><span class="profile-skill-tag">' + esc(item.categoryKo) + '</span></div>' +    '<p>' + esc(item.effectKo) + '</p></article>').join("");  const fieldSource = data?.sourceUrl ? '<a class="source-link" href="' + esc(data.sourceUrl) + '" target="_blank" rel="noopener noreferrer">패시브·생활 스킬 원자료</a>' : '';  return '<div class="panel-grid"><article class="content-card"><h3>핵심 메커니즘</h3><p class="mechanic-copy">' +    esc(translateArchiveText(p.detail?.coreMechanicKo || "요약 자료를 수집 중입니다.")) + '</p>' +    (p.mechanics?.notes ? '<p class="source-note">' + esc(translateArchiveText(p.mechanics.notes)) + '</p>' : '') +    '</article><article class="content-card"><h3>고유 패시브</h3>' +    (passiveRows ? '<div class="profile-skill-list">' + passiveRows + '</div>' : '<p class="source-note">패시브 자료를 찾을 수 없습니다.</p>') +    '</article><article class="content-card"><h3>도시 스킬</h3>' +    (cityRows ? '<div class="profile-skill-list">' + cityRows + '</div>' : '<p class="source-note">도시 스킬 자료를 찾을 수 없습니다.</p>') +    '<p class="source-note">스킬명과 효과는 공개 원문을 한국어로 옮겨 요약했습니다. 공식 한국어 표기와 다를 수 있습니다.</p>' + fieldSource +    '</article></div>' + sourceLinks(p);
}
function renderSkills(p) {
  const selected = SKILLS.find(([,key]) => key === activeSkillGroup) || SKILLS[0];
  const [category,key] = selected;
  const skillName = SKILL_NAMES_KO[p.roster.id]?.[key] || "계수표";
  const glyph = ({ basic: "공", skill: "바", ultimate: "울", support: "지" })[key] || "기";
  const nav = SKILLS.map(([label,group]) => '<button type="button" class="skill-category-button" role="tab" aria-selected="' + (group === key) + '" data-skill-group="' + group + '"><span class="skill-category-glyph" aria-hidden="true">' + ({basic:"공",skill:"바",ultimate:"울",support:"지"})[group] + '</span><span>' + label + '</span></button>').join("");
  const tables = getCoefficientTables(p, key);
  const details = tables.map(table => renderCoefficientTable(table, key, skillLevel, table.g === "ability" ? "추가 능력" : category)).join("");
  const summary = translateArchiveText(p.detail?.coreMechanicKo || "캐릭터의 전투 메커니즘 요약이 없습니다.");
  const levelControl = '<section class="skill-level-box" aria-label="계수 레벨 조절"><div class="skill-level-box-head"><span>스킬 레벨</span><strong>' + skillLevel + '레벨</strong></div>' +
    '<input class="skill-level-range" type="range" min="1" max="11" step="1" value="' + skillLevel + '" data-skill-level aria-label="스킬 레벨 1부터 11까지">' +
    '<div class="skill-level-stepper"><span>1레벨</span><div><button type="button" data-skill-level-step="-1" aria-label="스킬 레벨 낮추기"' + (skillLevel <= 1 ? ' disabled' : '') + '>−</button><button type="button" data-skill-level-step="1" aria-label="스킬 레벨 높이기"' + (skillLevel >= 11 ? ' disabled' : '') + '>+</button></div><span>11레벨</span></div></section>';
  return '<div class="skill-category-nav" role="tablist" aria-label="기술 분류">' + nav + '</div>' +
    '<section class="skill-feature-panel"><header class="skill-feature-header"><div class="skill-feature-title"><span class="skill-feature-glyph" aria-hidden="true">' + glyph + '</span><div><span class="skill-feature-kicker">' + category + '</span><h2>' + esc(skillName) + '</h2></div></div><span class="skill-feature-badge">레벨별 계수</span></header>' +
    '<div class="skill-feature-body"><article class="skill-description-panel"><div class="skill-description-label">캐릭터 전투 요약</div><h3>' + category + ' · ' + esc(skillName) + '</h3><p>' + esc(summary) + '</p>' +
    '<div class="skill-format-note"><strong>계수 표기</strong><p>타격별 계수를 한 줄씩 표시합니다. 여러 번 적중하는 기술은 <b>* 횟수</b>로 나타냅니다.</p></div></article>' +
    '<section class="skill-coefficient-panel" aria-label="레벨별 스킬 계수">' + levelControl +
    '<div class="coefficient-table-label"><span>항목</span><span data-skill-level-label>' + skillLevel + '레벨 계수</span></div>' +
    '<div class="coefficient-content">' + (details || '<p class="coeff-missing">이 기술의 계수 자료가 없습니다.</p>') + '</div></section></div></section>' + sourceLinks(p);
}function renderAwakening(p) {
  const m = p.mechanics;
  const awakenings = (m?.awakeningEffectsKo || []).map(text => {
    const match = text.match(/^A(\d+):\s*/);
    const stage = match?.[1];    const customName = stage ? m?.awakeningNamesKo?.[`A${stage}`] : "";    const label = typeof customName === "string" && customName.trim() ? customName.trim() : match ? "각성 " + stage : "각성";    return '<li class="awakening-item"><strong>' + esc(label) + '</strong><p>' + esc(translateArchiveText(match ? text.slice(match[0].length) : text)) + '</p></li>';
  }).join("");
  const resonance = Object.entries(m?.resonanceKo || {}).map(([level,text]) => '<article class="resonance-card"><span>공명 ' + esc(level) + '단계</span><p>' + esc(translateArchiveText(text)) + '</p></article>').join("");
  return '<div class="two-column"><article class="content-card"><div class="section-head"><div><h2>각성 효과</h2><p>각성 단계별 추가 효과</p></div></div>' +
    (awakenings ? '<ul class="awakening-list">' + awakenings + '</ul>' : '<p class="source-note">각성 자료가 없습니다.</p>') +
    '</article><article class="content-card"><div class="section-head"><div><h2>공명 효과</h2><p>공명 3 / 공명 6 효과</p></div></div>' +
    (resonance ? '<div class="resonance-grid">' + resonance + '</div>' : '<p class="source-note">공명 자료가 없습니다.</p>') + '</article></div>' + sourceLinks(p);
}

function renderArcs(p) {
  const character = db.arcs.characters.find(x => x.characterId === p.roster.id);
  const arcIds = character?.signatureArcIds || [];
  const arcs = arcIds.map(id => db.arcs.arcs.find(a => a.id === id)).filter(Boolean);
  if (!arcs.length) return '<article class="content-card"><h3>전용 아크</h3><p class="source-note">' +
    (character?.status === "unconfirmed" ? "전용 아크 연결이 아직 확정되지 않았습니다." : "전용 아크 자료가 확인되지 않았습니다.") + '</p>' + sourceLinks(p) + '</article>';
  const cards = arcs.map(a => {
    const s = a.level80 || {};
    const effects = Object.entries(a.rankEffects || {}).map(([rank,text]) => '<div class="arc-effect"><strong>' + esc(rank.replace(/^R(\d+)$/i, "$1단계")) + '</strong><p>' + esc(translateArchiveText(text)) + '</p></div>').join("");
    const links = Object.values(a.sources || {}).filter(url => typeof url === "string").map((url,i) => '<a class="source-link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">아크 출처 ' + (i+1) + '</a>').join("");
    return '<article class="arc-card"><div class="arc-card-head"><div><h3>' + esc(a.nameKo || "전용 아크") + '</h3><p>80레벨 능력치</p></div><span class="arc-rarity">' + esc(a.rarity ? a.rarity + "급" : "—") + '</span></div>' +
      '<div class="arc-stats"><span class="arc-stat">공격력 ' + esc(s.attack ?? "—") + '</span><span class="arc-stat">' + esc(translateArchiveText(s.secondaryStat || "부옵션")) + ' ' + esc(s.secondaryValue || "—") + '</span></div>' +
      '<div class="arc-effects">' + (effects || '<p class="source-note">랭크 효과 자료 없음</p>') + '</div>' +
      (a.verification?.note ? '<p class="notice" style="margin-top:13px">' + esc(translateArchiveText(a.verification.note)) + '</p>' : '') +
      '<div class="source-links">' + links + '</div></article>';
  }).join("");
  return '<div class="section-head"><div><h2>시그니처 아크</h2><p>전용 연결, 80레벨 능력치와 확인된 랭크 효과</p></div></div><div class="arc-list">' + cards + '</div>';
}

function renderGrowth(p) {  const data = db.growth;  const character = data.characters[p.roster.id];  if (!character) return '<article class="content-card"><h3>성장 자료 없음</h3><p class="source-note">이 캐릭터의 돌파 재료가 아직 확인되지 않았습니다.</p></article>';  const target = Math.max(20, Math.min(80, growthTargetLevel));  const caps = [30, 40, 50, 60, 70, 80];  const family = data.families[character.family];  const uniqueName = data.uniqueMaterials[character.unique];  const totals = new Map();  let breakthroughCoins = 0;  const stages = caps.map((cap, index) => {    if (cap > target) return null;    const tier = Math.floor(index / 2);    const items = [{ name: family[tier], count: data.phaseMaterialCounts[index], kind: "field" }];    const uniqueCount = data.uniqueMaterialCounts[index];    if (uniqueCount) items.push({ name: uniqueName, count: uniqueCount, kind: "boss" });    items.forEach(item => totals.set(item.name, (totals.get(item.name) || 0) + item.count));    breakthroughCoins += data.breakthroughCoins[index];    return { from: index ? caps[index - 1] : 20, to: cap, index, coins: data.breakthroughCoins[index], items };  }).filter(Boolean);  const rows = stages.map(stage => '<article class="growth-phase-row"><div class="growth-phase-level"><span>돌파 ' + (stage.index + 1) + '단계</span><strong>Lv. ' + stage.from + ' → ' + stage.to + '</strong></div>' +    '<div class="growth-phase-cost"><span>비틀 코인</span><strong>' + fmt(stage.coins) + '</strong></div>' +    '<div class="growth-phase-items">' + stage.items.map(item => '<span class="growth-material-chip" data-material-kind="' + item.kind + '"><span>' + esc(item.name) + '</span><b>×' + item.count + '</b></span>').join("") + '</div></article>').join("");  const totalItems = Array.from(totals, ([name,count]) => '<span class="growth-material-chip" data-material-kind="' + (name === uniqueName ? 'boss' : 'field') + '"><span>' + esc(name) + '</span><b>×' + count + '</b></span>').join("");  const level = data.leveling;  const guides = [    ["특급 헌터 가이드", level.guideCountsTo80.elite, level.guides.elite],    ["숙련 헌터 가이드", level.guideCountsTo80.senior, level.guides.senior],    ["신예 헌터 가이드", level.guideCountsTo80.rising, level.guides.rising]  ];  const targetOptions = [20, 30, 40, 50, 60, 70, 80].map(cap => '<option value="' + cap + '"' + (cap === target ? ' selected' : '') + '>Lv. ' + cap + '</option>').join("");  const sourceLinks = [    ['캐릭터별 돌파 원자료', 'https://neverness.app/characters/' + encodeURIComponent(character.slug)],    ['한국어 재료·획득처 도감', 'https://gigle.kr/nte/materials'],    ['경험치 계산기', 'https://www.ntebuild.com/planner?add=' + encodeURIComponent(p.roster.id)]  ].map(([label,url]) => '<a class="source-link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + '</a>').join("");  const allCoins = level.levelingCoinsTo80 + data.breakthroughCoins.reduce((sum, value) => sum + value, 0);  return '<div class="section-head growth-heading"><div><h2>레벨·돌파 성장 재료</h2><p>' + esc(p.roster.names.ko) + '의 80레벨까지 필요한 성장 자원과 돌파 단계를 정리했습니다.</p></div>' +    '<label class="growth-target-control"><span>목표 레벨</span><select data-growth-target aria-label="목표 레벨 선택">' + targetOptions + '</select></label></div>' +    '<div class="growth-summary-grid"><article class="growth-summary-card"><span>선택 목표</span><strong>Lv. ' + target + '</strong><small>' + (target === 20 ? '기본 상한' : (stages.length + '회 돌파 포함')) + '</small></article>' +    '<article class="growth-summary-card"><span>돌파 비틀 코인</span><strong>' + fmt(breakthroughCoins) + '</strong><small>목표 레벨까지의 합계</small></article>' +    '<article class="growth-summary-card"><span>레벨 1 → 80 EXP</span><strong>약 ' + fmt(level.characterExpTo80) + '</strong><small>경험치 가이드 ' + guides.reduce((sum, [,count]) => sum + count, 0) + '개 예상</small></article>' +    '<article class="growth-summary-card"><span>레벨업 + 전체 돌파 코인</span><strong>약 ' + fmt(allCoins) + '</strong><small>Lv.1 → 80 커뮤니티 계산값</small></article></div>' +    '<div class="growth-content-grid"><article class="content-card growth-level-card"><div class="section-head"><div><h3>레벨업 재료</h3><p>헌터 가이드로 캐릭터 경험치를 올립니다.</p></div></div>' +    '<div class="growth-guide-list">' + guides.map(([name,count,xp]) => '<div class="growth-guide-row"><span>' + esc(name) + '<small>' + fmt(xp) + ' EXP / 개</small></span><strong>×' + count + '</strong></div>').join("") + '</div>' +    '<div class="growth-exp-total"><span>레벨업 비틀 코인 · Lv.1 → 80</span><strong>약 ' + fmt(level.levelingCoinsTo80) + '</strong></div><p class="source-note">' + esc(level.estimateNoteKo) + '</p></article>' +    '<article class="content-card growth-total-card"><div class="section-head"><div><h3>돌파 재료 합계</h3><p>Lv.20에서 선택한 목표까지</p></div></div>' +    (totalItems ? '<div class="growth-material-list">' + totalItems + '</div>' : '<p class="source-note">기본 Lv.20 상한에는 돌파 재료가 필요하지 않습니다.</p>') +    '<div class="growth-exp-total"><span>돌파 단계</span><strong>' + stages.length + ' / 6</strong></div></article></div>' +    '<div class="section-head growth-phase-heading"><div><h2>단계별 돌파 비용</h2><p>각 단계에서 상한 레벨을 열 때 필요한 재료입니다.</p></div></div>' +    (rows ? '<div class="growth-phase-list"><div class="growth-phase-labels"><span>돌파 구간</span><span>비틀 코인</span><span>필요 재료</span></div>' + rows + '</div>' : '<article class="content-card"><p class="source-note">Lv.20까지는 돌파가 필요하지 않습니다.</p></article>') +    '<details class="source-block"><summary>자료 출처와 계산 기준</summary><div class="source-links">' + sourceLinks + '</div>' +    '<p class="source-note">돌파 단계와 캐릭터별 재료는 커뮤니티 도감 및 한국어 재료 도감을 대조했습니다. 캐릭터 페이지의 갱신 시점은 서로 다를 수 있습니다. 레벨 경험치와 레벨업 코인 합계는 커뮤니티 계산기 집계값이며, 게임 내 소비량과 차이가 날 수 있습니다.</p></details>';}function renderConsole(p) {
  const build = p.console;
  if (!build) return '<article class="content-card"><h3>콘솔 자료 없음</h3></article>';
  const sets = new Map(db.consoles.cartridgeSets.map(s => [s.id,s]));
  const best = sets.get(build.cartridge.recommendedSetId);
  const alternatives = (build.cartridge.alternativeSetIds || []).map(id => sets.get(id)).filter(Boolean);
  const layout = (build.console.recommendedLayout || []).map(shape => {
    const koreanShape = ({ II: "2", III: "3", IV: "4" })[shape] || shape;
    return '<span class="drive" data-shape="' + esc(koreanShape) + '" aria-label="' + esc(koreanShape) + '형 드라이브">' + esc(koreanShape) + '</span>';
  }).join("");
  const setCard = s => '<article class="content-card"><h3>' + esc(s.nameKo) + '</h3>' +
    '<div class="set-bonus"><b>2세트</b><p>' + esc(translateArchiveText(s.twoPieceKo)) + '</p></div><div class="set-bonus"><b>4세트</b><p>' + esc(translateArchiveText(s.fourPieceKo)) + '</p></div></article>';
  const priority = list => '<ul class="priority-list">' + (list || []).map(x => '<li>' + esc(translateArchiveText(x)) + '</li>').join("") + '</ul>';
  let html = '<div class="two-column"><article class="content-card"><div class="section-head"><div><h2>콘솔 설정</h2><p>' + esc(translateArchiveText(build.console.perDriveBonusKo)) + '</p></div></div>' +
    '<div class="drive-layout" aria-label="권장 드라이브 배치">' + layout + '</div><p class="source-note">가이드가 제시한 배치 예시입니다. 우선 카트리지 4세트 효과를 맞춘 뒤 보유 드라이브에 맞춰 조정하세요.</p></article>' +
    '<article class="content-card"><h3>추천 카트리지</h3><p class="cartridge-name">' + esc(best?.nameKo || "자료 없음") + '</p>' +
    (alternatives.length ? '<div class="alt-list">' + alternatives.map(s => '<span class="alt-chip">' + esc(s.nameKo) + '</span>').join("") + '</div>' : '') + '</article></div>';
  if (best) html += '<div style="height:12px"></div>' + setCard(best);
  if (alternatives.length) html += '<div class="section-head" style="margin-top:18px"><div><h2>대안 세트</h2></div></div><div class="two-column">' + alternatives.map(setCard).join("") + '</div>';
  html += '<div class="two-column" style="margin-top:13px"><article class="content-card"><h3>주옵 우선순위</h3>' + priority(build.mainStatPriorityKo) +
    '</article><article class="content-card"><h3>부옵 우선순위</h3>' + priority(build.substatPriorityKo) + '</article></div>';
  if (build.conflictNoteKo || build.buildNoteKo) html += '<p class="notice" style="margin-top:13px">' + esc(translateArchiveText(build.conflictNoteKo || build.buildNoteKo)) + '</p>';
  return html + '<p class="source-note" style="margin-top:12px">커뮤니티 추천 기준이며 파티 구성, 전용 아크와 운용 방식에 따라 달라질 수 있습니다.</p>' + sourceLinks(p);
}

start();
