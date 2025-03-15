"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Toolbox() {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: true,
        pin: true,
      },
    });


    tl.to(box3Ref.current, { y: "-63vh" }) 
      .to(box2Ref.current, { y: "-33vh" }, "<"); 

    // Animate clip-path instead of height
    gsap.to(containerRef.current, {
      clipPath: "inset(0 0 50% 0)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true, 
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F8F8F8] flex flex-row h-[100vh] overflow-y-hidden relative">
      <div className=" w-1/2 p-[1vw]">
        <h2 className=" text-[8vw]">My Creative Toolbox</h2>
      </div>
      <div className=" w-1/2 flex flex-col justify-around items-center p-[1vw]">
        <div
          ref={box1Ref}
          className="bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-center text-[3vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-center text-[1.5vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box2Ref}
          className="bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-center text-[3vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-center text-[1.5vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box3Ref}
          className="bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-center text-[3vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-center text-[1.5vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolbox;