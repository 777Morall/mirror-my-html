const servicos = [
  {
    icon: "fas fa-shipping-fast",
    title: "Entrega Expressa",
    description: "Logística eficiente com entrega rápida e imediata para garantir pontualidade na sua obra."
  },
  {
    icon: "fas fa-pump-medical",
    title: "Bombeamento",
    description: "Serviço profissional de bombeamento para locais de difícil acesso."
  },
  {
    icon: "fas fa-user-tie",
    title: "Consultoria Técnica",
    description: "Orientação especializada para escolher o melhor produto para sua obra."
  },
  {
    icon: "fas fa-certificate",
    title: "Qualidade Certificada",
    description: "Concreto certificado com laudos técnicos completos e garantia."
  },
  {
    icon: "fas fa-clock",
    title: "Atendimento 24h",
    description: "Disponibilidade em horários flexíveis para atender sua urgência."
  },
  {
    icon: "fas fa-file-invoice-dollar",
    title: "Orçamento Gratuito",
    description: "Cotações rápidas e gratuitas via WhatsApp em minutos."
  }
];

const Servicos = () => {
  return (
    <section id="servicos" className="py-28 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-[750px] mx-auto mb-[4.5rem]">
          <span className="section-badge">
            <i className="fas fa-award"></i> Nossos Serviços
          </span>
          <h2 className="text-[2.75rem] md:text-[2.75rem] text-[2rem] font-black text-[hsl(var(--secondary))] mb-5 leading-tight">
            Atendimento <span className="text-[hsl(var(--primary))]">Completo e Profissional</span>
          </h2>
          <p className="text-[1.15rem] text-[hsl(var(--gray-dark))] leading-relaxed">
            Soluções integradas para garantir o sucesso da sua obra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicos.map((servico, index) => (
            <div 
              key={index}
              className="text-center p-12 bg-white rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-400 border-2 border-transparent hover:translate-y-[-10px] hover:border-[hsl(var(--primary))] hover:shadow-[0_12px_35px_rgba(255,107,53,0.15)]"
            >
              <div className="w-[85px] h-[85px] icon-gradient rounded-full flex items-center justify-center mx-auto mb-7 text-[2.25rem] text-white shadow-[0_8px_20px_hsla(var(--primary),0.25)]">
                <i className={servico.icon}></i>
              </div>
              <h3 className="text-[1.4rem] font-extrabold text-[hsl(var(--secondary))] mb-4">
                {servico.title}
              </h3>
              <p className="text-[hsl(var(--gray-dark))] leading-relaxed text-[0.98rem]">
                {servico.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
