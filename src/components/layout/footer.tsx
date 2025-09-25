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
  ],
  yasal: [
    { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
    { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
  ],
};

const socialLinks = [
  { href: "#", icon: Linkedin },
  { href: "#", icon: Twitter },
  { href: "#", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Teknoloji ve mühendislik çözümleriyle işinizi geleceğe taşıyoruz.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-muted-foreground hover:text-foreground">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">Sosyal Medya</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold font-headline text-white">Hızlı Linkler</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.hizliLinkler.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline text-white">Yasal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.yasal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline text-white">Bültenimize Abone Olun</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              En son haberleri ve güncellemeleri alın.
            </p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="E-posta adresiniz" className="flex-1" />
              <Button type="submit">Abone Ol</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ADCentral. Tüm hakları saklıdır.
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">ISO 9001, Brigade Yetkili Servis</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
