import Img from "../layout/img";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <section
        className="
            flex
            items-center
            flex-col
            bg-[url(https://www.cursoemvideo.com/wp-content/uploads/2019/08/banner-estudonauta8.jpg)]
            bg-bottom-right
            py-10
            px-8
        "
      >
        <Img
          img="https://www.cursoemvideo.com/wp-content/uploads/2023/06/FEC-logo-branco.png"
          alt="FEC-logo-branco"
          width={300}
          height={300}
        />
        <div className="text-center text-white p-5 my-5 border-r border-l border-white">
          <h1 className="text-2xl font-bold mb-2">
            Carteirinha Estudantil Física e Virtual
          </h1>
          <p>
            O documento oferece benefícios como meia entrada em cinemas,
            teatros, shows e estádios. Válido em todo o território nacional.
          </p>
        </div>
        <a
          href="https://www.souestudante.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="
                bg-white
                text-[#1c0051]
                font-semibold
                w-fit
                p-3
                rounded-2xl
                shrink-0

                hover:bg-[#ffffff45]
            "
        >
          Solicitar Agora
        </a>
      </section>
      <section
        className="
            flex
            items-center
            flex-col
            bg-[url(https://www.cursoemvideo.com/wp-content/uploads/2019/08/banner-estudonauta8.jpg)]
            bg-bottom-right
            py-10
            px-8
        "
      >
        <Img
          img="https://www.cursoemvideo.com/wp-content/uploads/2019/08/logo-01.png"
          alt="Estudounauta-logo-branco"
          width={300}
          height={300}
        />
        <div className="text-center text-white p-5 my-5">
          <p className="text-sm bg-[#ffffff45] p-2 rounded-sm">
            VAGAS ABERTAS POR TEMPO LIMITADO
          </p>
          <p>
            Não encontrou o curso que procura? Amplie ainda mais seus
            conhecimentos com o Estudonauta!
          </p>
        </div>
        <a
          href="https://www.estudonauta.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="
                bg-white
                text-[#1c0051]
                font-semibold
                w-fit
                p-3
                rounded-2xl
                shrink-0

                hover:bg-[#ffffff45]
            "
        >
          Conhecer
        </a>
      </section>
      <section
        className="
            flex
            flex-col
            items-center
            py-10
        "
      >
        <h1 className="text-gray-400 font-bold">APOIO INSTITUCIONAL</h1>
        <a
          href="https://www.hostnet.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-hostnet.png"
            alt="logo-hostnet"
            width={300}
            height={300}
          />
        </a>
        <a
          href="https://www.estudonauta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-estudonauta.png"
            alt="logo-estudonauta"
            width={300}
            height={300}
          />
        </a>
        <a
          href="https://recode.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/apoiador-recode.png"
            alt="logo-recode"
            width={300}
            height={300}
          />
        </a>
        <a
          href="https://www.lojaasus.com.br/notebooks.html?utm_source=cursoemvideo&utm_medium=partner&utm_id=influencer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/Asus.png"
            alt="logo-asus"
            width={300}
            height={300}
          />
        </a>
        <a
          href="https://www.souestudante.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            img="https://www.cursoemvideo.com/wp-content/uploads/2019/07/FEC-logo.png"
            alt="logo-fec"
            width={300}
            height={300}
          />
        </a>
      </section>
      <section className="py-10">
        <h1 className="text-center">Acompanhe</h1>
        <div className="flex flex-row justify-center py-5 gap-5">
          <a
            href="https://www.instagram.com/cursoemvideo/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/cursosemvideo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/guanabara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </a>
          <a
            href="https://youtube.com/cursoemvideo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>
    </footer>
  );
}
