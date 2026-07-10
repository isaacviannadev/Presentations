/* ============================================================
   Language switch PT ⇄ EN
   O PT é capturado do próprio HTML no carregamento (fonte da
   verdade); o EN vive no dicionário abaixo. A troca reescreve o
   innerHTML dos elementos [data-i18n] e pede um refresh ao
   ScrollTrigger, já que as larguras dos textos mudam.
   ============================================================ */

(function () {
  const EN = {
    "nav.tag": "5–7 min &middot; live",

    "hero.kicker": "// deployed on a Friday, 6:04 pm",
    "hero.line1": "The bug that",
    "hero.line2": "<em>TypeScript</em> would catch",
    "hero.line3": "at <span class=\"hero__red\">3 in the morning</span>",
    "hero.terminal": "sentry — production",
    "hero.sub": "The most expensive error in JavaScript history is <strong>avoidable before the code runs</strong>. Not with more tests. Not with more code review. With the compiler working for you, for free.",
    "hero.hint": "<span class=\"hero__scroll-arrow\">↓</span> scroll to start",

    "marquee": "friday deploy ✕ undefined on saturday ✕ NaN on the invoice ✕ sunday hotfix ✕&nbsp;",

    "p1.kicker": "the opening",
    "p1.title": "“Raise your hand if you've ever <span class=\"u-red\">deployed on a Friday</span>.”",
    "p1.text1": "Now keep your hand up if you found out <strong>on Saturday</strong> that <code class=\"inline-code\">user.name</code> was <code class=\"inline-code\">undefined</code>.",
    "p1.text2": "That error has a first name, a last name and a home address — plus a whole family of cousins. All of them avoidable <strong>before the code runs</strong>.",

    "p2.kicker": "the thesis",
    "p2.title": "TypeScript isn't about writing types.<br />It's about <em>moving the error</em>.",
    "p2.cost1.where": "in the <strong>editor</strong>, now",
    "p2.cost1.price": "costs 10 seconds",
    "p2.cost2.where": "in <strong>code review</strong>",
    "p2.cost2.price": "costs 20 minutes and a passive-aggressive comment",
    "p2.cost3.where": "in <strong>production</strong>",
    "p2.cost3.price": "costs a flooded Sentry, a hotfix, and your Saturday",
    "p2.text": "TypeScript moves the error to the cheapest possible place: <strong>the red squiggly, before the commit</strong>.",

    "p3.kicker": "live example",
    "p3.title": "JavaScript <span class=\"u-red\">accepts everything</span>",
    "p3.text1": "JavaScript didn't complain. It <strong>cooperated with the bug</strong>.",
    "p3.text2": "<code class=\"inline-code\">100 * undefined</code> is <code class=\"inline-code\">NaN</code> — and <code class=\"inline-code\">NaN</code> travels happily through the system until it shows up on an invoice.",
    "p3.code.cm1": "// Three months later, another dev calls it:",
    "p3.code.cm2": "// Result: <span class=\"t-nan\">NaN</span>. No error. No warning.",
    "p3.code.cm3": "// Just NaN in the customer's cart.",

    "p4.kicker": "the same code",
    "p4.title": "TypeScript <span class=\"u-red\">complains now</span>",
    "p4.text": "The error shows up in the editor, with a suggested fix — before it becomes a commit, before it becomes an invoice.",
    "p4.punchline": "“Red in the editor is annoying.<br />Red in Sentry is <em>expensive</em>.”",

    "p5.kicker": "dismantling the objections",
    "p5.title": "“Okay, but…”",
    "p5.o1.quote": "“TS slows me down”",
    "p5.o1.answer": "True. You lose <strong>10 seconds</strong> writing the type. In exchange, you stop losing <strong>2 hours</strong> debugging why <code class=\"inline-code\">NaN</code> showed up on an invoice.",
    "p5.o1.punch": "Worst trade in history… for people who love debugging.",
    "p5.o2.quote": "“TS is verbose”",
    "p5.o2.answer": "That was true in 2016. Modern TypeScript <strong>infers</strong> almost everything:",
    "p5.o2.cm1": "// ↑ TS already knows: string[]",
    "p5.o2.cm2": "// ↑ TS already knows: number",
    "p5.o2.cm3": "// autocomplete, zero annotations",
    "p5.o2.punch": "Zero annotations. 100% typed.",
    "p5.o3.quote": "“When it gets in the way I use <code class=\"inline-code\">any</code>”",
    "p5.o3.answer": "<code class=\"inline-code\">any</code> is TypeScript in <strong>airplane mode</strong>. It's installed, it looks great in package.json, but it does absolutely nothing.",
    "p5.o3.punch": "Every <code class=\"inline-code\">any</code> is a promise: “trust me, I know what I'm doing”. Six months from now, the person reading that promise is you.",

    "p6.kicker": "junior vs senior",
    "p6.title": "Types are documentation<br />that <em>can't lie</em>",
    "p6.lie1": "Comments go stale <span>in silence</span>",
    "p6.lie2": "READMEs go stale <span>in silence</span>",
    "p6.lie3": "JSDoc goes stale <span>in silence</span>",
    "p6.truth": "A wrong type <strong>breaks the build</strong>",
    "p6.code.cm1": "// This is a comment.",
    "p6.code.cm2": "// It might be lying right now.",
    "p6.code.cm3": "// @param discount — value between 0 and 1",
    "p6.code.cm4": "// This is a contract.",
    "p6.code.cm5": "// If it lies, it doesn't compile.",

    "p7.kicker": "for the numbers people",
    "p7.label": "of real-world bugs analyzed would have been<br /><strong>caught by a type checker</strong>",
    "p7.source": "Microsoft + University College London, <em>“To Type or Not to Type”</em> — thousands of real bugs in public JavaScript projects on GitHub.",
    "p7.punch": "One in seven bugs. <span class=\"u-red\">For free.</span> Before the commit.",

    "outro.line1": "TypeScript isn't about trusting yourself <em>less</em>.",
    "outro.line2": "It's about not having to trust your <span class=\"u-red\">memory</span><br />at 6 pm on a Friday.",
    "outro.thanks": "thank you <span class=\"outro__cursor\">▌</span>",

    "footer.left": "typescript workshop · the why",
    "footer.right": "the “how” goes to the next dev →",
  };

  const META = {
    pt: { lang: "pt-BR", title: "O bug que o TypeScript pegaria às 3h da manhã" },
    en: { lang: "en", title: "The bug TypeScript would catch at 3 a.m." },
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

  document.querySelector(".lang-switch").addEventListener("click", () => {
    const isPt = document.querySelector(".lang-switch__opt.is-active").dataset.lang === "pt";
    applyLang(isPt ? "en" : "pt");
  });

  let saved = null;
  try {
    saved = localStorage.getItem("lp-lang");
  } catch (e) { /* ignora */ }
  if (saved === "en") applyLang("en");
})();
