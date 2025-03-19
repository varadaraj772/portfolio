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
        className="bg-[#8CFF2E] py-[2.3vw] pl-[2.1vw] pr-[1vw] rounded-[4vw] flex flex-row gap-[1vw] text-[1.5vw] text-black items-center cursor-pointer group no-underline h-[2vw]"
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
