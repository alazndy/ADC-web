'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <Link
              href={crumb.href}
              className={`transition-colors hover:text-foreground ${index === crumbs.length - 1 ? 'font-medium text-foreground' : ''}`}
              aria-current={index === crumbs.length - 1 ? 'page' : undefined}
            >
              {crumb.name}
            </Link>
            {index < crumbs.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-1" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
