import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadIcon } from "@/components/Icons";
import { GuideStep, HelpHeader, HelpShell } from "@/components/Help";
import { WINDOWS_DOWNLOAD_URL } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Install on Windows",
  description: "Download and install Portal for Windows.",
};

const steps = ["Download Portal", "Open the installer", "Select More info", "Select Run anyway", "Finish setup"];

export default function WindowsInstallPage() {
  return (
    <HelpShell>
      <HelpHeader title="Install Portal on Windows." description="Portal is not currently code-signed, so Microsoft Defender SmartScreen may ask you to confirm the installer. These five steps show the full process." />
      <div className="guide-layout">
        <aside className="guide-toc">
          <p>In this guide</p>
          <ol>{steps.map((step, index) => <li key={step}><a href={`#step-${index + 1}`}><span>{index + 1}</span>{step}</a></li>)}</ol>
          <a className="button button--secondary" href={WINDOWS_DOWNLOAD_URL}>Download <DownloadIcon /></a>
        </aside>
        <ol className="guide-steps">
          <GuideStep number="1" title="Download Portal">
            <p>Select the Windows download below, or open the Portal download page and choose Windows.</p>
            <div className="guide-actions"><a className="button button--secondary" href={WINDOWS_DOWNLOAD_URL}>Download for Windows <DownloadIcon /></a><Link className="button button--secondary" href="/download">View download page</Link></div>
          </GuideStep>
          <GuideStep number="2" title="Open the installer"><p>When the download finishes, open <strong>Portal-Setup.exe</strong> from your browser’s downloads or Downloads folder.</p></GuideStep>
          <GuideStep number="3" title="Select More info">
            <p>Microsoft Defender SmartScreen may say the app is unrecognized. Select <strong>More info</strong> to reveal the option to continue.</p>
            <Image src="/help/windows/smartscreen-more-info.png" alt="Windows SmartScreen warning with More info highlighted" width={534} height={500} className="guide-image guide-image--small" />
          </GuideStep>
          <GuideStep number="4" title="Select Run anyway">
            <p>Confirm the app name is <strong>Portal-Setup.exe</strong>, then select <strong>Run anyway</strong>.</p>
            <Image src="/help/windows/smartscreen-run-anyway.png" alt="Expanded Windows SmartScreen warning with Run anyway highlighted" width={534} height={500} className="guide-image guide-image--small" />
          </GuideStep>
          <GuideStep number="5" title="Finish setup"><p>Follow the setup wizard. When it finishes, Portal will open and be ready to use.</p></GuideStep>
        </ol>
      </div>
    </HelpShell>
  );
}
