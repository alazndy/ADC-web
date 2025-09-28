'use client';
import Link from 'next/link';
import Image from 'next/image';
import { projects, sectors } from '@/lib/data';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjelerPage() {
  return (
    <>
      <motion.div 
        className="bg-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold font-headline">Projeler</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Başarıyla tamamladığımız projeler ve farklı sektörlerdeki zorluklara nasıl çözüm ürettiğimize dair vaka analizleri.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const image = findImage(project.coverImage);
            const sector = sectors.find(s => s.slug === project.sector);
            
            let projectUrl = `/projeler/${project.slug}`;
            if (project.slug === 'ucps-2sa-carpima-onleme' || project.slug === 'rtc-pa-vinc-haberlesme') {
              projectUrl = `/projeler/${project.slug}`;
            }

            return (
              <motion.div key={project.id} variants={itemVariants}>
                 <Card className="group overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={image?.imageUrl || `https://picsum.photos/seed/${project.id}/400/300`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image?.imageHint || 'project image'}
                    />
                  </div>
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
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
