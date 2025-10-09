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
  const teamMembers = [
    { name: "Ahmet Yılmaz", role: "Kurucu & CEO", image: "person-1", imageHint: "man portrait" },
    { name: "Ayşe Kaya", role: "Operasyon Direktörü", image: "person-2", imageHint: "woman portrait" },
    { name: "Mehmet Demir", role: "Baş Mühendis", image: "person-3", imageHint: "man portrait" },
  ];

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
            <p className="mt-4 text-muted-foreground">2010 yılında, ticari araç güvenliğinde devrim yaratma hedefiyle yola çıktık. Bugün, Brigade Electronics&apos;in Türkiye&apos;deki yetkili distribütörü ve mühendislik ortağı olarak, lojistikten madenciliğe, tarımdan inşaata kadar geniş bir yelpazede endüstrilere yön veriyoruz.</p>
            <p className="mt-4 text-muted-foreground">ADC Tasarım sadece bir ürün tedarikçisi değil, aynı zamanda bir çözüm ortağıdır. Her müşterinin operasyonel zorluklarını anlıyor, analiz ediyor ve bu zorluklara özel, yenilikçi ve yüksek performanslı sistemler tasarlıyoruz. Tutkumuz, en zorlu koşullarda bile güvenliği ve verimliliği en üst düzeye çıkarmaktır.</p>
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
                      <p className="text-muted-foreground">Ticari araç operasyonlarında kaza riskini ortadan kaldırmak için en gelişmiş güvenlik teknolojilerini erişilebilir kılmak, bu sayede insan hayatını korurken müşterilerimizin operasyonel verimliliğini en üst seviyeye taşımak.</p>
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
                      <p className="text-muted-foreground">Araç güvenliği ve filo yönetimi teknolojileri alanında, Türkiye ve çevre coğrafyalarda yenilikçiliğin, kalitenin ve güvenilirliğin simgesi haline gelerek sektörün lider çözüm ortağı olmak.</p>
                  </CardContent>
              </Card>
            </motion.div>
        </motion.div>

        <motion.div 
          className="mt-24 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h2 className="text-3xl font-bold font-headline" variants={itemVariants}>Ekibimizle Tanışın</motion.h2>
            <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground" variants={itemVariants}>Başarımızın arkasındaki güç, alanında uzman ve tutkulu ekibimizdir.</motion.p>
            <motion.div 
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={sectionVariants}
             >
                {teamMembers.map((member, index) => {
                    const memberImage = findImage(member.image);
                    return (
                        <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }}>
                          <Card className="text-center group h-full border border-transparent hover:border-primary/50 transition-colors">
                              <CardContent className="p-6">
                                  {memberImage && (
                                      <div className="w-32 h-32 mx-auto relative">
                                          <Image 
                                            src={memberImage.imageUrl} 
                                            alt={member.name} 
                                            width={128}
                                            height={128}
                                            className="rounded-full object-cover shadow-md" 
                                            data-ai-hint={member.imageHint} 
                                          />
                                      </div>
                                  )}
                                  <h3 className="text-lg font-semibold font-headline mt-4">{member.name}</h3>
                                  <p className="text-primary">{member.role}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
