import type { Metadata } from "next";
import { GuideCard, HelpHeader, HelpShell } from "@/components/Help";

export const metadata: Metadata = { title: "Help | Portal", description: "Find installation guides and help for Portal." };

export default function DocsPage() {
  return <HelpShell><HelpHeader title="How can we help?" description="Find installation guides and helpful information for getting started with Portal. More guides will be added here as Portal expands." /><section className="mt-14"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">Getting started</p><h2 className="mt-2 text-3xl font-bold tracking-tight">Installation guides</h2></div><div className="mt-7 grid gap-5 md:grid-cols-2"><GuideCard title="Install on Windows" description="Learn how to download Portal and safely continue through the Windows SmartScreen warning." href="/docs/windows-install" status="Available" /><GuideCard title="Install on macOS" description="A macOS installation guide will be available when the Mac release is ready." status="Coming soon" /></div></section><section className="mt-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">More help</p><div className="mt-4"><GuideCard title="Troubleshooting" description="Common questions and fixes for downloading, installing, and using Portal will be collected here." status="Coming soon" /></div></section></HelpShell>;
}
