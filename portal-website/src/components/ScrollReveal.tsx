"use client";

import { useLayoutEffect } from "react";

type RevealVariant = "copy" | "visual";

const revealKeyframes: Record<RevealVariant, Keyframe[]> = {
  copy: [
    {
      filter: "blur(10px)",
      opacity: 0,
      transform: "translate3d(0, 88px, 0) scale(0.96)",
      transformOrigin: "50% 100%",
    },
    {
      filter: "blur(0)",
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
      transformOrigin: "50% 100%",
    },
  ],
  visual: [
    {
      clipPath: "inset(16% 0 0 0 round 18px)",
      filter: "blur(14px)",
      opacity: 0,
      transform: "translate3d(0, 112px, 0) scale(0.94)",
      transformOrigin: "50% 100%",
    },
    {
      clipPath: "inset(0 0 0 0 round 18px)",
      filter: "blur(0)",
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
      transformOrigin: "50% 100%",
    },
  ],
};

function getRevealVariant(element: HTMLElement): RevealVariant {
  return element.dataset.scrollReveal === "visual" ? "visual" : "copy";
}

function prepareReveal(element: HTMLElement, variant: RevealVariant) {
  element.style.filter = variant === "visual" ? "blur(14px)" : "blur(10px)";
  element.style.opacity = "0";
  element.style.transform = variant === "visual"
    ? "translate3d(0, 112px, 0) scale(0.94)"
    : "translate3d(0, 88px, 0) scale(0.96)";
  element.style.transformOrigin = "50% 100%";

  if (variant === "visual") {
    element.style.clipPath = "inset(16% 0 0 0 round 18px)";
  }
}

function clearRevealStyles(element: HTMLElement) {
  [
    "clip-path",
    "filter",
    "opacity",
    "transform",
    "transform-origin",
    "will-change",
  ].forEach((property) => element.style.removeProperty(property));
}

export default function ScrollReveal() {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      reducedMotion.matches
      || !("IntersectionObserver" in window)
      || !("animate" in HTMLElement.prototype)
    ) {
      return;
    }

    const activeAnimations = new Map<Animation, HTMLElement>();
    const preparedElements = new Set<HTMLElement>();
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target as HTMLElement;
        const variant = getRevealVariant(element);
        const delay = Number(element.dataset.scrollRevealDelay ?? 0);

        observer.unobserve(element);
        element.dataset.scrollRevealed = "true";
        element.style.willChange = "transform, opacity, filter, clip-path";

        const animation = element.animate(revealKeyframes[variant], {
          delay,
          duration: variant === "visual" ? 880 : 800,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        });

        activeAnimations.set(animation, element);
        animation.finished
          .catch(() => undefined)
          .finally(() => {
            animation.cancel();
            clearRevealStyles(element);
            preparedElements.delete(element);
            activeAnimations.delete(animation);
          });
      });
    }, {
      rootMargin: "0px 0px 8% 0px",
      threshold: 0,
    });

    revealTargets.forEach((element) => {
      if (element.dataset.scrollRevealed === "true") {
        return;
      }

      const hasAlreadyEnteredViewport = element.getBoundingClientRect().top < window.innerHeight;

      if (hasAlreadyEnteredViewport) {
        element.dataset.scrollRevealed = "true";
        return;
      }

      const variant = getRevealVariant(element);
      prepareReveal(element, variant);
      preparedElements.add(element);
      observer.observe(element);
    });

    function stopRevealAnimations() {
      observer.disconnect();
      activeAnimations.forEach((element, animation) => {
        animation.cancel();
        clearRevealStyles(element);
      });
      activeAnimations.clear();
      preparedElements.forEach(clearRevealStyles);
      preparedElements.clear();
    }

    function handleMotionPreference(event: MediaQueryListEvent) {
      if (!event.matches) {
        return;
      }

      stopRevealAnimations();
    }

    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      stopRevealAnimations();
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return null;
}
