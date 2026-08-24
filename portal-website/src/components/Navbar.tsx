import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Portal home">
          <Image src="/portal-logo.png" alt="" width={32} height={32} priority />
          <span>Portal</span>
        </Link>
        <div className="site-nav__links">
          <Link href="/#home">Home</Link>
          <Link href="/#features">Features</Link>
          <Link href="/help">Help</Link>
        </div>
        <Link href="/download" className="nav-download">
          Download
          <ArrowIcon />
        </Link>
      </nav>
    </header>
  );
}
