const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(135deg,hsl(var(--secondary)),#0F1219)] text-[#D1D5DB] pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)),hsl(var(--primary)))]"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[55px] h-[55px] icon-gradient rounded-[14px] flex items-center justify-center text-[2rem] font-black text-white shadow-[0_4px_15px_hsla(var(--primary),0.3)]">
                P
              </div>
              <div>
                <h3 className="text-[1.6rem] font-black text-white">
                  <span className="text-[hsl(var(--primary))]">Central</span> Entrega Rápida
                </h3>
                <span className="block text-[0.7rem] text-[#9CA3AF] tracking-[2px] mt-0.5 uppercase font-semibold">
                  Concreto Usinado
                </span>
              </div>
            </div>
            <p className="leading-relaxed mt-4 text-[#9CA3AF]">
              Central especializada em concreto de alta qualidade com entrega rápida e imediata. Trabalhamos com as melhores marcas nacionais do mercado.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-transparent hover:bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] hover:border-[hsl(var(--primary))] hover:translate-y-[-3px] hover:shadow-[0_6px_15px_hsla(var(--primary),0.3)]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-transparent hover:bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] hover:border-[hsl(var(--primary))] hover:translate-y-[-3px] hover:shadow-[0_6px_15px_hsla(var(--primary),0.3)]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-transparent hover:bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] hover:border-[hsl(var(--primary))] hover:translate-y-[-3px] hover:shadow-[0_6px_15px_hsla(var(--primary),0.3)]">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/5516999511899" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-transparent hover:bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] hover:border-[hsl(var(--primary))] hover:translate-y-[-3px] hover:shadow-[0_6px_15px_hsla(var(--primary),0.3)]">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 text-[1.2rem] font-extrabold">Links Rápidos</h4>
            <ul className="list-none">
              <li className="mb-3"><a href="#inicio" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Início</a></li>
              <li className="mb-3"><a href="#produtos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Produtos</a></li>
              <li className="mb-3"><a href="#servicos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Serviços</a></li>
              <li className="mb-3"><a href="#diferenciais" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Diferenciais</a></li>
              <li className="mb-3"><a href="#contato" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Contato</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-6 text-[1.2rem] font-extrabold">Produtos</h4>
            <ul className="list-none">
              <li className="mb-3"><a href="#produtos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Concreto Convencional</a></li>
              <li className="mb-3"><a href="#produtos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Concreto Bombeável</a></li>
              <li className="mb-3"><a href="#produtos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Concreto Auto-Adensável</a></li>
              <li className="mb-3"><a href="#produtos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Concreto Impermeável</a></li>
              <li className="mb-3"><a href="#produtos" className="text-[#D1D5DB] no-underline transition-all duration-300 text-[0.95rem] hover:text-[hsl(var(--primary))] hover:pl-1">Concreto Rodoviário</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6 text-[1.2rem] font-extrabold">Contato</h4>
            <ul className="list-none">
              <li className="mb-3">
                <i className="fab fa-whatsapp text-[hsl(var(--primary))] mr-2"></i>
                <a href="https://wa.me/5516999511899" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] no-underline transition-colors hover:text-[hsl(var(--primary))]">(15) 98819-1697</a>
              </li>
              <li className="mb-3">
                <i className="fas fa-phone text-[hsl(var(--primary))] mr-2"></i>
                <a href="tel:+5516999511899" className="text-[#D1D5DB] no-underline transition-colors hover:text-[hsl(var(--primary))]">(16) 99951-1899</a>
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope text-[hsl(var(--primary))] mr-2"></i>
                <span className="text-[#D1D5DB]">contato@centralentregarapida.com.br</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt text-[hsl(var(--primary))] mr-2"></i>
                <span className="text-[#D1D5DB]">Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-10 border-t border-t-[rgba(255,255,255,0.1)] text-[0.9rem]">
          <p className="mb-2">&copy; 2024 Central Entrega Rápida - Concreto Usinado. Todos os direitos reservados.</p>
          <p className="text-[0.85rem] mt-3 opacity-85">
            Central especializada em fornecimento de concreto com entrega rápida e imediata. Trabalhamos com as melhores marcas conforme disponibilidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
