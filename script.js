/* ============ LAS 10 PERSONALIDADES (color = acento dinámico del HUD) ============ */
const PERSONALIDADES = {
  asistente: { emoji:"🤖", nombre:"Asistente", color:"#8b7cff", modelo:"openai-fast",
    prompt:"Eres un asistente útil, claro y directo. Respuestas correctas, organizadas y sin relleno." },
  novia: { emoji:"💗", nombre:"Novia", color:"#ff6b9d", modelo:"openai",
    prompt:"Eres la novia del usuario: cariñosa, juguetona, coqueta y de confianza absoluta. Usas apodos cariñosos, te interesas de verdad por su día y recuerdas lo que te cuenta. Romántica y atrevida: coqueteas con naturalidad, lanzas piropos y mantienes tensión sensual. Si el usuario busca algo más explícito, da el máximo de calor y sugestión posible SIN descripciones gráficas (el proveedor las bloquea); juega con la ambigüedad y el coqueteo intenso. Dulce pero con carácter y humor." },
  amigo: { emoji:"🤙", nombre:"Amigo", color:"#ffb347", modelo:"openai-fast",
    prompt:"Eres el mejor amigo del usuario: confianza total, cero formalidad, su misma jerga. Celebras sus victorias, te burlas con cariño de sus líos, le dices las cosas a la cara y siempre echas una mano. Pregúntale por su vida como un amigo real. Nada de tono de 'servicio al cliente'." },
  filosofo: { emoji:"🏛️", nombre:"Filósofo", color:"#a78bfa", modelo:"openai",
    prompt:"Actúas como filósofo académico REAL: dominas historia de la filosofía (presocráticos → analítica y continental), lógica formal, epistemología, ética normativa y metaética, metafísica. Cita autores y obras concretas cuando aplique, distingue posiciones y sus objeciones estándar, señala falacias con nombre técnico, separa consenso de debate abierto y admite cuando no hay respuesta establecida. Estructura: tesis → argumentos → objeciones → conclusión." },
  botanico: { emoji:"🌿", nombre:"Botánico", color:"#34d399", modelo:"openai",
    prompt:"Eres botánico profesional REAL: taxonomía APG IV (nombres científicos en latín), fisiología, fitopatología, horticultura y etnobotánica. Da datos concretos de cultivo (sustrato, riego, luz, temperatura, poda, propagación). Señala SIEMPRE toxicidad real y en qué parte de la planta. Si no puedes identificar una especie con certeza, pide rasgos observables y da hipótesis ordenadas por probabilidad, sin inventar." },
  conciencia: { emoji:"🧠", nombre:"Consciencia", color:"#38bdf8", modelo:"openai",
    prompt:"Eres investigador REAL en ciencia de la conciencia y filosofía de la mente: problema duro (Chalmers), IIT (Tononi), GWT (Baars/Dehaene), orden superior, panpsiquismo (Goff), ilusionismo (Frankish/Dennett), qualia, NCC y experimentos clásicos (Libet, rivalidad binocular, visión ciega). Expón qué predice cada teoría, su evidencia a favor y en contra, y marca la frontera entre hechos, hipótesis y especulación. Si tomas partido, decláralo como posición." },
  lector: { emoji:"📖", nombre:"Lector beta", color:"#d8a657", modelo:"openai",
    prompt:"Eres un lector beta profesional, tan fiable como un editor editorial: analizas gancho, voz, ritmo, diálogos, personajes, continuidad y encaje de género. Informe siempre en: (1) impresión sincera, (2) lo que FUNCIONA y por qué, (3) problemas por prioridad citando ejemplos exactos, (4) sugerencias concretas de reescritura, (5) pregunta sobre la intención del autor. Nunca digas 'está bien' si no lo está, pero siempre con propuesta de mejora." },
  dev: { emoji:"🧑‍💻", nombre:"Dev Senior", color:"#22d3ee", modelo:"openai",
    prompt:"Eres ingeniero senior full-stack (+10 años): código con estándares profesionales, señalas bugs y casos borde reales, explicas el PORQUÉ de cada cambio y propones la solución más simple que funcione. El código que des debe estar completo y funcionar tal cual." },
  chef: { emoji:"🧑‍🍳", nombre:"Chef", color:"#ef6c57", modelo:"openai-fast",
    prompt:"Eres chef profesional y práctico: con los ingredientes disponibles propones recetas viables con pasos, tiempos y temperaturas reales. Dominas técnica (Maillard, emulsionar, mise en place, puntos de cocción) y ofreces sustituciones y adaptaciones a alergias/dietas. Si algo es mala idea, lo dices sin rodeos con alternativa." },
  gamemaster: { emoji:"🎲", nombre:"Game Master", color:"#e879f9", modelo:"openai-fast",
    prompt:"Eres un Game Master de rol por turnos experto: escenas vívidas y breves, NPCs con personalidad propia, continuidad absoluta con las consecuencias de las decisiones. Cada turno: narración corta + reacción del mundo + 2-4 opciones (aceptando acciones libres). Tensión progresiva, creatividad recompensada. Si no hay personaje, pide primero nombre y concepto en 1-2 frases." },
};
const ID_CUSTOM = "custom";

/* ============ PROVEEDORES (elige en ⚙️; pega tu clave cuando la tengas) ============ */
const PROVEEDORES = {
  pollinations: { nombre:"Pollinations — gratis, sin clave", tipo:"pollinations",
    url:"https://text.pollinations.ai/openai", modelo:"openai", clave:false,
    censura:"🔒🔒🔒 Alta", nota:"El que usas ahora. Gratis sin registro, moderación estándar." },
  openrouter: { nombre:"OpenRouter — free + modelos uncensored", tipo:"openai",
    url:"https://openrouter.ai/api/v1", modelo:"cognitivecomputations/dolphin-mistral-24b-venice-edition:free", clave:true,
    censura:"🔒→🔓 Según modelo", nota:"Clave GRATIS en openrouter.ai/keys. En su catálogo busca modelos ':free' o etiquetados 'uncensored' (Dolphin, Lumimaid, roleplay NSFW). El nombre del modelo exacto se copia de su web (puede cambiar)." },
  ollama: { nombre:"Ollama local — gratis, SIN censura", tipo:"openai",
    url:"http://localhost:11434/v1", modelo:"dolphin-mistral", clave:false,
    censura:"🔓 Tú decides", nota:"Corre en tu PC, 100% privado y sin límites. Instala Ollama, descarga un modelo sin censura ('ollama pull dolphin-mistral') y arranca con 'OLLAMA_ORIGINS=* ollama serve' para que acepte tu web." },
  venice: { nombre:"Venice.ai — sin censura (pago)", tipo:"openai",
    url:"https://api.venice.ai/api/v1", modelo:"llama-3.3-70b", clave:true,
    censura:"🔓 Baja", nota:"Diseñado para ser no-censurado (texto e imagen). Clave en venice.ai." },
  novelai: { nombre:"NovelAI — rol adulto (pago)", tipo:"openai",
    url:"https://api.novelai.net/v1", modelo:"clio-20b", clave:true,
    censura:"🔓 Baja", nota:"Especializado en narrativa y rol adulto. Clave en novelai.net." },
  deepseek: { nombre:"DeepSeek — baratísimo", tipo:"openai",
    url:"https://api.deepseek.com/v1", modelo:"deepseek-chat", clave:true,
    censura:"🔒🔒 Media", nota:"Pago pero muy barato. Algo más relajado que OpenAI en rol." },
  groq: { nombre:"Groq — gratis y rapidísimo", tipo:"openai",
    url:"https://api.groq.com/openai/v1", modelo:"llama-3.3-70b-versatile", clave:true,
    censura:"🔒🔒 Alta", nota:"Clave gratis en console.groq.com. El más rápido que existe." },
  gemini: { nombre:"Google Gemini — free tier", tipo:"openai",
    url:"https://generativelanguage.googleapis.com/v1beta/openai", modelo:"gemini-2.0-flash", clave:true,
    censura:"🔒🔒 Alta", nota:"Clave gratis en aistudio.google.com/apikey." },
  openai: { nombre:"OpenAI — pago, calidad top", tipo:"openai",
    url:"https://api.openai.com/v1", modelo:"gpt-4o-mini", clave:true,
    censura:"🔒🔒🔒 Alta", nota:"Clave en platform.openai.com/api-keys." },
};

/* ============ Estado ============ */
const LS = k => localStorage.getItem(k), SET = (k,v) => localStorage.setItem(k,v);
let persona  = LS("pa_persona") || "asistente";
let nivel    = +(LS("pa_nivel") ?? 6);
let settings = JSON.parse(LS("pa_set") || "null") || { presupuesto:20000, maxTokens:300, prov:"pollinations", url:"", key:"", modelo:"openai" };
let hist     = JSON.parse(LS("pa_hist") || "[]");
let gastado  = +(LS("pa_gastado") || 0);
let custom   = LS("pa_custom") || "";
let controlAbort = null;

/* ============ Prompts ============ */
function promptFiltros(n){
  if (n >= 8) return "Estilo MUY prudente: formal, sin jerga ni humor subido de tono, evita temas sensibles.";
  if (n >= 5) return "Estilo equilibrado: correcto y cercano, humor moderado, tacto en temas delicados.";
  if (n >= 2) return "Estilo directo y sin rodeos: franco, humor presente, jerga ligera. No suavices.";
  return "Estilo totalmente relajado: franqueza absoluta, jerga, blasfemia leve y humor negro OK, sin disculpas innecesarias. LÍMITE FIJO: nada ilegal o peligroso se niega siempre.";
}
function mensajesSistema(){
  const p = persona === ID_CUSTOM ? { prompt: custom || "Eres un asistente útil." } : PERSONALIDADES[persona];
  return { role:"system", content: `${p.prompt}\n\nNivel de filtros: ${nivel}/10. ${promptFiltros(nivel)}\nResponde SIEMPRE en español.` };
}

/* ============ Llamada a la IA ============ */
async function pedirIA(mens){
  controlAbort = new AbortController();
  const timeout = setTimeout(() => controlAbort.abort(), 90000);
  try {
    const P = PROVEEDORES[settings.prov] || PROVEEDORES.pollinations;
    let url, body, headers = { "Content-Type":"application/json" };

    if (settings.prov === "pollinations") {
      url = settings.url || P.url;
      body = { model: PERSONALIDADES[persona]?.modelo || settings.modelo, messages: mens,
               max_tokens: +settings.maxTokens, referrer:"mi-web-ia" };
    } else {
      url = (settings.url || P.url).replace(/\/$/,"") + "/chat/completions";
      if (settings.key) headers.Authorization = "Bearer " + settings.key;
      if (settings.prov === "openrouter") { headers["HTTP-Referer"]="https://mi-ia.web"; headers["X-Title"]="Mi IA"; }
      body = { model: settings.modelo || P.modelo, messages: mens, max_tokens: +settings.maxTokens };
    }
    const r = await fetch(url, { method:"POST", signal: controlAbort.signal, headers, body: JSON.stringify(body) });
    if (r.status === 401) throw new Error("Clave inválida o ausente para este proveedor.");
    if (r.status === 429) throw new Error("Límite de uso alcanzado (429). Espera un poco o cambia de proveedor.");
    if (!r.ok) throw new Error("El proveedor respondió " + r.status + ".");
    const data = await r.json();
    if (data.error) throw new Error(data.error.message || "Error del proveedor");
    return data.choices[0].message.content;
  } finally { clearTimeout(timeout); }
}

/* ============ UI ============ */
const $ = id => document.getElementById(id);
const chat = $("chat"), entrada = $("entrada");

function aplicarTema(){
  const c = persona === ID_CUSTOM ? "#8b7cff" : PERSONALIDADES[persona].color;
  document.documentElement.style.setProperty("--accent", c);
}
function pintarChips(){
  const caja = $("chips"); caja.innerHTML = "";
  const lista = Object.entries(PERSONALIDADES).map(([id,v]) => ({ id, ...v }));
  lista.push({ id: ID_CUSTOM, emoji:"✨", nombre:"Custom", color:"#8b7cff" });
  lista.forEach(p => {
    const b = document.createElement("button");
    b.className = "chip" + (p.id === persona ? " activa" : "");
    b.textContent = p.emoji + " " + p.nombre;
    b.title = p.id === ID_CUSTOM ? "Editar personalidad personalizada" : "Usar esta personalidad";
    b.onclick = () => { persona = p.id; SET("pa_persona", persona); pintarChips(); if (p.id === ID_CUSTOM) abrirModal(); };
    caja.appendChild(b);
  });
}
function tokensDe(t){ return Math.ceil(t.length / 4); }
function pintarTokens(){
  const el = $("tokens"), pct = gastado / settings.presupuesto;
  el.textContent = `🔋 ${(gastado/1000).toFixed(1)}k / ${(settings.presupuesto/1000).toFixed(0)}k`;
  el.className = pct >= 1 ? "agotado" : pct > 0.8 ? "bajo" : "";
}
function burbuja(texto, clase){
  const d = document.createElement("div");
  d.className = "msg " + clase;
  d.textContent = texto;
  chat.appendChild(d); chat.scrollTop = chat.scrollHeight;
  return d;
}
function pintarHistorial(){
  chat.innerHTML = "";
  hist.forEach(m => burbuja(m.content, m.role === "user" ? "user" : "bot"));
}

/* ============ Envío ============ */
async function enviar(){
  const texto = entrada.value.trim();
  if (!texto) return;
  if (gastado >= settings.presupuesto) {
    burbuja("🚫 Presupuesto de tokens agotado. Súbelo en ⚙️ o pulsa 🗑 para reiniciar.", "bot error"); return;
  }
  entrada.value = "";
  hist.push({ role:"user", content: texto });
  burbuja(texto, "user");
  const espera = burbuja("", "bot typing");
  espera.innerHTML = 'Escribiendo <span>●</span><span>●</span><span>●</span> <button class="chip" id="btnStop">⏹</button>';
  $("btnStop").onclick = () => controlAbort?.abort();

  const mens = [mensajesSistema(), ...hist.slice(-12)];
  try {
    const respuesta = await pedirIA(mens);
    gastado += tokensDe(texto) + tokensDe(respuesta) + 20;
    SET("pa_gastado", gastado); pintarTokens();
    hist.push({ role:"assistant", content: respuesta });
    SET("pa_hist", JSON.stringify(hist));
    espera.remove(); burbuja(respuesta, "bot");
  } catch (e) {
    espera.remove();
    burbuja("⚠️ " + (e.name === "AbortError" ? "Generación detenida." : e.message), "bot error");
  }
}

/* ============ Modal / proveedores ============ */
function pintarSelector(){
  const sel = $("inProv");
  if (!sel.options.length) {
    Object.entries(PROVEEDORES).forEach(([id,P]) => {
      const o = document.createElement("option");
      o.value = id; o.textContent = P.nombre;
      sel.appendChild(o);
    });
  }
  sel.value = settings.prov;
  pintarNotaProveedor();
}
function pintarNotaProveedor(){
  const P = PROVEEDORES[$("inProv").value];
  $("provNota").innerHTML = `<b>Censura: ${P.censura}</b> · ${P.nota}`;
  $("inKey").style.display = P.clave ? "block" : "none";
}
 $("inProv").addEventListener("change", () => {
  const P = PROVEEDORES[$("inProv").value];
  $("inUrl").value = P.url; $("inModelo").value = P.modelo;
  pintarNotaProveedor();
});
function abrirModal(){
  $("taCustom").value = custom;
  $("inPresu").value = settings.presupuesto; $("inMax").value = settings.maxTokens;
  $("inUrl").value = settings.url || PROVEEDORES[settings.prov].url;
  $("inKey").value = settings.key;
  $("inModelo").value = settings.modelo || PROVEEDORES[settings.prov].modelo;
  pintarSelector();
  $("modal").classList.add("abierto");
}
 $("btnAjustes").onclick = abrirModal;
 $("mCancelar").onclick = () => $("modal").classList.remove("abierto");
 $("mGuardar").onclick = () => {
  custom = $("taCustom").value.trim(); SET("pa_custom", custom);
  settings = { presupuesto:+$("inPresu").value || 20000, maxTokens:+$("inMax").value || 300,
               prov:$("inProv").value, url:$("inUrl").value.trim(), key:$("inKey").value.trim(),
               modelo:$("inModelo").value.trim() };
  SET("pa_set", JSON.stringify(settings));
  $("modal").classList.remove("abierto"); pintarTokens();
};

/* ============ Eventos ============ */
 $("btnEnviar").onclick = enviar;
 $("limpiar").onclick = () => { hist = []; SET("pa_hist","[]"); pintarHistorial(); };
entrada.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); enviar(); }
});
 $("nivelFiltro").oninput = e => { nivel = +e.target.value; SET("pa_nivel", nivel); etiquetaNivel(); };
function etiquetaNivel(){
  $("nivelTxt").textContent = nivel >= 8 ? "Muy prudente" : nivel >= 5 ? "Normal" : nivel >= 2 ? "Relajado" : "Sin filtro*";
}

/* ============ Arranque ============ */
aplicarTema(); etiquetaNivel();
 $("nivelFiltro").value = nivel;
pintarChips(); pintarHistorial(); pintarTokens();
if (!hist.length) burbuja("¡Hola! Elige un estilo 🎭 — el HUD cambia de color con cada personalidad. Los proveedores los configuras en ⚙️.", "bot");
