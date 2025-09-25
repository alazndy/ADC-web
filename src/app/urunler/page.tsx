import { mockProducts } from '@/lib/mock-data';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { findImage } from '@/lib/placeholder-images';
import Image from 'next/image';

const categories = [...new Set(mockProducts.map(p => p.category))].sort();

// Helper to create a URL-friendly slug from a category name
const categoryToSlug = (categoryName: string) => {
  return categoryName.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Find a representative product for each category to display an image
const getCategoryImage = (category: string) => {
    const productInCategory = mockProducts.find(p => p.category === category);
    if (productInCategory) {
        return findImage(productInCategory.imageUrls[0]);
    }
    return findImage('placeholder-1'); // Fallback image
}

export default function UrunlerPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <div className="absolute inset-0">
            <Image 
                src={findImage('hero-background')?.imageUrl || ''} // Replace with a suitable background image
                alt="Commercial Vehicle Safety"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
            />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline max-w-3xl">Commercial Vehicle Safety Products</h1>
        </div>
      </div>

      {/* Breadcrumb - A simple version */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted-foreground">
          <Link href="/">Home</Link> &raquo; <span>All Products</span>
        </div>
      </div>


      {/* Introduction Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">We Prevent Collisions and Save Lives.</h2>
            <p className="mb-4 text-muted-foreground">
              Here at Brigade, we have years of experience managing complex safety issues and eliminating blind spots for commercial on and off-road vehicles. From HGVs to heavy plant and mobile machinery, we have worked tirelessly to create a range of high-quality vehicle camera systems and vehicle products that ensure drivers, groundworkers, pedestrians and cyclists are protected from harm.
            </p>
            <p className="font-semibold mb-6">
              Our mission is to prevent collisions and save lives. Our complementary range of passive and active safety systems is essential to maintaining vehicle safety for everyone – no matter what industry you operate in.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>Our principal manufacturing facilities are certified to IATF 16949:2016</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>All applicable products have CE-marking in Europe and FCC/IC approval in North America</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>The majority of our products comply with UN ECE Regulation 46</span>
              </li>
            </ul>
             <Button className="mt-8" asChild>
                <Link href="#product-catalogue">Download Product Catalogue</Link>
             </Button>
          </div>
          <div>
            <Image
                src={findImage('brigade-logo-strapline')?.imageUrl || ''} // Replace with a relevant image
                alt="Brigade Electronics Logo"
                width={500}
                height={203}
                className="w-full h-auto"
                data-ai-hint="logo"
            />
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Brigade’s Safety Products for Commercial Vehicle and Plant Machinery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(category => {
                  const image = getCategoryImage(category);
                  return (
                      <Link key={category} href={`/urunler/kategori/${categoryToSlug(category)}`} className="group">
                           <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                              <CardHeader className='p-0 relative aspect-video'>
                                  {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={category}
                                        fill
                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={image.imageHint || "product category"}
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-transparent transition-colors"></div>
                              </CardHeader>
                              <CardContent className="p-6 flex-grow flex items-center justify-between bg-white dark:bg-gray-900">
                                  <h3 className="text-xl font-bold font-headline">{category}</h3>
                                  <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
                              </CardContent>
                          </Card>
                      </Link>
                  )
              })}
          </div>
        </div>
      </div>
      
      {/* "Purchase with Peace of Mind" Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                     <h2 className="text-3xl font-bold font-headline mb-4">Purchase with Peace of Mind</h2>
                     <p className="max-w-3xl mx-auto text-muted-foreground">
                        Quality and reliability are essential to maintaining safety standards. We are so confident in our products, that we are proud to offer warranties of one, two, three and five years as well as lifetime warranties in some cases.
                     </p>
                </div>
           </div>
      </div>


      {/* Download Catalogue Section */}
      <div id="product-catalogue" className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h3 className="text-xl font-semibold">Brigade Electronics</h3>
                     <h2 className="text-4xl font-bold font-headline mb-4">Product Catalogue</h2>
                     <p className="text-muted-foreground mb-8">Complete the form below and we’ll deliver our Product Catalogue straight to your inbox.</p>
                     <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input id="firstName" placeholder="First Name" required />
                            </div>
                            <div>
                                <Label htmlFor="lastName">Last Name *</Label>
                                <Input id="lastName" placeholder="Last Name" required />
                            </div>
                        </div>
                         <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" placeholder="Email Address" required />
                        </div>
                        <div>
                            <Label htmlFor="company">Company Name *</Label>
                            <Input id="company" placeholder="Company Name" required />
                        </div>
                        <div>
                            <Label htmlFor="country">Country *</Label>
                            <Input id="country" placeholder="Country" required />
                        </div>
                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..."/>
                        </div>
                         <Button type="submit">Submit</Button>
                     </form>
                </div>
                 <div className="hidden md:block">
                    <Image
                        src={findImage('product-catalogue-cover')?.imageUrl || ''} // Replace with a relevant image
                        alt="Product Catalogue"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="product catalogue cover"
                    />
                 </div>
            </div>
        </div>
      </div>
    </>
  );
}
