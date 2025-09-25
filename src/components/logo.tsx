import Link from "next/link";
import { Truck } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Truck className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight font-headline text-foreground">
        ADCentral
      </span>
    </Link>
  );
}
