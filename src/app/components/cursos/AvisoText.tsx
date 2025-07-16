export default function AvisoText() {
  return (
    <section className="flex flex-col gap-5">
      <p>
        <span className="text-red-500 font-bold">ATENÇÃO:</span> O botão de
        concluir aula só fica clicável depois que toda a aula é assistida Para
        avançar no andamento dos cursos você precisa sempre:
      </p>
      <p>
        <strong className="font-semibold">
          1&#41; Ver o vídeo até o final
        </strong>
      </p>
      <p>
        2&#41; Clicar no botão de &quot;
        <span className="font-semibold">
          CLIQUE AQUI PARA MARCAR COMO CONCLUÍDO
        </span>
        &quot; das aulas, capitulos, módulos e cursos após ver o vídeo ou antes
        de
        <span className="font-semibold">avançar</span> para{" "}
        <span className="font-semibold">aula seguinte</span>. Assistindo ao
        vídeo até o final e{" "}
        <span className="font-semibold">clicando no botão de concluído</span>{" "}
        ele{" "}
        <span className="font-semibold">
          deve conseguir avançar sem problemas.
        </span>
      </p>
    </section>
  );
}
