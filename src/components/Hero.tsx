const Hero = () => {
  const whatsappUrgent = "https://wa.me/5516999511899?text=Olá!%20Preciso%20de%20concreto%20com%20URGÊNCIA!%20Gostaria%20de%20um%20orçamento%20rápido";

  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center bg-fixed pt-[140px] text-white text-center relative"
      style={{
        background: `linear-gradient(135deg, rgba(26, 29, 46, 0.70), rgba(45, 49, 66, 0.65)), url('https://cdn1.genspark.ai/user-upload-image/5_generated/6263ac56-f94e-417d-b144-9becf8bf393e.jpeg') center/cover`
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,29,46,0.15)_100%)] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="hero-content">
          <span className="inline-flex items-center gap-2 py-3 px-6 bg-[linear-gradient(135deg,rgba(255,107,53,0.3),rgba(255,184,0,0.3))] text-[hsl(var(--accent))] rounded-full mb-7 font-bold text-[0.95rem] border-2 border-[rgba(255,184,0,0.4)] backdrop-blur-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            <i className="fas fa-bolt"></i> Entrega Rápida e Imediata
          </span>
          
          <h2 className="text-[3.5rem] md:text-[3.5rem] text-[2.25rem] font-black mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Concreto <span className="text-[hsl(var(--primary))] inline-block drop-shadow-[0_0_30px_rgba(255,107,53,0.6)]"></span>
          </h2>
          
          <p className="text-[1.5rem] md:text-[1.5rem] text-[1.15rem] font-bold text-[hsl(var(--accent))] mb-5 uppercase tracking-[2px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            ⚡ Disponibilidade Imediata - Entrega Expressa
          </p>
          
          <p className="text-[1.3rem] md:text-[1.3rem] text-[1.05rem] text-[#F3F4F6] mb-11 max-w-[750px] mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-medium">
            Atendimento profissional e especializado em concreto de alta qualidade. Trabalhamos com as melhores e mais confiáveis marcas do mercado nacional, garantindo entrega rápida, pontualidade e o melhor custo-benefício para sua obra.
          </p>
          
          <div className="flex gap-5 justify-center flex-wrap mb-[4.5rem]">
            <a 
              href={whatsappUrgent}
              className="btn btn-hero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Orçamento Imediato
            </a>
            <a href="#produtos" className="btn btn-secondary">
              <i className="fas fa-cubes"></i> Ver Produtos
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-14 border-t-2 border-t-[rgba(255,255,255,0.2)] backdrop-blur-[15px] bg-[rgba(255,255,255,0.08)] p-6 md:p-12 rounded-[20px]">
            <div className="text-center">
              <span className="block text-[3rem] font-black gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">15+</span>
              <span className="block text-[#F3F4F6] font-semibold text-[0.95rem] mt-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Anos de Mercado</span>
            </div>
            <div className="text-center">
              <span className="block text-[3rem] font-black gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">5000+</span>
              <span className="block text-[#F3F4F6] font-semibold text-[0.95rem] mt-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Obras Realizadas</span>
            </div>
            <div className="text-center">
              <span className="block text-[3rem] font-black gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">24h</span>
              <span className="block text-[#F3F4F6] font-semibold text-[0.95rem] mt-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Atendimento Rápido</span>
            </div>
            <div className="text-center">
              <span className="block text-[3rem] font-black gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">100%</span>
              <span className="block text-[#F3F4F6] font-semibold text-[0.95rem] mt-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
