'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const buttonHoverVariants = {
    hover: { 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    tap: { scale: 0.95 }
};

export function CallToActionBanner() {
  return (
    <motion.section 
      className="bg-primary text-primary-foreground"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-bold font-headline"
            variants={itemVariants}
          >
            Filonuzu Geleceğe Taşımaya Hazır Mısınız?
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80"
            variants={itemVariants}
          >
            ADC Tasarım&apos;ın sunduğu yenilikçi teknolojilerle tanışın, verimliliği artırın ve operasyonel mükemmelliğe ulaşın.
          </motion.p>
          <motion.div 
            className="mt-8 flex justify-center gap-4 flex-wrap"
            variants={itemVariants}
          >
            <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/randevu-al">Projenizi Başlatın</Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10" asChild>
                 <Link href="/teknoloji-cozumleri">Daha Fazla Bilgi <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
