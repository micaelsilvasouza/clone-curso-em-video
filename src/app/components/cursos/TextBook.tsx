export default function TextBook({ clickBook }: { clickBook: boolean }) {
  return (
    <section
      className={`animationText items-center justify-center flex-col gap-5 text-gray-300 text-base w-5/6 absolute rounded-2xl top-40 left-0 md:mx-10 max-md:mx-5 
          ${clickBook ? "flex" : "hidden"} p-10`}
    >
      <section className="backdrop inset-0 -z-10  absolute w-full bg-black/50 backdrop-blur-lg  rounded-2xl "></section>
      <h2 className="text-2xl text-center">
        Seja muito bem-vindo ao{" "}
        <strong className="text-blue-300">
          Módulo 01 do Curso de HTML5 e CSS3 do Curso em Vídeo!
        </strong>{" "}
      </h2>
      <p>
        Neste primeiro passo da sua jornada no mundo do desenvolvimento web,
        você vai construir uma base sólida, compreendendo os conceitos
        essenciais que sustentam a criação de sites modernos e bem estruturados.
      </p>
      <p>
        Neste módulo introdutório —{" "}
        <strong className="text-blue-300">
          completo, gratuito e com certificado disponível
        </strong>{" "}
        — você aprenderá tudo o que precisa para começar do zero com segurança e
        confiança. Ao longo das aulas, abordaremos:
      </p>
      <ul className="flex flex-col gap-5">
        <li>
          A <strong className="text-blue-300">evolução da internet</strong> e o
          papel do desenvolvedor web no mundo atual
        </li>
        <li>
          O que são e como funcionam os conceitos de{" "}
          <strong className="text-blue-300">front-end e back-end</strong>;
        </li>
        <li>
          A{" "}
          <strong className="text-blue-300">
            estrutura básica de uma página em HTML5
          </strong>
          , com foco em{" "}
          <strong className="text-blue-300">
            semântica e organização do conteúdo;
          </strong>
        </li>
        <li>
          Como configurar corretamente seu{" "}
          <strong className="text-blue-300">ambiente de desenvolvimento</strong>
          , instalando editores e navegadores de apoio;
        </li>
        <li>
          A diferença entre{" "}
          <strong className="text-blue-300">domínios e hospedagens</strong>,
          entendendo como um site vai do seu computador para o mundo;
        </li>
        <li>
          E seus{" "}
          <strong className="text-blue-300">
            primeiros contatos com o CSS3
          </strong>
          , aprendendo a aplicar estilos visuais às páginas de forma prática e
          objetiva.
        </li>
      </ul>
      <p>
        Além do conteúdo técnico, este módulo também te ajuda a{" "}
        <strong className="text-blue-300">
          desenvolver o raciocínio lógico e a mentalidade de programador
        </strong>
        , preparando o terreno para tudo o que vem nos próximos módulos.
      </p>
      <p>
        Com{" "}
        <strong className="text-blue-300">
          mais de 40 vídeos explicativos, material complementar em PDF e a
          didática clara e divertida do professor Gustavo Guanabara
        </strong>
        , você aprenderá passo a passo, com exercícios e exemplos práticos que
        facilitam a assimilação do conteúdo mesmo para quem nunca programou
        antes.
      </p>
      <p>
        Ao concluir este módulo, você estará pronto para criar suas primeiras
        páginas web, aplicar estilos básicos com CSS e entender como os sites
        funcionam de verdade — uma base indispensável para qualquer pessoa que
        deseja entrar para o universo do desenvolvimento web.
      </p>
      <p>
        <strong className="text-blue-300">
          Não perca tempo! Acesse agora a plataforma do Curso em Vídeo e comece
          sua jornada rumo ao domínio do HTML5 e CSS3 com um dos cursos mais
          completos e acessíveis da internet.
        </strong>
      </p>
    </section>
  );
}
