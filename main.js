/* ============================================================
   Animações — GSAP + ScrollTrigger
   ============================================================ */

document.documentElement.classList.remove("no-js");

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Nav ciente do fundo ---------- */
// Sonda qual seção está sob a nav e marca body[data-nav-theme]:
// seções vermelhas/escuras pedem texto branco; as claras, preto.
function probeNavTheme() {
  const el = document.elementFromPoint(Math.round(window.innerWidth / 2), 12);
  const dark = !!(el && el.closest(".panel--red, .outro"));
  document.body.dataset.navTheme = dark ? "dark" : "light";
}
let navThemeRaf = 0;
function queueNavTheme() {
  if (navThemeRaf) return;
  navThemeRaf = requestAnimationFrame(() => {
    navThemeRaf = 0;
    probeNavTheme();
  });
}
window.addEventListener("resize", queueNavTheme);
// o scrub do pin move os painéis depois do evento de scroll,
// então a sonda acompanha o ticker do GSAP (deduplicada por rAF)
gsap.ticker.add(queueNavTheme);
probeNavTheme();

/* ---------- Barra de progresso global ---------- */
gsap.to(".progress-bar__fill", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3,
  },
});

/* ---------- Hero ---------- */
if (!prefersReducedMotion) {
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .fromTo(".hero__kicker", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(
      ".reveal-hero-line",
      { opacity: 0, yPercent: 110 },
      { opacity: 1, yPercent: 0, duration: 0.9, stagger: 0.12 },
      "-=0.2"
    )
    .fromTo(
      ".hero__terminal",
      { opacity: 0, y: 40, rotateX: 12, transformPerspective: 800 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.9 },
      "-=0.35"
    )
    .fromTo(".hero__sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
    .fromTo(".hero__scroll-hint", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");

  // Parallax sutil do grid de fundo
  gsap.to(".hero__bg-grid", {
    yPercent: 18,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
} else {
  gsap.set(".reveal-hero, .reveal-hero-line, .hero__kicker", { opacity: 1 });
}

/* ---------- Marquee ---------- */
const marqueeTrack = document.querySelector(".marquee__track");
if (marqueeTrack && !prefersReducedMotion) {
  // clona cópias (em pares, p/ as duas metades ficarem idênticas) até a
  // metade do track cobrir qualquer viewport — o loop de -50% fecha sem vão
  const template = marqueeTrack.children[0];
  while (
    marqueeTrack.scrollWidth < window.innerWidth * 2.4 ||
    marqueeTrack.children.length % 2 !== 0
  ) {
    marqueeTrack.appendChild(template.cloneNode(true));
  }

  // duração proporcional à largura → velocidade constante em qualquer tela
  const speed = 110; // px/s
  gsap.to(marqueeTrack, {
    xPercent: -50,
    ease: "none",
    duration: marqueeTrack.scrollWidth / 2 / speed,
    repeat: -1,
  });
}

/* ---------- Scroll horizontal (desktop) ---------- */
const mm = gsap.matchMedia();

mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
  const track = document.querySelector(".htrack");
  const panels = gsap.utils.toArray(".panel");

  const getScrollAmount = () => track.scrollWidth - window.innerWidth;

  const horizontalTween = gsap.to(track, {
    x: () => -getScrollAmount(),
    ease: "none",
    scrollTrigger: {
      trigger: ".hwrap",
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  // Animações internas de cada painel, sincronizadas com o scroll horizontal
  panels.forEach((panel) => {
    const items = panel.querySelectorAll(".anim");
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalTween,
            start: "left 62%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // marca o painel como ativo (usado pelas barras de custo em CSS)
    ScrollTrigger.create({
      trigger: panel,
      containerAnimation: horizontalTween,
      start: "left 62%",
      end: "right 20%",
      onToggle: (self) => panel.classList.toggle("is-active", self.isActive),
    });

    // parallax do numerão de fundo
    const num = panel.querySelector(".panel__num");
    if (num) {
      gsap.fromTo(
        num,
        { xPercent: 30 },
        {
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalTween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        }
      );
    }
  });

  // Contador do 15%
  setupCounter(horizontalTween);

  /* ---------- Navegação em slides (wheel + teclado) ---------- */
  // Cada "stop" é uma seção: hero, cada painel horizontal, fechamento.
  // A roda do mouse e as setas avançam/voltam um stop com tween suave;
  // o scrub do pin transforma a transição na própria animação do slide.

  const st = horizontalTween.scrollTrigger;

  function computeStops() {
    const total = getScrollAmount();
    const stops = [0]; // hero
    panels.forEach((panel) => {
      // centraliza o painel no viewport (painéis mais largos que 100vw
      // são clampados aos limites do track)
      let x = panel.offsetLeft + (panel.offsetWidth - window.innerWidth) / 2;
      x = Math.max(0, Math.min(x, total));
      stops.push(st.start + x);
    });
    stops.push(ScrollTrigger.maxScroll(window)); // fechamento
    return stops;
  }

  let sliding = false;
  let cooldownUntil = 0;
  let wheelAcc = 0;
  let lastWheelAt = 0;
  const scrollProxy = { y: 0 };

  function goToScroll(target) {
    if (Math.abs(target - window.scrollY) < 2) return;
    sliding = true;
    scrollProxy.y = window.scrollY;
    gsap.killTweensOf(scrollProxy);
    gsap.to(scrollProxy, {
      y: target,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => window.scrollTo(0, scrollProxy.y),
      onComplete: () => {
        sliding = false;
        wheelAcc = 0;
        // janela p/ engolir a inércia residual do trackpad
        cooldownUntil = performance.now() + 350;
      },
    });
  }

  function step(dir) {
    if (sliding) return;
    const stops = computeStops();
    const y = window.scrollY;
    let target;
    if (dir > 0) {
      target = stops.find((s) => s > y + 2);
      if (target === undefined) target = stops[stops.length - 1];
    } else {
      const before = stops.filter((s) => s < y - 2);
      target = before.length ? before[before.length - 1] : stops[0];
    }
    goToScroll(target);
  }

  function onWheel(e) {
    e.preventDefault(); // o scroll passa a ser 100% conduzido pelos slides
    const now = performance.now();
    if (sliding || now < cooldownUntil) return;
    if (now - lastWheelAt > 200) wheelAcc = 0; // rajada nova zera o acumulador
    lastWheelAt = now;
    wheelAcc += e.deltaY;
    if (Math.abs(wheelAcc) > 50) {
      const dir = wheelAcc > 0 ? 1 : -1;
      wheelAcc = 0;
      step(dir);
    }
  }

  function onKey(e) {
    if (e.target.matches("input, textarea, select")) return;
    const NEXT = ["ArrowDown", "ArrowRight", "PageDown", " "];
    const PREV = ["ArrowUp", "ArrowLeft", "PageUp"];
    if (NEXT.includes(e.key)) {
      e.preventDefault();
      step(1);
    } else if (PREV.includes(e.key)) {
      e.preventDefault();
      step(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goToScroll(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToScroll(ScrollTrigger.maxScroll(window));
    }
  }

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("keydown", onKey);

  return () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("keydown", onKey);
    gsap.killTweensOf(scrollProxy);
  };
});

/* ---------- Mobile / reduced motion: scroll vertical simples ---------- */
mm.add("(max-width: 900px), (prefers-reduced-motion: reduce)", () => {
  const panels = gsap.utils.toArray(".panel");

  panels.forEach((panel) => {
    const items = panel.querySelectorAll(".anim");
    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1 });
      panel.classList.add("is-active");
      return;
    }
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    ScrollTrigger.create({
      trigger: panel,
      start: "top 60%",
      end: "bottom 30%",
      onToggle: (self) => panel.classList.toggle("is-active", self.isActive),
    });
  });

  setupCounter(null);
});

/* ---------- Contador 15% ---------- */
function setupCounter(containerAnimation) {
  const counter = document.querySelector(".stat__counter");
  if (!counter || counter.dataset.done) return;

  const target = parseInt(counter.dataset.target, 10);

  if (prefersReducedMotion) {
    counter.textContent = target;
    counter.dataset.done = "1";
    return;
  }

  ScrollTrigger.create({
    trigger: counter.closest(".panel"),
    containerAnimation: containerAnimation || undefined,
    start: containerAnimation ? "left 55%" : "top 65%",
    onEnter: () => {
      if (counter.dataset.done) return;
      counter.dataset.done = "1";
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => (counter.textContent = Math.round(obj.v)),
      });
    },
  });
}

/* ---------- Outro ---------- */
if (!prefersReducedMotion) {
  gsap.fromTo(
    ".reveal-outro",
    { opacity: 0, y: 45 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".outro",
        start: "top 55%",
        toggleActions: "play none none reverse",
      },
    }
  );
} else {
  gsap.set(".reveal-outro", { opacity: 1 });
}

/* Recalcula medidas após fontes carregarem (largura do track muda) */
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
window.addEventListener("load", () => ScrollTrigger.refresh());
