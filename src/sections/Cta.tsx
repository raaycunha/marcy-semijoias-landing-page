import { FaWhatsapp } from "react-icons/fa";
import { classButton } from "../utils/ClassButton";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Cta = () => {
  return (
    <div className="flex flex-col items-center mt-14 md:mt-24 text-[#412918]">
      <h2 className="font-cormorant font-semibold text-2xl mb-2 md:text-5xl/12">
        Encontre sua próxima semijoia!
      </h2>
      <span className="font-montserrat text-center text-sm min-[400px]:w-105 min-[480px]:w-full mb-4 md:text-xl">
        Fale com a gente pelo WhatsApp e receba um atendimento rápido!
      </span>
      <a
        href={createWhatsappUrl(
          whatsappNumber,
          "Olá! Vim pelo site da Marcy Semijoias e gostaria de conhecer mais opções. Pode me ajudar a encontrar uma peça?",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-1 py-2 px-4 ${classButton} text-sm md:text-2xl`}
      >
        <FaWhatsapp className="hidden md:block md:text-2xl" /> Seu próximo
        detalhe especial está aqui
      </a>
    </div>
  );
};

export default Cta;
