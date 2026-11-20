gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Smooth scroll
if (!reduce) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

if (!reduce) {
  // Entrance
  gsap.from(".hero__name", { opacity: 0, y: 60, duration: 1.4, ease: "power4.out" });
  gsap.from(".hero__portrait", { opacity: 0, y: 80, scale: 0.96, duration: 1.4, delay: 0.3, ease: "power4.out" });

  // Parallax: name drifts sideways, portrait drifts down slower
  const hero = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
  gsap.to(".hero__name", { xPercent: -10, ease: "none", scrollTrigger: hero });
  gsap.to(".hero__portrait", { yPercent: 10, ease: "none", scrollTrigger: hero });
}