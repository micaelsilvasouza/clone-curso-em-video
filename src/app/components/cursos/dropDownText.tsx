"use client";

import { useState, useEffect } from "react";

import VideoDescription from "@/app/components/cursos/VideoDescription";
import { RiArrowDownSLine } from "react-icons/ri";

type DropDownTextProp = {
  video: {
    description: string;
  };
};

export function DropDownText({ video }: DropDownTextProp) {
  const [handleDropdown, setHandleDropdown] = useState(false);

  // Vai desativa o menu dropdown ser clicar fora
  useEffect(() => {
    const handleClickBody = (event: MouseEvent) => {
      const container = document.getElementById("container");

      if (
        handleDropdown &&
        container &&
        !container.contains(event?.target as Node)
      ) {
        setHandleDropdown(false);
      }
    };

    document.addEventListener("click", handleClickBody);

    return () => {
      document.removeEventListener("click", handleClickBody);
    };
  }, [handleDropdown]);

  return (
    <section>
      <div
        id="container"
        className={`${
          handleDropdown ? "h-dvh overflow-auto" : "line-clamp-5"
        } h-55 overflow-hidden leading-8  transition-all ease-in`}
      >
        <VideoDescription description={video.description} withLinks={true} />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => setHandleDropdown(!handleDropdown)}
      >
        <RiArrowDownSLine
          size={30}
          className=" flex justify-end w-full animate-bounce text-blue-1010"
        />
      </div>
    </section>
  );
}
