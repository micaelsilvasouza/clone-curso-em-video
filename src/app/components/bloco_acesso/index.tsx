export default function BlocoAcesso({
  name,
  IconOrNumber,
}: {
  name: string;
  IconOrNumber: React.ElementType | number;
}) {
  return (
    <section
      className="
    text-gray-800 font-medium rounded-3xl 
    inline-block p-5  bg-[#ffffff] w-full h-44 drop-shadow-lg"
    >
      <section className="flex items-center justify-center flex-col h-full w-full gap-2">
        {typeof IconOrNumber === "number" ? (
          <span className="text-5xl text-blue-700">0</span>
        ) : (
          <IconOrNumber className="text-blue-800" size={40} />
        )}

        <p className="text-xl max-w-50 text-center">{name}</p>
      </section>
    </section>
  );
}
