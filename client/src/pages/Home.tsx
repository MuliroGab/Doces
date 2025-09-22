import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid title="Produtos À Venda" subtitle="Descubra os sabores que conquistaram nossos clientes" maxItems={6} />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}