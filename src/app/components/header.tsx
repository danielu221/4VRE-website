import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Custom navigation menu style without background
const customNavigationStyle = "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:opacity-80 focus:outline-none disabled:pointer-events-none disabled:opacity-50";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img 
            src="/4vre-logo-horizontal-black.svg" 
            alt="4 Vision Real Estate Logo" 
            className="h-6 md:h-12"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={customNavigationStyle}>
                  HOME
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={customNavigationStyle}>
                  O NAS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="#investments" legacyBehavior passHref>
                <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:opacity-80 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  INWESTYCJE
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/inwestycje/wyrwa"
                        className={customNavigationStyle}
                      >
                        WYRWA RESIDENCE
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="#footer" legacyBehavior passHref>
                <NavigationMenuLink className={customNavigationStyle}>
                  KONTAKT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-4">
          <button 
            className="absolute top-6 right-4 p-2"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="#about" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              O NAS
            </Link>
            <div className="py-2 border-b border-gray-100">
              <Link 
                href="#investments"
                className="text-lg font-medium mb-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                INWESTYCJE
              </Link>
              <Link 
                href="/inwestycje/wyrwa" 
                className="block pl-4 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                WYRWA RESIDENCE
              </Link>
            </div>
            <Link 
              href="#footer" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              KONTAKT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 