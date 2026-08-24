"use client";

import { useEffect, useRef, useState } from "react";
import { portalShowcase } from "@/data/showcase";

export default function Showcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "playing" | "paused" | "error">("loading");

  useEffect(() => {
    const video = videoRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video || prefersReducedMotion.matches) {
      return;
    }

    video.play().catch(() => setStatus("ready"));
  }, []);

  return (
    <figure className="showcase" aria-label={portalShowcase.description}>
      <video
        ref={videoRef}
        className="showcase__video"
        controls
        loop
        muted
        playsInline
        poster={portalShowcase.poster}
        preload="metadata"
        onCanPlay={() => setStatus("ready")}
        onError={() => setStatus("error")}
        onPause={() => setStatus("paused")}
        onPlay={() => setStatus("playing")}
      >
        {portalShowcase.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        Your browser does not support the Portal showcase video.
      </video>
      <figcaption className="showcase__caption">
        <span className={`showcase__pulse showcase__pulse--${status}`} aria-hidden="true" />
        {status === "error" ? "Preview unavailable" : portalShowcase.title}
      </figcaption>
      <div className="showcase__services" aria-hidden="true">
        <span>ChatGPT</span><span>Claude</span><span>Gemini</span>
      </div>
    </figure>
  );
}
