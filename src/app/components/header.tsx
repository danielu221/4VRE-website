import Link from "next/link";
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
      </div>
    </header>
  );
} 