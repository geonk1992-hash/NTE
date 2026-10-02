const FILES = {
  roster: "nte-characters-v1.json",
  details: "nte-character-details-v1.4.json",
  mechanics: "nte-character-mechanics-v1.4.json",
  level11: "nte-character-r3-level11-v1.4.json",
  arcs: "nte-character-signature-arcs-v1.4.json",
  crosscheck: "nte-skill-level-crosscheck-v1.4.json",
  consoles: "nte-character-console-cartridges-v1.4.json"
};
const ELEMENTS = {
  Anima: { name: "령", color: "#9fe6aa" }, Chaos: { name: "암", color: "#c797ff" },
  Cosmos: { name: "빛", color: "#f2d876" }, Incantation: { name: "주", color: "#ef9b85" },
  Lakshana: { name: "상", color: "#f1a0cb" }, Psyche: { name: "혼", color: "#86c8ff" }
};
const ARC_TYPES = { Condensate: "결합", Gas: "기체", Liquid: "액체", Plasma: "플라스마", Solid: "고체" };
const SKILLS = [["일반 공격", "basic"], ["바이레일 스킬", "skill"], ["울티메이트", "ultimate"], ["지원 스킬", "support"]];
const TABS = [["overview", "요약"], ["skills", "기술표"], ["awakening", "돌파·각성"], ["arcs", "전용 아크"], ["console", "콘솔·카트리지"]];
let db, selectedId = "blackbird", activeTab = "overview";
const $ = selector => document.querySelector(selector);
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const elem = id => ELEMENTS[id] || { name: id || "—", color: "#aab5bf" };
const fmt = value => Number(value).toLocaleString("ko-KR");

async function start() {
  try {
    const pairs = await Promise.all(Object.entries(FILES).map(async ([key, file]) => {
      const response = await fetch("./data/" + file);
      if (!response.ok) throw new Error("자료 파일을 불러오지 못했습니다.");
      return [key, await response.json()];
    }));
    db = Object.fromEntries(pairs);
    init();
  } catch (error) {
    $("#main-content").innerHTML = '<div class="error-state"><div><p class="eyebrow">ARCHIVE UNAVAILABLE</p><h2>자료를 불러오지 못했습니다</h2><p>' + esc(error.message) + '</p><p class="source-note">사이트 주소로 다시 열어 주세요.</p></div></div>';
  }
}

function init() {
  const released = db.roster.characters.filter(c => c.released);
  $("#header-count").textContent = fmt(released.length);
  $("#roster-count").textContent = String(released.length).padStart(2, "0");
  Object.entries(ELEMENTS).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = key; option.textContent = value.name + "속성"; $("#element-filter").append(option);
  });
  $("#character-search").addEventListener("input", renderRoster);
  $("#element-filter").addEventListener("change", renderRoster);
  $("#roster-list").addEventListener("click", event => {
    const row = event.target.closest("[data-id]");
    if (!row) return;
    selectedId = row.dataset.id; activeTab = "overview"; renderRoster(); renderProfile();
    if (matchMedia("(max-width: 700px)").matches) $("#main-content").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#main-content").addEventListener("click", event => {
    const tab = event.target.closest("[data-tab]");
    if (!tab) return;
    activeTab = tab.dataset.tab; renderProfile();
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
  });
  $("#roster-list").innerHTML = characters.length ? characters.map(c => {
    const e = elem(c.element);
    return '<button class="character-row rarity-' + esc(c.rarity) + '" role="option" aria-selected="' + (c.id === selectedId) +
      '" data-id="' + esc(c.id) + '" style="--row-color:' + e.color + '"><span class="row-mark">' + esc(e.name) +
      '</span><span class="row-copy"><strong>' + esc(c.names.ko) + '</strong><small>' + esc(c.names.en) +
      '</small></span><span class="rarity-mark">' + esc(c.rarity) + '</span></button>';
  }).join("") : '<div class="roster-empty">조건에 맞는 캐릭터가 없습니다.<br>검색어나 속성 필터를 바꿔 보세요.</div>';
}

function getProfile(id) {
  return {
    roster: db.roster.characters.find(x => x.id === id),
    detail: db.details.characters.find(x => x.id === id),
    mechanics: db.mechanics.characters.find(x => x.id === id),
    console: db.consoles.characters.find(x => x.characterId === id),
    signature: db.arcs.characters.find(x => x.characterId === id),
    r3: db.level11.characters[id] || null,
    crosscheck: db.crosscheck.characters[id] || null
  };
}

function renderProfile() {
  const p = getProfile(selectedId);
  if (!p.roster) return;
  const e = elem(p.roster.element);
  const order = String(db.roster.characters.findIndex(x => x.id === selectedId) + 1).padStart(2, "0");
  $("#main-content").innerHTML =
    '<div class="profile-topline"><span>캐릭터 데이터 / ' + esc(p.roster.names.en.toUpperCase()) +
    '</span><span>수집 기준 · 글로벌 1.4 · 2026.10.02</span></div>' +
    '<section class="profile-hero" style="--element-color:' + e.color + '"><div class="hero-copy">' +
      '<div class="hero-tags"><span class="tag element">' + esc(e.name) + '속성</span><span class="tag">' + esc(ARC_TYPES[p.roster.arcType] || p.roster.arcType) +
      '</span><span class="tag rarity">' + esc(p.roster.rarity) + ' RANK</span></div>' +
      '<div class="hero-titleline"><h1>' + esc(p.roster.names.ko) + '</h1><span class="english-name">' + esc(p.roster.names.en) + '</span></div>' +
      '<p class="hero-role">' + esc(p.roster.communityRoleKo || p.detail?.guideRoleEn || "역할 미분류") + '</p>' +
      '<p class="hero-mechanic">' + esc(p.detail?.coreMechanicKo || "핵심 메커니즘 설명을 수집 중입니다.") + '</p></div>' +
      '<div class="hero-index" aria-hidden="true">' + order + '<small>FIELD FILE</small></div></section>' +
    renderStats(p.mechanics) +
    '<nav class="tabs" role="tablist" aria-label="캐릭터 데이터">' +
      TABS.map(([id,label]) => '<button class="tab-button" role="tab" aria-selected="' + (activeTab === id) + '" aria-controls="tab-panel" data-tab="' + id + '">' + label + '</button>').join("") +
    '</nav><section id="tab-panel" class="tab-content" role="tabpanel">' + renderTab(p) + '</section>' +
    '<footer class="main-footer"><span>커뮤니티 DB와 공략에서 수집한 기록</span><a href="./data/nte-character-source-audit.md" target="_blank" rel="noopener noreferrer">출처·검수 기록</a></footer>';
}

function renderStats(m) {
  const s = m?.level80BaseStats;
  const item = (name,value) => '<div class="stat-card"><span>' + name + '</span><strong>' + esc(value) + '</strong></div>';
  return '<div class="stats-grid">' + (s ? item("HP",fmt(s.hp))+item("공격력",fmt(s.atk))+item("방어력",fmt(s.def))+item("치명 확률",s.critRatePct+"%")+item("치명 피해",s.critDamagePct+"%") : item("Lv.80 기본 능력치","자료 없음")) + '</div>';
}

function renderTab(p) {
  if (activeTab === "skills") return renderSkills(p);
  if (activeTab === "awakening") return renderAwakening(p);
  if (activeTab === "arcs") return renderArcs(p);
  if (activeTab === "console") return renderConsole(p);
  return renderOverview(p);
}

function sourceLinks(p) {
  const urls = new Set();
  [p.roster.englishProfile,p.detail?.source,p.mechanics?.sourceUrl].forEach(x => x && urls.add(x));
  (p.console?.sourceUrls || []).forEach(x => urls.add(x));
  const arc = db.arcs.arcs.find(a => a.characterId === p.roster.id);
  Object.values(arc?.sources || {}).forEach(x => typeof x === "string" && urls.add(x));
  return '<details class="source-block"><summary>자료 출처와 검수 상태</summary><div class="source-links">' +
    Array.from(urls).map((url,i) => '<a class="source-link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">자료 ' + (i+1) + '</a>').join("") +
    '</div><p class="source-note">출처별 패치 반영 시점과 표기 정밀도가 다를 수 있습니다. 확인이 필요한 차이는 조사 기록에 병기했습니다.</p></details>';
}

function renderOverview(p) {
  const rows = SKILLS.map(([name,key]) => {
    const value = p.mechanics?.skillCoefficients?.[key];
    const english = p.detail?.keySkillNamesEn?.[key];
    return '<div class="skill-item"><div><span class="skill-name">' + name + '</span>' + (english ? '<span class="skill-en">' + esc(english) + '</span>' : '') +
      '</div><span class="skill-short">' + esc(value ? (value.length > 48 ? value.slice(0,45) + "…" : value) : "계수 미수집") + '</span></div>';
  }).join("");
  return '<div class="panel-grid"><article class="content-card"><h3>핵심 메커니즘</h3><p class="mechanic-copy">' +
    esc(p.detail?.coreMechanicKo || "요약 자료를 수집 중입니다.") + '</p>' +
    (p.mechanics?.notes ? '<p class="source-note">' + esc(p.mechanics.notes) + '</p>' : '') +
    '</article><article class="content-card"><h3>기술 계수 미리보기</h3><div class="skill-list">' + rows + '</div></article></div>' + sourceLinks(p);
}

function renderSkills(p) {
  const cards = SKILLS.map(([name,key]) => '<article class="coeff-card"><h3>' + name + '</h3>' +
    '<span class="skill-en">' + esc(p.detail?.keySkillNamesEn?.[key] || "계수 요약") + '</span><code class="coeff-value">' +
    esc(p.mechanics?.skillCoefficients?.[key] || "수집된 계수가 없습니다.") + '</code></article>').join("");
  let html = '<div class="section-head"><div><h2>스킬 계수</h2><p>수집된 계수 요약과 R3 레벨 11 상세표</p></div></div><div class="coeff-grid">' + cards + '</div>';
  if (p.r3) {
    const groups = Object.entries(p.r3.tables || {}).map(([key,raw]) => {
      const values = Array.isArray(raw) ? raw : Object.values(raw).flatMap(v => Array.isArray(v) ? v : [JSON.stringify(v)]);
      const title = ({basic:"일반 공격",redirectSkill:"바이레일 스킬",ultimate:"울티메이트",support:"지원 스킬"})[key] || key;
      return '<section class="raw-group"><h4>' + esc(title) + ' · ' + values.length + '행</h4><ul>' + values.map(v => '<li>' + esc(v) + '</li>').join("") + '</ul></section>';
    }).join("");
    html += '<details class="disclosure"><summary>R3 적용 Lv.11 계수 원문 보기</summary><p class="source-note">' +
      esc(p.r3.r3AdditionalCoefficientTextKo || "R3에서 레벨이 오른 스킬의 Lv.11 값입니다. 행 이름은 원문 표기를 보존했습니다.") +
      '</p><div class="raw-groups">' + groups + '</div>' +
      (p.r3.sourceUrl ? '<div class="source-links"><a class="source-link" href="' + esc(p.r3.sourceUrl) + '" target="_blank" rel="noopener noreferrer">Lv.11 원문 출처</a></div>' : '') +
      '</details>';
  }
  if (p.crosscheck) html += '<details class="disclosure"><summary>레벨별 교차검증 자료</summary><p class="source-note">별도 출처의 원문 레코드입니다. 빈 레벨과 원문 용어는 그대로 보존했습니다.</p><pre class="json-view">' +
    esc(JSON.stringify(p.crosscheck,null,2)) + '</pre></details>';
  return html + sourceLinks(p);
}

function renderAwakening(p) {
  const m = p.mechanics;
  const awakenings = (m?.awakeningEffectsKo || []).map(text => {
    const match = text.match(/^A(\d+):\s*/);
    return '<li class="awakening-item"><strong>' + esc(match ? "A"+match[1] : "각성") + '</strong><p>' + esc(match ? text.slice(match[0].length) : text) + '</p></li>';
  }).join("");
  const resonance = Object.entries(m?.resonanceKo || {}).map(([level,text]) => '<article class="resonance-card"><span>R' + esc(level) + '</span><p>' + esc(text) + '</p></article>').join("");
  return '<div class="two-column"><article class="content-card"><div class="section-head"><div><h2>각성 효과</h2><p>각성 단계별 추가 효과</p></div></div>' +
    (awakenings ? '<ul class="awakening-list">' + awakenings + '</ul>' : '<p class="source-note">각성 자료가 없습니다.</p>') +
    '</article><article class="content-card"><div class="section-head"><div><h2>공명 효과</h2><p>R3 / R6 효과</p></div></div>' +
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
    const effects = Object.entries(a.rankEffects || {}).map(([rank,text]) => '<div class="arc-effect"><strong>' + esc(rank) + '</strong><p>' + esc(text) + '</p></div>').join("");
    const links = Object.values(a.sources || {}).filter(url => typeof url === "string").map((url,i) => '<a class="source-link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">아크 출처 ' + (i+1) + '</a>').join("");
    return '<article class="arc-card"><div class="arc-card-head"><div><h3>' + esc(a.nameKo || a.nameEn) + '</h3><p>' + esc(a.nameEn) + ' · Lv.80 능력치</p></div><span class="arc-rarity">' + esc(a.rarity || "—") + '</span></div>' +
      '<div class="arc-stats"><span class="arc-stat">공격력 ' + esc(s.attack ?? "—") + '</span><span class="arc-stat">' + esc(s.secondaryStat || "부옵션") + ' ' + esc(s.secondaryValue || "—") + '</span></div>' +
      '<div class="arc-effects">' + (effects || '<p class="source-note">랭크 효과 자료 없음</p>') + '</div>' +
      (a.verification?.note ? '<p class="notice" style="margin-top:13px">' + esc(a.verification.note) + '</p>' : '') +
      '<div class="source-links">' + links + '</div></article>';
  }).join("");
  return '<div class="section-head"><div><h2>시그니처 아크</h2><p>전용 연결, Lv.80 능력치와 확인된 랭크 효과</p></div></div><div class="arc-list">' + cards + '</div>';
}

function renderConsole(p) {
  const build = p.console;
  if (!build) return '<article class="content-card"><h3>콘솔 자료 없음</h3></article>';
  const sets = new Map(db.consoles.cartridgeSets.map(s => [s.id,s]));
  const best = sets.get(build.cartridge.recommendedSetId);
  const alternatives = (build.cartridge.alternativeSetIds || []).map(id => sets.get(id)).filter(Boolean);
  const layout = (build.console.recommendedLayout || []).map(shape => '<span class="drive" data-shape="' + esc(shape) + '" aria-label="' + esc(shape) + '형 드라이브">' + esc(shape) + '</span>').join("");
  const setCard = s => '<article class="content-card"><h3>' + esc(s.nameKo) + '</h3><p class="cartridge-en">' + esc(s.nameEn) + '</p>' +
    '<div class="set-bonus"><b>2세트</b><p>' + esc(s.twoPieceKo) + '</p></div><div class="set-bonus"><b>4세트</b><p>' + esc(s.fourPieceKo) + '</p></div></article>';
  const priority = list => '<ul class="priority-list">' + (list || []).map(x => '<li>' + esc(x) + '</li>').join("") + '</ul>';
  let html = '<div class="two-column"><article class="content-card"><div class="section-head"><div><h2>콘솔 설정</h2><p>' + esc(build.console.perDriveBonusKo) + '</p></div></div>' +
    '<div class="drive-layout" aria-label="권장 드라이브 배치">' + layout + '</div><p class="source-note">가이드가 제시한 배치 예시입니다. 우선 카트리지 4세트 효과를 맞춘 뒤 보유 드라이브에 맞춰 조정하세요.</p></article>' +
    '<article class="content-card"><h3>추천 카트리지</h3><p class="cartridge-name">' + esc(best?.nameKo || "자료 없음") + '</p><p class="cartridge-en">' + esc(best?.nameEn || "") + '</p>' +
    (alternatives.length ? '<div class="alt-list">' + alternatives.map(s => '<span class="alt-chip">' + esc(s.nameKo) + '</span>').join("") + '</div>' : '') + '</article></div>';
  if (best) html += '<div style="height:12px"></div>' + setCard(best);
  if (alternatives.length) html += '<div class="section-head" style="margin-top:18px"><div><h2>대안 세트</h2></div></div><div class="two-column">' + alternatives.map(setCard).join("") + '</div>';
  html += '<div class="two-column" style="margin-top:13px"><article class="content-card"><h3>주옵 우선순위</h3>' + priority(build.mainStatPriorityKo) +
    '</article><article class="content-card"><h3>부옵 우선순위</h3>' + priority(build.substatPriorityKo) + '</article></div>';
  if (build.conflictNoteKo || build.buildNoteKo) html += '<p class="notice" style="margin-top:13px">' + esc(build.conflictNoteKo || build.buildNoteKo) + '</p>';
  return html + '<p class="source-note" style="margin-top:12px">커뮤니티 추천 기준이며 파티 구성, 전용 아크와 운용 방식에 따라 달라질 수 있습니다.</p>' + sourceLinks(p);
}

start();
