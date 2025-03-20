"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoDotFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

function Toolbox() {
  const [isMounted, setIsMounted] = useState(false);

  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    const boxes = [
      box2Ref.current,
      box3Ref.current,
      box4Ref.current,
      box5Ref.current,
      box6Ref.current,
    ];

    if (!container || boxes.includes(null)) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=500%",
        scrub: 2,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(boxes, {
      top: "37%",
      stagger: { amount: 1 },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="bg-[#F8F8F8] flex md:flex-row flex-col overflow-hidden h-[100vh]"
    >
      <div className="w-1/2 flex justify-center items-center h-full flex-col">
        <span className="pl-[3vw] text-black flex flex-row gap-[0.7vw] items-center font-semibold w-full">
          <GoDotFill className="text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.8vw]" />
          <span className="opacity-50 text-[1.5vw]">{"{02} — Tools"}</span>
        </span>
        <span className="text-[6vw] text-left pl-[3vw]">
          My Go-To Creative Toolkit
        </span>
      </div>
      <div className="w-1/2 flex flex-col gap-[2.5vw]">
        {[
          {
            ref: box1Ref,
            img: "/figma.png",
            title: "Figma",
            desc: "My digital canvas for pixel-perfect magic",
            top: "37%",
          },
          {
            ref: box2Ref,
            img: "/photoshop.svg",
            title: "Photoshop",
            desc: "Where ideas get a visual upgrade",
            top: "70%",
          },
          {
            ref: box3Ref,
            img: "/Illustrator.png",
            title: "Illustrator",
            desc: "Icons, vectors & creativity unleashed",
            top: "103%",
          },
          {
            ref: box4Ref,
            img: "/notion.png",
            title: "Notion",
            desc: "My brain's second home for all things design",
            top: "136%",
          },
          {
            ref: box5Ref,
            img: "/miro.png",
            title: "Miro",
            desc: "Sticky notes, big ideas, zero mess",
            top: "169%",
          },
          {
            ref: box6Ref,
            img: "/ai.jpg",
            title: "Ai Tools",
            desc: "Work smarter, not harder",
            top: "202%",
          },
        ].map((box, index) => (
          <div
            key={index}
            ref={box.ref}
            className="bg-white h-[15vw] w-[35vw] rounded-[1vw] flex flex-row gap-[2vw] px-[3.5vw] items-center shadow-md fixed"
            style={{ top: box.top }}
          >
            <img
              src={box.img}
              alt={box.title}
              className="h-1/2 rounded-[2vw]"
            />
            <div>
              <h2 className="w-full text-left text-[1.5vw] font-bold">
                {box.title}
              </h2>
              <h3 className="w-full text-left text-[1.2vw] opacity-50">
                {box.desc}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolbox;
