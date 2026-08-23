import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuideStep, HelpHeader, HelpShell } from "@/components/Help";
import { WINDOWS_DOWNLOAD_URL } from "@/lib/downloads";

export const metadata: Metadata = { title: "Install Portal on Windows | Portal Help", description: "Download and install Portal for Windows." };

export default function WindowsInstallPage() {
  return <HelpShell><HelpHeader eyebrow="Portal Help · Windows" title="Download and install Portal" description="Follow these steps to install Portal on Windows. The SmartScreen warning appears because Portal is not currently code-signed." /><ol className="mt-14 space-y-8">
    <GuideStep number="1" title="Download Portal for Windows"><p className="text-white/65">Select Download for Windows below, or open the Portal download page and select Download Windows.</p><div className="mt-6 flex flex-wrap gap-4"><a href={WINDOWS_DOWNLOAD_URL} className="rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:bg-purple-400">Download for Windows</a><Link href="/download" className="rounded-xl border border-purple-400/30 px-6 py-3 font-semibold text-purple-100 transition hover:bg-purple-500/10">View download page</Link></div><Image src="/help/windows/download-portal.png" alt="Portal download page with a red arrow pointing to the Download Windows button" width={1918} height={887} className="mt-8 h-auto w-full rounded-xl border border-purple-400/20" priority /></GuideStep>
    <GuideStep number="2" title="Open the installer"><p className="text-white/65">When the download finishes, open the downloaded <span className="font-medium text-white">Portal-Setup.exe</span> file.</p></GuideStep>
    <GuideStep number="3" title="Select More info"><p className="text-white/65">Microsoft Defender SmartScreen may warn you that the app is unrecognized. Select <strong className="text-white">More info</strong> to reveal the option to continue.</p><Image src="/help/windows/smartscreen-more-info.png" alt="Windows SmartScreen warning with a red arrow pointing to More info" width={534} height={500} className="mx-auto mt-8 h-auto w-full max-w-[534px] rounded-lg border border-white/15" /></GuideStep>
    <GuideStep number="4" title="Select Run anyway"><p className="text-white/65">Confirm that the app name is <span className="font-medium text-white">Portal-Setup.exe</span>, then select <strong className="text-white">Run anyway</strong>.</p><Image src="/help/windows/smartscreen-run-anyway.png" alt="Expanded Windows SmartScreen warning with a red arrow pointing to Run anyway" width={534} height={500} className="mx-auto mt-8 h-auto w-full max-w-[534px] rounded-lg border border-white/15" /></GuideStep>
    <GuideStep number="5" title="Finish the setup"><p className="text-white/65">Follow the setup wizard to finish installing Portal. Portal should then open and be ready to use.</p></GuideStep>
  </ol></HelpShell>;
}
