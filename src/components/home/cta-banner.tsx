import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToActionBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline">
            Filonuzu Geleceğe Taşımaya Hazır Mısınız?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            ADC Tasarım&apos;ın sunduğu yenilikçi teknolojilerle tanışın, verimliliği artırın ve operasyonel mükemmelliğe ulaşın.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/randevu-al">Projenizi Başlatın</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10" asChild>
               <Link href="/teknoloji-cozumleri">Daha Fazla Bilgi <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
