import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Eye, Phone } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFavorite?: boolean;
  category: string;
  inStock?: boolean;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew,
  isFavorite: initialFavorite,
  category,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite || false);

  const handleViewDetails = () => {
    console.log(`Viewing details for: ${name}`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(`${isFavorite ? 'Removed from' : 'Added to'} favorites: ${name}`);
  };

  return (
    <Card className="group relative overflow-hidden hover-elevate cursor-pointer" data-testid={`card-product-${id}`}>
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            data-testid={`img-product-${id}`}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-accent text-accent-foreground" data-testid={`badge-new-${id}`}>
                Novo
              </Badge>
            )}
            {originalPrice && (
              <Badge variant="destructive" data-testid={`badge-discount-${id}`}>
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite();
            }}
            data-testid={`button-favorite-${id}`}
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="text-sm text-muted-foreground mb-1" data-testid={`text-category-${id}`}>
            {category}
          </p>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 line-clamp-1" data-testid={`text-name-${id}`}>
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-description-${id}`}>
            {description}
          </p>
          
          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
                R$ {price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  R$ {originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Contact for Order Button */}
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Contact for ${name}`);
              }}
              data-testid={`button-contact-${id}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Pedir
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}