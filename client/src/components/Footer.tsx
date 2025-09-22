import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, Cookie,Cherry } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    console.log(`Newsletter subscription: ${email}`);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribing(false);
    setEmail("");
  };

  const navigationLinks = [
    { name: "Início", href: "#" },
    { name: "Cookies", href: "#cookies" },
    { name: "Brownies", href: "#brownies" },
    { name: "Combos", href: "#combos" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  const supportLinks = [
    { name: "Central de Ajuda", href: "#" },
    { name: "Política de Entrega", href: "#" },
    { name: "Trocas e Devoluções", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Privacidade", href: "#" },
  ];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/sales_dcs", color: "hover:text-pink-500" },
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { 
    name: "WhatsApp", 
    icon: Phone, 
    href: "https://wa.me/5584996311567?text=Olá,%20quero%20saber%20mais%20sobre%20os%20produtos", 
    color: "hover:text-green-500" 
  },
];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Cherry className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                Sales Doces
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Criamos cookies e brownies artesanais com muito amor e ingredientes premium. 
              Cada produto é uma experiência única de sabor.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  size="icon"
                  variant="ghost"
                  className={`${social.color} transition-colors`}
                  onClick={() => window.open(social.href, "_blank")}
                  data-testid={`button-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-1 py-1 rounded"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  Rua das Delícias, 123<br />
                  Centro, Florânia - RN
                </span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-phone"
                >
                  (84) 99631-1567
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a 
                  href="mailto:contato@deliciasartesanais.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  contato@deliciasartesanais.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Seg a Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Cookie className="w-4 h-4" />
            <span>© 2025 Sales Doces. Todos os direitos reservados.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Feito com <Heart className="w-4 h-4 inline text-red-500 fill-current" /> para você
          </div>
        </div>
      </div>
    </footer>
  );
}