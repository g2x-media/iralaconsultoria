import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5541998344770";
const WHATSAPP_MESSAGE = "Olá Rafael, gostaria de agendar uma consultoria financeira.";

export function CTASection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 lg:py-28 gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Agende uma conversa personalizada e descubra como a consultoria financeira pode ajudar você a alcançar seus objetivos com mais clareza e segurança.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all bg-white text-primary hover:bg-white/90"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Agendar consultoria com Rafael Irala
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
