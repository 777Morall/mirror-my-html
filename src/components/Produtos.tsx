const produtos = [
  {
    icon: "fas fa-building",
    title: "Concreto Convencional",
    description: "Ideal para lajes, vigas, pilares e fundações. Disponível em diversas resistências (FCK 20 a 40 MPa) com entrega imediata.",
    features: ["Alta resistência certificada", "Controle rigoroso de qualidade", "Entrega pontual garantida"],
    featured: false,
    whatsappText: "Olá!%20Gostaria%20de%20orçamento%20de%20Concreto%20Convencional"
  },
  {
    icon: "fas fa-truck-loading",
    title: "Concreto Bombeável",
    description: "Especialmente desenvolvido para bombeamento, garantindo facilidade e rapidez no lançamento em locais de difícil acesso.",
    features: ["Aplicação rápida e fácil", "Reduz tempo de obra", "Menor desperdício"],
    featured: true,
    whatsappText: "Olá!%20Gostaria%20de%20orçamento%20de%20Concreto%20Bombeável"
  },
  {
    icon: "fas fa-hammer",
    title: "Concreto Auto-Adensável",
    description: "Tecnologia avançada que dispensa vibração mecânica, garantindo acabamento perfeito e maior produtividade.",
    features: ["Sem vibração necessária", "Acabamento superior", "Maior produtividade"],
    featured: false,
    whatsappText: "Olá!%20Gostaria%20de%20orçamento%20de%20Concreto%20Auto-Adensável"
  },
  {
    icon: "fas fa-tint",
    title: "Concreto Impermeável",
    description: "Especial para áreas molhadas, piscinas, reservatórios e estruturas que exigem alta impermeabilidade e durabilidade.",
    features: ["Impermeabilização garantida", "Durabilidade superior", "Ideal para áreas úmidas"],
    featured: false,
    whatsappText: "Olá!%20Gostaria%20de%20orçamento%20de%20Concreto%20Impermeável"
  },
  {
    icon: "fas fa-road",
    title: "Concreto Rodoviário",
    description: "Desenvolvido para pavimentação de vias, estradas e grandes áreas externas com alta resistência ao tráfego.",
    features: ["Alta resistência ao tráfego", "Durabilidade extrema", "Baixa manutenção"],
    featured: false,
    whatsappText: "Olá!%20Gostaria%20de%20orçamento%20de%20Concreto%20Rodoviário"
  },
  {
    icon: "fas fa-cog",
    title: "Concreto Personalizado",
    description: "Concreto sob medida para atender necessidades específicas do seu projeto com consultoria técnica especializada.",
    features: ["Consultoria técnica completa", "Especificações customizadas", "Suporte especializado"],
    featured: false,
    whatsappText: "Olá!%20Gostaria%20de%20orçamento%20de%20Concreto%20Personalizado"
  }
];

const Produtos = () => {
  return (
    <section id="produtos" className="py-28 bg-[linear-gradient(180deg,hsl(var(--gray-light))_0%,#FAFAFA_100%)]">
      <div className="container-custom">
        <div className="text-center max-w-[750px] mx-auto mb-[4.5rem]">
          <span className="section-badge">
            <i className="fas fa-cubes"></i> Linha Completa
          </span>
          <h2 className="text-[2.75rem] md:text-[2.75rem] text-[2rem] font-black text-[hsl(var(--secondary))] mb-5 leading-tight">
            Concreto <span className="text-[hsl(var(--primary))]"></span>
          </h2>
          <p className="text-[1.15rem] text-[hsl(var(--gray-dark))] leading-relaxed">
            Soluções profissionais em concreto para todas as necessidades da sua obra com entrega rápida e garantia de qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {produtos.map((produto, index) => (
            <div 
              key={index}
              className={`bg-white rounded-[20px] p-10 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-400 border-2 relative overflow-hidden group hover:translate-y-[-12px] hover:border-[hsl(var(--primary))] hover:shadow-[0_15px_40px_rgba(255,107,53,0.2)] ${produto.featured ? 'border-[hsl(var(--primary))] bg-[linear-gradient(135deg,#FFF_0%,#FFF8F0_100%)]' : 'border-transparent'}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))] scale-x-0 transition-transform duration-400 group-hover:scale-x-100"></div>
              
              {produto.featured && (
                <div className="absolute top-5 right-5 bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-dark)))] text-white py-2 px-5 rounded-full text-[0.75rem] font-extrabold shadow-[0_4px_12px_hsla(var(--primary),0.3)] uppercase tracking-[0.5px]">
                  ⭐ Mais Solicitado
                </div>
              )}

              <div className="w-[75px] h-[75px] icon-gradient rounded-[18px] flex items-center justify-center mb-7 text-[2.25rem] text-white shadow-[0_8px_20px_hsla(var(--primary),0.25)]">
                <i className={produto.icon}></i>
              </div>

              <h3 className="text-[1.65rem] font-extrabold text-[hsl(var(--secondary))] mb-4 leading-tight">
                {produto.title}
              </h3>

              <p className="text-[hsl(var(--gray-dark))] mb-7 leading-relaxed text-[0.98rem]">
                {produto.description}
              </p>

              <ul className="list-none mb-9">
                {produto.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 mb-3 text-[hsl(var(--secondary))] font-medium text-[0.95rem]">
                    <i className="fas fa-check-circle text-[hsl(var(--primary))] text-[1.1rem]"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/5516999511899?text=${produto.whatsappText}`}
                className={`btn ${produto.featured ? 'btn-primary' : 'btn-outline'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[linear-gradient(135deg,hsla(var(--primary),0.08),hsla(var(--accent),0.08))] border-l-[5px] border-l-[hsl(var(--primary))] p-8 md:p-10 rounded-2xl mt-14 text-[1rem] text-[hsl(var(--secondary))] shadow-[0_6px_20px_rgba(0,0,0,0.06)] leading-relaxed">
          <i className="fas fa-info-circle text-[hsl(var(--primary))] mr-2"></i>
          <strong className="text-[hsl(var(--primary))] font-extrabold">Sobre nosso atendimento:</strong> Somos uma central especializada em fornecer concreto usinado de alta qualidade com entrega rápida e imediata. Atendemos <strong className="text-[hsl(var(--primary))] font-extrabold">todo o Brasil</strong> trabalhando com as <strong className="text-[hsl(var(--primary))] font-extrabold">melhores marcas nacionais e regionais</strong> do mercado, selecionando sempre fornecedores certificados conforme disponibilidade e melhor custo-benefício para sua obra. Entre em contato via WhatsApp para verificar disponibilidade imediata na sua região.
        </div>
      </div>
    </section>
  );
};

export default Produtos;
