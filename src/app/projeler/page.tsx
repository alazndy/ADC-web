import Link from 'next/link';
import Image from 'next/image';
import { projects, sectors } from '@/lib/data';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProjelerPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold font-headline">Projeler</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Başarıyla tamamladığımız projeler ve farklı sektörlerdeki zorluklara nasıl çözüm ürettiğimize dair vaka analizleri.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const image = findImage(project.coverImage);
            const sector = sectors.find(s => s.slug === project.sector);
            // Custom slug for the new special project page
            const projectUrl = project.slug === 'ucps-2sa-carpima-onleme' 
              ? `/projeler/ucps-2sa-carpima-onleme`
              : `/projeler/${project.slug}`;
            return (
              <Card key={project.id} className="group overflow-hidden flex flex-col">
                {image && (
                  <div className="relative aspect-video">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-6 flex-grow flex flex-col">
                  {sector && <Badge variant="outline" className='mb-2 w-fit'>{sector.name}</Badge>}
                  <h2 className="text-xl font-bold font-headline flex-grow">{project.title}</h2>
                  <p className="mt-3 text-muted-foreground line-clamp-3">
                    <strong>Zorluk:</strong> {project.challenge}
                  </p>
                  <Button asChild className="mt-6 w-full">
                    <Link href={projectUrl}>Projeyi İncele</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
