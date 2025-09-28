'use client';
import { services, techSolutions } from "@/lib/data";
import { PlaceholderContent } from "@/components/placeholder-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export async function generateStaticParams() {
    return [...services, ...techSolutions].map((service) => ({
        slug: service.slug,
    }));
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HizmetDetayPage({ params }: { params: { slug: string } }) {
    const service = [...services, ...techSolutions].find(p => p.slug === params.slug);

    if (!service) {
        return <PlaceholderContent title="Hizmet Bulunamadı" description="Aradığınız hizmet mevcut değil." />;
    }

    return (
         <>
            <motion.div 
                className="bg-secondary"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div variants={itemVariants} className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                            <service.icon className="h-12 w-12 text-primary" />
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-4xl font-bold font-headline">{service.title}</motion.h1>
                        <motion.p variants={itemVariants} className="mt-4 text-xl text-muted-foreground">{service.summary}</motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div 
                        className="lg:col-span-2"
                        variants={itemVariants}
                    >
                        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: service.content }}/>
                    </motion.div>
                    <motion.aside 
                        className="lg:col-span-1 sticky top-24 h-fit"
                        variants={itemVariants}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Neden Bizi Seçmelisiniz?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground">Brigade Electronics yetkili servisi ve çözüm ortağı.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground">Her sektöre ve araca özel mühendislik yaklaşımı.</p>
                                </div>
                                 <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground">Deneyimli ve sertifikalı teknik ekip.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground">Proje sonrası tam destek ve servis güvencesi.</p>
                                </div>
                                <Button asChild className="w-full mt-4">
                                    <Link href="/iletisim">Teklif Alın</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.aside>
                </div>
            </motion.div>
        </>
    );
}
