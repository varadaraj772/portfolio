"use client";

import React, { useEffect, useRef } from "react";
import { PiAsterisk } from "react-icons/pi";
import gsap from "gsap";

function Banner({ words }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const fadeLeftRef = useRef(null);
  const fadeRightRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    let wrapperWidth = wrapperRef.current.scrollWidth;

    requestAnimationFrame(() => {
      wrapperWidth = wrapperRef.current.scrollWidth;

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
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [words]);

  return (
    <div
      ref={containerRef}
      className="banner bg-[#1C1C1C] h-[14vh] w-full flex items-center overflow-hidden relative"
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
          {words.map((word, index) => {
            const parts = word.split('"');

            return (
              <React.Fragment key={index}>
                {parts.map((part, partIndex) => (
                  <React.Fragment key={partIndex}>
                    <span
                      className={
                        partIndex % 2 === 1
                          ? "text-[#8CFF2E] text-[2.5vw]"
                          : "text-white text-[2.5vw]"    
                      }
                    >
                      {part}
                    </span>
                  </React.Fragment>
                ))}
                <PiAsterisk className="text-[#8CFF2E] text-[3vw]" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Banner;