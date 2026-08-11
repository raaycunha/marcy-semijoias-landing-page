const About = () => {
  return (
    <section id="sobre" className="px-3 font-montserrat mt-16 md:mt-24 md:px-8">
      <div className="relative mx-auto min-h-130 max-w-7xl overflow-hidden rounded-md bg-[#f6eee6] md:min-h-102.5">
        <img
          src="../public/images/about-image.jpg"
          alt="Joias sobre um pano"
          className=" hidden absolute inset-0 h-full w-full object-cover object-center md:left-auto md:right-0 md:w-[58%] md:block"
        />
        <div
          className="
            absolute inset-0 z-10
            bg-linear-to-b
            from-[#f6eee6]
            via-[#f6eee6]/90
            to-[#f6eee6]/20

            md:bg-linear-to-r
            md:from-[#FAF0E5]
            md:via-[#f6eee6]
            md:to-transparent
          "
        />
        <div className="relative z-20 flex min-h-130 items-start px-6 py-10 md:min-h-102.5 md:w-[58%] md:items-center md:px-12 md:py-12">
          <div className="max-w-xl">
            <span className=" text-xs font-semibold uppercase tracking-[0.18em] text-[#b58a4b]">
              Nossa história
            </span>
            <h2 className=" mt-3 font-cormorant text-3xl font-semibold leading-tight text-[#3f2c26] md:text-5xl">
              Sobre a Marcy Semijoias
            </h2>
            <div className="my-4 h-px w-10 bg-[#b58a4b]" />
            <p className=" text-sm font-medium leading-relaxed text-[#5d4941] md:text-base">
              Mais do que vender semijoias, queremos valorizar a autoestima de
              cada cliente.
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#6d5b53]">
              <p>
                Há mais de 6 anos, a Marcy Semijoias leva elegância e qualidade
                aos clientes. Ao longo dessa trajetória, conquistamos a
                confiança de centenas de pessoas oferecendo peças cuidadosamente
                selecionadas, atendimento próximo e compromisso com a satisfação
                de cada cliente.
              </p>
              <p>
                Seja para o dia a dia, um presente especial ou uma ocasião
                inesquecível, estamos prontos para ajudar você a encontrar a
                semijoia ideal, seja por atendimento presencial ou pelo
                WhatsApp.
              </p>
              <p>
                Oferecemos peças para mulheres, homens e crianças, sempre
                priorizando qualidade, elegância e um atendimento próximo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
