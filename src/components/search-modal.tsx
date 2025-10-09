
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { collection, query, getDocs } from 'firebase/firestore';
import { useFirebase } from '@/firebase';

// CORRECTED IMPORTS: Data is now imported from modular files as a fallback
import { products as staticProducts } from '@/lib/data/products'; 
import { projects as staticProjects } from '@/lib/data/projects'; 

type SearchResult = {
  type: string;
  title: string;
  url: string;
};

export function SearchModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const { firestore } = useFirebase();
  const inputRef = useRef<HTMLInputElement>(null);

  const performSearch = useCallback(async () => {
    if (queryText.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    
    const allContent: SearchResult[] = [];

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

            productSnap.forEach(doc => {
                const data = doc.data();
                allContent.push({ type: 'Ürün', title: data.name, url: `/urunler/${data.id}` });
            });

            projectSnap.forEach(doc => {
                const data = doc.data();
                allContent.push({ type: 'Proje', title: data.title, url: `/projeler/${data.slug}` });
            });

        } catch (error) {
            console.error("Firebase search failed, falling back to static data:", error);
            // Fallback to static data if Firestore fails
            allContent.push(...staticProducts.map(p => ({ type: 'Ürün', title: p.name, url: `/urunler/kategori/kamera-monitor-sistemleri/${p.subCategorySlug}#${p.id}` }))); // Note: a more robust URL strategy would be needed here
            allContent.push(...staticProjects.map(p => ({ type: 'Proje', title: p.title, url: `/projeler/${p.slug}` })));
        }
    } else {
        // Fallback for when firestore is not available
        allContent.push(...staticProducts.map(p => ({ type: 'Ürün', title: p.name, url: `/urunler/kategori/kamera-monitor-sistemleri/${p.subCategorySlug}#${p.id}` })));
        allContent.push(...staticProjects.map(p => ({ type: 'Proje', title: p.title, url: `/projeler/${p.slug}` })));
    }

    const lowerCaseQuery = queryText.toLowerCase();
    const filteredResults = allContent.filter(item => 
      item.title.toLowerCase().includes(lowerCaseQuery)
    );

    setResults(filteredResults);
    setLoading(false);
  }, [queryText, firestore]);

  useEffect(() => {
    const handler = setTimeout(() => {
      performSearch();
    }, 300); // Debounce search

    return () => {
      clearTimeout(handler);
    };
  }, [queryText, performSearch]);
  
  useEffect(() => {
    if (open) {
        // Timeout to allow dialog to render before focusing
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-lg gap-0">
        <div className="flex items-center border-b px-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            placeholder="Ürün veya proje arayın..."
            className="w-full p-4 bg-transparent focus:outline-none"
          />
          {loading && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}
        </div>
        <div className="p-4 max-h-[400px] overflow-y-auto">
            {results.length > 0 ? (
                <ul>
                    {results.map((item, index) => (
                        <li key={index} className="border-b last:border-b-0">
                            <a href={item.url} onClick={() => onOpenChange(false)} className="block p-3 hover:bg-muted rounded-md transition-colors">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-muted-foreground">{item.type}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && queryText.length >= 2 && <p className="text-center text-muted-foreground p-4">Sonuç bulunamadı.</p>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
