import { DesktopIcon, DownloadIcon, WindowsIcon } from "@/components/Icons";
import { MACOS_DOWNLOAD_URL, WINDOWS_DOWNLOAD_URL } from "@/lib/downloads";

export default function DownloadActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`download-actions${compact ? " download-actions--compact" : ""}`}>
      <a className="download-action" href={WINDOWS_DOWNLOAD_URL}>
        <WindowsIcon />
        <span><small>Download for</small>Windows</span>
        <DownloadIcon className="download-action__end" />
      </a>
      <a className="download-action" href={MACOS_DOWNLOAD_URL}>
        <DesktopIcon />
        <span><small>Download for</small>macOS</span>
        <DownloadIcon className="download-action__end" />
      </a>
    </div>
  );
}
