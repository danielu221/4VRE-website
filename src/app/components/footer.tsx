import Link from "next/link"
import { Phone, Mail} from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-[#605c53] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
          <Link href="/"><img src="/4vre-logo-horizontal-white.svg" alt="4 Vision Real Estate Logo" className="h-14 md:h-12"/></Link>
            <div className="space-y-4">
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
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-secondary-foreground text-sm text-center">
            Created by <Link href="https://dancode.pl" className="text-white hover:text-sky-300 transition-colors">Dancode Mateusz Danieluk</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

