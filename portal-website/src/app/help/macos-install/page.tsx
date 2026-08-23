import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuideStep, HelpHeader, HelpShell } from "@/components/Help";
import { MACOS_DOWNLOAD_URL } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Install Portal on macOS | Portal Help",
  description: "Download and install Portal for macOS.",
};

export default function MacOSInstallPage() {
  return (
    <HelpShell>
      <HelpHeader
        eyebrow="Portal Help · macOS"
        title="Download and install Portal"
        description="Follow these steps to install Portal on an Apple-silicon Mac. macOS may block the first launch because Portal is not currently verified by Apple."
      />
      <ol className="mt-14 space-y-8">
        <GuideStep number="1" title="Download Portal for macOS">
          <p className="text-white/65">
            Select Download for macOS below, or open the Portal download page
            and select Download macOS.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={MACOS_DOWNLOAD_URL}
              className="rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:bg-purple-400"
            >
              Download for macOS
            </a>
            <Link
              href="/download"
              className="rounded-xl border border-purple-400/30 px-6 py-3 font-semibold text-purple-100 transition hover:bg-purple-500/10"
            >
              View download page
            </Link>
          </div>
          <Image
            src="/help/macos/download-portal.png"
            alt="Portal download page with a red arrow pointing to the Download Mac button"
            width={5000}
            height={2813}
            className="mt-8 h-auto w-full rounded-xl border border-purple-400/20"
            priority
          />
        </GuideStep>
        <GuideStep number="2" title="Install and open Portal">
          <p className="text-white/65">
            Open the downloaded DMG, drag Portal into your Applications folder,
            then open Portal. If macOS blocks the app, continue to the next
            step.
          </p>
        </GuideStep>
        <GuideStep number="3" title="Open Privacy & Security">
          <p className="text-white/65">
            Open <strong className="text-white">System Settings</strong>, search
            for <strong className="text-white">Privacy & Security</strong>, and
            open that section.
          </p>
          <div className="relative mx-auto mt-8 aspect-[3220/2813] w-full max-w-[720px] overflow-hidden rounded-xl border border-white/15">
            <Image
              src="/help/macos/privacy-and-security.png"
              alt="macOS System Settings with a red arrow pointing to Privacy & Security"
              width={5000}
              height={2813}
              className="absolute inset-y-0 left-[-27.6%] h-full w-auto max-w-none"
            />
          </div>
        </GuideStep>
        <GuideStep number="4" title="Select Open Anyway">
          <p className="text-white/65">
            Scroll to the Security section, find the message saying Portal was
            blocked, then select <strong className="text-white">Open Anyway</strong>.
          </p>
          <div className="relative mx-auto mt-8 aspect-[3220/2813] w-full max-w-[720px] overflow-hidden rounded-xl border border-white/15">
            <Image
              src="/help/macos/open-anyway.png"
              alt="macOS Privacy & Security settings with a red arrow pointing to Open Anyway"
              width={5000}
              height={2813}
              className="absolute inset-y-0 left-[-27.6%] h-full w-auto max-w-none"
            />
          </div>
        </GuideStep>
        <GuideStep number="5" title="Confirm and finish">
          <p className="text-white/65">
            Confirm that you want to open Portal when prompted. Portal should
            then open and be ready to use.
          </p>
        </GuideStep>
      </ol>
    </HelpShell>
  );
}
