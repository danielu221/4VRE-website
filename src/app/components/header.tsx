import Link from "next/link";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          4 Vision Real Estate
        </Link>
        {/* <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-80 transition-opacity">
              O NAS
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:opacity-80 transition-opacity">
              INWESTYCJE
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              KONTAKT
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
} 