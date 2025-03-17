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
    tl.to(box2Ref.current, { y: "-27vh" })
      .to(box3Ref.current, { y: "-60vh" })
      .to(box4Ref.current, { y: "-90vh" })
      .to(box5Ref.current, { y: "-120vh" })
      .to(box6Ref.current, { y: "-155vh" })
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#F8F8F8] flex flex-row overflow-y-hidden h-[80vh]"
    >
      <div className=" w-1/2 px-[2vw] text-right pt-[6.5vw] ">
        <h2 className=" text-[6.5vw]">My Creative Toolbox</h2>
      </div>
      <div className=" w-1/2 flex flex-col justify-around items-center pt-[6.5vw] gap-[2.5vw]">
        <div
          ref={box1Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] p-[3vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box2Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] p-[3vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box3Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] p-[3vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box4Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] p-[3vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box5Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] p-[3vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Js
            </h2>
            <h3 className="w-full text-left text-[1.2vw] opacity-50">
              Javascript Library
            </h3>
          </div>
        </div>
        <div
          ref={box6Ref}
          className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] p-[3vw]"
        >
          <img src="/react.png" alt="React" className=" h-1/2" />
          <div>
            <h2 className="w-full text-left text-[1.5vw] font-bold">
              React.Js
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
