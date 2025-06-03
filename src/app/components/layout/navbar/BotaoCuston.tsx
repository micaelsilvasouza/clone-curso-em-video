import Link from "next/link";

interface PropBotaoCuston {
  styleDiv: string;
  styleBotao_1?: string;
  styleBotao_2?: string;
  isOpen: boolean;
}

export function BotaoCuston({
  styleDiv,
  styleBotao_1 = "text-black",
  styleBotao_2 = "text-black",
  isOpen,
}: PropBotaoCuston) {
  return (
    <div className={`flex ${styleDiv} gap-5 ${isOpen ? "w-full" : ""}`}>
      <Link
        href="/cadastre-se"
        className={`${styleBotao_1} text-center border border-sky-500 rounded-lg py-2 px-3 shadow text-sm hover:bg-gray-900 hover:text-white transition ease-in active:opacity-70 animate-pulse`}
      >
        inscreva-se
      </Link>
      <Link
        href="/login"
        className={`${styleBotao_2} text-center border border-sky-500 bg-blue-700/90 text-white rounded-lg py-2 px-3 shadow text-sm active:opacity-70 hover:bg-blue-900 transition ease-linear`}
      >
        Conecte-se
      </Link>
    </div>
  );
}
