"use client";

import { useEffect } from "react";

type RevealVariant = "copy" | "visual" | "strip";

const revealKeyframes: Record<RevealVariant, Keyframe[]> = {
  copy: [
    { opacity: 0, transform: "translate3d(0, 24px, 0)" },
    { opacity: 1, transform: "translate3d(0, 0, 0)" },
  ],
  visual: [
    { clipPath: "inset(8% 0 0 0 round 18px)", opacity: 0, transform: "translate3d(0, 36px, 0)" },
    { clipPath: "inset(0 0 0 0 round 18px)", opacity: 1, transform: "translate3d(0, 0, 0)" },
  ],
  strip: [
    { clipPath: "inset(0 10% 0 10%)", opacity: 0, transform: "translate3d(0, 18px, 0)" },
    { clipPath: "inset(0 0 0 0)", opacity: 1, transform: "translate3d(0, 0, 0)" },
  ],
};

export default function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const activeAnimations = new Set<Animation>();
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target as HTMLElement;
        const variant = (element.dataset.scrollReveal ?? "copy") as RevealVariant;
        const delay = Number(element.dataset.scrollRevealDelay ?? 0);

        observer.unobserve(element);
        element.dataset.scrollRevealed = "true";

        const animation = element.animate(revealKeyframes[variant], {
          delay,
          duration: variant === "strip" ? 560 : 650,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "backwards",
        });

        activeAnimations.add(animation);
        animation.finished
          .catch(() => undefined)
          .finally(() => activeAnimations.delete(animation));
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    });

    revealTargets.forEach((element) => {
      if (element.dataset.scrollRevealed !== "true") {
        observer.observe(element);
      }
    });

    function handleMotionPreference(event: MediaQueryListEvent) {
      if (!event.matches) {
        return;
      }

      observer.disconnect();
      activeAnimations.forEach((animation) => animation.cancel());
      activeAnimations.clear();
    }

    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      observer.disconnect();
      activeAnimations.forEach((animation) => animation.cancel());
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return null;
}
