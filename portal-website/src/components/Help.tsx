import Link from "next/link";

export function HelpShell({ children }: { children: React.ReactNode }) {
  return <main className="relative min-h-screen overflow-hidden bg-[#07030d] px-6 py-20 text-white md:py-28"><div className="pointer-events-none fixed inset-0 overflow-hidden"><div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/25 blur-[120px]" /><div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[140px]" /></div><div className="relative z-10 mx-auto max-w-5xl">{children}</div></main>;
}

export function HelpHeader({ eyebrow = "Portal Help", title, description }: { eyebrow?: string; title: string; description: string }) {
  return <header className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">{eyebrow}</p><h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1><p className="mt-5 text-lg leading-8 text-white/60">{description}</p></header>;
}

export function GuideCard({ title, description, href, status }: { title: string; description: string; href?: string; status?: string }) {
  const content = <><div className="flex items-start justify-between gap-4"><h2 className="text-2xl font-semibold text-purple-100">{title}</h2>{status && <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/50">{status}</span>}</div><p className="mt-3 leading-7 text-white/55">{description}</p>{href && <span className="mt-6 inline-block text-sm font-semibold text-purple-300">Read guide →</span>}</>;
  const className = `rounded-2xl border border-purple-400/20 bg-white/[0.04] p-7 ${href ? "transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10" : "opacity-75"}`;
  return href ? <Link href={href} className={className}>{content}</Link> : <article className={className}>{content}</article>;
}

export function GuideStep({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <li className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-8"><div className="flex items-center gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 font-bold shadow-lg shadow-purple-500/25">{number}</span><h2 className="text-2xl font-semibold text-purple-100">{title}</h2></div><div className="mt-5 leading-7 md:pl-14">{children}</div></li>;
}
