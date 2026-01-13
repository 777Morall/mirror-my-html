const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.me/5516999511899?text=Olá!%20Preciso%20de%20concreto%20COM%20URGÊNCIA!%20Quero%20orçamento%20imediato";

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[30px] right-[30px] md:bottom-[30px] md:right-[30px] w-[65px] h-[65px] md:w-[75px] md:h-[75px] bg-[linear-gradient(135deg,hsl(var(--whatsapp)),hsl(var(--whatsapp-dark)))] text-white rounded-full flex items-center justify-center text-[2.25rem] md:text-[2.75rem] shadow-[0_10px_30px_hsla(var(--whatsapp),0.5)] z-[9999] no-underline animate-float-pulse border-4 border-[rgba(255,255,255,0.3)] hover:scale-[1.15] transition-transform"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
