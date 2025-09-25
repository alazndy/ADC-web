"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import Link from 'next/link';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, where, getDocs, Firestore, or } from 'firebase/firestore';
import { useFirestore, useMemoFirebase } from '@/firebase';

type SearchResult = {
  type: string;
  title: string;
  slug: string;
  category: string;
}

function SearchModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenchange: (isOpen: boolean) => void }) {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const firestore = useFirestore();

  useEffect(() => {
    if (!isOpen) {
      setQueryText('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (queryText.length < 2) {
        setResults([]);
        return;
      }
      if (!firestore) return;

      setLoading(true);
      
      const productsRef = collection(firestore, 'products');
      const projectsRef = collection(firestore, 'projects');
      
      const productsQuery = query(productsRef);
      const projectsQuery = query(projectsRef);

      try {
        const [productSnap, projectSnap] = await Promise.all([
          getDocs(productsQuery),
          getDocs(projectsQuery)
        ]);

        const allContent: SearchResult[] = [
          ...productSnap.docs
            .map(doc => doc.data())
            .map(p => ({ type: 'Ürün', title: p.name, slug: `/urunler/${p.slug}`, category: p.category })),
          ...projectSnap.docs
            .map(doc => doc.data())
            .map(p => ({ type: 'Proje', title: p.title, slug: `/projeler/${p.slug}`, category: p.sector })),
        ];

        const filtered = allContent.filter(item => item.title.toLowerCase().includes(queryText.toLowerCase()));
        setResults(filtered);

      } catch (error) {
        console.error("Arama sırasında hata:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      performSearch();
    }, 300); // 300ms gecikme

    return () => clearTimeout(debounceTimer);
  }, [queryText, firestore]);
  
  const groupedResults = results.reduce((acc, item) => {
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
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              autoFocus
            />
            {loading && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 animate-spin" />}
          </div>
        </div>
        <div className="max-h-[50vh] overflow-y-auto px-6 pb-6">
          {queryText.length > 1 && !loading && results.length === 0 && (
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

export { SearchModal };
