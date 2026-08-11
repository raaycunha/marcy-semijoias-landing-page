import Container from "../components/Container";

const Terms = () => {
  const classTitle = "font-medium text-xl";
  return (
    <div>
      <Container>
        <div className="flex flex-col font-montserrat px-6 md:px-24 py-8 text-[#3d2417]">
          <div className="mb-16">
            <h1 className="font-cormorant text-center font-bold text-3xl/6 md:text-5xl/10">
              Termos e Condições
            </h1>
            <div className="mx-auto my-0 h-px w-62 md:w-98 bg-[#b58a4b]" />
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <h2 className={`${classTitle}`}>1. Sobre a Marcy Semijoias</h2>
              <p>
                A Marcy Semijoias oferece semijoias femininas, masculinas e
                infantis, com atendimento realizado presencialmente e por meio
                do WhatsApp. Esta página apresenta as condições gerais
                aplicáveis aos produtos, atendimentos e compras realizadas com a
                Marcy Semijoias.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>2. Produtos</h2>
              <p>
                As imagens disponíveis no site têm caráter ilustrativo e buscam
                representar as peças da forma mais fiel possível. Pequenas
                variações de tonalidade podem ocorrer em razão da iluminação das
                fotografias, configurações da tela ou características do
                produto.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>3. Preços e disponibilidade</h2>
              <p>
                Os preços, formas de pagamento e disponibilidade das peças são
                informados durante o atendimento pelo WhatsApp e podem sofrer
                alterações sem aviso prévio.
              </p>
              <p>
                A disponibilidade de determinada peça será confirmada no momento
                da realização do pedido.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>4. Pedidos e pagamento</h2>
              <p>
                Os pedidos podem ser realizados por meio do WhatsApp da Marcy
                Semijoias. Antes da confirmação da compra, serão informados ao
                cliente o valor dos produtos, condições de pagamento, entrega e
                demais informações necessárias.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>5. Entregas</h2>
              <p>
                Realizamos entregas para todo o Brasil. O prazo e o valor do
                frete podem variar de acordo com o endereço de destino e serão
                informados antes da conclusão do pedido.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>6. Garantia</h2>
              <p>
                As peças possuem garantia conforme as condições informadas no
                momento da compra. A Marcy Semijoias também poderá oferecer
                serviços adicionais relacionados ao banho das peças, conforme as
                condições comerciais vigentes.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>
                7. Trocas, devoluções e direito de arrependimento
              </h2>
              <p>
                Solicitações de troca ou devolução devem ser realizadas por meio
                dos nossos canais de atendimento.
              </p>
              <p>
                Nas compras às quais se aplique o direito de arrependimento,
                serão observados os prazos e condições previstos na legislação
                brasileira de proteção ao consumidor.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>8. Cuidados com as peças</h2>
              <p>
                Para preservar a aparência e a durabilidade das semijoias,
                recomendamos evitar contato excessivo com produtos químicos,
                perfumes, cremes e outros agentes que possam comprometer o
                acabamento das peças.
              </p>
            </div>
            <div>
              <h2 className={`${classTitle}`}>9. Uso do site</h2>
              <p>
                As informações, imagens, identidade visual e demais conteúdos
                apresentados neste site pertencem à Marcy Semijoias ou são
                utilizados mediante autorização, não sendo permitida sua
                reprodução indevida.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>10. Alterações destes termos</h2>
              <p>
                Estes Termos e Condições poderão ser atualizados sempre que
                necessário. A versão mais recente permanecerá disponível nesta
                página.
              </p>
            </div>

            <div>
              <h2 className={`${classTitle}`}>11. Contato</h2>
              <p>
                Em caso de dúvidas sobre produtos, pedidos, entregas, trocas ou
                estes Termos e Condições, entre em contato com a Marcy Semijoias
                pelo WhatsApp ou pelos demais canais disponibilizados no site.
              </p>
            </div>
            <p className="text-gray-400">Última atualização: agosto de 2026.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
