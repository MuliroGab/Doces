import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

import chocolateChipImage from "@assets/generated_images/Chocolate_chip_cookies_product_3547a8a9.png";
import fudgeBrownieImage from "@assets/generated_images/Fudge_brownies_product_photo_b81c741d.png";
import oatmealRaisinImage from "@assets/generated_images/Oatmeal_raisin_cookies_54bd0978.png";
import whiteMacadamiaImage from "@assets/generated_images/White_chocolate_macadamia_cookies_e667d7cf.png";
import walnutBrownieImage from "@assets/generated_images/Walnut_brownies_product_photo_cc4527db.png";

const products = [
  {
    id: "1",
    name: "Cookies de Chocolate Chip",
    description:
      "Clássicos cookies com gotas de chocolate belga, massa dourada e crocante por fora.",
    price: 18.9,
    originalPrice: 22.9,
    image: chocolateChipImage,
    category: "Cookies",
    rating: 5,
    reviewCount: 127,
    isNew: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Brownies de Chocolate Fudge",
    description:
      "Intensos brownies de chocolate 70% cacau, textura úmida e sabor marcante que derrete na boca.",
    price: 24.9,
    image: fudgeBrownieImage,
    category: "Brownies",
    rating: 5,
    reviewCount: 89,
    isNew: false,
    inStock: true,
  },
  {
    id: "3",
    name: "Cookies de Aveia e Passas",
    description:
      "Saudáveis e saborosos, feitos com aveia integral, passas suculentas e um toque de canela.",
    price: 16.9,
    image: oatmealRaisinImage,
    category: "Cookies",
    rating: 4,
    reviewCount: 156,
    isNew: false,
    inStock: true,
  },
  {
    id: "4",
    name: "Cookies Chocolate Branco e Macadâmia",
    description:
      "Sofisticados cookies com chocolate branco premium e macadâmias crocantes tostadas na medida certa.",
    price: 21.9,
    image: whiteMacadamiaImage,
    category: "Cookies",
    rating: 5,
    reviewCount: 73,
    isNew: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Brownies com Nozes",
    description:
      "Brownies ricos em chocolate com nozes crocantes, perfeita combinação de texturas e sabores intensos.",
    price: 26.9,
    image: walnutBrownieImage,
    category: "Brownies",
    rating: 4,
    reviewCount: 94,
    isNew: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Cookies Duplo Chocolate",
    description:
      "Para os verdadeiros amantes do chocolate: massa de cacau com gotas de chocolate meio amargo.",
    price: 19.9,
    image: chocolateChipImage,
    category: "Cookies",
    rating: 5,
    reviewCount: 203,
    isNew: false,
    inStock: true,
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  category?: string;
}

export default function ProductGrid({
  title = "Nossos Produtos",
  subtitle = "Descubra sabores únicos feitos com ingredientes de qualidade",
  maxItems,
  category,
}: ProductGridProps) {
  const [showMore, setShowMore] = useState(false);

  // Filtrar produtos por categoria
  const filteredProducts = category
    ? products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  // Limitar produtos se maxItems definido e showMore falso
  const productsToShow =
    maxItems && !showMore ? filteredProducts.slice(0, maxItems) : filteredProducts;

  const hasMoreProducts = maxItems && filteredProducts.length > maxItems;

  return (
    <section className="py-16 bg-background" id="produtos">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productsToShow.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProducts && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore
                ? "Ver Menos"
                : `Ver Mais ${filteredProducts.length - maxItems} Produtos`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
