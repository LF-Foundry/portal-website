import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, DesktopIcon, DownloadIcon, WindowsIcon } from "@/components/Icons";
import { MACOS_DOWNLOAD_URL, WINDOWS_DOWNLOAD_URL } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Portal for Windows or Apple-silicon Macs.",
};

const platforms = [
  {
    name: "Windows",
    detail: "Windows 10 or later",
    description: "The Portal desktop installer for modern Windows PCs.",
    downloadHref: WINDOWS_DOWNLOAD_URL,
    guideHref: "/help/windows-install",
    Icon: WindowsIcon,
  },
  {
    name: "macOS",
    detail: "Apple silicon",
    description: "The Portal disk image for Macs with an M-series chip.",
    downloadHref: MACOS_DOWNLOAD_URL,
    guideHref: "/help/macos-install",
    Icon: DesktopIcon,
  },
];

export default function DownloadPage() {
  return (
    <main className="page-shell download-page">
      <header className="page-heading page-heading--wide">
        <h1>Choose your desktop.</h1>
        <p>Portal is available for Windows and Apple-silicon Macs. Pick your platform, then follow the short guide if your system shows a security prompt.</p>
      </header>
      <section className="platform-list" aria-label="Portal downloads">
        {platforms.map(({ name, detail, description, downloadHref, guideHref, Icon }) => (
          <article className="platform-row" key={name}>
            <div className="platform-row__icon"><Icon /></div>
            <div className="platform-row__copy">
              <div><h2>{name}</h2><span>{detail}</span></div>
              <p>{description}</p>
            </div>
            <div className="platform-row__actions">
              <a className="button button--secondary" href={downloadHref}>Download <DownloadIcon /></a>
              <Link className="text-link" href={guideHref}>Installation guide <ArrowIcon /></Link>
            </div>
          </article>
        ))}
      </section>
      <aside className="download-note">
        <span>Before you install</span>
        <p>Portal is not currently code-signed for Windows or verified by Apple, so your system may ask you to confirm the first launch. The guides show exactly what to expect.</p>
        <Link className="text-link" href="/help">Open Portal Help <ArrowIcon /></Link>
      </aside>
    </main>
  );
}
