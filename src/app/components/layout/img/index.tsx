import Image from "next/image";

interface imgProps {
  img: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Img({ className, img, alt, width, height }: imgProps) {
  return (
    <>
      <Image
        className={className}
        src={/https:\/\//.test(img) ? img : `/image/${img}`}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  );
}
