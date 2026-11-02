/* DPI Phase A: consent-gated GA4 + Metricool, shared across dpi-os.com.
   Both trackers stay unloaded until the visitor actively accepts analytics.
   The same choice is used for both providers; there is no ad tracking. */
(function () {
  "use strict";

  var KEY = "dpi_optional_analytics_v1";
  var GA_ID = "G-X11NML5PG8";
  var METRICOOL_HASH = "dd94572c05907e8be02937eb70e35100";
  var lang = (document.documentElement.lang || "en").toLowerCase().split("-")[0];
  if (!["en", "ar", "fr", "es"].includes(lang)) lang = "en";

  var copy = {
    en: {
      heading: "Your privacy matters",
      detail: "DPI uses optional Google Analytics and Metricool analytics to understand readership. Both stay off unless you accept. Essential website features remain available.",
      accept: "Accept analytics", reject: "Reject analytics", settings: "Privacy choices",
      policy: "Read our privacy notice", aria: "Optional analytics preferences"
    },
    ar: {
      heading: "خصوصيتك تهمنا",
      detail: "يستخدم DPI تحليلات اختيارية من Google Analytics وMetricool لفهم تفاعل القرّاء. لن نفعّل أيًّا منهما إلا بموافقتك. يمكنك استخدام الموقع دون قبول.",
      accept: "قبول التحليلات", reject: "رفض التحليلات", settings: "خيارات الخصوصية",
      policy: "اقرأ إشعار الخصوصية", aria: "تفضيلات التحليلات الاختيارية"
    },
    fr: {
      heading: "Votre vie privée compte",
      detail: "DPI utilise facultativement Google Analytics et Metricool pour comprendre son lectorat. Ces outils restent désactivés sans votre accord. Le site reste accessible si vous refusez.",
      accept: "Accepter l’analyse", reject: "Refuser l’analyse", settings: "Choix de confidentialité",
      policy: "Lire notre notice de confidentialité", aria: "Préférences d’analyse facultative"
    },
    es: {
      heading: "Tu privacidad importa",
      detail: "DPI utiliza opcionalmente Google Analytics y Metricool para entender a sus lectores. Ambos permanecen desactivados hasta que aceptes. Puedes usar el sitio sin aceptar.",
      accept: "Aceptar analíticas", reject: "Rechazar analíticas", settings: "Opciones de privacidad",
      policy: "Leer nuestro aviso de privacidad", aria: "Preferencias de análisis opcional"
    }
  }[lang];

  var policyHref = (lang === "en" ? "" : "/" + lang) + "/privacy.html";
  var started = false;
  function readChoice() {
    try { return window.localStorage.getItem(KEY); } catch (_) { return null; }
  }
  function saveChoice(choice) {
    try { window.localStorage.setItem(KEY, choice); } catch (_) { /* storage unavailable */ }
  }
  function startAnalytics() {
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("config", GA_ID, {
      send_page_view: true, allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    var google = document.createElement("script");
    google.async = true;
    google.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(google);

    var metricool = document.createElement("script");
    metricool.async = true;
    metricool.src = "https://tracker.metricool.com/resources/be.js";
    metricool.onload = function () {
      if (window.beTracker && typeof window.beTracker.t === "function") {
        window.beTracker.t({ hash: METRICOOL_HASH });
      }
    };
    document.head.appendChild(metricool);
  }
  function el(name, className, label) {
    var node = document.createElement(name);
    if (className) node.className = className;
    if (label) node.textContent = label;
    return node;
  }
  function ready() {
    if (readChoice() === "accepted") startAnalytics();

    var manage = el("button", "dpi-consent-manage", copy.settings);
    manage.type = "button";
    manage.setAttribute("aria-label", copy.settings);
    document.body.appendChild(manage);

    var panel = el("section", "dpi-consent-panel");
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-label", copy.aria);
    panel.setAttribute("lang", lang);
    if (lang === "ar") panel.setAttribute("dir", "rtl");

    var heading = el("h2", "dpi-consent-heading", copy.heading);
    var text = el("p", "dpi-consent-description", copy.detail);
    var policy = el("a", "dpi-consent-policy", copy.policy);
    policy.href = policyHref;
    var actions = el("div", "dpi-consent-actions");
    var reject = el("button", "dpi-consent-reject", copy.reject);
    var accept = el("button", "dpi-consent-accept", copy.accept);
    reject.type = accept.type = "button";
    actions.appendChild(reject);
    actions.appendChild(accept);
    var body = el("div", "dpi-consent-content");
    body.appendChild(heading);
    body.appendChild(text);
    body.appendChild(policy);
    panel.appendChild(body);
    panel.appendChild(actions);
    document.body.appendChild(panel);
    function show() {
      panel.hidden = false;
      manage.hidden = true;
    }
    function hide() {
      panel.hidden = true;
      manage.hidden = false;
    }
    function decide(choice) {
      var before = readChoice();
      saveChoice(choice);
      hide();
      if (choice === "accepted") {
        startAnalytics();
      } else if (before === "accepted" && started) {
        /* Previously loaded third-party scripts cannot be unloaded safely.
           Deny GA consent now, and reload to prevent any further Metricool calls. */
        if (typeof window.gtag === "function") {
          window.gtag("consent", "update", { analytics_storage: "denied" });
        }
        window.location.reload();
      }
    }
    accept.addEventListener("click", function () { decide("accepted"); });
    reject.addEventListener("click", function () { decide("rejected"); });
    manage.addEventListener("click", show);
    if (readChoice() === "accepted" || readChoice() === "rejected") hide();
    else show();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready);
  else ready();
}());
