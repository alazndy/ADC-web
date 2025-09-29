'use client';

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center" prefetch={false}>
      <Image 
        src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Company%20Logos%2FADC%2FADC%20logo.png?alt=media&token=e1ae50ba-3f1f-400f-bcd9-7779255d7b6c"
        alt="ADC Tasarım Logo"
        width={144}
        height={48}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}
