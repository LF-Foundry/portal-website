import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export function HelpShell({ children }: { children: React.ReactNode }) {
  return <main className="page-shell help-shell">{children}</main>;
}

export function HelpHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export function GuideCard({
  title,
  description,
  href,
  status,
}: {
  title: string;
  description: string;
  href?: string;
  status?: string;
}) {
  const content = (
    <>
      <div className="guide-card__top">
        <h2>{title}</h2>
        {status && <span>{status}</span>}
      </div>
      <p>{description}</p>
      {href && <span className="guide-card__link">Read guide <ArrowIcon /></span>}
    </>
  );
  const className = `guide-card${href ? " guide-card--link" : " guide-card--muted"}`;

  return href ? <Link href={href} className={className}>{content}</Link> : <article className={className}>{content}</article>;
}

export function GuideStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="guide-step" id={`step-${number}`}>
      <div className="guide-step__number">{number}</div>
      <div className="guide-step__body">
        <h2>{title}</h2>
        <div className="guide-step__content">{children}</div>
      </div>
    </li>
  );
}
