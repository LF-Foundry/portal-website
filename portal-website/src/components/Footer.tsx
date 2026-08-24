import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link href="/" className="site-footer__brand">Portal</Link>
          <p>Every AI. One Portal.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/download">Download</Link>
          <Link href="/help">Help</Link>
          <a href="mailto:useprtl@gmail.com">Contact</a>
        </nav>
        <p className="site-footer__legal">© 2026 Portal</p>
      </div>
    </footer>
  );
}
