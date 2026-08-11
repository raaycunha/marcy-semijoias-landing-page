import { ChevronRight } from "lucide-react";
import { type CollectionItem } from "../types/collection";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Collections = () => {
  const classDivImg =
    "relative w-[30%] min-[560px]:w-[60%] h-full overflow-hidden";
  const classImg = "w-full h-60 md:h-70 object-cover object-center";
  const classDegrade =
    "absolute inset-0 z-10 from-[#f9eee4] from-0% via-[#f9eee4]/80 via-20% to-transparent to-40% pointer-events-none";

  const collections: CollectionItem[] = [
    {
      id: "feminina",
      name: "Feminina",
      message:
        "Delicadeza e sofisticação que realçam sua beleza em cada detalhe.",
      banner: "feminino",
      reverse: false,
    },
    {
      id: "masculino",
      name: "Masculina",
      message:
        "Estilo e personalidade em peças que completam cada detalhe do visual.",
      banner: "masculino",
      reverse: true,
    },
    {
      id: "infantil",
      name: "Infantil",
      message:
        "Pequenos detalhes cheios de encanto para tornar cada momento ainda mais especial.",
      banner: "infantil",
      reverse: false,
    },
  ];

  return (
    <div
      id="colecoes"
      className="flex flex-col items-center mt-16 gap-10 text-shadow-sm text-shadow-black/5 font-montserrat px-2 md:mt-24"
    >
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-[#412918] font-cormorant font-semibold text-3xl/7 md:text-5xl/10 italic">
            Nossas Coleções
          </h2>
          <div className="h-px w-full bg-[#b58a4b]" />
        </div>
        <p className="text-[#412918] text-center text-xs mt-1 md:text-xl/5">
          Encontre a peça perfeita para cada momento
        </p>
      </div>
      {collections.map((item: CollectionItem) => (
        <div
          id={item.id}
          key={item.id}
          className={`flex ${item.reverse ? "flex-row-reverse" : "flex-row"} items-center justify-between w-full overflow-hidden bg-[#f4dbc16a] rounded-xl shadow-sm shadow-black/15 scroll-mt-20`}
        >
          <div className="relative flex flex-col px-6 w-[70%] min-[560px]:w-[40%] lg:px-10">
            <h2 className="text-xl font-cormorant font-semibold text-[#412918] min-[400px]:text-2xl md:text-3xl lg:text-4xl">
              Coleção <span className="text-[#A27A45]">{item.name}</span>
            </h2>
            <div className="my-4 h-px w-15 bg-[#b58a4b]" />
            <p className="text-[0.65rem] min-[400px]:text-sm md:text-md lg:text-lg mb-4">
              {item.message}
            </p>
            <a
              href={createWhatsappUrl(
                whatsappNumber,
                `Olá! Vim pelo site da Marcy Semijoias e gostaria de conhecer a Coleção ${item.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 max-w-max text-xs cursor-pointer px-2 h-9 md:h-11 min-[560px]:text-sm rounded-md font-semibold text-[#A27A45] border border-[#A27A45] text-shadow-none transition-all duration-300 hover:bg-[#b58a4b] hover:text-white md:text-lg"
            >
              Conhecer coleção <ChevronRight size={20} />
            </a>
          </div>
          <div className={`${classDivImg}`}>
            <img
              className={`${classImg}`}
              loading="lazy"
              width={1200}
              height={675}
              src={`/images/banner-${item.banner}.webp`}
              alt={`Coleção ${item.name}`}
            />
            <div
              className={`${classDegrade} ${item.reverse ? "bg-linear-to-l" : "bg-linear-to-r"}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
