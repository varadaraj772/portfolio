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
      duration: 1.2, // Adjust for desired smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard Lenis easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf); // Use requestAnimationFrame directly
    }
    requestAnimationFrame(raf);

    ScrollTrigger.defaults({
      scroller: ".lenis", // Use a class selector for Lenis (important)
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
      lenis.destroy(); // Important: Destroy Lenis on component unmount
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill all ScrollTriggers
      gsap.ticker.remove(raf); // Remove the raf from the ticker
    };
  }, []);

  return (
    <>
      <main className="w-screen flex flex-col justify-center items-center bg-[url(/background.png)] bg-cover overflow-hidden relative z-50">
        <nav
          className=" w-full h-[13vh] flex flex-row justify-between items-center pr-[3vw] pl-[2.5vw] bg-transparent z-50 relative font-semibold overflow-hidden"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className=" flex flex-row text-[1.3vw] py-[1vw] gap-[2vw]">
            <Link href="#projects" className="no-underline text-current">
              <h2>Projects</h2>
            </Link>
          </div>
          <div className="flex flex-row w-1/2 justify-end items-center gap-[2vw] text-[1.2vw]">
            <div>
              <a href="mailto:sanith.s74@gmail.com">
                <span className=" opacity-50">Email :</span>
                <span>sanith.s74@gmail.com</span>
              </a>
            </div>
            <a
              href="mailto:sanith.s74@gmail.com"
              className="bg-[#8CFF2E] py-[1.1vw] px-[1.7vw] rounded-[2vw] text-black no-underline inline-block"
            >
              Contact me
            </a>
          </div>
        </nav>
        <div className="flex flex-row w-full justify-between items-center px-[2vw] relative z-50">
          <section className="h-full w-[40%] flex">
            <div className="w-full flex flex-row gap-[3vw]">
              <div className="flex justify-center items-center  h-[10vw] rounded-full w-[10vw]">
                <img
                  src="/sanith.jpeg"
                  alt="Image of the developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className=" h-[10vw] flex flex-col items-start justify-center text-[1vw] font-bold">
                <h1 className="text-[2vw]">Sanith Suvarna</h1>
                <h2 className="opacity-50 text-[1vw] text-left">
                  UX/UI Designer
                </h2>
                <div className=" flex flex-row mt-[1vw] text-[1.5vw] gap-[1vw] opacity-50">
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
          <section className=" h-full w-[50%] flex flex-col justify-between text-[6.5vw] mt-[6.5vw]">
            <span className="w-full flex items-center gap-[2vw]">
              Hi! I'm{" "}
              <span
                className=" bg-white py-[1.4vw] px-[1.8vw] rounded-[4vw] text-[3vw] shadow-md"
                ref={nameRef}
              >
                Sanith Suvarna
              </span>
            </span>
            <span className="w-full mt-[-3vw] gap-[2vw]" ref={DesignationRef}>
              a{" "}
              <span className=" bg-[#2F2F2F] py-[1.4vw] px-[1.8vw] rounded-[4vw] text-white text-[3vw] shadow-md">
                UX/UI Designer
              </span>
            </span>
            <span
              className="w-full mt-[-0.5vw] flex items-center gap-[2vw]"
              ref={placeRef}
            >
              from{" "}
              <span className=" bg-transparent py-[1.4vw] px-[1.8vw] rounded-[4vw] text-[#2F2F2F] border-[#2F2F2F] border text-[3vw]">
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
        <section className="h-[25%] w-full flex flex-row justify-between mt-[5vw] py-[2vw] mb-[6vw]">
          <span className="text-[2vw] w-[45%] px-[2vw]">(2020 - PRESENT)</span>
          <div className="text-[2vw] text-gray-700 w-[50%] flex flex-col">
            <span className="mb-[2vw]">
              I design websites and mobile apps that make ideas shine—blending
              creativity and usability for experiences people love.
            </span>
            <GreenButton
              text="Download Resume"
              icon={MdArrowForward}
              rotate="rotate-90"
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
              <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.8vw]" />
              <span className=" opacity-50 text-[1.5vw]">
                {"{01} — Projects"}
              </span>
            </span>
            <h1 className=" text-white text-[6.5vw] px-[2.5vw]">
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
          <div className="flex flex-col overflow-x-hidden">
            <div
              className="flex flex-row h-[50vw]"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-1/2 flex flex-col text-white "
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw] translate-x-[3.5vw]">
                  <span className="text-[2vw]">IRS Plus</span>
                  <span className="opacity-50">Web and Mobile Design</span>{" "}
                </div>
                <Image
                  src="/Project1.png"
                  ref={image1Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                   alt="Project Image: IRS Plus"
                  width={200}
                  height={200}
                />
                {/* <img
                  src="/project1.png"
                  ref={image1Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                /> */}
              </div>
              <div className="w-1/2 flex flex-col text-white translate-x-[3.5vw] ">
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw]">
                  {/* <span className="text-[1.2vw] text-[#8CFF2E]">
               {"{ "} <span className=" text-white">Pottery Artistic Portfolio</span>{' }'}
                </span> */}
                  <span className="text-[2vw]">Casa Malta</span>
                  <span className="opacity-50">Web and Mobile Design</span>{" "}
                </div>
                <Image
                  src="/Project2.png"
                  alt="Project Image: Casa Malta"
                  ref={image2Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                  width={200}
                  height={200}
                />
                {/* <img
                  src="/project2.png"
                  alt="Project Image: Nexus"
                  ref={image2Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                /> */}
              </div>
            </div>
            <div
              className="flex flex-row h-[50vw]"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-1/2 flex flex-col text-white "
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw] translate-x-[3.5vw]">
                  <span className="text-[2vw]">Primesophic Technology</span>
                  <span className="opacity-50">Web and Mobile Design</span>{" "}
                </div>
                <Image
                 src="/Project3.png"
                  alt="Project Image: Primesophic Technology"
                  ref={image3Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                  width={200}
                  height={200}
                />
                {/* <img
                  src="/project3.png"
                  alt="Project Image: Nexus"
                  ref={image3Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                /> */}
              </div>
              <div className="w-1/2 flex flex-col text-white translate-x-[3.5vw] ">
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw]">
                  {/* <span className="text-[1.2vw] text-[#8CFF2E]">
               {"{ "} <span className=" text-white">Pottery Artistic Portfolio</span>{' }'}
                </span> */}
                  <span className="text-[2vw]">Malta Tourism </span>
                  <span className="opacity-50">Web Design</span>{" "}
                </div>
                <Image
                 src="/Project4.png"
                  ref={image4Ref}
                  alt="Project Image: Malta Tourism"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                  width={200}
                  height={200}
                />
                {/* <img
                  src="/project4.png"
                  ref={image4Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                /> */}
              </div>
            </div>
            <div
              className="flex flex-row h-[50vw]"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className="w-1/2 flex flex-col text-white "
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw] translate-x-[3.5vw]">
                  <span className="text-[2vw]">Old Town Market</span>
                  <span className="opacity-50">Web Design</span>{" "}
                </div>
                <Image
                 src="/Project5.png"
                  ref={image5Ref}
                  alt="Project Image: Old Town Market"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                  width={200}
                  height={200}
                />
                {/* <img
                  src="/project5.png"
                  ref={image5Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                /> */}
              </div>
              <div className="w-1/2 flex flex-col text-white translate-x-[3.5vw] ">
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw]">
                  {/* <span className="text-[1.2vw] text-[#8CFF2E]">
               {"{ "} <span className=" text-white">Pottery Artistic Portfolio</span>{' }'}
                </span> */}
                  <span className="text-[2vw]">Testaahel</span>
                  <span className="opacity-50">Mobile App</span>{" "}
                </div>
                <Image
                  src="/Project6.png"
                  ref={image6Ref}
                  alt="Project Image: Testaahel"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                  width={200}
                  height={200}
                />
                {/* <img
                  src="/project6.png"
                  ref={image6Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                /> */}
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
                <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.5vw]" />
                <span className=" opacity-50 text-[1.3vw]">
                  {"{03} — Technical skills"}
                </span>
              </span>
              <h1 className=" text-[6.5vw] text-white px-[2.5vw]">
                {" "}
                Powering ideas with skills
              </h1>
            </div>

            <div
              className="content flex flex-row px-[2.5vw] py-[3vw] w-full h-[33vw] justify-center items-center"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              ref={list1Ref}
            >
              <div className="tag h-full w-[20vw] pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  User Experience
                </span>
              </div>
              <div className="number text-[2.5vw] h-full w-[15vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">01</span>
              </div>
              <div className="body flex flex-col text-white h-full w-[80vw] ">
                <h2 className=" text-[1.8vw]">
                  I'll design experiences that bring your vision to life
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw] text-[1.3vw]">
                  <li className=" flex flex-row ">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> User Research & Stakeholder Interviews :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Understanding needs and defining goals.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span>Information Architecture & Data Hierarchy :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Organizing content for clarity and efficiency.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span>User Flows & Journey Mapping :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      OCrafting smooth, intuitive user experiences.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span>Wireframing & Prototyping (Low/High Fidelity) :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      {" "}
                      Bringing ideas to life visually.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> Usability Testing :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      {" "}
                      Ensuring seamless interactions through real user feedback.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span>Accessibility & Inclusive Design :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Designing for every user, without limits.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span>User Behavior Analytics:</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Leveraging data to enhance usability and engagement.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span>A/B Testing :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Refining and optimizing designs for maximum impact.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="content flex flex-row px-[2.5vw] py-[3vw] w-full h-[25vw] justify-center items-center"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              ref={list2Ref}
            >
              <div className="tag h-full w-[20vw]  pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  User Interface
                </span>
              </div>
              <div className="number text-[2.5vw] h-full w-[15vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">02</span>
              </div>
              <div className="body flex flex-col text-white h-full w-[84vw]">
                <h2 className=" text-[1.8vw]">
                  I'll design visually compelling and intuitive interfaces that
                  users enjoy.
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw] text-[1.3vw]">
                  <li className=" flex flex-row ">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> User Interface (UI) & Visual Design :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Crafting aesthetically pleasing and functional designs.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> Design Systems & Component Libraries :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Building consistency and scalability across products.
                    </span>
                  </li>
                  <li className=" flex flex-row w-full">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span className="">
                      Typography & Layout for Data-Heavy Interfaces :
                    </span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Making complex information easy to scan and understand.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> Responsive Design :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Ensuring a seamless experience across all screen sizes and
                      devices.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="content flex flex-row px-[2.5vw] py-[3vw] w-full h-[20vw] justify-center items-center"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              ref={list3Ref}
            >
              <div className="tag h-full w-[20vw]  pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  Creative Leadership
                </span>
              </div>
              <div className="number text-[2.5vw] h-full w-[15vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">03</span>
              </div>
              <div className="body flex flex-col text-white h-full w-[80vw]">
                <h2 className=" text-[1.8vw]">
                  I'll shape design excellence through leadership and
                  collaboration.
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw] text-[1.3vw]">
                  <li className=" flex flex-row ">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> Design Leadership & Team Mentorship :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Empowering teams to innovate and grow.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> Stakeholder & Client Communication :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Aligning vision, goals, and expectations.
                    </span>
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    <span> Agile UX & Sprint Planning :</span>
                    <span className=" opacity-50 ml-[0.3vw]">
                      Delivering seamless experiences in fast-paced workflows.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-[5vw] gap-[2vw] px-[2.5vw] font-semibold">
              {/* Figma Box */}
              <div className=" rounded-[0.9vw] bg-[#8CFF2E] text-black h-[15vw] shadow-md cursor-pointer ">
                <div className=" w-full p-[1vw]">
                  <p className=" text-[5vw] ">08+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Solutions Delivered</span>
                  <span className=" text-[1.7vw] opacity-50">
                    Digital Solutions
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-[#242424] text-white h-[15vw] shadow-md cursor-pointer ">
                <div className=" w-full p-[1vw]">
                  <p className=" text-[5vw]">04+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Years</span>
                  <span className=" text-[1.7vw] opacity-50">Experience</span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-white h-[15vw] shadow-md cursor-pointer ">
                <div className=" w-full p-[1vw]">
                  <p className=" text-[5vw]">10+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Completed</span>
                  <span className=" text-[1.7vw] opacity-50">Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#F8F8F8]  py-[7vw] px-[2.5vw] ">
            <div className=" w-full h-[4vw] font-semibold flex items-center mx-[-2.5vw]">
              <span className=" px-[2.5vw] text-black flex flex-row gap-[0.7vw] items-center ">
                <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.7vw]" />
                <span className=" opacity-50 text-[1.5vw]">
                  {"{04} — Contact me"}
                </span>
              </span>
            </div>
            <div className=" text-[6.5vw]">
              <h1>Find me across the internet</h1>
            </div>
            <div className=" py-[2vw]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
                {/* Figma Box */}
                <div className=" rounded-[0.9vw] bg-white text-[2.5vw] h-[15vw] shadow-md cursor-pointer group">
                  <div className=" w-full p-[2vw]">
                    <p className="">behance</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <Link
                        href={behanceURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaBehance className="group-hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-white text-[2.5vw] h-[15vw] shadow-md cursor-pointer group">
                  <div className=" w-full p-[2vw]">
                    <p className="">Linkedin</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <Link
                        href={linkedinURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="group-hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      </Link>
                    </div>
                  </div>
                </div>
                <a href="mailto:sanith.s74@gmail.com" className="no-underline">
                  <div className="rounded-[0.9vw] bg-[#8CFF2E] text-[2.5vw] h-[15vw] shadow-md cursor-pointer hover:px-[1vw] transition-all duration-500">
                    <div className="w-full p-[2vw]">
                      <p className="">Get in touch</p>
                    </div>
                    <div className="w-full flex items-center justify-end px-[3vw]">
                      <div className="bg-[#8CFF2E] p-[1vw] rounded-[100%]">
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
            className=" h-[100vh] flex flex-row"
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className=" h-full w-1/2 justify-center items-center flex flex-col px-[2vw] bg-[url(/footervector.svg)] bg-cover">
              <h1 className=" text-[5vw] text-white font-semibold">
                Let's design experiences that inspire the world.
              </h1>
              <h2 className=" text-[2vw] text-white opacity-50 w-full mt-[3vw]">
                Let’s make an impact
              </h2>
            </div>
            <div
              className="h-full w-1/2 flex flex-col"
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className=" text-white h-[40%] flex items-end p-[2vw] ">
                <div className="w-3/4 flex flex-row justify-around mt-[2vw]">
                  <div className="flex justify-center items-center  h-[10vw] rounded-full w-[10vw]">
                    <img
                      src="/sanith.jpeg"
                      alt="Image of the developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className=" h-[10%] flex flex-col items-start text-[1vw] font-bold">
                    <h1 className="text-[2vw]">Sanith Suvarna</h1>
                    <h2 className="opacity-50 text-[1vw] text-left">
                      UX/UI Designer
                    </h2>
                    <div className=" flex flex-row mt-[1vw] text-[1.5vw] gap-[1vw] opacity-50">
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
                <h2 className="opacity-50 text-[1.2vw] text-left font-semibold px-[1vw] text-white">
                  Contact me
                </h2>
                <h2 className=" text-[3vw] text-left font-semibold px-[1vw] text-white">
                  sanith.s74<span className=" text-[#8CFF2E]">@</span>gmail.com
                </h2>
                <p className="text-[1.8vw] text-white text-left font-semibold p-[1vw] mb-[0.5vw]">
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
                <div className="px-[1vw]">
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
          <footer className=" w-full h-[10vh] flex items-center justify-center text-[1vw] text-white opacity-50 ">
            Copyright © sanith suvarna, 2024
          </footer>
        </section>
      </main>
    </>
  );
}

export default page;
