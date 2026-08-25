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

    video.play().catch(() => undefined);
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
