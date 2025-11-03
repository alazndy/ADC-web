'use client';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Milestone } from "lucide-react";
import { findImage } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HakkimizdaContent() {
  const officeImage = findImage("office-photo");

  return (
    <>
      <div className="bg-secondary">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h1 className="text-4xl font-bold font-headline">Biz Kimiz?</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">ADC Tasarım olarak, teknoloji ve mühendisliği birleştirerek daha güvenli ve verimli bir gelecek inşa ediyoruz.</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView={{ ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, staggerChildren: 0.2 } }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <h2 className="text-3xl font-bold font-headline tracking-tight">Bir Güvenlik ve Verimlilik Ortağı</h2>
            <p className="mt-4 text-muted-foreground">2010 yılında ticari araç güvenliğinde bir devrim yaratma vizyonuyla yola çıktık. O günden bu yana, sektörün öncüsü Brigade Electronics'in Türkiye'deki yetkili distribütörü ve mühendislik ortağı olarak, en zorlu çalışma sahalarında bile güvenliği ve verimliliği yeniden tanımlıyoruz. Lojistikten madenciliğe, tarımdan inşaata kadar Türkiye'nin can damarı olan endüstrilere, sadece ürün tedarik etmekle kalmıyor, aynı zamanda özel mühendislik çözümleri sunuyoruz.</p>
            <p className="mt-4 text-muted-foreground">ADC Tasarım olarak biz, bir tedarikçiden çok daha fazlasıyız; biz sizin çözüm ortağınızız. Her projenin kendine özgü zorlukları olduğunun bilincindeyiz. Bu nedenle, sahadaki ihtiyaçlarınızı derinlemesine analiz ediyor, operasyonel verimliliğinizi en üst düzeye çıkaracak ve en önemlisi, insan hayatını koruyacak yenilikçi ve yüksek performanslı sistemler tasarlıyoruz. Bizim için tutku, teknolojiyi kullanarak daha güvenli bir çalışma ortamı yaratmaktır.</p>
          </motion.div>
           <motion.div className="order-1 lg:order-2 aspect-w-4 aspect-h-3" variants={itemVariants} whileHover={{ scale: 1.03 }}>
              {officeImage && (
                <Image
                  src={officeImage.imageUrl}
                  alt="Ofisimiz"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                  data-ai-hint={officeImage.imageHint}
                />
              )}
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="h-full bg-background hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                          <Target className="h-8 w-8 text-primary"/>
                      </div>
                      <CardTitle className="font-headline">Misyonumuz</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">Ticari araçların ve iş makinelerinin yer aldığı her operasyonda, kaza riskini sıfıra indirmek. Bunu, en gelişmiş ve kanıtlanmış güvenlik teknolojilerini erişilebilir kılarak, sahadaki her canı koruma altına alarak ve müşterilerimizin operasyonel verimliliğini en üst seviyeye taşıyarak başarıyoruz.</p>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="h-full bg-background hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                          <Milestone className="h-8 w-8 text-primary"/>
                      </div>
                      <CardTitle className="font-headline">Vizyonumuz</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">Araç güvenlik sistemleri ve telematik çözümleri alanında, sadece Türkiye'de değil, çevre coğrafyalarda da teknolojik yenilikçiliğin, sarsılmaz kalitenin ve mutlak güvenilirliğin simgesi olmak. Sektörün standartlarını belirleyen ve her zaman bir adım önde olan lider çözüm ortağı olarak tanınmak.</p>
                  </CardContent>
              </Card>
            </motion.div>
        </motion.div>


      </motion.div>
    </>
  );
}
