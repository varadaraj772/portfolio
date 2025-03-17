"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoDotFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

function Toolbox() {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);
  // .to(containerRef.current, { clipPath: "inset(0 0 50% 0)" });
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    });
    tl.to(box2Ref.current, { top: "37%" })
      .to(box3Ref.current, { top: "37%" })
      .to(box4Ref.current, { top: "37%" })
      .to(box5Ref.current, { top: "37%" })
      .to(box6Ref.current, { top: "37%" });
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#F8F8F8] flex flex-row overflow--hidden h-[100vh]"
    >
      <div className=" w-1/2 flex justify-center items-center h-full flex-col">
        <span className=" px-[2.5vw] text-black flex flex-row gap-[0.7vw] items-center font-semibold w-[82%]">
          <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.8vw]" />
          <span className=" opacity-50 text-[1.5vw]">
            {"{02} — Tools & Skills"}
          </span>
        </span>
        <span className=" text-[6.5vw] text-center">My Creative Toolbox</span>
      </div>
      <div className=" w-1/2 flex flex-col gap-[2.5vw] relative top-[37%]">
        <div
          ref={box1Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed top-[37%]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Jss
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box2Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed top-[70%]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Jss
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box3Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed top-[103%]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Jss
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box4Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed top-[136%]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Jss
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box5Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed top-[169%]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Jss
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box6Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed top-[202%]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Jss
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolbox;
