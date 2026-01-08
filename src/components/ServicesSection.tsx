import { FileSearch, BarChart3, CreditCard, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileSearch,
    title: "Diagnóstico Financeiro",
    description: "Análise completa da sua situação financeira pessoal ou familiar para identificar pontos de melhoria.",
  },
  {
    icon: BarChart3,
    title: "Organização Financeira",
    description: "Estruturação do fluxo de caixa e controle de gastos para uma vida financeira mais equilibrada.",
  },
  {
    icon: CreditCard,
    title: "Gestão de Dívidas",
    description: "Planejamento estratégico para quitar dívidas de forma inteligente e sustentável.",
  },
  {
    icon: Target,
    title: "Planejamento Patrimonial",
    description: "Construção e proteção do patrimônio com estratégias alinhadas aos seus objetivos de longo prazo.",
  },
  {
    icon: Lightbulb,
    title: "Decisões Estratégicas",
    description: "Apoio fundamentado para tomar decisões financeiras importantes com mais segurança.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">O que oferecemos</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções personalizadas para cada etapa da sua jornada financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
