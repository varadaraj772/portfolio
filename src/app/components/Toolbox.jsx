"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MyComponent() {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !box1Ref.current ||
      !box2Ref.current ||
      !box3Ref.current
    ) {
      return;
    }

    const boxes = [box1Ref.current, box2Ref.current, box3Ref.current];

    boxes.reverse();

    boxes.forEach((box, index) => {
      ScrollTrigger.create({
        trigger: box,
        start: "bottom bottom-=100",
        end: "bottom top",
        pin: true,
        scrub: true,
markers: true,
        id: `box-${boxes.length - index}`,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-200 flex flex-row h-screen">
      {" "}
      {/* Use h-screen for viewport height */}
      <div className="w-1/2 p-[1vw]">
        <h2 className="text-[8vw]">My Creative Toolbox</h2>
      </div>
      <div className="w-1/2 flex flex-col justify-around items-center p-[1vw]">
        <div
          ref={box1Ref}
          className="bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]"
        >
          <img src="/react.png" alt="React" className="h-1/2" />
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
          <img src="/react.png" alt="React" className="h-1/2" />
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
          <img src="/react.png" alt="React" className="h-1/2" />
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

export default MyComponent;
