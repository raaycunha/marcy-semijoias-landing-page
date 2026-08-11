import { BsShieldCheck } from "react-icons/bs";
import { FaGem } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { MdOutlineCleanHands } from "react-icons/md";
import { type SecurityItem } from "../types/security";

const Security = () => {
  const classCard =
    "w-full max-w-75 min-h-15 flex items-center justify-left gap-4 border border-[#9F6A1B] shadow-sm shadow-black/20 p-6 rounded-xl md:min-h-30";
  const classIcon = "text-[#9F6A1B] text-4xl";

  const securityCards: SecurityItem[] = [
    {
      id: 0,
      message: "Qualidade Premium",
      icon: FaGem,
    },
    {
      id: 1,
      message: "Garantia de 6 Meses",
      icon: BsShieldCheck,
    },
    {
      id: 2,
      message: "Banho gratuito por 6 Meses",
      icon: MdOutlineCleanHands,
      iconClassName: "md:text-5xl",
    },
    {
      id: 3,
      message: "Enviamos para todo o Brasil",
      icon: FaVanShuttle,
      iconClassName: "md:text-5xl",
    },
  ];
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-5 py-4 px-2 font-poppins md:justify-center lg:flex-nowrap">
      {securityCards.map((item: SecurityItem) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className={`${classCard}`} aria-hidden={true}>
            <Icon className={`${classIcon} ${item.iconClassName ?? ""}`} />
            <span className="uppercase text-[#412918] font-medium text-xs md:text-md xl:text-lg">
              {item.message}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Security;
