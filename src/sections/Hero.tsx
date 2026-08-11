import Container from "../components/Container";
import { classButton } from "../utils/ClassButton";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-105 bg-cover bg-center md:min-h-130"
      style={{
        backgroundImage: `url(/images/banner-hero.jpg)`,
      }}
    >
      <Container>
        <div className="absolute inset-0 bg-linear-to-r from-[#f5e8d8]/95 via-[#f5e8d8]/55 to-transparent min-[500px]:from-[#f5e8d8]/95 min-[500px]:via-[#f5e8d8]/30 lg:from-transparent lg:via-transparent" />
        <div className="relative z-10 flex min-h-105 items-center px-4 md:py-24 md:min-h-13">
          <div className="max-w-47.5 md:max-w-md">
            <h1 className="w-full font-cormorant font-semibold text-3xl leading-[0.95] text-[#3d2417] md:max-w-80 md:text-6xl">
              Joias que traduzem sua essência.
            </h1>
            <div className="my-3 h-px w-20 bg-[#b48645]" />
            <p className=" font-montserrat text-[11px] leading-tight text-[#4c3325] md:text-lg">
              Encontre os acessórios perfeitos para os seus momentos
              inesquecíveis.
            </p>
            <a
              href={createWhatsappUrl(
                whatsappNumber,
                "Olá! Vim pelo site da Marcy Semijoias e gostaria de conhecer mais opções. Pode me ajudar a encontrar uma peça?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-block px-4 py-2 ${classButton} text-sm md:text-2xl`}
            >
              Garanta Seu Brilho
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
