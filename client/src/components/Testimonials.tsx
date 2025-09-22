import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote, ShoppingCart } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  product: string;
  verified: boolean;
}

// todo: remove mock functionality
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Carolina Silva",
    role: "Cliente Regular",
    avatar: "AC",
    rating: 5,
    comment: "Os cookies de chocolate chip são simplesmente perfeitos! Textura ideal, não muito doce, e chegaram fresquinhos em casa. Já virei cliente fiel!",
    product: "Cookies de Chocolate Chip",
    verified: true,
  },
  {
    id: "2", 
    name: "Roberto Mendes",
    role: "Pai de Família",
    avatar: "RM",
    rating: 5,
    comment: "Comprei uma cesta mista para o aniversário da minha esposa e foi um sucesso total! Os brownies estavam úmidos e os cookies crocantes. Qualidade excepcional.",
    product: "Cesta Mista Premium",
    verified: true,
  },
  {
    id: "3",
    name: "Mariana Costa",
    role: "Confeiteira Amadora", 
    avatar: "MC",
    rating: 5,
    comment: "Como alguém que entende de doces, posso dizer que a qualidade aqui é impressionante. Ingredientes premium e técnica impecável. Recomendo de olhos fechados!",
    product: "Brownies de Chocolate Fudge",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Mais de 2.500 clientes satisfeitos já provaram nossos produtos artesanais
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-muted-foreground">de 5 estrelas</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-elevate" data-testid={`card-testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-accent opacity-50" />
                  {testimonial.verified && (
                    <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                      ✓ Compra verificada
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "fill-accent text-accent" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-sm leading-relaxed mb-4 text-muted-foreground" data-testid={`text-comment-${testimonial.id}`}>
                  "{testimonial.comment}"
                </blockquote>

                {/* Product */}
                <p className="text-xs text-accent font-medium mb-4" data-testid={`text-product-${testimonial.id}`}>
                  {testimonial.product}
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm" data-testid={`text-author-${testimonial.id}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg p-8 border">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Junte-se aos nossos clientes satisfeitos
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Experimente nossos produtos artesanais e descubra por que somos a escolha preferida de quem busca qualidade
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => console.log('Fazer pedido clicked')}
                data-testid="button-make-order"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Fazer Meu Primeiro Pedido
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => console.log('Ver mais avaliações clicked')}
                data-testid="button-more-reviews"
              >
                Ver Mais Avaliações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}