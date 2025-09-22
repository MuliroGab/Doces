import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie, Heart, Gift } from "lucide-react";

// todo: remove mock functionality
import chocolateChipImage from "@assets/generated_images/Chocolate_chip_cookies_product_3547a8a9.png";
import fudgeBrowniesImage from "@assets/generated_images/Fudge_brownies_product_photo_b81c741d.png";
import cesta from "@assets/generated_images/image.png";

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image: string;
  icon: React.ComponentType<any>;
  color: string;
}

// todo: remove mock functionality
const categories: Category[] = [
  {
    id: "cookies",
    name: "Cookies",
    description: "Crocantes por fora, macios por dentro, com os sabores mais amados",
    productCount: 15,
    image: chocolateChipImage,
    icon: Cookie,
    color: "bg-accent",
  },
  {
    id: "brownies", 
    name: "Brownies",
    description: "Intensos e úmidos, para os verdadeiros amantes do chocolate",
    productCount: 8,
    image: fudgeBrowniesImage,
    icon: Heart,
    color: "bg-secondary",
  },
  {
    id: "combos",
    name: "Combos & Cestas",
    description: "Combinações especiais e cestas para presentear quem você ama",
    productCount: 6,
    image: cesta,
    icon: Gift,
    color: "bg-primary",
  },
];

export default function Categories() {
  const handleCategoryClick = (categoryId: string) => {
    console.log(`Category clicked: ${categoryId}`);
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" data-testid="text-categories-title">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-categories-subtitle">
            Explore nossa deliciosa variedade de produtos artesanais, cada um feito com ingredientes de qualidade
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover-elevate cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
              data-testid={`card-category-${category.id}`}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-testid={`img-category-${category.id}`}
                  />
                  
                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Product Count Badge */}
                  <Badge 
                    className="absolute top-4 left-4 bg-white/90 text-gray-800"
                    data-testid={`badge-count-${category.id}`}
                  >
                    {category.productCount} produtos
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2" data-testid={`text-category-name-${category.id}`}>
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`text-category-description-${category.id}`}>
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action 
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Não consegue escolher?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Experimente nossa seleção especial com o melhor de cada categoria
            </p>
            <Button 
              size="lg"
              onClick={() => console.log('Mix especial clicked')}
              data-testid="button-special-mix"
            >
              <Gift className="w-5 h-5 mr-2" />
              Ver Mix Especial
            </Button>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}