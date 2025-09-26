import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services, techSolutions } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredServices = [...services.slice(0, 2), ...techSolutions.slice(0, 2)];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Kapsamlı Çözüm ve Hizmetlerimiz
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Mühendislik uzmanlığımızı ve teknolojik yenilikleri birleştirerek işinize değer katan çözümler sunuyoruz.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => {
            const href = services.some(s => s.id === service.id)
              ? `/hizmetler/${service.slug}`
              : `/teknoloji-cozumleri/${service.slug}`;
            return (
              <Link href={href} key={service.id} className="group">
                 <Card className="h-full border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardHeader className="items-start text-left p-6 flex-grow">
                    <div className="bg-primary/10 p-4 rounded-lg text-primary">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground flex-grow">{service.summary}</CardDescription>
                  </CardHeader>
                  <div className="p-6 pt-0">
                      <span className="font-semibold text-primary group-hover:underline flex items-center">
                          İncele <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
