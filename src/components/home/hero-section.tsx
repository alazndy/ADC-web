
'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
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
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const heroImages = [
  { imageUrl: '/vehicle-images/Ambulance_EU_w_rings.jpg', description: 'Ambulance EU' },
  { imageUrl: '/vehicle-images/Ambulance_German_w_rings.jpg', description: 'Ambulance German' },
  { imageUrl: '/vehicle-images/Ambulance_UK_w_rings.jpg', description: 'Ambulance UK' },
  { imageUrl: '/vehicle-images/Artic_EU_w_rings (1).jpg', description: 'Artic EU' },
  { imageUrl: '/vehicle-images/Artic_EU_w_rings (2).jpg', description: 'Artic EU' },
  { imageUrl: '/vehicle-images/Artic_EU_w_rings_V4.png', description: 'Artic EU' },
  { imageUrl: '/vehicle-images/Artic_EU_w_rings.jpg', description: 'Artic EU' },
  { imageUrl: '/vehicle-images/Artic_NA_w_rings (1).jpg', description: 'Artic NA' },
  { imageUrl: '/vehicle-images/Artic_NA_w_rings (2).jpg', description: 'Artic NA' },
  { imageUrl: '/vehicle-images/Artic_NA_w_rings.jpg', description: 'Artic NA' },
  { imageUrl: '/vehicle-images/Articulated_Truck_UK-w_rings (1).jpg', description: 'Articulated Truck UK' },
  { imageUrl: '/vehicle-images/Articulated_Truck_UK-w_rings (2).jpg', description: 'Articulated Truck UK' },
  { imageUrl: '/vehicle-images/Articulated_Truck_UK-w_rings.jpg', description: 'Articulated Truck UK' },
  { imageUrl: '/vehicle-images/Backhoe_Loader_w_rings_V2.png', description: 'Backhoe Loader' },
  { imageUrl: '/vehicle-images/Backhoe_Loader_w_rings-V3.png', description: 'Backhoe Loader' },
  { imageUrl: '/vehicle-images/Backhoe_Loader_w_rings.png', description: 'Backhoe Loader' },
  { imageUrl: '/vehicle-images/Belt_Loader_w_rings_V3.png', description: 'Belt Loader' },
  { imageUrl: '/vehicle-images/belt_loader_w_rings_V4.png', description: 'Belt Loader' },
  { imageUrl: '/vehicle-images/Belt_Loader_w_rings.png', description: 'Belt Loader' },
  { imageUrl: '/vehicle-images/Bus_w_rings_V2.png', description: 'Bus' },
  { imageUrl: '/vehicle-images/Bus_w_rings_V3.png', description: 'Bus' },
  { imageUrl: '/vehicle-images/Bus_w_rings_V5.png', description: 'Bus' },
  { imageUrl: '/vehicle-images/Bus_w_rings_V6.png', description: 'Bus' },
  { imageUrl: '/vehicle-images/Bus_w_rings.png', description: 'Bus' },
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-white overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <Image
            src={heroImages[index].imageUrl}
            alt={heroImages[index].description}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-headline tracking-tight"
              variants={itemVariants}
            >
              Güvenlik ve Verimlilikte Yeni Dönem
            </motion.h1>
            <motion.p 
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
              variants={itemVariants}
            >
              Brigade Electronics&apos;in Türkiye&apos;deki yetkili distribütörü ADC Tasarım olarak, operasyonlarınızı geleceğe taşıyan öncü teknolojiler sunuyoruz.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-wrap justify-start gap-4"
              variants={itemVariants}
            >
              <Button size="lg" asChild>
                  <Link href="/urunler">Ürünleri Keşfedin <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-sm border-white/20 hover:bg-white/10 text-white">
                  <Link href="/iletisim">İletişime Geçin</Link>
              </Button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
