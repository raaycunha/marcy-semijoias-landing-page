import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { classButton } from "../utils/ClassButton";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="relative flex justify-between items-center py-4 px-4 font-montserrat text-[#412918]">
      <div className="flex flex-col items-center mb-2 text-[#9F6A1B]">
        <img className="pt-2 w-20 md:w-40" src="images/logo-marcy.png" alt="" />
      </div>
      <nav className="flex">
        <button
          className="cursor-pointer transition-all duration-300 hover:bg-[#7f5310] md:hidden"
          onClick={() => setToggle((prev) => !prev)}
          aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          aria-expanded={toggle}
          aria-controls="menu-principal"
        >
          {toggle ? (
            <X className="rotate-180 transition-all duration-300" size={24} />
          ) : (
            <MenuIcon
              className="rotate-0 transition-all duration-300"
              size={24}
            />
          )}
        </button>
        <ul
          className={`${toggle ? "flex border-t border-gray-200 bg-[#FAF0E5]" : "hidden"} absolute top-full right-0 w-full justify-center gap-6 p-2 shadow-lg md:static md:text-md lg:text-xl md:flex md:flex-row md:w-auto md:p-0 md:shadow-none`}
        >
          <li>
            <a href="/#inicio">Inicio</a>
          </li>
          <li>
            <a href="/#colecoes">Coleções</a>
          </li>
          <li>
            <a href="/#sobre">Sobre</a>
          </li>
          <li>
            <a
              href={createWhatsappUrl(
                whatsappNumber,
                "Olá! Vim pelo site da Marcy Semijoias e gostaria de tirar uma dúvida.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <a
        href={createWhatsappUrl(
          whatsappNumber,
          "Olá! Vim pelo site da Marcy Semijoias e gostaria de tirar uma dúvida.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-1 px-2 py-1 ${classButton}`}
      >
        <FaWhatsapp className="text-2xl" />
        <span onClick={() => setToggle(false)} className="hidden md:block">
          Fale Conosco
        </span>
      </a>
    </header>
  );
};

export default Header;
