import { Search, ClipboardList, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Análise",
    description: "Análise detalhada da sua situação financeira atual, entendendo receitas, despesas, dívidas e objetivos.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Diagnóstico",
    description: "Identificação de prioridades e definição de um caminho claro para alcançar seus objetivos financeiros.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Plano de Ação",
    description: "Criação de um plano financeiro personalizado com estratégias práticas e aplicáveis ao seu dia a dia.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Processo</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e estruturado para transformar sua vida financeira
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex flex-col items-center justify-center shadow-lg mb-6">
                  <span className="text-xs font-semibold text-primary mb-1">{step.number}</span>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
