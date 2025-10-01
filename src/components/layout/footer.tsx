
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          <div className="space-y-4 md:col-span-2">
            <div className="flex flex-col items-start space-y-4">
              <Logo />
              <div className="flex items-center space-x-4">
                <a href="https://brigade-electronics.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FBrigade%2FBrigade-logo-black-teal-dot.png?alt=media&token=50d9e973-9e78-4c03-8fbd-e885072265a3"
                    alt="Brigade Logo"
                    width={100}
                    height={40}
                    className="h-10 w-[100px] block dark:hidden"
                  />
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FBrigade%2FBrigade-logo-white-teal-dot.png?alt=media&token=94609207-14e0-4cb0-94fb-5aff75f25041"
                    alt="Brigade Logo"
                    width={100}
                    height={40}
                    className="h-10 w-[100px] hidden dark:block"
                  />
                </a>
                <a href="https://brigade-electronics.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FBrigade%2Fbsp-.PNG?alt=media&token=681c1759-61ec-4a0b-a093-e9d562b5e1a3"
                    alt="Brigade BSP Logo"
                    width={80}
                    height={32}
                    className="h-8 w-20"
                  />
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Araç güvenlik sistemlerinde lider teknoloji çözümleri.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link href="/hakkimizda" className="text-sm text-muted-foreground hover:text-primary">Hakkımızda</Link></li>
              <li><Link href="/urunler" className="text-sm text-muted-foreground hover:text-primary">Ürünler</Link></li>
              <li><Link href="/hizmetler" className="text-sm text-muted-foreground hover:text-primary">Hizmetler</Link></li>
              <li><Link href="/projeler" className="text-sm text-muted-foreground hover:text-primary">Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li><Link href="/gizlilik-politikasi" className="text-sm text-muted-foreground hover:text-primary">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-sartlari" className="text-sm text-muted-foreground hover:text-primary">Kullanım Şartları</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <div className="text-sm text-muted-foreground">
              <p>Adres: Örnek Mahallesi, No: 123, İstanbul</p>
              <p>Email: info@adctasarim.com</p>
              <p>Telefon: +90 212 123 4567</p>
            </div>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ADC Tasarım. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
