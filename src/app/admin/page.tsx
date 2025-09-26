import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold font-headline mb-6">Yönetim Paneli</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Toplam Ürün</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">kayıtlı ürün</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Toplam Proje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">tamamlanmış proje</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>İletişim Formları</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">yeni mesaj</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle>Sektörler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">farklı sektör</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Hoş Geldiniz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ADC Tasarım Yönetim Paneli&apos;ne hoş geldiniz. Sol taraftaki menüyü kullanarak web sitesinin içeriğini yönetebilirsiniz.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
