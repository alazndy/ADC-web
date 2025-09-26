
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const highlightedProject = projects[0];

export function ProjectHighlight() {
  if (!highlightedProject) return null;

  const image = findImage(highlightedProject.coverImage);

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
                Başarı Hikayelerimiz
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Gerçek dünya zorluklarına nasıl etkili çözümler ürettiğimizi keşfedin.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge variant="outline">Vaka Analizi</Badge>
            <h3 className="mt-4 text-3xl font-bold font-headline tracking-tight">
              {highlightedProject.title}
            </h3>
            <div className="mt-6 space-y-4">
                <div>
                    <h4 className="font-semibold text-lg">Zorluk:</h4>
                    <p className="text-muted-foreground">{highlightedProject.challenge}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Çözüm:</h4>
                    <p className="text-muted-foreground">{highlightedProject.solution}</p>
                </div>
            </div>
             <blockquote className="mt-6 border-l-4 border-primary pl-4 py-2 bg-background/50">
              <p className="text-lg font-semibold">
                Sonuç: {highlightedProject.result}
              </p>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                    <Link href={`/projeler/${highlightedProject.slug}`}>Projeyi İncele</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/projeler">Tüm Projeler <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 group overflow-hidden rounded-lg">
            {image && (
                 <Link href={`/projeler/${highlightedProject.slug}`}>
                    <Image
                    src={image.imageUrl}
                    alt={highlightedProject.title}
                    width={600}
                    height={450}
                    className="rounded-lg shadow-xl object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.imageHint}
                    />
                </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
