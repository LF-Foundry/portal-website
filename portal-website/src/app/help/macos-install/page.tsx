import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadIcon } from "@/components/Icons";
import { GuideStep, HelpHeader, HelpShell } from "@/components/Help";
import { MACOS_DOWNLOAD_URL } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Install on macOS",
  description: "Download and install Portal for an Apple-silicon Mac.",
};

const steps = ["Download Portal", "Install and open", "Open Privacy & Security", "Select Open Anyway", "Confirm and finish"];

export default function MacOSInstallPage() {
  return (
    <HelpShell>
      <HelpHeader title="Install Portal on macOS." description="Portal currently supports Apple-silicon Macs. Because the app is not yet verified by Apple, macOS may ask you to confirm the first launch." />
      <div className="guide-layout">
        <aside className="guide-toc">
          <p>In this guide</p>
          <ol>{steps.map((step, index) => <li key={step}><a href={`#step-${index + 1}`}><span>{index + 1}</span>{step}</a></li>)}</ol>
          <a className="button button--secondary" href={MACOS_DOWNLOAD_URL}>Download <DownloadIcon /></a>
        </aside>
        <ol className="guide-steps">
          <GuideStep number="1" title="Download Portal">
            <p>Select the macOS download below, or open the Portal download page and choose macOS.</p>
            <div className="guide-actions"><a className="button button--secondary" href={MACOS_DOWNLOAD_URL}>Download for macOS <DownloadIcon /></a><Link className="button button--secondary" href="/download">View download page</Link></div>
          </GuideStep>
          <GuideStep number="2" title="Install and open Portal"><p>Open the downloaded DMG, drag Portal into Applications, then open Portal. If macOS blocks it, continue to the next step.</p></GuideStep>
          <GuideStep number="3" title="Open Privacy & Security">
            <p>Open <strong>System Settings</strong>, search for <strong>Privacy & Security</strong>, and open that section.</p>
            <div className="guide-crop"><Image src="/help/macos/privacy-and-security.png" alt="macOS System Settings with Privacy & Security highlighted" width={5000} height={2813} /></div>
          </GuideStep>
          <GuideStep number="4" title="Select Open Anyway">
            <p>Scroll to Security, find the message saying Portal was blocked, then select <strong>Open Anyway</strong>.</p>
            <div className="guide-crop"><Image src="/help/macos/open-anyway.png" alt="macOS Privacy & Security settings with Open Anyway highlighted" width={5000} height={2813} /></div>
          </GuideStep>
          <GuideStep number="5" title="Confirm and finish"><p>Confirm that you want to open Portal. The app will launch and be ready to use.</p></GuideStep>
        </ol>
      </div>
    </HelpShell>
  );
}
