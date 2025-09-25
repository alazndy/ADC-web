import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { mockServices, mockTechSolutions } from "@/lib/mock-data";
import Link from "next/link";

const featuredServices = [...mockServices.slice(0, 2), ...mockTechSolutions.slice(0, 2)];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-white">
            Çözüm ve Hizmetlerimiz
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Sektörünüzün ihtiyaçlarına yönelik geliştirdiğimiz mühendislik ve teknoloji çözümleri.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => {
            const href = mockServices.some(s => s.id === service.id)
              ? `/hizmetler/${service.slug}`
              : `/teknoloji-cozumleri/${service.slug}`;
            return (
              <Link href={href} key={service.id} className="group">
                 <Card className="h-full bg-secondary/80 backdrop-blur-sm border-white/10 hover:bg-secondary hover:border-white/20 transition-all duration-300">
                  <CardHeader className="items-center text-center p-8">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm text-white/60">{service.summary}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
