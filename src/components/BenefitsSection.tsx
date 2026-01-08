import { Eye, LayoutList, ShieldCheck, ThumbsUp, Target } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Visão clara da situação financeira",
    description: "Entenda exatamente onde você está e para onde pode ir financeiramente.",
  },
  {
    icon: LayoutList,
    title: "Organização e previsibilidade",
    description: "Tenha controle total sobre suas finanças com planejamento estruturado.",
  },
  {
    icon: ShieldCheck,
    title: "Redução de riscos e insegurança",
    description: "Minimize imprevistos financeiros com estratégias de proteção.",
  },
  {
    icon: ThumbsUp,
    title: "Decisões mais seguras",
    description: "Tome decisões financeiras fundamentadas e bem informadas.",
  },
  {
    icon: Target,
    title: "Planejamento alinhado à realidade",
    description: "Estratégias práticas que se encaixam no seu estilo de vida.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Vantagens</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Benefícios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que você ganha ao trabalhar com uma consultoria financeira profissional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-background hover:bg-secondary/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
