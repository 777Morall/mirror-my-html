const diferenciais = [
  {
    icon: "fas fa-certificate",
    title: "Concreto Certificado",
    description: "Trabalhamos com usinas certificadas, laudos técnicos completos e garantia total de qualidade."
  },
  {
    icon: "fas fa-bolt",
    title: "Entrega Rápida e Imediata",
    description: "Disponibilidade imediata com entregas expressas no prazo certo para não atrasar sua obra."
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Melhor Custo-Benefício",
    description: "Negociamos com múltiplas usinas para oferecer o melhor preço sem comprometer a qualidade."
  },
  {
    icon: "fas fa-headset",
    title: "Atendimento Personalizado",
    description: "Equipe dedicada e profissional para acompanhar sua obra do início ao fim."
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Cobertura Nacional",
    description: "Atendemos todo o Brasil com produtos das melhores marcas parceiras de confiança."
  },
  {
    icon: "fas fa-tools",
    title: "Soluções Completas",
    description: "Concreto, bombeamento e consultoria técnica em um único lugar."
  }
];

const Diferenciais = () => {
  const whatsappUrgent = "https://wa.me/5516999511899?text=Olá!%20Preciso%20de%20concreto%20COM%20URGÊNCIA!%20Gostaria%20de%20orçamento%20imediato";

  return (
    <section id="diferenciais" className="py-28 bg-[linear-gradient(180deg,hsl(var(--gray-light))_0%,#FAFAFA_100%)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-[4.5rem] items-center">
          {/* Left side - Text content */}
          <div>
            <span className="section-badge">
              <i className="fas fa-star"></i> Por Que Escolher
            </span>
            <h2 className="text-[2.75rem] md:text-[2.75rem] text-[2rem] font-black text-[hsl(var(--secondary))] mb-5 leading-tight">
              Nossos <span className="text-[hsl(var(--primary))]">Diferenciais</span>
            </h2>
            <p className="mb-10 text-[hsl(var(--gray-dark))] text-[1.05rem] leading-relaxed">
              Central especializada com mais de 15 anos fornecendo concreto de qualidade superior para obras em todo o Brasil. Entrega rápida e imediata garantida.
            </p>

            <div>
              {diferenciais.map((diferencial, index) => (
                <div 
                  key={index}
                  className="flex gap-6 mb-7 p-5 bg-white rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-[hsl(var(--primary))] hover:translate-x-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-[55px] h-[55px] icon-gradient rounded-[14px] flex items-center justify-center flex-shrink-0 text-[1.65rem] text-white shadow-[0_6px_15px_hsla(var(--primary),0.25)]">
                    <i className={diferencial.icon}></i>
                  </div>
                  <div>
                    <h4 className="text-[1.3rem] font-extrabold text-[hsl(var(--secondary))] mb-2">
                      {diferencial.title}
                    </h4>
                    <p className="text-[hsl(var(--gray-dark))] leading-relaxed text-[0.95rem]">
                      {diferencial.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div>
            <div className="bg-[linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--secondary-light)))] rounded-[28px] p-14 text-center text-white shadow-[0_15px_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,hsla(var(--primary),0.1)_0%,transparent_70%)] animate-pulse-bg"></div>
              
              <div className="w-[110px] h-[110px] bg-[linear-gradient(135deg,hsl(var(--whatsapp)),hsl(var(--whatsapp-dark)))] rounded-full flex items-center justify-center mx-auto mb-9 text-[3.5rem] animate-pulse-custom shadow-[0_12px_35px_hsla(var(--whatsapp),0.4)] relative z-10">
                <i className="fab fa-whatsapp"></i>
              </div>
              
              <h3 className="text-[2rem] mb-4 font-black relative z-10">
                Orçamento Imediato!
              </h3>
              
              <p className="mb-10 text-[1.05rem] relative z-10">
                ⚡ Atendimento rápido via WhatsApp. Concreto com entrega expressa disponível agora!
              </p>
              
              <a 
                href={whatsappUrgent}
                className="btn btn-large relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Solicitar Agora
              </a>
              
              <div className="mt-8 relative z-10">
                <p className="text-[1.1rem]">
                  <i className="fas fa-phone mr-2"></i> <strong>(16) 99951-1899</strong>
                </p>
                <p className="text-[1.1rem] mt-2">
                  <i className="fas fa-clock mr-2"></i> <strong>Atendimento 24 horas</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
