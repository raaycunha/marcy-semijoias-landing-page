import Container from "../components/Container";
import { classButton } from "../utils/ClassButton";
import { whatsappNumber } from "../utils/contact";
import { createWhatsappUrl } from "../utils/whatsapp";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-105 overflow-hidden md:min-h-130"
    >
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet="/images/banner-hero.webp" />
        <img
          src="/images/banner-hero-mobile.webp"
          alt=""
          width={1000}
          height={463}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div
        className="
          absolute inset-0 z-1
          bg-linear-to-r
          from-[#f4dbc1]/95
          via-[#f4dbc1]/55
          to-transparent
          min-[400px]:via-[#f4dbc1]/35
          min-[554px]:via-[#f4dbc1]/20
          md:from-[#f4dbc1]/90
          md:via-[#f4dbc1]/30
          md:to-transparent
          lg:from-transparent
          lg:via-transparent
        "
      />
      <div className="relative z-10">
        <Container>
          <div className="flex min-h-105 items-center md:min-h-130">
            <div className="px-4">
              <h1 className="w-full max-w-50 font-cormorant text-3xl leading-[0.95] font-semibold text-[#3d2417] md:max-w-80 md:text-6xl">
                Joias que traduzem sua essência.
              </h1>

              <div className="my-3 h-px w-20 bg-[#b48645]" />

              <p className="w-60 font-montserrat text-[11px] leading-tight text-[#4c3325] md:w-100 md:text-lg">
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
      </div>
    </section>
  );
};

export default Hero;
