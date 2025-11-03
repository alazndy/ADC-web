
'use client';

import { Service } from '@/lib/types';
import { motion } from 'framer-motion';

interface ServiceContentRendererProps {
  service: Service;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export default function ServiceContentRenderer({ service }: ServiceContentRendererProps) {
  return (
    <motion.div
      className="prose dark:prose-invert max-w-none"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div dangerouslySetInnerHTML={{ __html: service.content }} />
    </motion.div>
  );
}
