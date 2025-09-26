"use client";

import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import Link from 'next/link';
import { collection, query, getDocs, Firestore } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { products as staticProducts, projects as staticProjects } from '@/lib/data'; // fallback

type SearchResult = {
  type: string;
  title: string;
  slug: string;
  category: string;
}

function SearchModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void }) {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const { firestore } = useFirebase();

  const performSearch = useCallback(async () => {
    if (queryText.length < 2) {
      setResults([]);
      return;
    }
    
    setLoading(true);

    let allContent: SearchResult[] = [];

    if (firestore) {
        try {
            const productsRef = collection(firestore, 'products');
            const projectsRef = collection(firestore, 'projects');
            
            const productsQuery = query(productsRef);
            const projectsQuery = query(projectsRef);

            const [productSnap, projectSnap] = await Promise.all([
                getDocs(productsQuery),
                getDocs(projectsQuery)
            ]);

            allContent = [
                ...productSnap.docs
                    .map(doc => doc.data())
                    .filter(p => p.name && p.slug && p.category)
                    .map(p => ({ type: 'Ürün', title: p.name, slug: `/urunler/${p.slug}`, category: p.category })),
                ...projectSnap.docs
                    .map(doc => doc.data())
                    .filter(p => p.title && p.slug && p.sector)
                    .map(p => ({ type: 'Proje', title: p.title, slug: `/projeler/${p.slug}`, category: p.sector })),
            ];
        } catch (error) {
            console.error("Arama sırasında Firestore hatası, statik verilere dönülüyor:", error);
            allContent = [
                ...staticProducts.map(p => ({ type: 'Ürün', title: p.name, slug: `/urunler/${p.slug}`, category: p.category })),
                ...staticProjects.map(p => ({ type: 'Proje', title: p.title, slug: `/projeler/${p.slug}`, category: p.sector })),
            ];
        }
    } else {
         allContent = [
            ...staticProducts.map(p => ({ type: 'Ürün', title: p.name, slug: `/urunler/${p.slug}`, category: p.category })),
            ...staticProjects.map(p => ({ type: 'Proje', title: p.title, slug: `/projeler/${p.slug}`, category: p.sector })),
        ];
    }

    const lowercasedQuery = queryText.toLowerCase();
    const filtered = allContent.filter(item => 
        item.title.toLowerCase().includes(lowercasedQuery) || 
        (item.category && item.category.toLowerCase().includes(lowercasedQuery))
    );
    setResults(filtered);
    setLoading(false);

  }, [queryText, firestore]);

  useEffect(() => {
    if (!isOpen) {
      setQueryText('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch();
    }, 300); // 300ms gecikme

    return () => clearTimeout(debounceTimer);
  }, [queryText, performSearch]);
  
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden top-1/4 bg-background/90 backdrop-blur-sm border-border">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ürün, proje veya kategori arayın..."
              className="w-full pl-10 h-12 text-lg bg-transparent border-border focus-visible:ring-primary"
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              autoFocus
            />
            {loading && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />}
          </div>
        </div>
        <div className="max-h-[50vh] overflow-y-auto px-6 pb-6">
          {queryText.length > 1 && !loading && results.length === 0 && (
            <p className="text-center text-muted-foreground py-8">Aramanızla eşleşen sonuç bulunamadı.</p>
          )}
          {Object.entries(groupedResults).map(([type, items]) => (
            <div key={type} className="mb-6 last:mb-0">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-2">{type}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={`${type}-${index}`}>
                    <Link
                      href={item.slug}
                      className="block p-3 rounded-md hover:bg-accent"
                      onClick={() => onOpenChange(false)}
                    >
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
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

export { SearchModal };