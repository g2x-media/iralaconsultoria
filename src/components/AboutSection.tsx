import { Award, Users, TrendingUp, Shield } from "lucide-react";

const credentials = [
  { icon: TrendingUp, label: "8+ anos de experiência" },
  { icon: Award, label: "Certificações CEA e CPA-20" },
  { icon: Users, label: "Ex-XP Investimentos" },
  { icon: Shield, label: "Ex-SuperRico (Gustavo Cerbasi)" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Sobre o Consultor</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3">
              Rafael Irala
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {credentials.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              Rafael Irala é especialista em investimentos e planejador financeiro, com mais de 8 anos de experiência no mercado financeiro, atuando no atendimento a pessoas físicas e pequenos empreendedores na organização financeira, gestão de dívidas e planejamento patrimonial.
            </p>
            <p className="mb-6 leading-relaxed">
              Atuou como assessor de investimentos pela XP Investimentos e como planejador financeiro na SuperRico, consultoria fundada por Gustavo Cerbasi. Possui as certificações CEA e CPA-20 pela ANBIMA.
            </p>
            <p className="mb-6 leading-relaxed">
              Sua atuação é pautada por uma abordagem prática, transparente e responsável, com foco em ajudar clientes a tomarem decisões financeiras mais conscientes, alinhadas à sua realidade e aos seus objetivos.
            </p>
            <p className="leading-relaxed text-foreground font-medium">
              Seu trabalho prioriza orientação humana, sem julgamentos, com métodos claros e estratégias aplicáveis no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
