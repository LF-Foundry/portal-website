import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07030d] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[120px] animate-[portalGlow_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[140px] animate-[portalGlow_12s_ease-in-out_infinite]" />
        <div className="absolute left-[45%] top-[30%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px] animate-[portalGlow_15s_ease-in-out_infinite]" />
      </div>

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-purple-500/20 bg-[#07030d]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/portal-logo.png" alt="Portal logo" width={42} height={42} />
            <span className="text-xl font-bold">Portal</span>
          </Link>

          <div className="hidden gap-6 text-sm text-white/60 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

        </div>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <Image
          src="/portal-logo.png"
          alt="Portal logo"
          width={160}
          height={160}
          className="mb-8 animate-[portalFloat_5s_ease-in-out_infinite] drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]"
        />

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
          Your AI chats, one click away.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          Portal is a clean floating desktop widget that lets you open ChatGPT,
          Claude, Gemini, and more without filling your browser with tabs.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/download"
            className="rounded-xl bg-purple-500 px-8 py-4 font-semibold text-white shadow-xl shadow-purple-500/30 hover:bg-purple-400"
          >
            Download
          </Link>

          <Link
            href="/help"
            className="rounded-xl border border-purple-400/30 px-8 py-4 font-semibold text-purple-100 hover:bg-purple-500/10"
          >
            Help Section
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold">
          Built to stay out of your way.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Floating Widget", "Keep your favorite AI tools one click away."],
            ["Multiple LLMs", "Use ChatGPT, Claude, Gemini, etc"],
            ["Corner Lock", "Lock Portal to a corner or let it free roam."],
            ["Clean Animations", "Smooth opening, closing, and tab movement."],
            ["Local Logins", "Sign in directly through the official AI websites."],
            ["Windows & Mac", "Built for a clean desktop experience on Windows and macOS."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10"
            >
              <h3 className="text-xl font-semibold text-purple-100">{title}</h3>
              <p className="mt-3 text-white/55">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Contact us</h2>

        <p className="mt-4 text-white/60">
          Have questions, feedback, or bugs to report?
        </p>

        <a
          href="mailto:useprtl@gmail.com"
          className="mt-6 inline-block text-lg font-semibold text-purple-300 transition hover:text-purple-200"
        >
          useprtl@gmail.com
        </a>
      </section>

      <footer className="relative z-10 border-t border-purple-500/20 py-8 text-center text-white/40">
        © 2026 Portal. All rights reserved.
      </footer>
    </main>
  );
}

function FAQ({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-6">
      <h3 className="font-semibold text-purple-100">{question}</h3>
      <p className="mt-2 text-white/60">{children}</p>
    </div>
  );
}
