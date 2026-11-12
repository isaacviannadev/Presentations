/* Page-specific controls, with slide movement delegated to the shared engine. */
(() => {
  const sections = [...document.querySelectorAll(".hero, .panel")];
  const contents = document.querySelector("#contents");
  const zoom = document.querySelector("#screen-zoom");
  const count = document.querySelector("#slide-count");
  const name = document.querySelector("#slide-name");
  const next = document.querySelector('[data-step="1"]');
  const previous = document.querySelector('[data-step="-1"]');
  let current = 0;
  let pendingFrame = false;
  let renderUntil = 0;
  let navigationTimer;
  let resizeTimer;
  let resizing = false;

  function nearest() {
    const desktop = matchMedia(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (desktop) {
      if (sections[0].getBoundingClientRect().bottom > innerHeight / 2) return 0;
      let best = 1;
      for (let i = 2; i < sections.length; i++) {
        const distance = (el) =>
          Math.abs(el.getBoundingClientRect().left + el.offsetWidth / 2 - innerWidth / 2);
        if (distance(sections[i]) < distance(sections[best])) best = i;
      }
      return best;
    }
    const y = innerHeight * 0.35;
    let best = 0;
    sections.forEach((el, i) => {
      if (el.getBoundingClientRect().top <= y) best = i;
    });
    return best;
  }
  function update() {
    pendingFrame = false;
    if (resizing) return;
    current = nearest();
    count.textContent = `${String(current + 1).padStart(2, "0")} / ${sections.length}`;
    name.textContent = sections[current]
      .querySelector("h1,h2")
      .textContent.trim()
      .replace(/\s+/g, " ");
    const desktop = matchMedia(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    sections.forEach((section, i) => {
      section.inert = desktop && i !== current;
    });
    previous.disabled = current === 0;
    next.disabled = current === sections.length - 1;
    document.querySelectorAll(".contents-item").forEach((button, i) => {
      if (i === current) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
  }
  function scheduleUpdate() {
    if (pendingFrame) return;
    pendingFrame = true;
    requestAnimationFrame(update);
  }
  function goTo(index, updateHash = true) {
    const section = sections[index];
    if (!section) return;
    clearTimeout(resizeTimer);
    resizing = false;
    document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
    document.querySelector(".hwrap").scrollLeft = 0;
    window.scrollTo(0, scrollY);
    window.dispatchEvent(new CustomEvent("presentation:navigate", { detail: { index } }));
    if (updateHash) history.replaceState(null, "", `#${section.id}`);
    clearTimeout(navigationTimer);
    navigationTimer = setTimeout(() => {
      update();
      const heading = section.querySelector("h1,h2");
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }, 1400);
  }
  document.addEventListener("click", (event) => {
    const go = event.target.closest("[data-go]");
    if (go) goTo(sections.findIndex((s) => s.id === go.dataset.go));
    const step = event.target.closest("[data-step]");
    if (step) goTo(Math.max(0, Math.min(sections.length - 1, current + Number(step.dataset.step))));
    if (event.target.closest("[data-open-index]")) {
      contents.showModal();
      contents.querySelector('[aria-current="true"]')?.scrollIntoView({ block: "center" });
    }
    const close = event.target.closest("[data-close-dialog]");
    if (close) close.closest("dialog").close();
    const capture = event.target.closest("[data-zoom]");
    if (capture) {
      const key = capture.dataset.zoom;
      const image = document.querySelector("#zoom-image");
      const title = [...capture.closest("figure").querySelector("figcaption").children]
        .slice(0, 2)
        .map((el) => el.textContent.trim())
        .join(" · ");
      image.src = capture.querySelector("img").src;
      image.alt = title;
      document.querySelector("#zoom-title").textContent = title;
      document.querySelector("#zoom-figma").href = window.SCREEN_LINKS[key];
      zoom.showModal();
      zoom.querySelector(".zoom-scroll").scrollTo(0, 0);
    }
  });
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        dialog.close();
    });
  });
  window.addEventListener(
    "scroll",
    () => {
      renderUntil = performance.now() + 1500;
      scheduleUpdate();
    },
    { passive: true },
  );
  window.addEventListener("resize", () => {
    const index = current;
    resizing = true;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      resizing = false;
      goTo(index, false);
    }, 250);
  });
  // Horizontal scrub moves after the scroll tween, so observe its rendered position.
  if (window.gsap)
    gsap.ticker.add(() => {
      if (performance.now() < renderUntil) scheduleUpdate();
    });
  function syncLabels() {
    const en = document.documentElement.lang === "en";
    document.querySelectorAll("[data-zoom]").forEach((button) => {
      const title = [...button.closest("figure").querySelector("figcaption").children]
        .slice(0, 2)
        .map((el) => el.textContent.trim())
        .join(" · ");
      button.setAttribute("aria-label", `${en ? "Enlarge" : "Ampliar"}: ${title}`);
      button.querySelector("img").alt = title;
    });
    document
      .querySelectorAll("[data-close-dialog]")
      .forEach((button) => button.setAttribute("aria-label", en ? "Close" : "Fechar"));
    previous.setAttribute("aria-label", en ? "Previous slide" : "Seção anterior");
    next.setAttribute("aria-label", en ? "Next slide" : "Próxima seção");
    update();
  }
  document.querySelector(".lang-switch").addEventListener("click", syncLabels);
  syncLabels();
  function openHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    const i = sections.findIndex((s) => s.id === id);
    if (i >= 0) goTo(i, false);
  }
  window.addEventListener("hashchange", openHash);
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
    // Native fragment positioning is vertical; the engine resolves horizontal coordinates.
    requestAnimationFrame(() => {
      openHash();
      update();
    });
  });
  update();
})();
