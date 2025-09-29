
'use client';

import Link from 'next/link';
import Image from 'next/image';
// CORRECTED IMPORTS: Data is now imported from modular files
import { projects } from '@/lib/data/projects';
import { sectors } from '@/lib/data/sectors';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ProjelerPage() {
    const [activeSector, setActiveSector] = useState<string>('all');

    const filteredProjects = activeSector === 'all'
        ? projects
        : projects.filter(p => p.sector === activeSector);

    const getSectorName = (slug: string) => {
        const sector = sectors.find(s => s.slug === slug);
        return sector ? sector.name : 'Diğer';
    };

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <div className="bg-gray-100 dark:bg-gray-800 text-center py-20 md:py-28">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold font-headline">
                    Referans Projeler
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                    Müşterilerimizin zorlu güvenlik ihtiyaçlarına nasıl yenilikçi çözümler getirdiğimizi keşfedin.
                </motion.p>
            </div>

            {/* Filter Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-center flex-wrap gap-2">
                    <Button 
                        variant={activeSector === 'all' ? 'default' : 'outline'}
                        onClick={() => setActiveSector('all')}>
                        Tüm Sektörler
                    </Button>
                    {sectors.map(sector => (
                        <Button 
                            key={sector.slug}
                            variant={activeSector === sector.slug ? 'default' : 'outline'}
                            onClick={() => setActiveSector(sector.slug)}>
                            {sector.name}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{ 
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {filteredProjects.map(project => {
                        const image = findImage(project.coverImage);
                        return (
                            <motion.div key={project.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <Link href={`/projeler/${project.slug}`}>
                                        <div className="relative h-56 w-full">
                                            {image ? (
                                                <Image
                                                    src={image.src}
                                                    alt={project.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            ) : <div className="w-full h-full bg-muted"/>}
                                        </div>
                                    </Link>
                                    <CardContent className="p-6 flex-grow flex flex-col">
                                        <div className="mb-2">
                                             <Badge variant="secondary">{getSectorName(project.sector)}</Badge>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 flex-grow">
                                            <Link href={`/projeler/${project.slug}`}>{project.title}</Link>
                                        </h3>
                                        <p className="text-muted-foreground text-sm">{project.clientName}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
