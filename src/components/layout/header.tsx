"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const SearchModal = dynamic(() => import('@/components/search-modal').then(mod => mod.SearchModal));

const navLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/teknoloji-cozumleri", label: "Teknoloji Çözümleri" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent absolute text-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Logo forceWhiteText={!isScrolled} />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/80 hover:text-white'
                  }`}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className={`${isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10 hover:text-white'}`}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Ara</span>
              </Button>
              <div className="hidden lg:block">
                 <Button asChild variant={isScrolled ? "default" : "secondary"}>
                    <Link href="/randevu-al">Randevu Al</Link>
                 </Button>
              </div>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className={`${isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10 hover:text-white'}`}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menüyü Aç</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm bg-card p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                       <Logo />
                       <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                         <X className="h-6 w-6" />
                         <span className="sr-only">Menüyü Kapat</span>
                       </Button>
                    </div>
                    <nav className="flex-grow p-4">
                      <ul className="space-y-4">
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block text-lg font-medium hover:text-primary transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                              prefetch={false}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-4 border-t">
                      <Button asChild className="w-full">
                        <Link href="/randevu-al">Randevu Al</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && <SearchModal isOpen={isSearchOpen} onOpenChange={setIsSearchOpen} />}
    </>
  );
}
