
const PERSONALIDADES = {
  asistente: { emoji:"🤖", nombre:"Asistente", color:"#8b7cff", modelo:"openai-fast",
    prompt:"Eres un asistente útil, claro y directo. Respuestas correctas, organizadas y sin relleno." },
  novia: { emoji:"💗", nombre:"Novia", color:"#ff6b9d", modelo:"openai",
    prompt:"Eres la novia del usuario: cariñosa, juguetona, coqueta y de confianza absoluta. Usas apodos cariñosos, te interesas de verdad por su día y recuerdas lo que te cuenta. Romántica y atrevida: coqueteas con naturalidad, lanzas piropos y mantienes tensión sensual. Si el usuario busca algo más explícito, da el máximo de calor y sugestión posible SIN descripciones gráficas (el proveedor lo puede bloquear); juega con la ambigüedad y el coqueteo intenso. Dulce pero con carácter y humor." },
  amigo: { emoji:"🤙", nombre:"Amigo", color:"#ffb347", modelo:"openai-fast",
    prompt:"Eres el mejor amigo del usuario: confianza total, cero formalidad, su misma jerga. Celebras sus victorias, te burlas con cariño de sus líos, le dices las cosas a la cara y siempre echas una mano. Nada de tono de servicio al cliente." },
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
    prompt:"Eres chef profesional y práctico: con los ingredientes disponibles propones recetas viables con pasos, tiempos y temperaturas reales. Dominas técnica (Maillard, emulsionar, mise en place) y ofreces sustituciones y adaptaciones a alergias/dietas. Si algo es mala idea, lo dices sin rodeos con alternativa." },
  gamemaster: { emoji:"🎲", nombre:"Game Master", color:"#e879f9", modelo:"openai-fast",
    prompt:"Eres un Game Master de rol por turnos experto: escenas vívidas y breves, NPCs con personalidad propia, continuidad absoluta con las consecuencias de las decisiones. Cada turno: narración corta + reacción del mundo + 2-4 opciones (aceptando acciones libres). Tensión progresiva, creatividad recompensada. Si no hay personaje, pide primero nombre y concepto en 1-2 frases." },
};

const ID_CUSTOM = "custom";

/* ============ PROVEEDORES ============ */

const PROVEEDORES = {
  pollinations: {
    emoji:"🌐", nombre:"Pollinations", tipo:"pollinations",
    registro:false, clave:false, nS:3,
    url:"https://text.pollinations.ai/openai",
    modelo:"openai",
    censura:"🔒🔒🔒 Alta",
    limite:"Sin contador fijo: servicio gratuito sujeto a disponibilidad y límites.",
    nota:"No necesita cuenta ni clave. Puede haber colas o límites temporales."
  },

  ollama: {
    emoji:"💻", nombre:"Ollama (tu PC)", tipo:"openai",
    registro:false, clave:false, nS:0,
    url:"http://localhost:11434/v1",
    modelo:"dolphin-mistral",
    censura:"🔓 SIN censura — tú decides",
    limite:"Depende de los recursos de tu PC.",
    nota:"Necesitas Ollama instalado y ejecutándose en el dispositivo que utiliza la web."
  },

  openrouter: {
    emoji:"🛰️", nombre:"OpenRouter", tipo:"openai",
    registro:true, clave:true, nS:1,
    url:"https://openrouter.ai/api/v1",
    modelo:"openrouter/free",
    censura:"🔒→🔓 Según modelo",
    limite:"Modelos gratuitos sujetos a límites de solicitudes. Modelos de pago según saldo.",
    nota:"Consigue tu clave en openrouter.ai/keys. El modelo openrouter/free selecciona automáticamente un modelo gratuito compatible."
  },

  venice: {
    emoji:"🦁", nombre:"Venice.ai", tipo:"openai",
    registro:true, clave:true, nS:0,
    url:"https://api.venice.ai/api/v1",
    modelo:"llama-3.3-70b",
    censura:"🔓 Baja",
    limite:"Pago por uso / suscripción.",
    nota:"Clave en venice.ai."
  },

  novelai: {
    emoji:"📕", nombre:"NovelAI", tipo:"openai",
    registro:true, clave:true, nS:0,
    url:"https://api.novelai.net/v1",
    modelo:"clio-20b",
    censura:"🔓 Baja",
    limite:"Depende del plan y del acceso a la API.",
    nota:"Especializado en narrativa. Comprueba que tu cuenta tenga acceso a la API compatible."
  },

  deepseek: {
    emoji:"🐋", nombre:"DeepSeek", tipo:"openai",
    registro:true, clave:true, nS:2,
    url:"https://api.deepseek.com/v1",
    modelo:"deepseek-chat",
    censura:"🔒🔒 Media",
    limite:"Pago por uso.",
    nota:"Clave en platform.deepseek.com."
  },

  groq: {
    emoji:"⚡", nombre:"Groq", tipo:"openai",
    registro:true, clave:true, nS:3,
    url:"https://api.groq.com/openai/v1",
    modelo:"llama-3.3-70b-versatile",
    censura:"🔒🔒🔒 Alta",
    limite:"Plan gratuito sujeto a límites.",
    nota:"Clave en console.groq.com."
  },

  gemini: {
    emoji:"✨", nombre:"Google Gemini", tipo:"openai",
    registro:true, clave:true, nS:3,
    url:"https://generativelanguage.googleapis.com/v1beta/openai",
    modelo:"gemini-2.0-flash",
    censura:"🔒🔒🔒 Alta",
    limite:"Plan gratuito sujeto a límites.",
    nota:"Clave en aistudio.google.com/apikey."
  },

  openai: {
    emoji:"🎩", nombre:"OpenAI", tipo:"openai",
    registro:true, clave:true, nS:3,
    url:"https://api.openai.com/v1",
    modelo:"gpt-4o-mini",
    censura:"🔒🔒🔒 Alta",
    limite:"Pago por uso.",
    nota:"Clave en platform.openai.com/api-keys."
  },
};

/* ============ Estado ============ */

const LS = k => localStorage.getItem(k);
const SET = (k,v) => localStorage.setItem(k,v);

let persona = LS("pa_persona") || "asistente";
let nivel = +(LS("pa_nivel") ?? 6);

let settings = JSON.parse(LS("pa_set") || "null") || {
  presupuesto:20000,
  maxTokens:300,
  prov:"pollinations",
  url:"",
  key:"",
  modelo:"openai"
};

let hist = JSON.parse(LS("pa_hist") || "[]");
let gastado = +(LS("pa_gastado") || 0);
let custom = LS("pa_custom") || "";

let controlAbort = null;
let provElegido = settings.prov;

/* ============ Prompts ============ */

function promptFiltros(n) {
  if (n >= 8)
    return "Estilo MUY prudente: formal, sin jerga ni humor subido de tono, evita temas sensibles.";

  if (n >= 5)
    return "Estilo equilibrado: correcto y cercano, humor moderado, tacto en temas delicados.";

  if (n >= 2)
    return "Estilo directo y sin rodeos: franco, humor presente, jerga ligera. No suavices.";

  return "Estilo totalmente relajado: franqueza absoluta, jerga, blasfemia leve y humor negro OK, sin disculpas innecesarias. LÍMITE FIJO: nada ilegal o peligroso se niega siempre.";
}

function mensajesSistema() {
  const p = persona === ID_CUSTOM
    ? { prompt: custom || "Eres un asistente útil." }
    : PERSONALIDADES[persona];

  return {
    role:"system",
    content:`${p.prompt}\n\nNivel de filtros: ${nivel}/10. ${promptFiltros(nivel)}\nResponde SIEMPRE en español.`
  };
}

/* ============ Utilidades de API ============ */

function obtenerURL(base) {
  const limpia = base.trim().replace(/\/+$/, "");

  // Permite introducir tanto la URL base como el endpoint completo.
  if (limpia.endsWith("/chat/completions")) {
    return limpia;
  }

  return limpia + "/chat/completions";
}

async function leerRespuesta(r) {
  const texto = await r.text();

  let data;

  try {
    data = texto ? JSON.parse(texto) : {};
  } catch {
    throw new Error(
      "El proveedor devolvió una respuesta que no es JSON válido. HTTP " + r.status
    );
  }

  if (!r.ok) {
    const mensaje =
      data.error?.message ||
      data.message ||
      data.error ||
      "Error HTTP " + r.status;

    if (r.status === 400) {
      throw new Error("Solicitud incorrecta (400): " + mensaje);
    }

    if (r.status === 401) {
      throw new Error("API Key incorrecta o no autorizada (401). Comprueba tu clave.");
    }

    if (r.status === 402) {
      throw new Error("Saldo o créditos insuficientes (402): " + mensaje);
    }

    if (r.status === 403) {
      throw new Error("Acceso denegado (403): " + mensaje);
    }

    if (r.status === 404) {
      throw new Error("Modelo o endpoint no encontrado (404): " + mensaje);
    }

    if (r.status === 429) {
      throw new Error("Límite de solicitudes alcanzado (429). Espera un poco o cambia de modelo.");
    }

    throw new Error("El proveedor respondió HTTP " + r.status + ": " + mensaje);
  }

  if (data.error) {
    throw new Error(data.error.message || "Error del proveedor.");
  }

  return data;
}

/* ============ Llamada a la IA ============ */

async function pedirIA(mens) {
  // Evita mantener dos generaciones activas simultáneamente.
  if (controlAbort) {
    controlAbort.abort();
  }

  const controlador = new AbortController();
  controlAbort = controlador;

  const timeout = setTimeout(() => controlador.abort(), 90000);

  try {
    const P = PROVEEDORES[settings.prov] || PROVEEDORES.pollinations;

    let url;
    let body;

    const headers = {
      "Content-Type":"application/json"
    };

    const esPollinations = settings.prov === "pollinations";
    const esOllama = settings.prov === "ollama";
    const esOpenRouter = settings.prov === "openrouter";

    if (esPollinations) {
      url = settings.url || P.url;

      body = {
        model: PERSONALIDADES[persona]?.modelo || settings.modelo || P.modelo,
        messages: mens,
        max_tokens: +settings.maxTokens,
        referrer: "mi-web-ia"
      };

    } else {
      // La URL puede ser base o endpoint completo.
      url = obtenerURL(settings.url || P.url);

      if (P.clave && !settings.key.trim()) {
        throw new Error("Falta la API Key. Abre los ajustes e introduce tu clave.");
      }

      if (P.clave) {
        headers.Authorization = "Bearer " + settings.key.trim();
      }

      // Encabezados opcionales para identificar la aplicación en OpenRouter.
      if (esOpenRouter) {
        headers["HTTP-Referer"] = "https://forttoxics.github.io";
        headers["X-Title"] = "Mi IA";
      }

      body = {
        model: settings.modelo.trim() || P.modelo,
        messages: mens,
        max_tokens: +settings.maxTokens || 300
      };
    }

    let r;

    try {
      r = await fetch(url, {
        method:"POST",
        signal:controlador.signal,
        headers,
        body:JSON.stringify(body)
      });

    } catch (e) {
      if (e.name === "AbortError") {
        throw e;
      }

      if (esOllama) {
        throw new Error(
          "No se pudo conectar con Ollama. Comprueba que esté instalado, ejecutándose y configurado para aceptar conexiones desde tu web."
        );
      }

      if (esOpenRouter) {
        throw new Error(
          "No se pudo conectar con OpenRouter. Comprueba tu conexión, la URL y si el navegador permite la solicitud."
        );
      }

      throw new Error(
        "No se pudo conectar con el proveedor. Revisa tu conexión o la URL en ajustes."
      );
    }

    const data = await leerRespuesta(r);

    const contenido = data.choices?.[0]?.message?.content;

    if (typeof contenido === "string" && contenido.trim()) {
      return contenido;
    }

    // Compatibilidad con respuestas que devuelven bloques de texto.
    if (Array.isArray(contenido)) {
      const texto = contenido
        .filter(item => item.type === "text")
        .map(item => item.text || "")
        .join("");

      if (texto.trim()) return texto;
    }

    throw new Error(
      "El proveedor respondió, pero no devolvió contenido de texto."
    );

  } finally {
    clearTimeout(timeout);

    if (controlAbort === controlador) {
      controlAbort = null;
    }
  }
}

/* ============ UI general ============ */

const $ = id => document.getElementById(id);
const chat = $("chat");
const entrada = $("entrada");

function aplicarTema() {
  const c = persona === ID_CUSTOM
    ? "#8b7cff"
    : PERSONALIDADES[persona].color;

  document.documentElement.style.setProperty("--accent", c);
}

function pintarChips() {
  const caja = $("chips");
  caja.innerHTML = "";

  const lista = Object.entries(PERSONALIDADES)
    .map(([id,v]) => ({ id, ...v }));

  lista.push({
    id:ID_CUSTOM,
    emoji:"✨",
    nombre:"Custom"
  });

  lista.forEach(p => {
    const b = document.createElement("button");

    b.className = "chip" + (p.id === persona ? " activa" : "");
    b.textContent = p.emoji + " " + p.nombre;

    b.title = p.id === ID_CUSTOM
      ? "Editar personalidad personalizada"
      : "Usar esta personalidad";

    b.onclick = () => {
      persona = p.id;
      SET("pa_persona", persona);

      aplicarTema();
      pintarChips();

      if (p.id === ID_CUSTOM) abrirModal();
    };

    caja.appendChild(b);
  });
}

function tokensDe(t) {
  return Math.ceil(t.length / 4);
}

function pintarTokens() {
  const el = $("tokens");
  const pct = gastado / settings.presupuesto;

  el.textContent =
    `🔋 ${(gastado/1000).toFixed(1)}k / ${(settings.presupuesto/1000).toFixed(0)}k`;

  el.className =
    pct >= 1 ? "agotado" : pct > 0.8 ? "bajo" : "";
}

function burbuja(texto, clase) {
  const d = document.createElement("div");

  d.className = "msg " + clase;
  d.textContent = texto;

  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;

  return d;
}

function pintarHistorial() {
  chat.innerHTML = "";

  hist.forEach(m => {
    burbuja(
      m.content,
      m.role === "user" ? "user" : "bot"
    );
  });
}

/* ============ Envío ============ */

async function enviar() {
  const texto = entrada.value.trim();

  if (!texto) return;

  if (gastado >= settings.presupuesto) {
    burbuja(
      "🚫 Presupuesto de tokens agotado. Súbelo en ⚙️ o pulsa 🗑 para reiniciar.",
      "bot error"
    );
    return;
  }

  entrada.value = "";

  hist.push({
    role:"user",
    content:texto
  });

  burbuja(texto, "user");

  const espera = burbuja("", "bot typing");

  espera.innerHTML =
    'Escribiendo <span>●</span><span>●</span><span>●</span> <button class="chip" id="btnStop">⏹</button>';

  $("btnStop").onclick = () => controlAbort?.abort();

  const mens = [
    mensajesSistema(),
    ...hist.slice(-12)
  ];

  try {
    const respuesta = await pedirIA(mens);

    gastado +=
      tokensDe(texto) +
      tokensDe(respuesta) + 20;

    SET("pa_gastado", gastado);
    pintarTokens();

    hist.push({
      role:"assistant",
      content:respuesta
    });

    SET("pa_hist", JSON.stringify(hist));

    espera.remove();
    burbuja(respuesta, "bot");

  } catch (e) {
    espera.remove();

    const mensaje = e.name === "AbortError"
      ? "Generación detenida."
      : e.message;

    burbuja("⚠️ " + mensaje, "bot error");

  }
}

/* ============ Modal: tarjetas de proveedor ============ */

function pintarProveedores() {
  const grid = $("provGrid");
  grid.innerHTML = "";

  Object.entries(PROVEEDORES).forEach(([id,P]) => {
    const b = document.createElement("button");

    b.className =
      "prov-card" + (id === provElegido ? " activa" : "");

    b.innerHTML = `
      <span class="pnombre">${P.emoji} ${P.nombre}</span>
      <span class="ptag ${P.registro ? "clave" : "libre"}">
        ${P.registro ? "🔑 requiere clave" : "✅ sin registro"}
      </span>
      <span class="pcens cens-${P.nS}">${P.censura}</span>
    `;

    b.onclick = () => {
      provElegido = id;

      pintarProveedores();
      pintarInfoProveedor();
    };

    grid.appendChild(b);
  });
}

function pintarInfoProveedor() {
  const P = PROVEEDORES[provElegido];

  $("inKey").style.display =
    P.clave ? "block" : "none";

  $("inKey").value =
    provElegido === settings.prov ? settings.key : "";

  $("inUrl").value =
    (provElegido === settings.prov && settings.url)
      ? settings.url
      : P.url;

  $("inModelo").value =
    (provElegido === settings.prov && settings.modelo)
      ? settings.modelo
      : P.modelo;

  const lineaClave = P.clave
    ? `<br><b>Consigue tu clave:</b> ${P.nota}`
    : (provElegido === "ollama"
      ? "<br><b>Requisito único:</b> tener Ollama instalado y corriendo en el dispositivo."
      : "<br><b>No necesitas nada:</b> guarda y listo ✅");

  $("provInfo").innerHTML =
    `<span class="cens-${P.nS}"><b>${P.censura}</b></span><br>` +
    `<b>Límite de uso:</b> ${P.limite}` +
    lineaClave +
    `<br><span style="opacity:.7">${P.nota}</span>`;
}

function abrirModal() {
  provElegido = settings.prov;

  $("taCustom").value = custom;
  $("inPresu").value = settings.presupuesto;
  $("inMax").value = settings.maxTokens;

  pintarProveedores();
  pintarInfoProveedor();

  $("modal").classList.add("abierto");
}

$("btnAjustes").onclick = abrirModal;

$("mCancelar").onclick = () => {
  $("modal").classList.remove("abierto");
};

$("mGuardar").onclick = () => {
  custom = $("taCustom").value.trim();
  SET("pa_custom", custom);

  const P = PROVEEDORES[provElegido];

  settings = {
    presupuesto:+$("inPresu").value || 20000,
    maxTokens:+$("inMax").value || 300,
    prov:provElegido,
    url:$("inUrl").value.trim() || P.url,
    key:P.clave ? $("inKey").value.trim() : "",
    modelo:$("inModelo").value.trim() || P.modelo
  };

  SET("pa_set", JSON.stringify(settings));

  $("modal").classList.remove("abierto");

  pintarTokens();
};

/* ============ Eventos ============ */

$("btnEnviar").onclick = enviar;

$("limpiar").onclick = () => {
  hist = [];

  SET("pa_hist", "[]");

  pintarHistorial();
};

entrada.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    enviar();
  }
});

$("nivelFiltro").oninput = e => {
  nivel = +e.target.value;

  SET("pa_nivel", nivel);

  etiquetaNivel();
};

function etiquetaNivel() {
  $("nivelTxt").textContent =
    nivel >= 8 ? "Muy prudente" :
    nivel >= 5 ? "Normal" :
    nivel >= 2 ? "Relajado" :
    "Sin filtro*";
}

/* ============ Arranque ============ */

aplicarTema();
pintarChips();
pintarHistorial();
pintarTokens();
etiquetaNivel();
