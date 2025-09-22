import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Menu, X,Cherry } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Cherry className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Sales Doces
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Contact Button */}
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden sm:flex"
            onClick={() => window.open("https://wa.me/5584996311567", "_blank")}
            data-testid="button-contact"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contato
          </Button>

          {/* Mobile menu button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-card">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover-elevate rounded-md"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`link-mobile-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t">
              <Button size="sm" variant="outline" className="w-full" data-testid="button-mobile-contact">
                <Phone className="w-4 h-4 mr-2" />
                Entrar em Contato
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}