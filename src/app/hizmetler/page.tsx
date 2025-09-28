'use client';
import { services, techSolutions } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Wrench, Users, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HizmetlerPage() {
    
    const whyUsItems = [
        {
            icon: Wrench,
            title: "Uzman Teknik Servis",
            description: "Brigade Electronics'in yetkili distribütörü ve çözüm ortağı olarak, en yüksek standartlarda montaj ve destek hizmeti sunuyoruz."
        },
        {
            icon: Users,
            title: "Müşteri Odaklı Yaklaşım",
            description: "Her filonun ve operasyonun benzersiz olduğunu biliyor, ihtiyaçlarınıza özel mühendislik çözümleri üretiyoruz."
        },
        {
            icon: ShieldCheck,
            title: "Uçtan Uca Güvenlik",
            description: "Sadece ürün satmıyor, projelendirmeden kuruluma ve satış sonrası desteğe kadar tam bir güvenlik ortaklığı sunuyoruz."
        }
    ];

    return (
        <>
            <motion.div 
              className="bg-secondary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <motion.h1 className="text-4xl font-bold font-headline" variants={itemVariants}>Mühendislik Hizmetlerimiz</motion.h1>
                    <motion.p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" variants={itemVariants} transition={{ delay: 0.2 }}>
                        Filonuzun güvenliğini ve operasyonel verimliliğini en üst düzeye çıkarmak için tasarladığımız profesyonel hizmetler.
                    </motion.p>
                </div>
            </motion.div>

            <motion.div 
              className="py-16 sm:py-24 bg-background"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center max-w-3xl mx-auto" variants={itemVariants}>
                        <h2 className="text-3xl font-bold font-headline">Neden ADC Tasarım?</h2>
                         <p className="mt-4 text-muted-foreground text-lg">
                           Standartların ötesinde bir hizmet anlayışıyla, güvenliğinizi ve verimliliğinizi garanti altına alıyoruz.
                        </p>
                    </motion.div>
                    <motion.div 
                      className="mt-16 grid lg:grid-cols-3 gap-8"
                      variants={sectionVariants}
                    >
                        {whyUsItems.map((item, index) => (
                           <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                             <Card className="text-center bg-card h-full">
                                  <CardHeader className="items-center">
                                      <div className="bg-primary/10 p-4 rounded-full">
                                          <item.icon className="h-10 w-10 text-primary" />
                                      </div>
                                      <CardTitle className="font-headline text-2xl pt-4">{item.title}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                       <p className="text-muted-foreground">{item.description}</p>
                                  </CardContent>
                             </Card>
                           </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
              className="py-16 sm:py-24 bg-secondary"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        <div>
                            <motion.div className="text-center max-w-3xl mx-auto" variants={itemVariants}>
                                <h2 className="text-3xl font-bold font-headline">Mühendislik Hizmetlerimiz</h2>
                                <p className="mt-4 text-muted-foreground text-lg">
                                    Araçlarınıza özel, en yüksek standartlarda profesyonel kurulum ve projelendirme hizmetleri.
                                </p>
                            </motion.div>
                            <motion.div 
                              className="mt-12 grid gap-8 sm:grid-cols-2"
                              variants={sectionVariants}
                            >
                                {services.map((service) => (
                                    <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                                      <Link href={`/hizmetler/${service.slug}`} className="group h-full flex">
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
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
              className="py-16 sm:py-24 bg-primary text-primary-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-headline">Daha Fazlasını Keşfedin</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                       Filonuzu daha akıllı, daha güvenli ve daha verimli hale getiren entegre teknoloji uygulamalarımızı keşfedin.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild size="lg" variant="secondary">
                              <Link href="/teknoloji-cozumleri">Teknoloji Çözümleri</Link>
                          </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}