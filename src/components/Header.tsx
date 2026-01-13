import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const whatsappLink = "https://wa.me/5516999511899?text=Olá!%20Gostaria%20de%20um%20orçamento%20de%20concreto";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-[1000] border-b-[3px] border-b-[hsl(var(--primary))]">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] icon-gradient rounded-2xl flex items-center justify-center text-[2.5rem] font-black text-white shadow-[0_4px_15px_hsla(var(--primary),0.3)]">
              P
            </div>
            <div>
              <h1 className="text-[1.75rem] font-black text-[hsl(var(--secondary))] tracking-tight leading-tight">
                <span className="text-[hsl(var(--primary))]">Central</span> Entrega Rápida
              </h1>
              <span className="text-[0.7rem] font-semibold text-[hsl(var(--gray))] tracking-[2px] block mt-0.5 uppercase">
                Concreto Usinado
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`${isNavOpen ? 'right-0' : '-right-full'} md:static fixed top-0 w-[85%] md:w-auto h-screen md:h-auto bg-white md:bg-transparent shadow-[0_0_50px_rgba(0,0,0,0.3)] md:shadow-none transition-all duration-300 z-[9999] p-8 md:p-0`}>
            <button 
              className="block md:hidden bg-transparent border-none text-2xl cursor-pointer text-[hsl(var(--secondary))]"
              onClick={() => setIsNavOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <ul className="flex flex-col md:flex-row list-none gap-6 md:gap-10 items-start md:items-center mt-12 md:mt-0">
              <li><a href="#inicio" className="text-[hsl(var(--secondary))] no-underline font-semibold transition-colors hover:text-[hsl(var(--primary))] text-[0.95rem]" onClick={() => setIsNavOpen(false)}>Início</a></li>
              <li><a href="#produtos" className="text-[hsl(var(--secondary))] no-underline font-semibold transition-colors hover:text-[hsl(var(--primary))] text-[0.95rem]" onClick={() => setIsNavOpen(false)}>Produtos</a></li>
              <li><a href="#servicos" className="text-[hsl(var(--secondary))] no-underline font-semibold transition-colors hover:text-[hsl(var(--primary))] text-[0.95rem]" onClick={() => setIsNavOpen(false)}>Serviços</a></li>
              <li><a href="#diferenciais" className="text-[hsl(var(--secondary))] no-underline font-semibold transition-colors hover:text-[hsl(var(--primary))] text-[0.95rem]" onClick={() => setIsNavOpen(false)}>Diferenciais</a></li>
              <li><a href="#contato" className="text-[hsl(var(--secondary))] no-underline font-semibold transition-colors hover:text-[hsl(var(--primary))] text-[0.95rem]" onClick={() => setIsNavOpen(false)}>Contato</a></li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href={whatsappLink}
              className="btn btn-primary hidden md:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Fale Conosco
            </a>
            <button 
              className="block md:hidden bg-transparent border-none text-2xl cursor-pointer text-[hsl(var(--secondary))]"
              onClick={() => setIsNavOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
