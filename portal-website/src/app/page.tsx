import Image from "next/image";
import Link from "next/link";
import DownloadActions from "@/components/DownloadActions";
import FaqList from "@/components/FaqList";
import { ArrowIcon, LockIcon } from "@/components/Icons";
import ServiceMarquee from "@/components/ServiceMarquee";
import Showcase from "@/components/Showcase";
import { featuredPortalServices, portalServices } from "@/data/services";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-stage" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Every AI.<br />One Portal.</h1>
          <p>Open the AI sites you already use in one focused desktop window—without rebuilding your browser tabs every time.</p>
          <DownloadActions compact />
        </div>
        <div className="hero-stage__media"><Showcase /></div>
      </section>

      <section className="story" id="features" aria-labelledby="features-title">
        <article className="story-beat story-beat--orchestrate">
          <div className="story-copy">
            <h2 id="features-title">Your AI tabs, choreographed.</h2>
            <p>Move between multiple AI services without hunting through a crowded browser. Portal keeps each site close, visible, and ready when you need it.</p>
          </div>
          <div className="window-map" aria-label="Several AI windows converging into Portal">
            <div className="window-map__sources">
              {portalServices.slice(0, 3).map((service) => (
                <div className="mini-window" key={service.name}>
                  <span /><span /><span /><strong>{service.name}</strong>
                </div>
              ))}
            </div>
            <svg className="window-map__paths" viewBox="0 0 180 240" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 32C96 32 92 120 180 120" /><path d="M0 120H180" /><path d="M0 208C96 208 92 120 180 120" />
            </svg>
            <div className="portal-window">
              <div className="portal-window__chrome"><span /><span /><span /><b>Portal</b></div>
              <div className="portal-window__body"><Image src="/portal-logo.png" alt="" width={64} height={64} /><p>One focused window</p></div>
            </div>
          </div>
        </article>

        <ServiceMarquee />

        <article className="story-beat story-beat--reverse">
          <div className="story-copy">
            <h2>The sites you already know.</h2>
            <p>Portal loads the official services directly. Sign in where you normally sign in and use each product’s familiar interface—inside a calmer desktop workflow.</p>
          </div>
          <div className="site-stack" aria-label="Official AI service interfaces inside Portal">
            {featuredPortalServices.map((service) => (
              <div key={service.name}>
                <span className="site-stack__logo" aria-hidden="true">
                  <Image src={service.logo} alt="" width={22} height={22} unoptimized />
                </span>
                <strong>{service.name}</strong><small>Official website</small>
              </div>
            ))}
          </div>
        </article>

        <article className="story-beat story-beat--pin">
          <div className="story-copy">
            <h2>There when useful. Quiet when not.</h2>
            <p>Pin Portal to a corner, move it freely, or close it when your work is done. Smooth window and tab motion keeps the tool feeling present without demanding attention.</p>
          </div>
          <div className="pin-demo" aria-label="Portal pinned neatly to the corner of a desktop">
            <div className="pin-demo__desktop">
              <div className="pin-demo__portal">
                <div><Image src="/portal-logo.png" alt="" width={28} height={28} /><span>Portal</span><LockIcon /></div>
                <p>Ready when you are.</p>
              </div>
              <span className="pin-demo__corner" />
            </div>
          </div>
        </article>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div>
          <h2 id="faq-title">A few useful answers.</h2>
          <p>Need help installing? The guides walk through both Windows and macOS security prompts.</p>
          <Link className="text-link" href="/help">Open Portal Help <ArrowIcon /></Link>
        </div>
        <FaqList />
      </section>
    </main>
  );
}
