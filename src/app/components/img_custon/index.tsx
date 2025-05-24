import Image from "next/image";

interface imgProps {
  img: string;
  alt: string;
  width: number;
  className?: string;
}

export default function Img_custon({ className, img, alt, width }: imgProps) {
  return (
    <>
      <Image
        className={className}
        src={/https:\/\//.test(img) ? img : `/image/${img}`}
        alt={alt}
        width={width}
        height={width}
      />
    </>
  );
}
