"use client";
import React, { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { PiAsterisk } from "react-icons/pi";
import GreenButton from "./components/GreenButton";
import { FaBehance } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import Banner from "./components/Banner";
import Toolbox from "./components/Toolbox";
import { GoDotFill } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MdArrowForward } from "react-icons/md";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

gsap.registerPlugin(ScrollTrigger);
function page() {
  const linkedinURL = "https://www.linkedin.com/in/sanith-suvarna/";
  const behanceURL = "https://www.behance.net/sanisuv";

  const nameRef = useRef(null);
  const DesignationRef = useRef(null);
  const placeRef = useRef(null);
  const groupTextRef = useRef(null);

  const headingRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);

  const listHeadingRef = useRef(null);
  const list1Ref = useRef(null);
  const list2Ref = useRef(null);
  const list3Ref = useRef(null);

  const imageRefs = [
    image1Ref,
    image2Ref,
    image3Ref,
    image4Ref,
    image5Ref,
    image6Ref,
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    ScrollTrigger.defaults({
      scroller: ".lenis",
    });

    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: "-1vw" },
      { opacity: 1, y: 0, duration: 1, delay: 0.1, ease: "power4.out" }
    );
    gsap.fromTo(
      DesignationRef.current,
      { opacity: 0, y: "-1vw" },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power4.out" }
    );
    gsap.fromTo(
      placeRef.current,
      { opacity: 0, x: "-2vw" },
      { opacity: 1, x: 0, duration: 2, delay: 0.3, ease: "power4.out" }
    );
    gsap.fromTo(
      groupTextRef.current,
      { opacity: 0, y: "2vw" },
      { opacity: 1, y: 0, duration: 2, delay: 0.4, ease: "power4.out" }
    );

    imageRefs.forEach((imageRef) => {
      if (!imageRef.current) {
        return;
      }
      gsap.to(imageRef.current, {
        scale: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: true,
        },
      });
    });
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      listHeadingRef.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: listHeadingRef.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      list1Ref.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: list1Ref.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      list2Ref.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: list2Ref.current,
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      list3Ref.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: list3Ref.current,
          scrub: true,
        },
      }
    );
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <>
      <main className="w-screen flex flex-col justify-center items-center bg-[url(/background.png)] bg-cover overflow-hidden relative z-50">
        <nav
          className=" w-full md:h-[7vw] h-[12vw] flex flex-row justify-between items-center pr-[3vw] pl-[2.5vw] bg-transparent z-50 relative font-semibold overflow-hidden"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className=" flex flex-row md:text-[1.3vw] text-[5vw] py-[1vw] gap-[2vw]">
            <Link href="#projects" className="no-underline text-current">
              <h2>Projects</h2>
            </Link>
          </div>
          <div className="flex flex-row w-1/2 justify-end items-center gap-[2vw] md:text-[1.2vw] text-[4vw]">
            <div className=" hidden md:block">
              <a href="mailto:sanith.s74@gmail.com">
                <span className=" opacity-50">Email :</span>
                <span>sanith.s74@gmail.com</span>
              </a>
            </div>
            {/* <a
              href="mailto:sanith.s74@gmail.com"
              className="bg-[#8CFF2E] py-[clamp(0.5rem,1.1vw,1rem)] px-[clamp(0.8rem,1.7vw,1.5rem)] rounded-[2vw] text-black no-underline inline-block overflow-hidden relative transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                Contact me
              </span>

              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                <SiMinutemailer className="text-[clamp(1rem,2vw,2rem)]" />
              </span>
            </a> */}
            <a
              href="mailto:sanith.s74@gmail.com"
              className="bg-[#8CFF2E] py-[clamp(0.5rem,1.1vw,1rem)] px-[clamp(0.8rem,1.7vw,1.5rem)] md:rounded-[2vw] rounded-[8vw] text-black no-underline inline-block overflow-hidden group hover:bg-[#54ff2e] transition-color duration-300 ease-in-out"
            >
              <span className="">Contact me</span>
            </a>
          </div>
        </nav>
        <div className="flex md:flex-row flex-col w-full justify-between items-center px-[2vw] relative z-50">
          <section className="h-full md:w-[40%] w-full flex  md:mt-0 mt-[3vw] sm:mt-[1vw]">
            <div className="md:w-full w-3/4 sm:w-1/2 flex flex-row gap-[6vw] sm:gap-[3vw]">
              <div className="flex justify-center items-center h-[20vw] sm:h-[10vw] w-[20vw] sm:w-[10vw] rounded-full">
                <img
                  src="/sanith.jpeg"
                  alt="Image of the developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="h-[20vw] sm:h-[10vw] flex flex-col items-start justify-center text-[3vw] sm:text-[1vw] font-bold">
                <h1 className="text-[5vw] sm:text-[2vw]">Sanith Suvarna</h1>
                <h2 className="opacity-50 text-[2.5vw] sm:text-[1vw] text-left">
                  UX/UI Designer
                </h2>
                <div className="flex flex-row mt-[2vw] sm:mt-[1vw] text-[4vw] sm:text-[1.5vw] gap-[2vw] sm:gap-[1vw] opacity-50">
                  <Link
                    href={behanceURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaBehance className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                  </Link>
                  <Link
                    href={linkedinURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:rotate-[360deg] cursor-pointer transition-transform duration-700" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="h-full md:w-[50%] w-full flex flex-col justify-between  md:text-[6.5vw] mt-[6.5vw] text-[12vw]">
            <span className="w-full flex items-center gap-[2vw]">
              Hi! I'm{" "}
              <span
                className=" bg-white py-[1.4vw] px-[1.8vw] md:rounded-[4vw] rounded-[8vw] md:text-[3vw] text-[7vw] shadow-md"
                ref={nameRef}
              >
                Sanith Suvarna
              </span>
            </span>
            <span className="w-full mt-[-3vw] gap-[2vw]" ref={DesignationRef}>
              a{" "}
              <span className=" bg-[#2F2F2F] py-[1.4vw] px-[1.8vw] md:rounded-[4vw] rounded-[8vw] md:text-[3vw] text-[7vw] text-white shadow-md">
                UX/UI Designer
              </span>
            </span>
            <span
              className="w-full mt-[-0.5vw] flex items-center gap-[2vw]"
              ref={placeRef}
            >
              from{" "}
              <span className=" bg-transparent py-[1.4vw] px-[1.8vw] md:rounded-[4vw] rounded-[8vw] md:text-[3vw] text-[7vw] text-[#2F2F2F] border-[#2F2F2F] border">
                Mangalore
              </span>
            </span>
            <div className=" w-full flex flex-col" ref={groupTextRef}>
              <span className="w-full  mt-[-3vw]">bringing ideas</span>
              <span className="w-full  mt-[-3vw]">to life</span>
              <span className="w-full  mt-[-3vw]">with design</span>
            </div>
          </section>
        </div>
        <section className="h-[25%] w-full flex md:flex-row flex-col justify-between mt-[5vw] py-[2vw] mb-[6vw] md:text-[2vw] text-[4vw]">
          <span className="md:w-[45%] w-full px-[2vw]">(2020 - PRESENT)</span>
          <div className=" text-gray-700 md:w-[50%] w-full flex flex-col md:px-0 px-[2vw]">
            <span className="mb-[2vw]">
              I design websites and mobile apps that make ideas shine—blending
              creativity and usability for experiences people love.
            </span>
            <GreenButton
              text="Download Resume"
              icon={MdArrowForward}
              rotate="90"
              href="/Sanith_Snr_UXUI_Resume.pdf"
              downloadAttribute="Sanith_Snr_UXUI_Resume.pdf"
              targetAttribute="_blank"
            />
          </div>
        </section>
      </main>
      <main
        className="w-screen flex flex-col justify-center items-center bg-[rgb(17,17,17)]"
        id="projects"
      >
        <section className=" w-full">
          <Banner words={["4 + experience  &  10 + projects"]} />
          <div
            className="bg-[url(/svg.svg)] pb-[7vw] pt-[7vw] bg-[100%] bg-no-repeat bg-contain"
            ref={headingRef}
          >
            <span className=" px-[2.5vw] text-white flex flex-row gap-[0.7vw] items-center font-semibold">
              <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] md:text-[1.8vw] text-[5vw]" />
              <span className=" opacity-50 md:text-[1.5vw] text-[4vw]">
                {"{01} — Projects"}
              </span>
            </span>
            <h1 className=" text-white md:text-[6.5vw] text-[11vw] px-[2.5vw]">
              Where creativity meets real-world solutions
            </h1>
            <div className="bg-transparent px-[2.5vw] pt-[2vw]">
              <GreenButton
                text="Become a client"
                href="mailto:sanith.s74@gmail.com"
                downloadAttribute={false}
                targetAttribute={null}
              />
            </div>
          </div>
          <div className="flex flex-col overflow-x-hidden md:pb-0 pb-[5vh]">
            <div
              className="flex md:flex-row flex-col md:h-[50vw] h-[85vh] md:py-0 py-[2vh]"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="md:w-1/2 w-full  h-[85%] md:h-full flex flex-col text-white translate-x-[3.5vw] md:py-0 py-[2vh]">
                <div className=" flex flex-col md:h-[30%] h-[35%] justify-center gap-[1vw]">
                  <span className="md:text-[2vw] text-[5vw]">IRS Plus</span>
                  <span className="opacity-50 md:text-[1vw] text-[4vw]">Web and Mobile Design</span>{" "}
                </div>
                <div className="md:h-[50%] h-3/4 object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw] md:translate-x-0 relative">
                  <Image
                    src="/Project1.png"
                    alt="Project Image: Casa Malta"
                    ref={image1Ref}
                    fill
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full  h-[85%] md:h-full flex flex-col text-white translate-x-[3.5vw] md:py-0 py-[2vh]">
                <div className=" flex flex-col md:h-[30%] h-[35%] justify-center gap-[1vw]">
                  <span className="md:text-[2vw] text-[5vw]">Casa Malta</span>
                  <span className="opacity-50 md:text-[1vw] text-[4vw]">Web and Mobile Design</span>{" "}
                </div>
                <div className="md:h-[50%] h-3/4 object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw] md:translate-x-0 relative">
                  <Image
                    src="/Project2.png"
                    alt="Project Image: Casa Malta"
                    ref={image2Ref}
                    fill
                  />
                </div>
              </div>
            </div>
            <div
              className="flex md:flex-row flex-col md:h-[50vw] h-[85vh]"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col text-white translate-x-[3.5vw] md:translate-x-0 md:py-0 py-[2vh]"
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className=" flex flex-col md:h-[30%] h-[35%] justify-center gap-[1vw] md:translate-x-[3.5vw] translate-x-0">
                  <span className="md:text-[2vw] text-[5vw]">Primesophic Technology</span>
                  <span className="opacity-50 md:text-[1vw] text-[4vw]">Web and Mobile Design</span>{" "}
                </div>
                <div className="md:h-[50%]  h-[85%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw] relative">
                  <Image
                    src="/Project3.png"
                    alt="Project Image: Primesophic Technology"
                    ref={image3Ref}
                    fill
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col text-white translate-x-[3.5vw] md:py-0 py-[2vh]">
                <div className=" flex flex-col md:h-[30%] h-[35%] justify-center gap-[1vw]">
                  <span className="md:text-[2vw] text-[5vw]">Malta Tourism </span>
                  <span className="opacity-50 md:text-[1vw] text-[4vw]">Web Design</span>{" "}
                </div>
                <div className="md:h-[50%]  h-[85%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw] md:translate-x-0 relative">
                  <Image
                    src="/Project4.png"
                    ref={image4Ref}
                    alt="Project Image: Malta Tourism"
                    fill
                  />
                </div>
              </div>
            </div>
            <div
              className="flex md:flex-row flex-col md:h-[50vw] h-[85vh]"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col text-white translate-x-[3.5vw] md:translate-x-0 md:py-0 py-[2vh]"
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className=" flex flex-col md:h-[30%] h-[35%] justify-center gap-[1vw] md:translate-x-[3.5vw] translate-x-0">
                  <span className="md:text-[2vw] text-[5vw]">Old Town Market</span>
                  <span className="opacity-50 md:text-[1vw] text-[4vw]">Web Design</span>{" "}
                </div>
                <div className="md:h-[50%] h-[85%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw] relative">
                  <Image
                    src="/Project5.png"
                    ref={image5Ref}
                    alt="Project Image: Old Town Market"
                    fill
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col text-white translate-x-[3.5vw] md:py-0 py-[2vh]">
                <div className=" flex flex-col md:h-[30%] h-[35%] justify-center gap-[1vw]">
                  <span className="md:text-[2vw] text-[5vw]">Testaahel</span>
                  <span className="opacity-50 md:text-[1vw] text-[4vw]">Mobile App</span>{" "}
                </div>
                <div className="md:h-[50%]  h-[85%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw] md:translate-x-0 relative">
                  <Image
                    src="/Project6.png"
                    ref={image6Ref}
                    alt="Project Image: Testaahel"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
          <Toolbox />
          <div className="">
            <Banner
              words={[
                "CRM",
                "ERP",
                "E-Commerce",
                "Real Estate",
                "Social Media",
                "Corporate",
                "Landing page",
              ]}
            />
          </div>

          <div className=" pb-[10vw]">
            <div className="head py-[3vw]" ref={listHeadingRef}>
              <span className=" px-[2.5vw] text-white flex flex-row gap-[0.7vw] items-center font-semibold">
                <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] md:text-[1.5vw] text-[5vw]" />
                <span className=" opacity-50 md:text-[1.3vw] text-[4vw]">
                  {"{03} — Technical skills"}
                </span>
              </span>
              <h1 className="md:text-[6.5vw] text-[11vw] text-white px-[2.5vw]">
                {" "}
                Powering ideas with skills
              </h1>
            </div>

            <div
              className="content flex md:flex-row flex-col px-[2.5vw] py-[3vw] w-full md:h-[33vw]  md:justify-center md:items-center"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              ref={list1Ref}
            >
              <div className="tag h-full md:w-[20vw] w-full md:py-[1vw] py-[1vh]">
                <span className=" bg-transparent md:py-[0.7vw] md:px-[1.4vw] py-[1vw] px-[2.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  User Experience
                </span>
              </div>
              <div className="number md:text-[2.5vw] text-[5vw] h-full w-[15vw] md:py-0 py-[1vh] px-[2.4vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">01</span>
              </div>
              <div className="body flex flex-col text-white h-full md:w-[84vw] w-[90vw]  px-[2.4vw]">
                <h2 className=" md:text-[1.8vw] text-[4vw]">
                  I'll design experiences that bring your vision to life
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw] md:text-[1.3vw] text-[3vw] md:gap-0 gap-[2vh]">
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> User Research & Stakeholder Interviews :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Understanding needs and defining goals.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span>Information Architecture & Data Hierarchy :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Organizing content for clarity and efficiency.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span>User Flows & Journey Mapping :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Crafting smooth, intuitive user experiences.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span>
                        Wireframing & Prototyping (Low/High Fidelity) :
                      </span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      {" "}
                      Bringing ideas to life visually.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> Usability Testing :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      {" "}
                      Ensuring seamless interactions through real user feedback.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span>Accessibility & Inclusive Design :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Designing for every user, without limits.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span>User Behavior Analytics:</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Leveraging data to enhance usability and engagement.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span>A/B Testing :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Refining and optimizing designs for maximum impact.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="content flex  md:flex-row flex-col px-[2.5vw] py-[3vw] w-full md:h-[33vw] md:justify-center md:items-center"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              ref={list2Ref}
            >
              <div className="tag  h-full md:w-[20vw] w-full md:py-[1vw] py-[1vh]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white ">
                  User Interface
                </span>
              </div>
              <div className="number md:text-[2.5vw] text-[5vw] h-full w-[15vw] md:py-0 py-[1vh] px-[2.4vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">02</span>
              </div>
              <div className="body flex flex-col text-white h-full md:w-[84vw]  w-[90vw] px-[2.4vw]">
                <h2 className="md:text-[1.8vw] text-[4vw]">
                  I'll design visually compelling and intuitive interfaces that
                  users enjoy.
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw]  md:text-[1.3vw] text-[3vw] md:gap-0 gap-[2vh]">
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> User Interface (UI) & Visual Design :</span>
                    </div>
                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Crafting aesthetically pleasing and functional designs.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> Design Systems & Component Libraries :</span>
                    </div>

                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Building consistency and scalability across products.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh] md:w-[120%] w-full">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span className="">
                        Typography & Layout for Data-Heavy Interfaces :
                      </span>
                    </div>

                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Making complex information easy to scan and understand.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh]">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> Responsive Design :</span>
                    </div>
                    <span className=" opacity-50 md:ml-[0.3vw] ml-[5.5vw]">
                      Ensuring a seamless experience across all screen sizes and
                      devices.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="content flex  md:flex-row flex-col px-[2.5vw] py-[3vw] w-full md:h-[33vw]  md:justify-center md:items-center md:mt-[-10vw] mt-0"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              ref={list3Ref}
            >
              <div className="tag h-full md:w-[20vw] w-full md:py-[1vw] py-[1vh]  pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  Creative Leadership
                </span>
              </div>
              <div className="number md:text-[2.5vw] text-[5vw] h-full w-[15vw] md:py-0 py-[1vh] px-[2.4vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">03</span>
              </div>
              <div className="body flex flex-col text-white h-full md:w-[80vw]  w-[90vw] px-[2.4vw]">
                <h2 className="md:text-[1.8vw] text-[4vw]">
                  I'll shape design excellence through leadership and
                  collaboration.
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw] md:text-[1.3vw] text-[3vw] md:gap-0 gap-[2vh]">
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh] w-full ">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> Design Leadership & Team Mentorship :</span>
                    </div>

                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Empowering teams to innovate and grow.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh] w-full">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> Stakeholder & Client Communication :</span>
                    </div>

                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Aligning vision, goals, and expectations.
                    </span>
                  </li>
                  <li className=" flex md:flex-row flex-col md:py-0 py-[1vh] w-full">
                    <div className=" flex flex-row">
                      <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                      <span> Agile UX & Sprint Planning :</span>
                    </div>

                    <span className=" opacity-50  md:ml-[0.3vw] ml-[5.5vw]">
                      Delivering seamless experiences in fast-paced workflows.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-[5vw] gap-[2vw] px-[2.5vw] font-semibold">
              {/* Figma Box */}
              <div className=" rounded-[0.9vw] bg-[#8CFF2E] text-black md:h-[15vw] shadow-md cursor-pointer ">
                <div className=" w-full md:p-[1vw] p-[3vw]">
                  <p className=" md:text-[5vw] text-[8vw] ">08+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw] md:py-0 py-[2vw]">
                  <span className=" md:text-[1.2vw] text-[4vw]">
                    Solutions Delivered
                  </span>
                  <span className=" md:text-[1.7vw] text-[5vw] opacity-50">
                    Digital Solutions
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-[#242424] text-white md:h-[15vw] shadow-md cursor-pointer ">
                <div className=" w-full  md:p-[1vw] p-[3vw]">
                  <p className=" md:text-[5vw] text-[8vw]">04+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]  md:py-0 py-[2vw]">
                  <span className="md:text-[1.2vw] text-[4vw]">Years</span>
                  <span className=" md:text-[1.7vw] text-[5vw] opacity-50">
                    Experience
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-white md:h-[15vw] shadow-md cursor-pointer ">
                <div className=" w-full  md:p-[1vw] p-[3vw]">
                  <p className=" md:text-[5vw] text-[8vw]">10+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw] md:py-0 py-[2vw]">
                  <span className="md:text-[1.2vw] text-[4vw]">Completed</span>
                  <span className=" md:text-[1.7vw] text-[5vw] opacity-50">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#F8F8F8]  py-[7vw] px-[2.5vw] ">
            <div className=" w-full h-[4vw] font-semibold flex items-center mx-[-2.5vw]">
              <span className=" px-[2.5vw] text-black flex flex-row gap-[0.7vw] items-center md:mb-0 mb-[4vw]">
                <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] md:text-[1.7vw] text-[5vw]" />
                <span className=" opacity-50 md:text-[1.5vw] text-[4vw]">
                  {"{04} — Contact me"}
                </span>
              </span>
            </div>
            <div className=" md:text-[6.5vw] text-[11vw]">
              <h1>Find me across the internet</h1>
            </div>
            <div className=" py-[2vw]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
                {/* Figma Box */}
                <Link
                  href={behanceURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" rounded-[0.9vw] bg-white md:text-[2.5vw] text-[6.5vw] md:h-[15vw] h-[30vw] shadow-md cursor-pointer group">
                    <div className=" w-full p-[2vw]">
                      <p className="">behance</p>
                    </div>
                    <div className=" w-full flex items-center justify-end px-[2vw] md:py-0 py-[2vw]">
                      <div className=" bg-[#8CFF2E] md:p-[1vw] p-[2vw] rounded-[100%]">
                        {" "}
                        <FaBehance className="group-hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" rounded-[0.9vw] bg-white md:text-[2.5vw] text-[6.5vw] md:h-[15vw] h-[30vw] shadow-md cursor-pointer group">
                    <div className=" w-full p-[2vw]">
                      <p className="">Linkedin</p>
                    </div>
                    <div className=" w-full flex items-center justify-end px-[2vw] md:py-0 py-[2vw]">
                      <div className=" bg-[#8CFF2E] md:p-[1vw] p-[2vw] rounded-[100%]">
                        <FaLinkedin className="group-hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      </div>
                    </div>
                  </div>
                </Link>
                <a href="mailto:sanith.s74@gmail.com" className="no-underline">
                  <div className="rounded-[0.9vw] bg-[#8CFF2E] md:text-[2.5vw] text-[6.5vw] md:h-[15vw] h-[30vw] shadow-md cursor-pointer hover:px-[1vw] transition-all duration-500">
                    <div className="w-full p-[2vw]">
                      <p className="">Get in touch</p>
                    </div>
                    <div className="w-full flex items-center justify-end px-[3vw] md:py-0 py-[2vw]">
                      <div className="bg-[#8CFF2E] md:p-[1vw] p-[2vw] rounded-[100%]">
                        <BsArrowReturnRight />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <Banner
              words={[
                'Guest speaker, MITE college - " Job opportunity in UI/UX field "',
                'Speaker, Design Quest (Design Community Event) - " Why Digital Marketing is Failing ? "',
              ]}
            />
          </div>

          <div
            className=" md:h-[100vh] flex md:flex-row flex-col"
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className=" md:h-full h-1/2 md:w-1/2 w-full justify-center items-center flex flex-col px-[2vw] bg-[url(/footervector.svg)] bg-cover  ">
              <h1 className=" md:text-[5vw] text-[9.5vw] text-white font-semibold">
                Let's design experiences that inspire the world.
              </h1>
              <h2 className="md:text-[2vw] text-[4.5vw] text-white opacity-50 w-full mt-[3vw]">
                Let's make an impact
              </h2>
            </div>
            <div
              className="md:h-full h-1/4 md:w-1/2 w-full flex flex-col"
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className=" text-white h-[40%] flex md:items-end items-center p-[2vw] md:mt-0 mt-[9vw]">
                <div className="w-3/4 flex flex-row md:justify-around justify-between items-center mt-[2vw]">
                  <div className="flex justify-center items-center md:h-[10vw] h-[25vw] rounded-full md:w-[10vw] w-[25vw]">
                    <img
                      src="/sanith.jpeg"
                      alt="Image of the developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className=" md:h-[10%] h-full flex flex-col items-start font-bold">
                    <h1 className="md:text-[2vw] text-[5vw]">Sanith Suvarna</h1>
                    <h2 className="opacity-50 md:text-[1vw] text-[4vw] text-left">
                      UX/UI Designer
                    </h2>
                    <div className=" flex flex-row mt-[1vw] md:text-[1.5vw] text-[5.5vw] gap-[1vw] opacity-50">
                      <Link
                        href={behanceURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaBehance className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      </Link>
                      <Link
                        href={linkedinURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaLinkedin className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-1/2 px-[4vw]">
                <h2 className="opacity-50 text-[1.2vw] text-left font-semibold px-[1vw] text-white hidden md:block">
                  Contact me
                </h2>
                <h2 className=" md:text-[3vw] text-[5vw] text-left font-semibold px-[1vw] text-white">
                  sanith.s74<span className=" text-[#8CFF2E]">@</span>gmail.com
                </h2>
                <p className="md:text-[1.8vw] text-[3vw] text-white text-left font-semibold p-[1vw] mb-[0.5vw]">
                  <span className="opacity-50">
                    Hit me up if you’re looking for a{" "}
                  </span>
                  <span className="text-white opacity-100">
                    skilled , versatile designer
                  </span>
                  <span className="">
                    {" "}
                    <span className="opacity-50">who can bring your </span>
                    <span>web </span> <span className="opacity-50">and</span>{" "}
                    <span>mobile</span>{" "}
                    <span className="opacity-50">vision to life.</span>
                  </span>
                </p>
                <div className="px-[1vw] md:py-0 py-[3vw]">
                  <GreenButton
                    text="Contact me"
                    href="mailto:sanith.s74@gmail.com"
                    downloadAttribute={false}
                    targetAttribute={null}
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className=" w-full md:h-[10vh] h-[5vh] flex items-center justify-center text-white opacity-50 md:text-[1vw] text-[3vw]">
            Copyright © sanith suvarna, 2024
          </footer>
        </section>
      </main>
    </>
  );
}

export default page;
