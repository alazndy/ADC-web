
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { findImage } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SubCategoryShowcaseProps {
    title: string;
    description: string;
    features?: string[];
    image: string;
    imageHint?: string;
    direction?: 'normal' | 'reverse';
}

export function SubCategoryShowcase({ title, description, features, image: imageId, imageHint, direction = 'normal' }: SubCategoryShowcaseProps) {
    const image = findImage(imageId);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: direction === 'reverse' ? 100 : -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    
    const textVariants = {
        hidden: { opacity: 0, x: direction === 'reverse' ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={cn("grid md:grid-cols-2 gap-8 md:gap-12 items-center", direction === 'reverse' && 'md:[&>*:last-child]:order-first')}>
            <motion.div variants={itemVariants} className="aspect-square relative rounded-lg overflow-hidden group border bg-card">
                 {image && (
                    <Image
                        src={image.imageUrl}
                        alt={title}
                        width={600}
                        height={600}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={imageHint}
                    />
                )}
            </motion.div>
            <motion.div variants={textVariants}>
                <h2 className="text-3xl font-bold font-headline">{title}</h2>
                <p className="mt-4 text-muted-foreground text-base">{description}</p>
                {features && features.length > 0 && (
                    <motion.ul 
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="mt-6 space-y-3">
                        {features.map((feature, index) => (
                            <motion.li key={index} variants={featureVariants} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-foreground/90">{feature}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
                <Button className="mt-8" tabIndex={-1}>Daha Fazla Bilgi Edin</Button>
            </motion.div>
        </motion.div>
    );
}
