import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  hizliLinkler: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/projeler", label: "Projeler" },
    { href: "/iletisim", label: "İletişim" },
  ],
  sirket: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/sektorler", label: "Sektörler" },
    { href: "/teknoloji-cozumleri", label: "Teknoloji Çözümleri" },
  ],
  yasal: [
    { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
    { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
  ],
};

const socialLinks = [
  { href: "#", icon: Linkedin, name: "LinkedIn" },
  { href: "#", icon: Twitter, name: "Twitter" },
  { href: "#", icon: Facebook, name: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Logo forceWhiteText />
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Teknoloji ve mühendislik çözümleriyle işinizi ve çalışanlarınızı güvende tutuyoruz.
            </p>
             <p className="mt-6 text-sm text-white/80 font-semibold">ADC TASARIM DANIŞMANLIK LTD.ŞTİ</p>
            <p className="mt-2 text-sm text-white/60">
                Kızılırmak Mah. Dumlupınar Blv. NEXT LEVEL No: 3C1-160 Çankaya, Ankara
            </p>
            <p className="mt-1 text-sm text-white/60">
                <a href="tel:+903122403484" className="hover:text-white">T: +90 (312) 240 34 84</a>
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold font-headline text-white">Hızlı Linkler</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.hizliLinkler.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           <div>
            <h3 className="font-semibold font-headline text-white">Şirket</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.sirket.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold font-headline text-white">Yasal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.yasal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="border-t border-white/10 py-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} ADC Tasarım. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-white/60 hover:text-white transition-colors">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
