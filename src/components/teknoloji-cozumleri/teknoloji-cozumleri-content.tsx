'use client';
import { techSolutions } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
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

export default function TeknolojiCozumleriContent() {
    const allServices = [...techSolutions];
    
    return (
        <>
            <motion.div 
              className="bg-secondary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Teknoloji Çözümleri</h1>
                    <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Filonuzun güvenliğini ve verimliliğini artırmak için sunduğumuz entegre teknoloji çözümleri.
                    </p>
                </div>
            </motion.div>

            <motion.div 
              className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
                 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {allServices.map((service) => {
                        const href = `/teknoloji-cozumleri/${service.slug}`;
                        return (
                          <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                            <Link href={href} className="group h-full flex">
                                <Card className="h-full w-full hover:shadow-lg transition-all duration-300 flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription>{service.summary}</CardDescription>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <span className="font-semibold text-primary group-hover:underline flex items-center">
                                        Detayları Gör <ArrowRight className="ml-2 h-4 w-4" />
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
