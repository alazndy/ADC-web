import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PlaceholderContent({ title, description }: { title: string, description?: string }) {
  return (
    <>
       <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold font-headline">{title}</h1>
            {description && <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>İçerik Yakında Eklenecek</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Bu sayfa şu anda yapım aşamasındadır. En kısa sürede güncellenecektir.</p>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
