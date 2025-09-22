import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Heart, Star, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_bakery_products_display_df4cfb72.png";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Deliciosos cookies e brownies artesanais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Badge */}
        <Badge className="mb-6 bg-primary/90 text-primary-foreground border-0 hover:bg-primary" data-testid="badge-artesanal">
          <ChefHat className="w-3 h-3 mr-1" />
          100% Artesanal
        </Badge>

        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Sabores que
          <span className="block text-accent font-handwritten text-5xl md:text-7xl lg:text-8xl">
            conquistam
          </span>
          corações
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 leading-relaxed">
          Cookies e brownies artesanais feitos com ingredientes premium e muito carinho. 
          Cada mordida é uma experiência única de sabor.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
              <ChefHat className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Receitas Simples</h3>
            <p className="text-sm text-gray-200">Desenvolvidas por mim</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-accent fill-current" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Feito com Amor</h3>
            <p className="text-sm text-gray-200">Cada produto é cuidadosamente preparado</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-accent fill-current" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Produtos de Qualidade </h3>
            <p className="text-sm text-gray-200">Ingredientes selecionados Cuidadosamente</p>
          </div>
        </div>
      </div>
    </section>
  );
}