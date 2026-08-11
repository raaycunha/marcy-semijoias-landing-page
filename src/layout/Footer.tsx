import { Gem, Package } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 px-2 py-6 font-montserrat text-[#412918] mt-14 md:mt-24">
      <div className="flex flex-col">
        <img
          className="pt-2 w-30 md:w-40"
          src="images/logo-marcy.png"
          alt="Logo Marcy Semijoias"
        />
        <div className="my-4 h-px w-15 bg-[#b58a4b]" />
        <span className="text-md font-medium md:text-left">
          Semijoias para mulheres, homens e crianças.
        </span>
      </div>
      <div className="flex flex-col gap-14 md:flex-row md:gap-30">
        <div className="flex flex-col ">
          <span className="font-semibold mb-2 text-lg">Produtos</span>
          <a href="/#feminina" className="hover:font-medium">
            Coleção Feminina
          </a>
          <a href="/#masculino" className="hover:font-medium">
            Coleção Masculina
          </a>
          <a href="/#infantil" className="hover:font-medium">
            Coleção Infantil
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold mb-2 text-lg">Institucional</span>
          <Link to="/terms" className="hover:font-medium">
            Termos e Condições
          </Link>
          <a href="/" className="cursor-pointer hover:font-medium">
            Duvidas Frequentes (FAQ)
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold mb-2 text-lg">Contato</span>
          <a
            href={createWhatsappUrl(
              whatsappNumber,
              "Olá! Vim pelo site da Marcy Semijoias e gostaria de tirar uma dúvida.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:font-medium"
          >
            <FaWhatsapp className="text-green-400" size={20} /> (31) 9 8454-4308
          </a>
          <a
            href="https://www.instagram.com/marcy_semijoiass/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:font-medium"
          >
            <FaInstagram className="text-[#B933B0]" size={20} />
            @marcy_semijoiass
          </a>
          <span className="flex items-center gap-1">
            <Package className="text-[#9F6A1B]" size={20} /> Entregamos para
            todo o Brasil
          </span>
          <span className="flex items-center gap-1">
            <Gem className="text-blue-400" size={20} /> Atendimento presencial
            em Venda Nova - BH
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="font-medium">© 2026 Marcy Semijoias.</span>
          <span className="font-medium">Todos os direitos reservados.</span>
          <span>CNPJ: 52.459.696/0001-12</span>
        </div>
        <span>
          Desenvolvido por{" "}
          <a
            href={createWhatsappUrl(
              "31986943109",
              "Olá! Gostaria de conhecer mais sobre o seu trabalho.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-all duration-400 hover:text-blue-700"
          >
            Ray Gonçalves
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
