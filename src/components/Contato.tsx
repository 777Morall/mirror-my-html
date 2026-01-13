import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    produto: "",
    mensagem: ""
  });

  const produtoOptions = [
    { value: "", label: "Selecione um produto" },
    { value: "convencional", label: "Concreto Convencional" },
    { value: "bombeavel", label: "Concreto Bombeável" },
    { value: "auto-adensavel", label: "Concreto Auto-Adensável" },
    { value: "impermeavel", label: "Concreto Impermeável" },
    { value: "rodoviario", label: "Concreto Rodoviário" },
    { value: "personalizado", label: "Concreto Personalizado" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const produtoNome = produtoOptions.find(p => p.value === formData.produto)?.label || "";
    const whatsappMessage = `Olá! Meu nome é *${formData.nome}*%0A%0A📧 Email: ${formData.email}%0A📱 Telefone: ${formData.telefone}%0A🏗️ Produto: *${produtoNome}*%0A%0A💬 Mensagem:%0A${formData.mensagem}`;
    const whatsappURL = `https://wa.me/5516999511899?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
    setFormData({ nome: "", email: "", telefone: "", produto: "", mensagem: "" });
  };

  return (
    <section id="contato" className="py-28 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-[750px] mx-auto mb-[4.5rem]">
          <span className="section-badge">
            <i className="fas fa-envelope"></i> Entre em Contato
          </span>
          <h2 className="text-[2.75rem] md:text-[2.75rem] text-[2rem] font-black text-[hsl(var(--secondary))] mb-5 leading-tight">
            Fale <span className="text-[hsl(var(--primary))]">Conosco</span>
          </h2>
          <p className="text-[1.15rem] text-[hsl(var(--gray-dark))] leading-relaxed">
            Preencha o formulário ou entre em contato via WhatsApp para orçamento imediato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Form */}
          <div className="p-8 md:p-12 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-7">
                <label htmlFor="nome" className="font-bold text-[hsl(var(--secondary))] mb-2 text-[0.95rem]">
                  Nome Completo
                </label>
                <input 
                  type="text" 
                  id="nome" 
                  required 
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="p-4 px-5 border-2 border-[#E5E7EB] rounded-xl font-sans text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-[hsl(var(--primary))] focus:shadow-[0_0_0_4px_hsla(var(--primary),0.1)]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col mb-7">
                  <label htmlFor="email" className="font-bold text-[hsl(var(--secondary))] mb-2 text-[0.95rem]">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="p-4 px-5 border-2 border-[#E5E7EB] rounded-xl font-sans text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-[hsl(var(--primary))] focus:shadow-[0_0_0_4px_hsla(var(--primary),0.1)]"
                  />
                </div>
                <div className="flex flex-col mb-7">
                  <label htmlFor="telefone" className="font-bold text-[hsl(var(--secondary))] mb-2 text-[0.95rem]">
                    Telefone/WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    required 
                    placeholder="(16) 99951-1899"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    className="p-4 px-5 border-2 border-[#E5E7EB] rounded-xl font-sans text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-[hsl(var(--primary))] focus:shadow-[0_0_0_4px_hsla(var(--primary),0.1)]"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-7">
                <label htmlFor="produto" className="font-bold text-[hsl(var(--secondary))] mb-2 text-[0.95rem]">
                  Produto de Interesse
                </label>
                <select 
                  id="produto" 
                  required
                  value={formData.produto}
                  onChange={(e) => setFormData({...formData, produto: e.target.value})}
                  className="p-4 px-5 border-2 border-[#E5E7EB] rounded-xl font-sans text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-[hsl(var(--primary))] focus:shadow-[0_0_0_4px_hsla(var(--primary),0.1)] bg-white"
                >
                  {produtoOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-7">
                <label htmlFor="mensagem" className="font-bold text-[hsl(var(--secondary))] mb-2 text-[0.95rem]">
                  Mensagem
                </label>
                <textarea 
                  id="mensagem" 
                  rows={5} 
                  required 
                  placeholder="Descreva seu projeto, localização da obra e prazo de entrega necessário"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  className="p-4 px-5 border-2 border-[#E5E7EB] rounded-xl font-sans text-[0.95rem] transition-all duration-300 focus:outline-none focus:border-[hsl(var(--primary))] focus:shadow-[0_0_0_4px_hsla(var(--primary),0.1)] resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <i className="fas fa-paper-plane"></i> Enviar Mensagem
              </button>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="bg-[linear-gradient(135deg,hsl(var(--gray-light)),#FAFAFA)] rounded-2xl p-6 text-center transition-all duration-300 border-2 border-transparent hover:border-[hsl(var(--primary))] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                  <div className="w-[50px] h-[50px] icon-gradient rounded-full flex items-center justify-center mx-auto mb-3 text-[1.25rem] text-white shadow-[0_6px_15px_hsla(var(--primary),0.25)]">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h4 className="font-extrabold text-[hsl(var(--secondary))] mb-1 text-[0.9rem]">WhatsApp</h4>
                  <p className="text-[hsl(var(--gray-dark))] mb-1 font-semibold text-[0.85rem]">(16) 99951-1899</p>
                  <a href="https://wa.me/5516999511899?text=Olá!%20Preciso%20de%20orçamento%20urgente%20de%20concreto" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] no-underline font-bold transition-colors hover:text-[hsl(var(--primary-dark))] text-[0.8rem]">
                    Chamar agora
                  </a>
                </div>

                <div className="bg-[linear-gradient(135deg,hsl(var(--gray-light)),#FAFAFA)] rounded-2xl p-6 text-center transition-all duration-300 border-2 border-transparent hover:border-[hsl(var(--primary))] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                  <div className="w-[50px] h-[50px] icon-gradient rounded-full flex items-center justify-center mx-auto mb-3 text-[1.25rem] text-white shadow-[0_6px_15px_hsla(var(--primary),0.25)]">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h4 className="font-extrabold text-[hsl(var(--secondary))] mb-1 text-[0.9rem]">Telefone</h4>
                  <p className="text-[hsl(var(--gray-dark))] mb-1 font-semibold text-[0.85rem]">(16) 99951-1899</p>
                  <a href="tel:+5516999511899" className="text-[hsl(var(--primary))] no-underline font-bold transition-colors hover:text-[hsl(var(--primary-dark))] text-[0.8rem]">
                    Ligar agora
                  </a>
                </div>

                <div className="bg-[linear-gradient(135deg,hsl(var(--gray-light)),#FAFAFA)] rounded-2xl p-6 text-center transition-all duration-300 border-2 border-transparent hover:border-[hsl(var(--primary))] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                  <div className="w-[50px] h-[50px] icon-gradient rounded-full flex items-center justify-center mx-auto mb-3 text-[1.25rem] text-white shadow-[0_6px_15px_hsla(var(--primary),0.25)]">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4 className="font-extrabold text-[hsl(var(--secondary))] mb-1 text-[0.9rem]">E-mail</h4>
                  <p className="text-[hsl(var(--gray-dark))] mb-1 font-semibold text-[0.85rem]">contato@centralentregarapida.com.br</p>
                </div>

                <div className="bg-[linear-gradient(135deg,hsl(var(--gray-light)),#FAFAFA)] rounded-2xl p-6 text-center transition-all duration-300 border-2 border-transparent hover:border-[hsl(var(--primary))] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                  <div className="w-[50px] h-[50px] icon-gradient rounded-full flex items-center justify-center mx-auto mb-3 text-[1.25rem] text-white shadow-[0_6px_15px_hsla(var(--primary),0.25)]">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h4 className="font-extrabold text-[hsl(var(--secondary))] mb-1 text-[0.9rem]">Atendimento</h4>
                  <p className="text-[hsl(var(--gray-dark))] mb-1 font-semibold text-[0.85rem]">Brasil Inteiro</p>
                  <a href="#contato" className="text-[hsl(var(--primary))] no-underline font-bold transition-colors hover:text-[hsl(var(--primary-dark))] text-[0.8rem]">
                    Ver cobertura
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Image */}
          <div 
            className="relative min-h-[400px] lg:min-h-[600px] bg-cover bg-center rounded-3xl lg:rounded-l-none overflow-hidden order-first lg:order-last"
            style={{
              backgroundImage: `url('https://cdn1.genspark.ai/user-upload-image/5_generated/08d70322-e238-4f90-86b0-1aa4a8f13fb0.jpeg')`
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[linear-gradient(to_top,rgba(26,29,46,0.85),transparent)]"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white z-10">
              <h3 className="text-[2rem] font-black mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                🏗️ Obras Profissionais
              </h3>
              <p className="text-[1.1rem] leading-relaxed opacity-95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] mb-6">
                Nossa equipe especializada atende obras de todos os portes com concreto de alta qualidade, entrega rápida e total suporte técnico.
              </p>
              <ul className="list-none">
                <li className="flex items-center gap-3 mb-3 text-[1rem] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <i className="fas fa-check-circle text-[hsl(var(--accent))] text-[1.2rem]"></i> Atendimento 24/7
                </li>
                <li className="flex items-center gap-3 mb-3 text-[1rem] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <i className="fas fa-check-circle text-[hsl(var(--accent))] text-[1.2rem]"></i> Resposta em até 10 minutos
                </li>
                <li className="flex items-center gap-3 mb-3 text-[1rem] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <i className="fas fa-check-circle text-[hsl(var(--accent))] text-[1.2rem]"></i> Orçamento gratuito
                </li>
                <li className="flex items-center gap-3 text-[1rem] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  <i className="fas fa-check-circle text-[hsl(var(--accent))] text-[1.2rem]"></i> Entrega imediata
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
