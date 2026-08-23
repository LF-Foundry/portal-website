import Link from "next/link";
import { MACOS_DOWNLOAD_URL, WINDOWS_DOWNLOAD_URL } from "@/lib/downloads";

export default function DownloadPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07030d] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[120px]" /><div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[140px]" /></div>
      <section className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold md:text-6xl">Download Portal</h1><p className="mx-auto mt-4 max-w-xl text-white/60">Choose your operating system to get started.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10"><h2 className="text-2xl font-semibold text-purple-100">Windows</h2><p className="mt-2 text-sm text-white/50">Download Portal for Windows</p><a href={WINDOWS_DOWNLOAD_URL} className="mt-6 block rounded-xl bg-purple-500 px-5 py-3 font-semibold shadow-lg shadow-purple-500/25 transition hover:bg-purple-400">Download Windows</a><Link href="/help/windows-install" className="mt-4 inline-block text-sm font-medium text-purple-300 transition hover:text-purple-200">View installation guide &rarr;</Link></article>
          <article className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10"><h2 className="text-2xl font-semibold text-purple-100">macOS</h2><p className="mt-2 text-sm text-white/50">Download Portal for macOS</p><a href={MACOS_DOWNLOAD_URL} className="mt-6 block rounded-xl bg-purple-500 px-5 py-3 font-semibold shadow-lg shadow-purple-500/25 transition hover:bg-purple-400">Download macOS</a><Link href="/help/macos-install" className="mt-4 inline-block text-sm font-medium text-purple-300 transition hover:text-purple-200">View installation guide &rarr;</Link></article>
        </div>
      </section>
    </main>
  );
}
