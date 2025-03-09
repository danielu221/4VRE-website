import Link from "next/link"
import { Phone, Mail} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#605c53] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-semibold">
              4 Vision Real Estate
            </Link>
            <div className="space-y-4">
              {/* <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                2118 Thornridge Cir.
                <br />
                Dubai, UAE 35624
              </p> */}
              <p className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-secondary-foreground" />
                <Link href="tel:+48695585897" className="hover:text-white transition-colors text-secondary-foreground">
                  +48 695 585 897
                </Link>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-secondary-foreground" />
                <Link href="mailto:kontakt@4vre.com" className="hover:text-white transition-colors text-secondary-foreground">
                  kontakt@4vre.com
                </Link>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-6">
            <h3 className="text-lg font-semibold">QUICK LINKS</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-gray-400 hover:text-white transition-colors">
                  Project
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            Created by <Link href="https://dancode.pl" className="text-white hover:text-sky-300 transition-colors">Dancode Mateusz Danieluk</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

