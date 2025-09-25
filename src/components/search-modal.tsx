"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { mockProducts, mockProjects } from '@/lib/mock-data';
import Link from 'next/link';

type SearchResult = {
  type: string;
  title: string;
  slug: string;
  category: string;
}

function SearchModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  const allContent = [
    ...mockProducts.map(p => ({ type: 'Ürün', title: p.name, slug: `/urunler/${p.slug}`, category: p.category })),
    ...mockProjects.map(p => ({ type: 'Proje', title: p.title, slug: `/projeler/${p.slug}`, category: p.sector })),
  ];
  
  const filteredResults = query.length > 1
    ? allContent.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    : [];
  
  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden top-1/4 bg-black/80 backdrop-blur-xl border-white/10">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
            <Input
              type="search"
              placeholder="Ürün veya proje arayın..."
              className="w-full pl-10 h-12 text-lg bg-white/5 border-white/20 text-white focus-visible:ring-red-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="max-h-[50vh] overflow-y-auto px-6 pb-6">
          {query.length > 1 && filteredResults.length === 0 && (
            <p className="text-center text-white/60 py-8">Aramanızla eşleşen sonuç bulunamadı.</p>
          )}
          {Object.entries(groupedResults).map(([type, items]) => (
            <div key={type} className="mb-6 last:mb-0">
              <h3 className="text-sm font-semibold text-white/50 mb-2 px-2">{type}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={`${type}-${index}`}>
                    <Link
                      href={item.slug}
                      className="block p-3 rounded-md hover:bg-white/10"
                      onClick={() => onOpenChange(false)}
                    >
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-white/60">{item.category}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default SearchModal;
