'use client';
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Printer, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function IletisimContent() {
  return (
    <>
      <motion.div 
        className="bg-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold font-headline text-primary-foreground">Bizimle İletişime Geçin</h1>
            <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Aklınızdaki soruları yanıtlamak ve projenize özel çözümler sunmak için buradayız.</p>
        </div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div className="lg:col-span-2 space-y-8" variants={sectionVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold font-headline">İletişim Bilgileri</h2>
              <p className="mt-2 text-muted-foreground">Doğrudan bizimle temasa geçmek için aşağıdaki bilgileri kullanabilirsiniz.</p>
            </motion.div>
            <motion.div className="space-y-6" variants={sectionVariants}>
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-muted-foreground">Kızılırmak Mah. Dumlupınar Bulvarı NEXT LEVEL No: 3C1-160 Çankaya, 06520 Ankara - TÜRKİYE</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <a href="tel:+903122403484" className="text-muted-foreground hover:text-primary">+90 (312) 240 34 84</a>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Mobil</h3>
                  <a href="tel:+905383013303" className="text-muted-foreground hover:text-primary">+90 (538) 301 33 03</a>
                </div>
              </motion.div>
               <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Printer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Fax</h3>
                  <p className="text-muted-foreground">+90 (312) 999 46 45</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <a href="mailto:info@adctasarim.com" className="text-muted-foreground hover:text-primary">info@adctasarim.com</a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="lg:col-span-3 bg-secondary/50 p-8 rounded-lg" variants={itemVariants} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut"} }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold font-headline">Projeniz Hakkında Konuşalım</h2>
            <p className="mt-2 text-muted-foreground">Aşağıdaki formu doldurun, uzman ekibimiz projenizin detaylarını görüşmek üzere sizinle iletişime geçsin.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
         <motion.div 
          className="mt-16 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.435933393226!2d32.80860267675762!3d39.90858187152649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0f6f2e8f6f%3A0x1d5854f3ccb6354b!2sNext%20Level%20AVM!5e0!3m2!1str!2str!4v1716900989396!5m2!1str!2str" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
      </motion.div>
    </>
  );
}
