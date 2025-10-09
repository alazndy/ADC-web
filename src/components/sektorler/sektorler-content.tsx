'use client';
import Link from 'next/link';
import { sectors } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
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

export default function SektorlerContent() {
    return (
        <>
            <motion.div 
                className="bg-secondary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Sektörler</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Her sektörün kendine özgü zorlukları olduğunu biliyoruz. Uluslararası, çok araçlı bir filo veya küçük bir işletme işletiyor olun, araç ve mobil tesis güvenlik gereksinimlerinizde size yardımcı olacak uzmanlığa sahibiz.
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
                    {sectors.map((sector) => {
                        return (
                            <motion.div 
                                key={sector.id} 
                                variants={itemVariants} 
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="flex"
                            >
                                <Link href={`/sektorler/${sector.slug}`} className="group flex w-full">
                                    <Card className="flex flex-col w-full bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                        <CardHeader className="flex flex-row items-start gap-4">
                                            <div className="bg-primary/10 p-3 rounded-lg">
                                                <sector.icon className="h-8 w-8 text-primary" />
                                            </div>
                                            <div className='flex-1'>
                                                <CardTitle className="font-headline text-xl">{sector.name}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <CardDescription>{sector.description}</CardDescription>
                                        </CardContent>
                                        <div className="p-6 pt-0 mt-auto">
                                            <span className="font-semibold text-primary group-hover:underline flex items-center">
                                                Daha Fazla Bilgi <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </>
    );
}
