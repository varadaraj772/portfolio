"use client";

import React, { useEffect, useRef } from "react";
import { PiAsterisk } from "react-icons/pi";
import gsap from "gsap";

function Banner() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const fadeLeftRef = useRef(null);
  const fadeRightRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    let wrapperWidth = wrapperRef.current.scrollWidth;

    while (wrapperWidth < containerWidth * 2) {
      const clone = wrapperRef.current.cloneNode(true);
      wrapperRef.current.appendChild(clone);
      wrapperWidth = wrapperRef.current.scrollWidth;
    }

    animationRef.current = gsap.to(wrapperRef.current, {
      x: `-=${wrapperWidth / 2}`,
      duration: wrapperWidth / 2 / 50,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="banner bg-[#1C1C1C] h-[10vh] w-full flex items-center overflow-hidden relative"
    >
      <div
        ref={fadeLeftRef}
        className="absolute left-0 top-0 h-full w-[10vw] bg-gradient-to-r from-[#1C1C1C] to-transparent z-10"
      ></div>

      <div
        ref={fadeRightRef}
        className="absolute right-0 top-0 h-full w-[10vw] bg-gradient-to-l from-[#1C1C1C] to-transparent z-10"
      ></div>

      <div ref={wrapperRef} className="flex whitespace-nowrap gap-[2vw]">
        <div className="flex items-center gap-[1vw]">
          <span className="text-[#8CFF2E] text-[3vw]">8+</span>
          <span className="text-white text-[3vw]">years of experience</span>
        </div>
        <div className="flex items-center text-[#8CFF2E] text-[3vw]">
          <PiAsterisk />
        </div>
        <div className="flex items-center gap-[1vw]">
          <span className="text-[#8CFF2E] text-[3vw]">{">95%"}</span>
          <span className="text-white text-[3vw]">Client retention rate</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
