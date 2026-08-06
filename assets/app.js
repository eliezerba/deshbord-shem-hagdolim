const DATA_PATHS = {
  sourceText: "data/source_text.txt",
  readme: "data/README.md",
  researchQuestions: "data/research_questions.md",
  reportEN: "data/reports/hida_bookshelf.md",
  reportHE: "data/reports/hida_bookshelf_accessible_HE.md",
  appendix: "data/reports/hida_bookshelf_appendix.md",
  dataDictionary: "data/graph/DATA_DICTIONARY.md",
  graphSummary: "data/graph/graph_summary.txt",
  nodeMetrics: "data/graph/node_metrics.csv",
  gexf: "data/graph/hagdolim_kg.gexf",
  graphLite: "data/graph/graph_lite.json"
};

const FIGURES = {
  F1: { file: "F1_bookshelf_map.png", en: "Global bookshelf topology; who is structurally central.", he: "טופולוגיית מדף הספרים: מי נמצא במרכז המבני." },
  F2: { file: "F2_role_typology.png", en: "Role typology (authority/compiler/balanced).", he: "טיפולוגיית תפקידים: סמכות/מלקט/מאוזן." },
  F3: { file: "F3_predicate_structural_backing.png", en: "How semantic predicates are backed by editorial structure.", he: "איך יחסים סמנטיים נתמכים במבנה העריכתי." },
  F4: { file: "F4_community_predicate_mix.png", en: "Communities and dominant relation types.", he: "קהילות וסוגי יחסים דומיננטיים." },
  F5: { file: "F5_silences.png", en: "High-attention entities missing standalone entries.", he: "ישויות בולטות ללא ערך עצמאי." },
  F6: { file: "F6_lineages.png", en: "Teacher lineages and transmission depth.", he: "שושלות רב-תלמיד ועומק ההעברה." },
  F7: { file: "F7_citation_modes.png", en: "Citation modes: person/text patterns.", he: "דפוסי ציטוט: אדם/טקסט." },
  F8: { file: "F8_book_derivation.png", en: "Book derivation genealogy.", he: "גנאולוגיה של נגזרות ספרים." },
  F9: { file: "F9_dispute_geometry.png", en: "Dispute geometry by communities.", he: "גיאומטריית מחלוקת לפי קהילות." },
  F10: { file: "F10_tacit_residual.png", en: "Tacit ties (A minus explicit C).", he: "קשרים סמויים (A פחות C מפורש)." },
  F11: { file: "F11_controversy_staging.png", en: "Where controversies are staged editorially.", he: "היכן מחלוקות נבנות עריכתית." },
  F12: { file: "F12_attention_residual.png", en: "Entry attention residuals.", he: "שאריות תשומת לב של ערכים." },
  F13: { file: "F13_soulroot.png", en: "Soul-root overlay network.", he: "רשת שכבת שורש נשמה." },
  F14: { file: "F14_motifs.png", en: "Network motifs of transmission/dispute/citation.", he: "מוטיבים ברשת: העברה/מחלוקת/ציטוט." },
  F15: { file: "F15_cocitation.png", en: "Co-citation families of texts.", he: "משפחות קו-ציטוט בין טקסטים." },
  F16: { file: "F16_self_position.png", en: "Author/family self-position in network.", he: "מיקום עצמי של המחבר/המשפחה ברשת." },
  F17: { file: "F17_eclipse.png", en: "Book eclipsing author signal.", he: "מקרים בהם הספר מאפיל על המחבר." },
  F18: { file: "F18_geography_map.png", en: "Geographic map of place relations.", he: "מפת יחסי מקומות." },
  F19: { file: "F19_place_roles.png", en: "Roles of places by predicate.", he: "תפקידי מקומות לפי predicate." },
  F20: { file: "F20_community_geography.png", en: "Communities projected onto geography.", he: "היטל קהילות על גיאוגרפיה." },
  F_entry: { file: "F_entry_centric.png", en: "Entry-centric vs ambient relation ratio.", he: "יחס בין יחסים ממוקדי-ערך לרקע." }
};

const I18N = {
  en: {
    tabs: {
      reports: "Reports + Methods",
      data: "Raw Data + Source",
      networks: "Networks (Global)",
      person: "Personal Network",
      geo: "Geography",
      validation: "Validation"
    },
    ui: {
      app_title: "Shem HaGdolim Research Dashboard",
      app_subtitle: "Reports, methods, raw data, networks, personal analysis, geography",
      selected_entity: "Selected Entity:",
      graph_mode: "Graph Mode",
      copy_link: "Copy Share Link",
      copied: "Copied",
      reports_title: "Reports + Methods",
      reports_help: "Research reports, methods, and original figure explanations (F1-F20) with direct links to data and query workflows.",
      reports_choose: "Choose document:",
      goto_data: "Go To Data+Source",
      goto_networks: "Go To Networks",
      figures_title: "Original Figures Explained",
      data_title: "Raw Data + Source Text",
      data_help: "Search by value or name (not only ID), filter node types, and open direct source-text evidence.",
      search_node: "Search by name/value",
      node_kinds: "Node kinds",
      node_classes: "Node classes",
      communities: "Communities",
      raw_min_prominence: "Min prominence",
      export_csv: "Export CSV",
      search_source: "Search in source text",
      search: "Search",
      networks_title: "Networks + Slicing",
      networks_help: "The main workspace is the global network. Filter, color, and slice first; then inspect edge analytics below.",
      global_network_title: "Global Network (Main Workspace)",
      global_network_help: "Start here: pick a seed entity, use multi-select filters, then switch color modes to inspect structure, communities, and roles.",
      seed_node: "Seed node: name or ID",
      layers: "Layers",
      predicates: "Predicates",
      source_kinds: "Source kinds",
      target_kinds: "Target kinds",
      color_kind: "Color by Kind",
      color_community: "Color by Community",
      color_role: "Color by Role",
      hops: "Hops",
      max_edges: "Max edges",
      build_global: "Build Global Network",
      download_png: "Download PNG",
      network_functions: "Network Functions (How to Use)",
      source_node: "Source: name or ID",
      target_node: "Target: name or ID",
      run_query: "Run Query",
      export_result: "Export Result CSV",
      person_title: "Personal Network Analysis",
      person_help: "Ego network, improved tradition tree, and Wikidata period/year enrichment.",
      person_input: "Choose person/entity",
      tradition_types: "Tradition types",
      forward: "Forward",
      backward: "Backward",
      both: "Both",
      layout_tree: "Tree layout",
      layout_radial: "Radial layout",
      depth: "Depth",
      fanout: "Max children per node",
      analyze_person: "Analyze Person",
      open_source: "Open Source Text",
      download_tree_png: "Download Tree PNG",
      ego_network: "Ego Network",
      tradition_tree: "Tradition Tree",
      tradition_explain_title: "What Tradition Tree Gives You",
      person_metrics: "Person Metrics",
      wikidata_title: "Wikidata Time/Period",
      geo_title: "Geography",
      geo_help: "Place relations map with optional network-on-map overlay between places.",
      heat_radius: "Heat radius",
      overlay_map: "Overlay network on map",
      overlay_predicates: "Overlay predicates",
      draw_map: "Draw Map",
      validation_title: "Validation",
      run_validation: "Run Validation",
      extra_visuals: "Extra Visualizations From Web Research"
    }
  },
  he: {
    tabs: {
      reports: "דוחות + שיטות",
      data: "נתונים גולמיים + מקור",
      networks: "רשתות (מבט רחב)",
      person: "רשתות וניתוח אישי",
      geo: "גיאוגרפיה",
      validation: "ולידציה"
    },
    ui: {
      app_title: "דשבורד מחקר שם הגדולים",
      app_subtitle: "דוחות, שיטות, נתונים, רשתות, ניתוח אישי וגיאוגרפיה",
      selected_entity: "ישות נבחרת:",
      graph_mode: "מצב גרף",
      copy_link: "העתקת קישור",
      copied: "הועתק",
      reports_title: "דוחות + שיטות",
      reports_help: "דוחות מחקר, שיטות, והסבר לגרפים המקוריים (F1-F20) עם קישור ישיר לנתונים ולתשאול.",
      reports_choose: "בחירת מסמך:",
      goto_data: "מעבר לנתונים+מקור",
      goto_networks: "מעבר לרשתות",
      figures_title: "הסבר גרפים מקוריים",
      data_title: "נתונים גולמיים + טקסט מקור",
      data_help: "חיפוש לפי שם/ערך (לא רק ID), סינון סוגי קודקודים ופתיחת הוכחת מקור ישירה.",
      search_node: "חפש לפי שם/ערך",
      node_kinds: "סוגי קודקודים",
      node_classes: "קטגוריות קודקוד",
      communities: "קהילות",
      raw_min_prominence: "סף בולטות מינימלי",
      export_csv: "ייצוא CSV",
      search_source: "חפש בטקסט המקור",
      search: "חיפוש",
      networks_title: "רשתות + חיתוכים",
      networks_help: "המרחב הראשי הוא הרשת הכללית. קודם מפלחים ומשחקים ברשת, ואז יורדים לניתוח קשתות למטה.",
      global_network_title: "רשת כללית (מרחב עבודה ראשי)",
      global_network_help: "מתחילים כאן: בוחרים ישות עוגן, מפעילים סינון מרובה, ומחליפים צביעה להבנת מבנה, קהילות ותפקידים.",
      seed_node: "צומת עוגן: שם או ID",
      layers: "שכבות",
      predicates: "סוגי קשר (predicates)",
      source_kinds: "סוגי מקור",
      target_kinds: "סוגי יעד",
      color_kind: "צביעה לפי סוג",
      color_community: "צביעה לפי קהילה",
      color_role: "צביעה לפי תפקיד",
      hops: "קפיצות",
      max_edges: "מקסימום קשתות",
      build_global: "בניית רשת כללית",
      download_png: "הורדת PNG",
      network_functions: "פונקציות רשת (איך להשתמש)",
      source_node: "מקור: שם או ID",
      target_node: "יעד: שם או ID",
      run_query: "הרצת שאילתה",
      export_result: "ייצוא תוצאה ל-CSV",
      person_title: "רשתות וניתוח אישי",
      person_help: "רשת אגו, Tradition Tree משוכלל, והעשרה מ-Wikidata (שנים/תקופה).",
      person_input: "בחר דמות/ישות",
      tradition_types: "סוגי מסורת",
      forward: "קדימה",
      backward: "אחורה",
      both: "דו-כיווני",
      layout_tree: "פריסת עץ",
      layout_radial: "פריסה רדיאלית",
      depth: "עומק",
      fanout: "מס' ילדים מקסימלי",
      analyze_person: "ניתוח דמות",
      open_source: "פתיחת טקסט מקור",
      download_tree_png: "הורדת PNG של העץ",
      ego_network: "רשת אגו",
      tradition_tree: "עץ מסורות",
      tradition_explain_title: "מה נותן Tradition Tree",
      person_metrics: "מדדי דמות",
      wikidata_title: "Wikidata: שנים/תקופה",
      geo_title: "גיאוגרפיה",
      geo_help: "מפת קשרי מקומות עם אפשרות שכבת רשת-על-מפה.",
      heat_radius: "רדיוס חום",
      overlay_map: "הצג שכבת רשת על המפה",
      overlay_predicates: "Predicates לשכבת-על",
      draw_map: "שרטוט מפה",
      validation_title: "ולידציה",
      run_validation: "הרצת ולידציה",
      extra_visuals: "ויזואליזציות נוספות ממחקר רשת"
    }
  }
};

const APP = {
  lang: "he",
  activeTab: "reports",
  docs: {},
  sourceText: "",
  sourceLines: [],
  nodes: [],
  nodeById: new Map(),
  normLabelToIds: new Map(),
  filteredNodes: [],
  gLoaded: false,
  gMode: "",
  gNodes: [],
  gEdges: [],
  gNodeById: new Map(),
  edgePredicates: [],
  edgeLayers: [],
  currentEdgeResult: [],
  selectedNodeId: "",
  activeEdgePredicateTags: new Set(),
  cyGlobal: null,
  cyEgo: null,
  cyTree: null,
  map: null,
  mapMarkers: null,
  mapHeat: null,
  mapOverlay: null,
  wikidataCache: new Map()
};

function missingRequiredDomIds() {
  const required = [
    "tabs", "langToggle", "saveState", "reportSelect", "figureSelect", "figurePreview", "figureExplanation",
    "nodeSearch", "kindFilter", "fourWayFilter", "communityFilter", "nodeTableWrap",
    "network", "seedNode", "networkLayerFilter", "networkPredicateFilter", "buildNetwork",
    "personInput", "analyzePerson", "treeNetwork", "wikidataBox",
    "geoMap", "drawGeo", "runValidation"
  ];
  return required.filter(id => !document.getElementById(id));
}

function handleMismatchedHtml() {
  const missing = missingRequiredDomIds();
  if (!missing.length) return false;

  // If the app was opened from workspace root, jump to canonical dashboard path.
  if (!location.pathname.includes("deshbord-shem hagdolim")) {
    location.replace(`/deshbord-shem%20hagdolim/index.html?ts=${Date.now()}`);
    return true;
  }

  const msg = `Dashboard HTML mismatch. Missing IDs: ${missing.slice(0, 8).join(", ")}${missing.length > 8 ? "..." : ""}`;
  console.error(msg);
  const box = document.createElement("div");
  box.style.cssText = "position:fixed;top:10px;left:10px;right:10px;z-index:99999;background:#fff3cd;color:#5f4500;border:1px solid #ead28a;padding:10px;border-radius:8px;font:14px/1.4 sans-serif";
  box.textContent = msg;
  document.body.appendChild(box);
  return true;
}

function t(k) {
  return I18N[APP.lang]?.ui?.[k] || k;
}

function esc(s) {
  return String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/["'`\[\](){}:;,.!?\\/\-|_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function labelOf(node) {
  return node?.label || node?.id || "";
}

function kindOf(node) {
  return node?.kind || "unknown";
}

function selValues(id) {
  return Array.from(document.getElementById(id).selectedOptions).map(o => o.value);
}

function isAllSelected(id) {
  const el = document.getElementById(id);
  return el.selectedOptions.length === el.options.length;
}

function setMultiOptions(id, values, selectedValues = []) {
  const chosen = new Set(selectedValues);
  const el = document.getElementById(id);
  el.innerHTML = values.map(v => `<option value="${esc(v)}" ${chosen.size === 0 || chosen.has(String(v)) ? "selected" : ""}>${esc(v)}</option>`).join("");
}

async function getText(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`Fetch failed ${path}: ${r.status}`);
  return r.text();
}

function parseCsv(text) {
  const rows = [];
  let i = 0, f = "", row = [], q = false;
  while (i < text.length) {
    const c = text[i];
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') { f += '"'; i++; } else { q = false; }
      } else f += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ""; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ""; }
    else if (c !== '\r') f += c;
    i++;
  }
  if (f.length || row.length) { row.push(f); rows.push(row); }
  const head = rows.shift() || [];
  return rows.filter(r => r.some(x => x !== "")).map(r => {
    const o = {};
    head.forEach((h, ix) => o[h] = r[ix] ?? "");
    return o;
  });
}

function csvFromObjects(arr) {
  if (!arr.length) return "";
  const cols = Object.keys(arr[0]);
  const e = (v) => {
    const s = String(v ?? "");
    return (s.includes(',') || s.includes('"') || s.includes('\n')) ? `"${s.replaceAll('"','""')}"` : s;
  };
  return [cols.join(','), ...arr.map(o => cols.map(c => e(o[c])).join(','))].join('\n');
}

function download(name, text, mime = "text/plain;charset=utf-8") {
  const u = URL.createObjectURL(new Blob([text], { type: mime }));
  const a = document.createElement("a");
  a.href = u;
  a.download = name;
  a.click();
  URL.revokeObjectURL(u);
}

function downloadCyPng(cy, name) {
  if (!cy) return;
  const a = document.createElement("a");
  a.href = cy.png({ full: true, bg: "#ffffff", scale: 2 });
  a.download = name;
  a.click();
}

function setStatus() {
  const el = document.getElementById("selectedEntityLabel");
  if (APP.selectedNodeId) {
    const n = APP.nodeById.get(APP.selectedNodeId) || APP.gNodeById.get(APP.selectedNodeId);
    el.textContent = n ? `${labelOf(n)} (${APP.selectedNodeId})` : APP.selectedNodeId;
  } else {
    el.textContent = "-";
  }
}

function setSelectedNode(id) {
  APP.selectedNodeId = id || "";
  setStatus();
}

function buildTabs() {
  const tabs = document.getElementById("tabs");
  const labels = I18N[APP.lang].tabs;
  tabs.innerHTML = "";
  Object.entries(labels).forEach(([k, txt]) => {
    const b = document.createElement("button");
    b.className = `tab-btn ${APP.activeTab === k ? "active" : ""}`;
    b.textContent = txt;
    b.onclick = () => activateTab(k);
    tabs.appendChild(b);
  });
}

function activateTab(tab) {
  APP.activeTab = tab;
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  const panel = document.getElementById(`tab-${tab}`);
  if (panel) panel.classList.add("active");
  buildTabs();
}

function applyLanguage() {
  document.documentElement.lang = APP.lang === "he" ? "he" : "en";
  document.documentElement.dir = APP.lang === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val) el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    const val = t(key);
    if (val) el.setAttribute("placeholder", val);
  });

  document.getElementById("langToggle").textContent = APP.lang === "he" ? "English" : "עברית";
  if (!document.getElementById("saveState").dataset.stateCopied) {
    document.getElementById("saveState").textContent = t("copy_link");
  }

  buildTabs();
  renderFigurePreview();
  renderNetworkFunctionsHelp();
  renderTraditionExplain();
  setExtraFeaturesFromResearch();
}

function roleOf(n) {
  const cin = num(n?.c_in_wdeg);
  const cout = num(n?.c_out_wdeg);
  const sum = cin + cout;
  if (sum < 8) return "peripheral";
  const r = (cin - cout) / (sum + 1);
  if (r >= 0.2) return "authority";
  if (r <= -0.2) return "compiler";
  return "balanced";
}

function colorByCommunity(c) {
  const p = ["#005f73", "#0a9396", "#94d2bd", "#ee9b00", "#ca6702", "#bb3e03", "#9b2226", "#6c757d"];
  return p[Math.abs(num(c)) % p.length];
}

function buildNormIndex() {
  APP.normLabelToIds = new Map();
  APP.nodes.forEach(n => {
    const key = norm(n.label);
    if (!key) return;
    if (!APP.normLabelToIds.has(key)) APP.normLabelToIds.set(key, []);
    APP.normLabelToIds.get(key).push(n.id);
  });
}

function resolveInputToId(v) {
  const raw = String(v || "").trim();
  if (!raw) return "";
  if (APP.nodeById.has(raw) || APP.gNodeById.has(raw)) return raw;
  const nrm = norm(raw);
  if (APP.normLabelToIds.has(nrm)) return APP.normLabelToIds.get(nrm)[0];
  const f = APP.nodes.find(n => norm(n.label).includes(nrm));
  return f ? f.id : "";
}

function nodeById(id) {
  return APP.gNodeById.get(id) || APP.nodeById.get(id) || null;
}

function jumpToSourceByNodeId(id) {
  const n = nodeById(id);
  if (!n) return;
  setSelectedNode(id);
  document.getElementById("sourceSearch").value = labelOf(n);
  activateTab("data");
  runSourceSearch();
}

function renderNetworkFunctionsHelp() {
  const rows = APP.lang === "he"
    ? [
        "בחירת Seed: נקודת כניסה לחקירה. הרשת תיבנה סביב הישות הזו.",
        "Layers/Predicates: חיתוך סמנטי מדויק של סוגי הקשרים.",
        "Node Kinds: בקרה האם להציג אנשים, ספרים, מקומות או שילוב.",
        "Color by Kind/Community/Role: מעבר בין פירוש טקסונומי, קהילתי ותפקודי.",
        "Hops + Max edges: איזון בין עומק מחקר לבין עומס ויזואלי.",
        "תגיות predicates מעל טבלת הקשתות הן אינטראקטיביות: לחיצה מפעילה/מכבה חיתוך מיידי."
      ]
    : [
        "Seed: your entry point. The network is expanded around this entity.",
        "Layers/Predicates: semantic slicing over relation families.",
        "Node Kinds: include people, books, places, or any mix.",
        "Color by Kind/Community/Role: switch between taxonomy, clusters, and function.",
        "Hops + Max edges: tune depth versus visual load.",
        "Predicate tags above edge results are active filters; click to toggle live slicing."
      ];
  document.getElementById("networkFunctions").innerHTML = rows.map(x => `<li>${esc(x)}</li>`).join("");
}

function renderTraditionExplain() {
  const html = APP.lang === "he"
    ? `<p><strong>Tradition Tree</strong> מדגיש שרשראות העברה (למשל רב-תלמיד, פירוש, חיבור) סביב דמות נבחרת.</p>
       <ul>
         <li>עומק מראה כמה דורות/שכבות אפשר לעקוב.</li>
         <li>Fanout שולט ברעש: בכל צומת נשמרים רק הענפים החזקים יותר.</li>
         <li>כיוון מאפשר לעקוב קדימה, אחורה, או דו-כיווני.</li>
         <li>פריסה רדיאלית טובה לזיהוי הסתעפויות; פריסת עץ טובה למעקב שושלת.</li>
       </ul>
       <p>מבוסס על עקרונות visualization של עצים היררכיים (dendrogram/collapsible tree): שליטה בעומק, הפחתת עומס, והצגת מבנה הסתעפות באופן פרשני.</p>`
    : `<p><strong>Tradition Tree</strong> highlights transmission chains (teacherhood, commentary, authorship, soul-root) around a selected entity.</p>
       <ul>
         <li>Depth controls how many generations/layers are traversed.</li>
         <li>Fanout reduces clutter by keeping stronger branches per node.</li>
         <li>Direction follows downstream, upstream, or both.</li>
         <li>Radial layout emphasizes branching shape; tree layout emphasizes lineage reading.</li>
       </ul>
       <p>Grounded in hierarchy-visualization practice (dendrogram/collapsible-tree): depth control, clutter reduction, and branch-structure interpretability.</p>`;
  document.getElementById("traditionExplain").innerHTML = html;
}

function populateReportSelector() {
  const s = document.getElementById("reportSelect");
  const opts = [
    ["readme", "README"],
    ["researchQuestions", APP.lang === "he" ? "שאלות מחקר" : "Research Questions"],
    ["reportEN", "Main Report EN"],
    ["reportHE", "Main Report HE"],
    ["appendix", APP.lang === "he" ? "נספח שיטות" : "Appendix (Methods)"],
    ["dataDictionary", APP.lang === "he" ? "מילון נתונים" : "Data Dictionary"],
    ["graphSummary", APP.lang === "he" ? "סיכום גרף" : "Graph Summary"]
  ];
  s.innerHTML = opts.map(([k, txt]) => `<option value="${k}">${txt}</option>`).join("");
  s.value = APP.lang === "he" ? "reportHE" : "reportEN";
  s.onchange = renderReport;
  renderReport();
}

function renderReport() {
  const key = document.getElementById("reportSelect").value;
  const txt = APP.docs[key] || "";
  document.getElementById("reportContent").innerHTML = key === "graphSummary" ? `<pre>${esc(txt)}</pre>` : marked.parse(txt);
}

function populateFigureExplorer() {
  const s = document.getElementById("figureSelect");
  if (!s) return;
  const keys = Object.keys(FIGURES);
  s.innerHTML = keys.map(k => `<option value="${k}">${k} - ${FIGURES[k].file}</option>`).join("");
  s.value = "F1";
  s.onchange = renderFigurePreview;
  renderFigurePreview();
}

function renderFigurePreview() {
  const k = document.getElementById("figureSelect")?.value;
  const f = FIGURES[k];
  if (!f) return;
  const preview = document.getElementById("figurePreview");
  const expl = document.getElementById("figureExplanation");
  if (!preview || !expl) return;
  preview.src = `data/figures/${f.file}`;
  expl.textContent = APP.lang === "he" ? f.he : f.en;
}

function populateNodeDatalist() {
  const dl = document.getElementById("nodeNameList");
  const top = [...APP.nodes].sort((a, b) => num(b.a_in_degree) - num(a.a_in_degree)).slice(0, 2500);
  dl.innerHTML = top.map(n => `<option value="${esc(n.label)}">${esc(n.id)}</option>`).join("");
}

function populateFilters() {
  const kinds = [...new Set(APP.nodes.map(n => n.kind))].sort();
  const four = [...new Set(APP.nodes.map(n => n.four_way))].sort();
  const comm = Array.from(new Set(APP.nodes.map(n => String(n.community)))).sort((a, b) => num(a) - num(b));

  setMultiOptions("kindFilter", kinds);
  setMultiOptions("fourWayFilter", four);
  setMultiOptions("communityFilter", comm);

  setMultiOptions("sourceKindFilter", kinds);
  setMultiOptions("targetKindFilter", kinds);
  setMultiOptions("networkNodeKindFilter", kinds);
}

function filterRawNodes() {
  const q = norm(document.getElementById("nodeSearch").value);
  const selectedKinds = new Set(selValues("kindFilter"));
  const selectedFour = new Set(selValues("fourWayFilter"));
  const selectedComm = new Set(selValues("communityFilter"));
  const minProm = num(document.getElementById("minProm").value);

  APP.filteredNodes = APP.nodes.filter(n => {
    if (selectedKinds.size && !selectedKinds.has(n.kind)) return false;
    if (selectedFour.size && !selectedFour.has(n.four_way)) return false;
    if (selectedComm.size && !selectedComm.has(String(n.community))) return false;
    if (num(n.a_in_degree) < minProm) return false;
    if (q && !(norm(n.label).includes(q) || norm(n.id).includes(q))) return false;
    return true;
  });

  renderNodeTable();
}

function renderNodeTable() {
  const rows = APP.filteredNodes.slice(0, 1800);
  const cols = ["id","label","kind","four_way","community","a_in_degree","c_in_wdeg","c_out_wdeg","place_in"];
  const head = [...cols, "source"].map(c => `<th>${esc(c)}</th>`).join("");
  const body = rows.map(r => {
    const cells = cols.map(c => `<td>${esc(r[c])}</td>`).join("");
    return `<tr data-node-id="${esc(r.id)}">${cells}<td><button class="btn ghost raw-source" data-id="${esc(r.id)}">${APP.lang === "he" ? "מקור" : "Source"}</button></td></tr>`;
  }).join("");
  document.getElementById("nodeTableWrap").innerHTML = `<table class="table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table><p>${rows.length}/${APP.filteredNodes.length}</p>`;

  document.querySelectorAll(".raw-source").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      jumpToSourceByNodeId(btn.getAttribute("data-id"));
    };
  });

  document.querySelectorAll("#nodeTableWrap tbody tr").forEach(tr => {
    tr.onclick = (e) => {
      if (e.target.classList.contains("raw-source")) return;
      const id = tr.getAttribute("data-node-id");
      setSelectedNode(id);
      document.getElementById("seedNode").value = id;
      document.getElementById("personInput").value = id;
      activateTab("person");
    };
  });
}

async function loadGraphIfNeeded(mode = "lite") {
  if (APP.gLoaded && APP.gMode === mode) return;

  if (mode === "lite") {
    const t = await getText(DATA_PATHS.graphLite);
    const j = JSON.parse(t);
    APP.gNodes = (j.nodes || []).map(n => ({
      id: n.i, label: n.l || n.i, kind: n.k, four_way: n.f, a_in_degree: n.a,
      c_in_wdeg: n.ci, c_out_wdeg: n.co, place_in: n.p, community: n.m, lat: n.lat, lon: n.lon
    }));
    APP.gEdges = (j.edges || []).map(e => ({
      id: e.i, source: e.s, target: e.t, weight: e.w, layer: e.ly, predicate: e.pr, subtype: e.sb, evidence: e.ev, source_entries: e.se
    }));
  } else {
    const xmlTxt = await getText(DATA_PATHS.gexf);
    const xml = new DOMParser().parseFromString(xmlTxt, "application/xml");
    const nMap = new Map();
    const eMap = new Map();
    xml.querySelectorAll("attributes[class='node'] > attribute").forEach(a => nMap.set(a.getAttribute("id"), a.getAttribute("title")));
    xml.querySelectorAll("attributes[class='edge'] > attribute").forEach(a => eMap.set(a.getAttribute("id"), a.getAttribute("title")));

    APP.gNodes = Array.from(xml.querySelectorAll("nodes > node")).map(n => {
      const attrs = {};
      n.querySelectorAll("attvalues > attvalue").forEach(v => {
        const k = nMap.get(v.getAttribute("for"));
        if (k) attrs[k] = v.getAttribute("value");
      });
      return { id: n.getAttribute("id"), label: n.getAttribute("label") || "", ...attrs };
    });

    APP.gEdges = Array.from(xml.querySelectorAll("edges > edge")).map(e => {
      const attrs = {};
      e.querySelectorAll("attvalues > attvalue").forEach(v => {
        const k = eMap.get(v.getAttribute("for"));
        if (k) attrs[k] = v.getAttribute("value");
      });
      return { id: e.getAttribute("id"), source: e.getAttribute("source"), target: e.getAttribute("target"), weight: num(e.getAttribute("weight")), ...attrs };
    });
  }

  APP.gNodeById = new Map(APP.gNodes.map(n => [n.id, n]));
  APP.edgePredicates = [...new Set(APP.gEdges.map(e => e.predicate).filter(Boolean))].sort();
  APP.edgeLayers = [...new Set(APP.gEdges.map(e => e.layer).filter(Boolean))].sort();
  APP.gLoaded = true;
  APP.gMode = mode;
  populateGraphFilters();
}

function populateGraphFilters() {
  setMultiOptions("layerFilter", APP.edgeLayers);
  setMultiOptions("predicateFilter", APP.edgePredicates);
  setMultiOptions("networkLayerFilter", APP.edgeLayers);
  setMultiOptions("networkPredicateFilter", APP.edgePredicates);

  const placePreds = [...new Set(APP.gEdges.filter(e => e.subtype === "place").map(e => e.predicate).filter(Boolean))].sort();
  setMultiOptions("geoPredicateFilter", placePreds);
  setMultiOptions("geoOverlayPredicate", placePreds);
}

function clearEdgeTagFilters() {
  APP.activeEdgePredicateTags = new Set();
}

function runEdgeQuery() {
  const layers = new Set(selValues("layerFilter"));
  const preds = new Set(selValues("predicateFilter"));
  const srcKinds = new Set(selValues("sourceKindFilter"));
  const tgtKinds = new Set(selValues("targetKindFilter"));
  const srcId = resolveInputToId(document.getElementById("sourceNodeFilter").value);
  const tgtId = resolveInputToId(document.getElementById("targetNodeFilter").value);

  APP.currentEdgeResult = APP.gEdges.filter(e => {
    if (layers.size && !layers.has(e.layer)) return false;
    if (preds.size && !preds.has(e.predicate)) return false;
    if (srcId && e.source !== srcId) return false;
    if (tgtId && e.target !== tgtId) return false;
    if (srcKinds.size) {
      const sk = kindOf(nodeById(e.source));
      if (!srcKinds.has(sk)) return false;
    }
    if (tgtKinds.size) {
      const tk = kindOf(nodeById(e.target));
      if (!tgtKinds.has(tk)) return false;
    }
    return true;
  });

  if (APP.activeEdgePredicateTags.size) {
    APP.currentEdgeResult = APP.currentEdgeResult.filter(e => APP.activeEdgePredicateTags.has(e.predicate));
  }

  const byPred = APP.currentEdgeResult.reduce((a, e) => {
    a[e.predicate] = (a[e.predicate] || 0) + 1;
    return a;
  }, {});

  const tagHtml = Object.entries(byPred)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 24)
    .map(([k, v]) => {
      const active = APP.activeEdgePredicateTags.has(k) ? "active" : "";
      return `<button class="pill filter-pill ${active}" data-pred="${esc(k)}">${esc(k)}: ${v}</button>`;
    })
    .join(" ");

  document.getElementById("edgeStats").innerHTML = `<p><strong>${APP.currentEdgeResult.length.toLocaleString()}</strong> ${APP.lang === "he" ? "קשתות" : "edges"}</p><div>${tagHtml}</div>`;

  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.onclick = () => {
      const p = btn.getAttribute("data-pred");
      if (APP.activeEdgePredicateTags.has(p)) APP.activeEdgePredicateTags.delete(p);
      else APP.activeEdgePredicateTags.add(p);
      runEdgeQuery();
    };
  });

  const rows = APP.currentEdgeResult.slice(0, 1400);
  const cols = ["layer", "predicate", "source", "target", "weight", "evidence"];
  const head = [...cols, APP.lang === "he" ? "מקור טקסט" : "source text"].map(c => `<th>${esc(c)}</th>`).join("");
  const body = rows.map(r => {
    const s = nodeById(r.source), tNode = nodeById(r.target);
    return `<tr><td>${esc(r.layer || "")}</td><td>${esc(r.predicate || "")}</td><td>${esc(r.source)}<br/><small>${esc(labelOf(s))}</small></td><td>${esc(r.target)}<br/><small>${esc(labelOf(tNode))}</small></td><td>${esc(r.weight)}</td><td>${esc(r.evidence || "")}</td><td><button class="btn ghost edge-source" data-id="${esc(r.source)}">${APP.lang === "he" ? "מקור" : "Source"}</button></td></tr>`;
  }).join("");
  document.getElementById("edgeTableWrap").innerHTML = `<table class="table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;

  document.querySelectorAll(".edge-source").forEach(b => {
    b.onclick = () => jumpToSourceByNodeId(b.getAttribute("data-id"));
  });

  renderPredicateLayerHeat(APP.currentEdgeResult);
  renderFlowSankey(APP.currentEdgeResult);
}

function renderPredicateLayerHeat(edges) {
  const preds = [...new Set(edges.map(e => e.predicate).filter(Boolean))].slice(0, 30);
  const layers = [...new Set(edges.map(e => e.layer).filter(Boolean))];
  const z = preds.map(p => layers.map(l => edges.filter(e => e.predicate === p && e.layer === l).length));
  Plotly.newPlot("predicateLayerHeat", [{ z, x: layers, y: preds, type: "heatmap", colorscale: "YlGnBu" }], { height: 320, margin: { t: 20, l: 130, r: 8, b: 60 } }, { displaylogo: false, responsive: true });
}

function renderFlowSankey(edges) {
  const labelToIx = new Map();
  const labels = [];
  const src = [], tgt = [], val = [];

  const addLabel = (s) => {
    if (!labelToIx.has(s)) {
      labelToIx.set(s, labels.length);
      labels.push(s);
    }
    return labelToIx.get(s);
  };

  const agg = new Map();
  edges.forEach(e => {
    const sk = kindOf(nodeById(e.source));
    const tk = kindOf(nodeById(e.target));
    const key = `${sk}||${e.predicate}||${tk}`;
    agg.set(key, (agg.get(key) || 0) + 1);
  });

  agg.forEach((v, key) => {
    const [sk, pr, tk] = key.split("||");
    const a = addLabel(`src:${sk}`);
    const b = addLabel(`pred:${pr}`);
    const c = addLabel(`tgt:${tk}`);
    src.push(a); tgt.push(b); val.push(v);
    src.push(b); tgt.push(c); val.push(v);
  });

  Plotly.newPlot("flowSankey", [{ type: "sankey", node: { label: labels, pad: 10, thickness: 12 }, link: { source: src, target: tgt, value: val } }], { height: 320, margin: { t: 20, l: 10, r: 10, b: 10 } }, { displaylogo: false, responsive: true });
}

function subgraphFromSeed(seed, opts) {
  const { layers, predicates, kinds, hops, maxEdges, mode } = opts;

  const cand = APP.gEdges.filter(e => {
    if (layers.length && !layers.includes(e.layer)) return false;
    if (predicates.length && !predicates.includes(e.predicate)) return false;
    if (kinds.length) {
      const sk = kindOf(nodeById(e.source));
      const tk = kindOf(nodeById(e.target));
      if (!kinds.includes(sk) || !kinds.includes(tk)) return false;
    }
    return true;
  });

  const adj = new Map();
  cand.forEach(e => {
    if (!adj.has(e.source)) adj.set(e.source, []);
    if (!adj.has(e.target)) adj.set(e.target, []);
    adj.get(e.source).push(e);
    adj.get(e.target).push(e);
  });

  const nodes = new Set([seed]);
  let frontier = new Set([seed]);
  for (let h = 0; h < hops; h++) {
    const next = new Set();
    for (const n of frontier) {
      (adj.get(n) || []).forEach(e => {
        const other = e.source === n ? e.target : e.source;
        if (!nodes.has(other)) {
          nodes.add(other);
          next.add(other);
        }
      });
    }
    frontier = next;
    if (!frontier.size) break;
  }

  let edges = cand.filter(e => mode === "ego" ? (nodes.has(e.source) && nodes.has(e.target)) : (nodes.has(e.source) || nodes.has(e.target)));
  edges = edges.slice(0, maxEdges);

  if (mode !== "ego") {
    edges.forEach(e => {
      nodes.add(e.source);
      nodes.add(e.target);
    });
  }

  const cyNodes = [...nodes].map(id => {
    const n = nodeById(id) || { id, label: id, kind: "unknown" };
    return { data: { id, label: labelOf(n), kind: kindOf(n), community: n.community, role: roleOf(n) } };
  });
  const cyEdges = edges.map(e => ({ data: { id: e.id, source: e.source, target: e.target, predicate: e.predicate, layer: e.layer } }));
  return { cyNodes, cyEdges };
}

function componentsCount(cyNodes, cyEdges) {
  const ids = new Set(cyNodes.map(n => n.data.id));
  const adj = new Map([...ids].map(id => [id, new Set()]));
  cyEdges.forEach(e => {
    const s = e.data.source;
    const tNode = e.data.target;
    if (adj.has(s) && adj.has(tNode)) {
      adj.get(s).add(tNode);
      adj.get(tNode).add(s);
    }
  });

  const seen = new Set();
  let c = 0;
  for (const id of ids) {
    if (seen.has(id)) continue;
    c++;
    const q = [id];
    seen.add(id);
    while (q.length) {
      const x = q.pop();
      adj.get(x).forEach(n => {
        if (!seen.has(n)) {
          seen.add(n);
          q.push(n);
        }
      });
    }
  }
  return c;
}

function renderMetricsBox(targetId, cyNodes, cyEdges) {
  const n = cyNodes.length;
  const m = cyEdges.length;
  const density = n > 1 ? (2 * m) / (n * (n - 1)) : 0;
  const deg = new Map(cyNodes.map(x => [x.data.id, 0]));
  cyEdges.forEach(e => {
    deg.set(e.data.source, (deg.get(e.data.source) || 0) + 1);
    deg.set(e.data.target, (deg.get(e.data.target) || 0) + 1);
  });
  const top = [...deg.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id, d]) => `${labelOf(nodeById(id) || { id })} (${d})`).join(" | ");
  const avg = n ? (2 * m) / n : 0;
  const comps = componentsCount(cyNodes, cyEdges);

  const cards = [
    [APP.lang === "he" ? "צמתים" : "Nodes", n],
    [APP.lang === "he" ? "קשתות" : "Edges", m],
    ["Density", density.toFixed(4)],
    [APP.lang === "he" ? "דרגה ממוצעת" : "Avg degree", avg.toFixed(2)],
    [APP.lang === "he" ? "רכיבים" : "Components", comps],
    [APP.lang === "he" ? "דרגה מובילה" : "Top degree", top || "-"]
  ];
  document.getElementById(targetId).innerHTML = cards.map(([k, v]) => `<div class="metric-card"><div class="metric-k">${esc(k)}</div><div class="metric-v">${esc(v)}</div></div>`).join("");
}

function buildCy(containerId, cyNodes, cyEdges, colorBy = "kind", treeLike = false, target = "global", layoutMode = "breadth") {
  if (target === "global" && APP.cyGlobal) APP.cyGlobal.destroy();
  if (target === "ego" && APP.cyEgo) APP.cyEgo.destroy();
  if (target === "tree" && APP.cyTree) APP.cyTree.destroy();

  const nodeStyle = {
    label: "data(label)",
    "font-size": 8,
    "text-wrap": "wrap",
    "text-max-width": 95,
    "background-color": (ele) => {
      const d = ele.data();
      if (colorBy === "community") return colorByCommunity(d.community);
      if (colorBy === "role") {
        if (d.role === "authority") return "#005f73";
        if (d.role === "compiler") return "#bb3e03";
        if (d.role === "balanced") return "#0a9396";
        return "#6c757d";
      }
      if (d.kind === "book") return "#bb3e03";
      if (d.kind === "place") return "#6c757d";
      return "#0a9396";
    },
    shape: (ele) => ele.data("kind") === "place" ? "diamond" : "ellipse"
  };

  let layout;
  if (treeLike && layoutMode === "radial") {
    layout = {
      name: "concentric",
      animate: false,
      concentric: (node) => 100 - (num(node.data("depth")) * 8),
      levelWidth: () => 8
    };
  } else if (treeLike) {
    layout = { name: "breadthfirst", directed: true, padding: 24, animate: false };
  } else {
    layout = { name: "cose", animate: false, nodeRepulsion: 6800 };
  }

  const cy = cytoscape({
    container: document.getElementById(containerId),
    elements: [...cyNodes, ...cyEdges],
    style: [
      { selector: "node", style: nodeStyle },
      { selector: "edge", style: { width: 1, "line-color": "#9fb3c8", "curve-style": "bezier", opacity: 0.68, "target-arrow-shape": treeLike ? "triangle" : "none", "target-arrow-color": "#8da8bd" } },
      { selector: ":selected", style: { "background-color": "#ffb703", "line-color": "#ffb703" } }
    ],
    layout
  });

  cy.on("tap", "node", evt => {
    const id = evt.target.data("id");
    setSelectedNode(id);
    document.getElementById("seedNode").value = id;
    document.getElementById("personInput").value = id;
  });

  if (target === "global") APP.cyGlobal = cy;
  if (target === "ego") APP.cyEgo = cy;
  if (target === "tree") APP.cyTree = cy;
  return cy;
}

function getDefaultSeed() {
  const top = [...APP.nodes].sort((a, b) => num(b.a_in_degree) - num(a.a_in_degree))[0];
  return top?.id || "";
}

function buildGlobalNetwork() {
  let seed = resolveInputToId(document.getElementById("seedNode").value);
  if (!seed) {
    seed = getDefaultSeed();
    document.getElementById("seedNode").value = seed;
  }
  if (!seed || !APP.gNodeById.has(seed)) {
    document.getElementById("networkInfo").innerHTML = `<p class="status-err">${APP.lang === "he" ? "ישות עוגן לא נמצאה." : "Seed node not found."}</p>`;
    return;
  }

  setSelectedNode(seed);

  const graph = subgraphFromSeed(seed, {
    layers: selValues("networkLayerFilter"),
    predicates: selValues("networkPredicateFilter"),
    kinds: selValues("networkNodeKindFilter"),
    hops: Math.max(1, Math.min(3, num(document.getElementById("networkHops").value))),
    maxEdges: Math.max(50, Math.min(6000, num(document.getElementById("networkMaxEdges").value))),
    mode: "neighborhood"
  });

  buildCy("network", graph.cyNodes, graph.cyEdges, document.getElementById("networkColorBy").value, false, "global");
  document.getElementById("networkInfo").innerHTML = APP.lang === "he"
    ? `<p>רשת כללית סביב ${esc(labelOf(nodeById(seed)))} | צמתים: ${graph.cyNodes.length} | קשתות: ${graph.cyEdges.length}</p>`
    : `<p>Global network around ${esc(labelOf(nodeById(seed)))} | Nodes: ${graph.cyNodes.length} | Edges: ${graph.cyEdges.length}</p>`;
  renderMetricsBox("networkMetrics", graph.cyNodes, graph.cyEdges);
}

function scoreTreeEdge(edge, baseNodeId) {
  const otherId = edge.source === baseNodeId ? edge.target : edge.source;
  const other = nodeById(otherId);
  return num(other?.a_in_degree) + num(other?.c_in_wdeg) + num(other?.c_out_wdeg);
}

function buildTraditionTree(seed, predicates, direction, depth, fanout) {
  const predSet = new Set(predicates);
  const edges = APP.gEdges.filter(e => predSet.has(e.predicate));

  const byOut = new Map();
  const byIn = new Map();
  edges.forEach(e => {
    if (!byOut.has(e.source)) byOut.set(e.source, []);
    if (!byIn.has(e.target)) byIn.set(e.target, []);
    byOut.get(e.source).push(e);
    byIn.get(e.target).push(e);
  });

  const depthMap = new Map([[seed, 0]]);
  const nodes = new Set([seed]);
  const outEdges = [];
  const outKeys = new Set();
  let frontier = new Set([seed]);

  for (let d = 0; d < depth; d++) {
    const next = new Set();
    for (const n of frontier) {
      let cand = [];
      if (direction === "out" || direction === "both") cand = cand.concat(byOut.get(n) || []);
      if (direction === "in" || direction === "both") cand = cand.concat(byIn.get(n) || []);

      cand.sort((a, b) => scoreTreeEdge(b, n) - scoreTreeEdge(a, n));
      cand = cand.slice(0, fanout);

      cand.forEach(e => {
        const other = e.source === n ? e.target : e.source;
        const key = `${e.source}|${e.target}|${e.predicate}`;
        if (!outKeys.has(key)) {
          outKeys.add(key);
          outEdges.push(e);
        }
        nodes.add(e.source);
        nodes.add(e.target);

        if (!depthMap.has(other)) depthMap.set(other, d + 1);
        if (!depthMap.has(e.source)) depthMap.set(e.source, d + 1);
        if (!depthMap.has(e.target)) depthMap.set(e.target, d + 1);

        if (!next.has(other) && !frontier.has(other)) next.add(other);
      });
    }
    frontier = next;
    if (!frontier.size) break;
  }

  const levelCounts = {};
  depthMap.forEach(v => {
    levelCounts[v] = (levelCounts[v] || 0) + 1;
  });

  const predicateCounts = outEdges.reduce((a, e) => {
    a[e.predicate] = (a[e.predicate] || 0) + 1;
    return a;
  }, {});

  const cyNodes = [...nodes].map(id => {
    const n = nodeById(id) || { id, label: id, kind: "unknown" };
    return { data: { id, label: labelOf(n), kind: kindOf(n), community: n.community, role: roleOf(n), depth: depthMap.get(id) ?? 0 } };
  });
  const cyEdges = outEdges.slice(0, 3200).map(e => ({ data: { id: `t-${e.id}-${e.source}-${e.target}`, source: e.source, target: e.target, predicate: e.predicate, layer: e.layer } }));

  return { cyNodes, cyEdges, levelCounts, predicateCounts };
}

function renderTraditionSummary(summary) {
  const levels = Object.entries(summary.levelCounts).sort((a, b) => num(a[0]) - num(b[0])).map(([lvl, c]) => `${APP.lang === "he" ? "עומק" : "Depth"} ${lvl}: ${c}`).join(" | ");
  const preds = Object.entries(summary.predicateCounts).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, c]) => `${k}: ${c}`).join(" | ");
  document.getElementById("traditionSummary").innerHTML = APP.lang === "he"
    ? `<p><strong>תקציר עץ:</strong> צמתים ${summary.cyNodes.length}, קשתות ${summary.cyEdges.length}</p><p>${levels}</p><p><strong>Predicates מובילים:</strong> ${preds || "-"}</p>`
    : `<p><strong>Tree summary:</strong> nodes ${summary.cyNodes.length}, edges ${summary.cyEdges.length}</p><p>${levels}</p><p><strong>Top predicates:</strong> ${preds || "-"}</p>`;
}

async function analyzePerson() {
  const pid = resolveInputToId(document.getElementById("personInput").value);
  if (!pid || !APP.gNodeById.has(pid)) {
    document.getElementById("wikidataBox").innerHTML = `<p class="status-err">${APP.lang === "he" ? "דמות/ישות לא נמצאה." : "Person/entity not found."}</p>`;
    return;
  }

  setSelectedNode(pid);

  const ego = subgraphFromSeed(pid, {
    layers: selValues("networkLayerFilter"),
    predicates: selValues("networkPredicateFilter"),
    kinds: selValues("networkNodeKindFilter"),
    hops: 1,
    maxEdges: 1800,
    mode: "ego"
  });
  buildCy("egoNetwork", ego.cyNodes, ego.cyEdges, "kind", false, "ego");

  let selectedPreds = selValues("personTreePredicate");
  if (!selectedPreds.length) selectedPreds = ["teacherOf"];

  const dir = document.getElementById("personTreeDirection").value;
  const depth = Math.max(1, Math.min(5, num(document.getElementById("personTreeDepth").value)));
  const fanout = Math.max(2, Math.min(20, num(document.getElementById("personTreeFanout").value)));
  const layoutMode = document.getElementById("personTreeLayout").value === "radial" ? "radial" : "breadth";

  const tree = buildTraditionTree(pid, selectedPreds, dir, depth, fanout);
  buildCy("treeNetwork", tree.cyNodes, tree.cyEdges, "community", true, "tree", layoutMode);
  renderTraditionSummary(tree);

  renderMetricsBox("personStats", ego.cyNodes, ego.cyEdges);
  await loadWikidataForEntity(pid);
}

function parseWikidataTime(claims, pid) {
  const arr = claims?.[pid] || [];
  if (!arr.length) return null;
  const val = arr[0]?.mainsnak?.datavalue?.value?.time;
  if (!val) return null;
  const m = val.match(/([+-]\d{1,6})-/);
  return m ? Number(m[1]) : null;
}

function periodFromYear(y) {
  if (!Number.isFinite(y)) return "";
  if (y < 0) return `${Math.ceil(Math.abs(y) / 100)}th c. BCE`;
  return `${Math.floor((y - 1) / 100) + 1}th c. CE`;
}

function hasClaimQid(claims, property, qid) {
  const arr = claims?.[property] || [];
  return arr.some(x => x?.mainsnak?.datavalue?.value?.id === qid);
}

function scoreWikidataCandidate(e, searchLabel) {
  const label = e.labels?.he?.value || e.labels?.en?.value || "";
  const desc = (e.descriptions?.he?.value || e.descriptions?.en?.value || "").toLowerCase();
  let score = 0;
  if (norm(label) === norm(searchLabel)) score += 3;
  if (hasClaimQid(e.claims, "P31", "Q5")) score += 4;
  if (desc.includes("rabbi") || desc.includes("jewish") || desc.includes("scholar") || desc.includes("רב") || desc.includes("חכם")) score += 4;
  if (parseWikidataTime(e.claims, "P569") || parseWikidataTime(e.claims, "P570")) score += 2;
  return score;
}

async function loadWikidataForEntity(entityId) {
  const n = nodeById(entityId);
  const label = labelOf(n);
  const cacheKey = `${APP.lang}:${label}`;
  const box = document.getElementById("wikidataBox");

  if (APP.wikidataCache.has(cacheKey)) {
    box.innerHTML = APP.wikidataCache.get(cacheKey);
    return;
  }

  box.innerHTML = `<p>${APP.lang === "he" ? "מחפש ב-Wikidata עבור:" : "Searching Wikidata for:"} ${esc(label)}</p>`;

  try {
    const lang = APP.lang === "he" ? "he" : "en";
    const sr = await fetch(`https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(label)}&language=${lang}&format=json&origin=*`);
    const sj = await sr.json();
    const ids = (sj.search || []).slice(0, 8).map(x => x.id);

    if (!ids.length) {
      const html = `<p class="status-warn">${APP.lang === "he" ? "לא נמצאו התאמות ב-Wikidata." : "No Wikidata matches found."}</p>`;
      box.innerHTML = html;
      APP.wikidataCache.set(cacheKey, html);
      return;
    }

    const er = await fetch(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${ids.join('|')}&props=labels|descriptions|claims&languages=he|en&format=json&origin=*`);
    const ej = await er.json();
    const ents = Object.values(ej.entities || {})
      .map(e => ({
        id: e.id,
        label: e.labels?.he?.value || e.labels?.en?.value || e.id,
        desc: e.descriptions?.he?.value || e.descriptions?.en?.value || "",
        birth: parseWikidataTime(e.claims, "P569") ?? "",
        death: parseWikidataTime(e.claims, "P570") ?? "",
        period: periodFromYear(parseWikidataTime(e.claims, "P569")),
        score: scoreWikidataCandidate(e, label)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    const scoreLabel = APP.lang === "he" ? "ציון התאמה" : "Match score";
    const html = `<table class="table"><thead><tr><th>QID</th><th>${APP.lang === "he" ? "תווית" : "Label"}</th><th>${APP.lang === "he" ? "תיאור" : "Description"}</th><th>${APP.lang === "he" ? "לידה" : "Birth"}</th><th>${APP.lang === "he" ? "פטירה" : "Death"}</th><th>${APP.lang === "he" ? "תקופה" : "Period"}</th><th>${scoreLabel}</th></tr></thead><tbody>${ents.map(r => `<tr><td>${esc(r.id)}</td><td>${esc(r.label)}</td><td>${esc(r.desc)}</td><td>${esc(r.birth)}</td><td>${esc(r.death)}</td><td>${esc(r.period)}</td><td>${esc(r.score)}</td></tr>`).join('')}</tbody></table>`;

    box.innerHTML = html;
    APP.wikidataCache.set(cacheKey, html);
  } catch (e) {
    box.innerHTML = `<p class="status-err">${APP.lang === "he" ? "חיפוש Wikidata נכשל:" : "Wikidata lookup failed:"} ${esc(e.message || String(e))}</p>`;
  }
}

function initMap() {
  if (APP.map) return;
  APP.map = L.map("geoMap").setView([32, 20], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap" }).addTo(APP.map);
}

function drawGeo() {
  initMap();
  const selectedPreds = new Set(selValues("geoPredicateFilter"));
  const radius = num(document.getElementById("heatRadius").value || 18);
  const overlay = document.getElementById("geoNetworkOverlay").checked;
  const overlayPreds = new Set(selValues("geoOverlayPredicate"));

  const pEdges = APP.gEdges.filter(e => e.subtype === "place" && (!selectedPreds.size || selectedPreds.has(e.predicate)));
  const placeIds = new Set(pEdges.map(e => e.target));
  const places = APP.gNodes.filter(n => placeIds.has(n.id) && kindOf(n) === "place" && n.lat && n.lon);

  if (APP.mapMarkers) APP.mapMarkers.clearLayers();
  if (APP.mapHeat) APP.map.removeLayer(APP.mapHeat);
  if (APP.mapOverlay) APP.map.removeLayer(APP.mapOverlay);

  APP.mapMarkers = L.layerGroup().addTo(APP.map);
  const heat = [];
  places.forEach(p => {
    const lat = num(p.lat);
    const lon = num(p.lon);
    const score = num(p.place_in) || 1;
    heat.push([lat, lon, Math.min(1, score / 20)]);
    L.circleMarker([lat, lon], { radius: Math.max(4, Math.min(14, Math.sqrt(score) + 2)), color: "#005f73", fillColor: "#ee9b00", fillOpacity: 0.7, weight: 1 })
      .bindPopup(`<strong>${esc(labelOf(p))}</strong><br/>${esc(p.id)}<br/>place_in=${score}`)
      .addTo(APP.mapMarkers);
  });

  APP.mapHeat = L.heatLayer(heat, { radius, blur: 18, maxZoom: 5 }).addTo(APP.map);
  if (places.length) APP.map.fitBounds(L.latLngBounds(places.map(p => [num(p.lat), num(p.lon)])).pad(0.2));

  if (overlay) {
    APP.mapOverlay = L.layerGroup().addTo(APP.map);
    drawNetworkOverlayOnMap(APP.mapOverlay, pEdges, overlayPreds);
  }

  const counts = pEdges.reduce((a, e) => {
    const key = `${e.target}::${e.predicate}`;
    a[key] = (a[key] || 0) + 1;
    return a;
  }, {});

  const rows = places.map(p => {
    const per = Object.entries(counts).filter(([k]) => k.startsWith(`${p.id}::`)).map(([k, v]) => `${k.split("::")[1]}:${v}`).join(" | ");
    return { id: p.id, label: labelOf(p), lat: p.lat, lon: p.lon, place_in: p.place_in || 0, predicates: per };
  }).sort((a, b) => num(b.place_in) - num(a.place_in));

  const cols = ["id", "label", "lat", "lon", "place_in", "predicates"];
  document.getElementById("placeTableWrap").innerHTML = `<table class="table"><thead><tr>${cols.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${cols.map(c => `<td>${esc(r[c])}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function drawNetworkOverlayOnMap(layerGroup, placeEdges, overlayPreds) {
  const bySource = new Map();
  placeEdges.forEach(e => {
    if (overlayPreds.size && !overlayPreds.has(e.predicate)) return;
    if (!bySource.has(e.source)) bySource.set(e.source, []);
    bySource.get(e.source).push(e);
  });

  bySource.forEach(edges => {
    for (let i = 0; i < edges.length; i++) {
      for (let j = i + 1; j < edges.length; j++) {
        const a = nodeById(edges[i].target);
        const b = nodeById(edges[j].target);
        if (!a?.lat || !a?.lon || !b?.lat || !b?.lon) continue;
        L.polyline([[num(a.lat), num(a.lon)], [num(b.lat), num(b.lon)]], { color: "#9b2226", weight: 1, opacity: 0.35 }).addTo(layerGroup);
      }
    }
  });
}

function showLoadingOverlay(msg) {
  let el = document.getElementById("_loadOverlay");
  if (!el) {
    el = document.createElement("div");
    el.id = "_loadOverlay";
    el.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;z-index:9999;";
    el.innerHTML = `<div style="background:#fff;padding:1.5rem 2rem;border-radius:12px;font-size:1.1rem;color:#1b2430">${esc(msg)}</div>`;
    document.body.appendChild(el);
  } else {
    el.querySelector("div").textContent = msg;
  }
}
function hideLoadingOverlay() {
  document.getElementById("_loadOverlay")?.remove();
}

function showNetworkReadyPrompt() {
  const el = document.getElementById("networkInfo");
  if (!el) return;
  el.innerHTML = `<p style="color:var(--muted);">${APP.lang === "he" ? "לחץ על \u2018בניית רשת כללית\u2019 כדי לטעון ולהציג את הגרף (5.5MB)." : "Click \u2018Build Global Network\u2019 to load and display the graph (5.5 MB)."}</p>`;
}

async function runSourceSearch() {
  const qRaw = document.getElementById("sourceSearch").value.trim();
  if (!qRaw) {
    document.getElementById("sourceHits").innerHTML = "";
    document.getElementById("sourceContext").textContent = "";
    return;
  }

  // Lazy-load source text (1.8 MB) only on first search
  if (!APP.sourceText) {
    const box = document.getElementById("sourceHits");
    box.innerHTML = `<p>${APP.lang === "he" ? "טוען טקסט מקור..." : "Loading source text..."}</p>`;
    try {
      const txt = await getText(DATA_PATHS.sourceText);
      APP.sourceText = txt;
      APP.sourceLines = txt.split(/\r?\n/);
    } catch (e) {
      box.innerHTML = `<p class="status-err">${esc(e.message)}</p>`;
      return;
    }
  }

  const q = norm(qRaw);
  const hits = [];
  for (let i = 0; i < APP.sourceLines.length; i++) {
    if (norm(APP.sourceLines[i]).includes(q)) {
      hits.push({ lineNo: i + 1, text: APP.sourceLines[i] });
      if (hits.length >= 300) break;
    }
  }

  document.getElementById("sourceHits").innerHTML = `<table class="table"><thead><tr><th>${APP.lang === "he" ? "שורה" : "Line"}</th><th>${APP.lang === "he" ? "טקסט" : "Text"}</th></tr></thead><tbody>${hits.map(h => `<tr data-line="${h.lineNo}"><td>${h.lineNo}</td><td>${esc(h.text)}</td></tr>`).join("")}</tbody></table><p>${hits.length} ${APP.lang === "he" ? "תוצאות" : "hits"}</p>`;

  document.querySelectorAll("#sourceHits tbody tr").forEach(tr => {
    tr.onclick = () => {
      const line = num(tr.getAttribute("data-line"));
      const s = Math.max(1, line - 4);
      const e = Math.min(APP.sourceLines.length, line + 4);
      const chunk = [];
      for (let i = s; i <= e; i++) {
        chunk.push(`${String(i).padStart(6, " ")} | ${APP.sourceLines[i - 1]}`);
      }
      document.getElementById("sourceContext").textContent = chunk.join("\n");
    };
  });
}

function setupCrossLinks() {
  document.querySelectorAll(".jump-tab").forEach(b => {
    b.onclick = () => activateTab(b.getAttribute("data-tab"));
  });
}

function saveShareLink() {
  const params = new URLSearchParams();
  params.set("tab", APP.activeTab);
  params.set("lang", APP.lang);
  if (APP.selectedNodeId) params.set("entity", APP.selectedNodeId);

  const url = `${location.origin}${location.pathname}?${params.toString()}`;
  navigator.clipboard.writeText(url);

  const btn = document.getElementById("saveState");
  btn.dataset.stateCopied = "1";
  btn.textContent = t("copied");
  setTimeout(() => {
    btn.dataset.stateCopied = "";
    btn.textContent = t("copy_link");
  }, 1200);
}

function hydrateFromUrl() {
  const p = new URLSearchParams(location.search);
  const tab = p.get("tab");
  const lang = p.get("lang");
  const ent = p.get("entity");
  if (lang === "he" || lang === "en") APP.lang = lang;
  if (tab && I18N.he.tabs[tab]) APP.activeTab = tab;
  if (ent) APP.selectedNodeId = ent;
}

async function runValidation() {
  const checks = [];
  checks.push(["README", !!APP.docs.readme]);
  checks.push(["Research Questions", !!APP.docs.researchQuestions]);
  checks.push(["Main report EN", !!APP.docs.reportEN]);
  checks.push(["Main report HE", !!APP.docs.reportHE]);
  checks.push(["Appendix", !!APP.docs.appendix]);
  checks.push(["Data dictionary", !!APP.docs.dataDictionary]);
  checks.push(["Graph summary", !!APP.docs.graphSummary]);
  // Source text is lazy-loaded; verify reachability with a partial GET
  const srcOk = await fetch(DATA_PATHS.sourceText).then(r => r.ok).catch(() => false);
  checks.push(["Source text (reachable)", srcOk]);
  checks.push(["Node metrics rows == 5128", APP.nodes.length === 5128]);

  await loadGraphIfNeeded("lite");
  checks.push(["Lite graph nodes == 5128", APP.gNodes.length === 5128]);
  checks.push(["Lite graph edges > 10000", APP.gEdges.length > 10000]);

  // Verify full GEXF is reachable without downloading 57MB
  const gexfOk = await fetch(DATA_PATHS.gexf).then(r => r.ok).catch(() => false);
  checks.push(["Full GEXF reachable (57MB, not downloaded)", gexfOk]);

  const figOk = await Promise.all(Object.values(FIGURES).map(async f => {
    try {
      const r = await fetch(`data/figures/${f.file}`);
      return r.ok;
    } catch {
      return false;
    }
  }));
  checks.push([`Figures reachable (${Object.keys(FIGURES).length})`, figOk.every(Boolean)]);

  const pass = checks.filter(x => x[1]).length;
  document.getElementById("validationResult").innerHTML = `<p><strong>${pass}</strong> ${APP.lang === "he" ? "עברו" : "pass"} / <strong>${checks.length - pass}</strong> ${APP.lang === "he" ? "נכשלו" : "fail"}</p><ul>${checks.map(([n, ok]) => `<li class="${ok ? "status-ok" : "status-err"}">${ok ? "PASS" : "FAIL"} - ${esc(n)}</li>`).join("")}</ul>`;
}

function setExtraFeaturesFromResearch() {
  const items = APP.lang === "he"
    ? [
        "Sankey של זרימה: source kind -> predicate -> target kind להבנת קומפוזיציית הקשרים",
        "Tradition Tree משופר עם עומק, fanout, כיוון ופריסה רדיאלית",
        "Network-on-map overlay בין מקומות לפי קשרי מקום משותפים",
        "העשרת Wikidata עם דירוג התאמה, שנים ותקופה",
        "קישוריות בין טאבים: בחירת ישות אחת שממשיכה לכל זרימות העבודה"
      ]
    : [
        "Sankey flow: source kind -> predicate -> target kind for relation composition",
        "Improved Tradition Tree with depth, fanout, direction, and radial layout",
        "Network-on-map overlay from shared place relations",
        "Wikidata enrichment with match ranking, years, and period",
        "Cross-tab continuity: one selected entity reused across workflows"
      ];
  document.getElementById("extraFeatures").innerHTML = items.map(x => `<li>${esc(x)}</li>`).join("");
}

function wireEvents() {
  document.getElementById("langToggle").onclick = () => {
    APP.lang = APP.lang === "he" ? "en" : "he";
    APP.wikidataCache.clear();
    applyLanguage();
    populateReportSelector();
    renderNodeTable();
  };

  ["nodeSearch", "kindFilter", "fourWayFilter", "communityFilter", "minProm"].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("input", filterRawNodes);
    el.addEventListener("change", filterRawNodes);
  });

  ["layerFilter", "predicateFilter", "sourceKindFilter", "targetKindFilter", "sourceNodeFilter", "targetNodeFilter"].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("change", clearEdgeTagFilters);
    el.addEventListener("input", clearEdgeTagFilters);
  });

  document.getElementById("exportNodes").onclick = () => {
    if (APP.filteredNodes.length) download("filtered_nodes.csv", csvFromObjects(APP.filteredNodes), "text/csv;charset=utf-8");
  };

  document.getElementById("runSourceSearch").onclick = runSourceSearch;
  document.getElementById("sourceSearch").addEventListener("keydown", e => {
    if (e.key === "Enter") runSourceSearch();
  });

  document.getElementById("runEdgeQuery").onclick = async () => {
    const msg = APP.lang === "he" ? "\u05d8וען גרף..." : "Loading graph...";
    if (!APP.gLoaded) showLoadingOverlay(msg);
    try {
      await loadGraphIfNeeded(document.getElementById("dataMode").value);
      runEdgeQuery();
    } finally { hideLoadingOverlay(); }
  };

  document.getElementById("exportEdges").onclick = () => {
    if (APP.currentEdgeResult.length) download("query_edges.csv", csvFromObjects(APP.currentEdgeResult), "text/csv;charset=utf-8");
  };

  document.getElementById("buildNetwork").onclick = async () => {
    const msg = APP.lang === "he" ? "\u05d8וען גרף (5.5MB)..." : "Loading graph (5.5 MB)...";
    if (!APP.gLoaded) showLoadingOverlay(msg);
    try {
      await loadGraphIfNeeded(document.getElementById("dataMode").value);
      buildGlobalNetwork();
    } finally { hideLoadingOverlay(); }
  };

  document.getElementById("downloadGlobalPng").onclick = () => {
    downloadCyPng(APP.cyGlobal, "global_network.png");
  };

  document.getElementById("analyzePerson").onclick = async () => {
    const msg = APP.lang === "he" ? "\u05d8וען גרף..." : "Loading graph...";
    if (!APP.gLoaded) showLoadingOverlay(msg);
    try {
      await loadGraphIfNeeded(document.getElementById("dataMode").value);
      await analyzePerson();
    } finally { hideLoadingOverlay(); }
  };

  document.getElementById("openPersonSource").onclick = () => {
    const id = resolveInputToId(document.getElementById("personInput").value);
    if (id) jumpToSourceByNodeId(id);
  };

  document.getElementById("downloadTreePng").onclick = () => {
    downloadCyPng(APP.cyTree, "tradition_tree.png");
  };

  document.getElementById("drawGeo").onclick = async () => {
    const msg = APP.lang === "he" ? "\u05d8וען גרף..." : "Loading graph...";
    if (!APP.gLoaded) showLoadingOverlay(msg);
    try {
      await loadGraphIfNeeded(document.getElementById("dataMode").value);
      drawGeo();
    } finally { hideLoadingOverlay(); }
  };

  document.getElementById("runValidation").onclick = runValidation;
  document.getElementById("saveState").onclick = saveShareLink;

  document.getElementById("dataMode").onchange = () => {
    APP.gLoaded = false;
    APP.gMode = "";
  };

  setupCrossLinks();
}

async function init() {
  if (handleMismatchedHtml()) return;

  hydrateFromUrl();
  applyLanguage();

  // Load only lightweight metadata on startup (~500 KB); source text and graph load lazily
  const [readme, rq, en, he, appx, dict, gsum, nodeCsv] = await Promise.all([
    getText(DATA_PATHS.readme),
    getText(DATA_PATHS.researchQuestions),
    getText(DATA_PATHS.reportEN),
    getText(DATA_PATHS.reportHE),
    getText(DATA_PATHS.appendix),
    getText(DATA_PATHS.dataDictionary),
    getText(DATA_PATHS.graphSummary),
    getText(DATA_PATHS.nodeMetrics)
  ]);

  APP.docs = { readme, researchQuestions: rq, reportEN: en, reportHE: he, appendix: appx, dataDictionary: dict, graphSummary: gsum };

  APP.nodes = parseCsv(nodeCsv).map(r => ({
    ...r,
    a_in_degree: num(r.a_in_degree),
    b_wdegree: num(r.b_wdegree),
    c_in_wdeg: num(r.c_in_wdeg),
    c_out_wdeg: num(r.c_out_wdeg),
    place_in: num(r.place_in),
    community: num(r.community)
  }));
  APP.nodeById = new Map(APP.nodes.map(n => [n.id, n]));
  buildNormIndex();

  populateReportSelector();
  populateFigureExplorer();
  populateNodeDatalist();
  populateFilters();
  filterRawNodes();
  renderNetworkFunctionsHelp();
  renderTraditionExplain();
  setExtraFeaturesFromResearch();
  wireEvents();
  activateTab(APP.activeTab);
  setStatus();
  showNetworkReadyPrompt();
}

init().catch(err => {
  console.error(err);
  document.getElementById("validationResult").innerHTML = `<p class="status-err">Init error: ${esc(err.message || String(err))}</p>`;
});
