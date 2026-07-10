/* ============================================================
   Animações — GSAP + ScrollTrigger
   ============================================================ */

document.documentElement.classList.remove("no-js");

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
if (!prefersReducedMotion) {
  gsap.to(".marquee__track", {
    xPercent: -50,
    ease: "none",
    duration: 18,
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

  return () => {}; // cleanup gerido pelo matchMedia
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
