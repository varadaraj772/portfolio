import React from "react";
import { MdArrowOutward } from "react-icons/md";
function GreenButton({ text = "" }) {
  return (
    <div className="flex flex-row">
      <button className=" bg-[#8CFF2E] py-[2.3vw] pl-[2.1vw] pr-[1vw] rounded-[4vw] flex flex-row gap-[1vw] text-[1.5vw] text-black items-center cursor-pointer group h-[2vw]">
        {text}
        <div className="rounded-[50%] bg-white flex justify-center items-center p-[0.7vw] group-hover:rotate-45 cursor-pointer transition-transform duration-300">
          <MdArrowOutward />
        </div>
      </button>
    </div>
  );
}

export default GreenButton;
