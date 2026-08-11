import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { classButton } from "../utils/ClassButton";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const disabledToggle = () => setToggle(false);
  return (
    <header className="relative flex justify-between items-center py-6 px-4 font-montserrat text-[#412918]">
      <div className="flex flex-col items-center mb-2 text-[#9F6A1B]">
        <img
          className="pt-2 w-10 md:w-20"
          width={1200}
          height={241}
          src="images/logo-marcy.png"
          alt="Logo Marcy Semijoias"
        />
      </div>
      <nav className="flex">
        <button
          className="relative h-6 w-6 cursor-pointer md:hidden" // Adicionado tamanho fixo para o container
          onClick={() => setToggle((prev) => !prev)}
          aria-label={toggle ? "Fechar menu" : "Abrir menu"}
          aria-expanded={toggle}
          aria-controls="menu-principal"
        >
          <MenuIcon
            size={24}
            className={`absolute inset-0 transition-all duration-300 transform ${
              toggle
                ? "scale-0 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <X
            size={24}
            className={`absolute inset-0 transition-all duration-300 transform ${
              toggle
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-90 opacity-0"
            }`}
          />
        </button>
        <ul
          className={`${toggle ? "flex border-t border-t-[#9F6A1B] bg-[#FAF0E5]/90 backdrop-blur-md" : "hidden"} absolute top-full right-0 w-full justify-center gap-6 p-2 shadow-lg md:static md:text-md lg:text-xl md:flex md:flex-row md:w-auto md:p-0 md:shadow-none`}
        >
          <li>
            <a onClick={disabledToggle} href="/#inicio">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={disabledToggle} href="/#colecoes">
              Coleções
            </a>
          </li>
          <li>
            <a onClick={disabledToggle} href="/#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a
              onClick={disabledToggle}
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
