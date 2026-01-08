import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import rafaelImage from "@/assets/rafael-irala.png";

const WHATSAPP_NUMBER = "5541998344770";
const WHATSAPP_MESSAGE = "Olá Rafael, gostaria de agendar uma conversa sobre consultoria financeira.";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in">
              Clareza e estratégia para suas decisões financeiras
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Consultoria financeira com Rafael Irala para organizar finanças, gerir dívidas e construir patrimônio de forma consciente.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="gradient-primary text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Agendar conversa com Rafael Irala
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl transform scale-95" />
              <img
                src={rafaelImage}
                alt="Rafael Irala, consultor financeiro e especialista em investimentos"
                className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
