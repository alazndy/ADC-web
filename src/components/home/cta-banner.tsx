import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToActionBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline">
            İhtiyaçlarınıza özel çözümler için hazır mısınız?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Uzman ekibimizle tanışın, projenizi birlikte şekillendirelim ve filonuzu geleceğe taşıyalım.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/randevu-al">Hemen Randevu Alın</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
