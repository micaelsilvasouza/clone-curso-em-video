import Image from "next/image";

interface imgProps {
  img: string,
  alt: string
  className?: string
}

export default function Img({ className, img, alt }: imgProps) {
  return (
    <>
      <Image
        className={className}
        src={/https:\/\//.test(img) ? img : `/image/${img}`}
        alt={alt}
        layout="responsive"
        width={500}
        height={300}
      />
    </>
  );
}
