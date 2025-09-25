import Link from "next/link";
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ forceWhiteText = false }: { forceWhiteText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Truck className="h-8 w-8 text-primary" />
      <span className={cn(
        "text-xl font-bold tracking-tight font-headline",
        forceWhiteText && "text-white"
        )}>
        ADC Tasarım
      </span>
    </Link>
  );
}
