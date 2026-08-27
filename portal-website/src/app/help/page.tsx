import type { Metadata } from "next";
import { GuideCard, HelpHeader, HelpShell } from "@/components/Help";

export const metadata: Metadata = {
  title: "Help",
  description: "Installation guides and practical help for Portal.",
  alternates: {
    canonical: "/help",
  },
};

export default function HelpPage() {
  return (
    <HelpShell>
      <HelpHeader title="Get Portal running." description="Clear, step-by-step guidance for downloading and installing Portal on Windows or macOS." />
      <section className="help-section" aria-labelledby="install-guides-title">
        <div className="section-heading"><h2 id="install-guides-title">Installation guides</h2><p>Start with the guide for your computer.</p></div>
        <div className="guide-list">
          <GuideCard title="Install on Windows" description="Download Portal, open the installer, and safely continue through Microsoft Defender SmartScreen." href="/help/windows-install" status="5 steps" />
          <GuideCard title="Install on macOS" description="Install Portal on an Apple-silicon Mac and safely continue through the macOS security prompt." href="/help/macos-install" status="5 steps" />
        </div>
      </section>
      <section className="help-section help-section--quiet" aria-labelledby="more-help-title">
        <div className="section-heading"><h2 id="more-help-title">More help</h2><p>More troubleshooting guidance will be added as Portal grows.</p></div>
        <GuideCard title="Troubleshooting" description="Common answers for downloading, signing in, and using Portal are being prepared." status="Coming soon" />
      </section>
    </HelpShell>
  );
}
