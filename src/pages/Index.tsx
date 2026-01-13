import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Produtos from "@/components/Produtos";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Produtos />
      <Servicos />
      <Diferenciais />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
