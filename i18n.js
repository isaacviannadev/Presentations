/* ============================================================
   Língua compartilhada (PT ⇄ EN)
   O hub e os decks usam a mesma chave em localStorage (lp-lang),
   então o idioma escolhido em qualquer página vale para todas.
   O PT é capturado do próprio HTML no carregamento; o EN vem do
   dicionário da página (window.PAGE_EN, definido em lang.js).
   ============================================================ */

(function () {
  const EN = window.PAGE_EN || {};
  const META = {
    pt: { lang: "pt-BR", title: (window.PAGE_META && window.PAGE_META.pt) || document.title },
    en: { lang: "en", title: (window.PAGE_META && window.PAGE_META.en) || document.title },
  };

  // captura o PT do próprio HTML antes de qualquer troca
  const PT = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in PT)) PT[key] = el.innerHTML;
  });

  const DICTS = { pt: PT, en: EN };

  function applyLang(lang) {
    const dict = DICTS[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const html = dict[el.dataset.i18n];
      if (html != null) el.innerHTML = html;
    });

    document.documentElement.lang = META[lang].lang;
    document.title = META[lang].title;

    document.querySelectorAll(".lang-switch__opt").forEach((opt) => {
      opt.classList.toggle("is-active", opt.dataset.lang === lang);
    });

    try {
      localStorage.setItem("lp-lang", lang);
    } catch (e) { /* modo privado, sem persistência */ }

    // larguras de texto mudam → recalcula o scroll horizontal
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  const switchEl = document.querySelector(".lang-switch");
  if (switchEl) {
    switchEl.addEventListener("click", () => {
      const active = document.querySelector(".lang-switch__opt.is-active");
      applyLang(active && active.dataset.lang === "pt" ? "en" : "pt");
    });
  }

  let saved = null;
  try {
    saved = localStorage.getItem("lp-lang");
  } catch (e) { /* ignora */ }
  if (saved === "en") applyLang("en");
})();
