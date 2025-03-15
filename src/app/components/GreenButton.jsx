import React from "react";
import { MdArrowOutward } from "react-icons/md";
function GreenButton({text=''}) {
  return (
    <div className="flex flex-row">
      <button className=" bg-[#8CFF2E] py-[0.7vw] p-[1vw] rounded-[4vw] flex flex-row gap-[1vw] text-[2vw] text-black items-center cursor-pointer">
       {text}
        <div className="rounded-[50%] bg-white flex justify-center items-center p-[0.7vw]">
          <MdArrowOutward />
        </div>
      </button>
    </div>
  );
}

export default GreenButton;
