export default function BlocoAcesso({name, icon}: {name: string, icon: string}) {
  return (
    <section
      className="
    text-gray-800 font-medium rounded-3xl 
    inline-block p-5  bg-[#ffffff] h-44 drop-shadow-lg"
    >
      <section className="flex items-center justify-center flex-col h-full w-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512">
          {/*Link para conseguir path para o icon: https://fontawesome.com/ */}
          <path fill="#2727ff" d={icon}></path>
        </svg>
        <p>{name}</p>
      </section>
    </section>
  );
}
