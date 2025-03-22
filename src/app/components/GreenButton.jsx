import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

function GreenButton({
  text = "",
  rotate = "45",
  icon: IconComponent,
  href,
  downloadAttribute,
  targetAttribute,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-row z-50">
      <a
        href={href}
        download={downloadAttribute ? undefined : false}
        target={targetAttribute ? targetAttribute : undefined}
        className="bg-[#8CFF2E] py-[2.3vw] md:pl-[2.1vw] md:pr-[1vw] pr-[2vw] pl-[2.5vw] md:rounded-[4vw] rounded-[8vw] flex flex-row md:gap-[1vw] gap-[3vw] md:text-[1.5vw] text-[4vw] text-black items-center cursor-pointer group no-underline md:h-[2vw] h-[10vw]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        <div
          className="rounded-[50%] bg-white flex justify-center items-center p-[0.7vw] cursor-pointer transition-transform duration-300"
          style={{
            transform: isHovered ? `rotate(${rotate}deg)` : "rotate(0deg)",
          }}
        >
          {IconComponent ? <IconComponent /> : <MdArrowOutward />}
        </div>
      </a>
    </div>
  );
}

export default GreenButton;
