import Image from "next/image";

interface imgProps {
  img: string;
  alt: string;
}

export default function Img({ img, alt }: imgProps) {
  return (
    <>
      <Image
        src={`/image/${img}`}
        alt={alt}
        layout="responsive"
        width={500}
        height={300}
      />
    </>
  );
}
