"use client";

import { useEffect, useRef } from "react";
import { portalShowcase } from "@/data/showcase";

export default function Showcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video || prefersReducedMotion.matches) {
      return;
    }

    const initialScrollY = window.scrollY;
    let hasUserScrolled = false;
    let isVisible = false;
    const syncPlayback = () => {
      if (hasUserScrolled && isVisible && document.visibilityState === "visible") {
        video.play().catch(() => undefined);
        return;
      }

      video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.8;
        syncPlayback();
      },
      { threshold: [0, 0.8] },
    );
    const handleScroll = () => {
      if (window.scrollY === initialScrollY) {
        return;
      }

      hasUserScrolled = true;
      window.removeEventListener("scroll", handleScroll);
      syncPlayback();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        video.pause();
      }
    };

    video.pause();
    observer.observe(video);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, []);

  return (
    <div className="showcase">
      <video
        ref={videoRef}
        className="showcase__video"
        aria-label={portalShowcase.description}
        controls
        loop
        muted
        playsInline
        poster={portalShowcase.poster}
        preload="metadata"
      >
        {portalShowcase.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        Your browser does not support the Portal showcase video.
      </video>
    </div>
  );
}
