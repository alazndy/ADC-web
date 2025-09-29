'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsSearchOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo />
              <div className="border-l border-gray-300 dark:border-gray-700 h-10"></div>
              <a href="https://brigade-electronics.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FBrigade%2FBrigade-logo-white-teal-dot.png?alt=media&token=94609207-14e0-4cb0-94fb-5aff75f25041"
                  alt="Brigade Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://brigade-electronics.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FBrigade%2Fbsp-.PNG?alt=media&token=681c1759-61ec-4a0b-a093-e9d562b5e1a3"
                  alt="Brigade BSP Logo"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="lg:flex">
                <Search className="h-5 w-5" />
                <span className="sr-only">Ara</span>
              </Button>
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menüyü Aç</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-3/4 md:w-1/2 p-0">
                  <div className="flex justify-between items-center p-4 border-b">
                    <div className="flex items-center space-x-2">
                        <a href="https://brigade-electronics.com/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FBrigade%2FBrigade-logo-white-teal-dot.png?alt=media&token=94609207-14e0-4cb0-94fb-5aff75f25041"
                                alt="Brigade Logo"
                                width={80}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
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
                            className="block text-lg font-medium py-2 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
