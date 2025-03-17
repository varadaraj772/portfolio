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
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function page() {
  const nameRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);
  const headingRef = useRef(null);

  const imageRefs = [
    image1Ref,
    image2Ref,
    image3Ref,
    image4Ref,
    image5Ref,
    image6Ref,
  ];

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
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
  }, []);

  return (
    <>
      <main className="w-screen flex flex-col justify-center items-center bg-[url(/background.png)] bg-cover overflow-hidden">
        <nav
          className=" w-full h-[13vh] flex flex-row justify-between items-center pr-[3vw] pl-[2.5vw] bg-transparent z-50 relative font-semibold overflow-hidden"
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className=" flex flex-row text-[1.3vw] py-[1vw] gap-[2vw]">
            <h2>Projects</h2>
            <h2>About & Contact</h2>
          </div>
          <div className="flex flex-row w-1/2 justify-end items-center gap-[2vw] ">
            <div>
              <span className=" opacity-50">Email :</span>
              <span>sanith.s74@gmail.com</span>
            </div>
            <button className=" bg-[#8CFF2E] py-[1.1vw] px-[1.7vw] rounded-[2vw] text-black">
              <a href="mailto:varadaraj277@gmail.com">Contact me</a>
            </button>
          </div>
        </nav>
        <div className="flex flex-row w-full justify-between items-center px-[2vw]">
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
                  <FaBehance className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                  <FaLinkedin className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
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
            <span className="w-full mt-[-3vw] gap-[2vw]">
              a{" "}
              <span className=" bg-[#2F2F2F] py-[1.4vw] px-[1.8vw] rounded-[4vw] text-white text-[3vw] shadow-md">
                UX/UI Designer
              </span>
            </span>
            <span className="w-full mt-[-0.5vw] flex items-center gap-[2vw]">
              from{" "}
              <span className=" bg-transparent py-[1.4vw] px-[1.8vw] rounded-[4vw] text-[#2F2F2F] border-[#2F2F2F] border text-[3vw]">
                Mangalore
              </span>
            </span>
            <span className="w-full  mt-[-3vw]">turning Your</span>
            <span className="w-full  mt-[-3vw]">Ideas into pixel-</span>
            <span className="w-full  mt-[-3vw]">perfect realities</span>
          </section>
        </div>
        <section className="h-[25%] w-full flex flex-row justify-between mt-[5vw] py-[2vw] mb-[6vw]">
          <span className="text-[2vw] w-[45%] px-[2vw]">(2018 - PRESENT)</span>
          <div className="text-[2vw] text-gray-700 w-[50%] flex flex-col">
            <span className="mb-[2vw]">
              I’m dedicated to crafting websites that bring your ideas to life,
              combining design and development to deliver fast, impactful
              results.
            </span>
            <GreenButton text="Download Resume" />
          </div>
        </section>
      </main>
      <main className="w-screen flex flex-col justify-center items-center bg-[rgb(17,17,17)]">
        <section className=" w-full">
          <Banner />
          <div
            className="bg-[url(/svg.png)] pb-[7vw] pt-[7vw] bg-[100%] bg-no-repeat bg-contain"
            ref={headingRef}
          >
            <span className=" px-[2.5vw] text-white flex flex-row gap-[0.7vw] items-center font-semibold">
              <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.8vw]" />
              <span className=" opacity-50 text-[1.5vw]">
                {"{01} — Featured projects"}
              </span>
            </span>
            <h1 className=" text-white text-[6.5vw] px-[2.5vw]">
              I blend creativity with technical expertise
            </h1>
            <div className="bg-transparent px-[2.5vw] pt-[2vw]">
              <GreenButton text="Become a client" />
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
                  <span className="text-[2vw]">SilverLinex Technologies</span>
                  <span className="opacity-50">
                    Web design & Developement
                  </span>{" "}
                </div>
                <img
                  src="/img1.jpg"
                  ref={image1Ref}
                  alt="Project Image: Nexus"
                  className="h-[48%] object-cover rounded-[2vw] w-[82%] translate-x-[3.5vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white translate-x-[3.5vw] ">
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw]">
                  {/* <span className="text-[1.2vw] text-[#8CFF2E]">
               {"{ "} <span className=" text-white">Pottery Artistic Portfolio</span>{' }'}
                </span> */}
                  <span className="text-[2vw]">SilverLinex Technologies</span>
                  <span className="opacity-50">
                    Web design & Developement
                  </span>{" "}
                </div>
                <img
                  src="/img1.jpg"
                  alt="Project Image: Nexus"
                  ref={image2Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                />
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
                  <span className="text-[2vw]">SilverLinex Technologies</span>
                  <span className="opacity-50">
                    Web design & Developement
                  </span>{" "}
                </div>
                <img
                  src="/img1.jpg"
                  alt="Project Image: Nexus"
                  ref={image3Ref}
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white translate-x-[3.5vw] ">
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw]">
                  {/* <span className="text-[1.2vw] text-[#8CFF2E]">
               {"{ "} <span className=" text-white">Pottery Artistic Portfolio</span>{' }'}
                </span> */}
                  <span className="text-[2vw]">SilverLinex Technologies</span>
                  <span className="opacity-50">
                    Web design & Developement
                  </span>{" "}
                </div>
                <img
                  src="/img1.jpg"
                  ref={image4Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                />
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
                  <span className="text-[2vw]">SilverLinex Technologies</span>
                  <span className="opacity-50">
                    Web design & Developement
                  </span>{" "}
                </div>
                <img
                  src="/img1.jpg"
                  ref={image5Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%] translate-x-[3.5vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white translate-x-[3.5vw] ">
                <div className=" flex flex-col h-[30%] justify-center gap-[1vw]">
                  {/* <span className="text-[1.2vw] text-[#8CFF2E]">
               {"{ "} <span className=" text-white">Pottery Artistic Portfolio</span>{' }'}
                </span> */}
                  <span className="text-[2vw]">SilverLinex Technologies</span>
                  <span className="opacity-50">
                    Web design & Developement
                  </span>{" "}
                </div>
                <img
                  src="/img1.jpg"
                  ref={image6Ref}
                  alt="Project Image: Nexus"
                  className="h-[50%] object-cover rounded-[2vw] w-[85%]"
                />
              </div>
            </div>
          </div>
          <Toolbox />
          <div className="">
            <Banner />
          </div>

          <div className=" pb-[10vw]">
            <div className="head py-[3vw]">
              <span className=" px-[2.5vw] text-white flex flex-row gap-[0.7vw] items-center font-semibold">
                <GoDotFill className=" text-[#8CFF2E] drop-shadow-[0_0_10px_#8CFF2E] text-[1.5vw]" />
                <span className=" opacity-50 text-[1.3vw]">
                  {"{03} — Process"}
                </span>
              </span>
              <h1 className=" text-[6.5vw] text-white px-[2.5vw]">
                {" "}
                How it works
              </h1>
            </div>

            <div
              className="content flex flex-row px-[2.5vw] py-[3vw] w-full h-[33vw] justify-center items-center"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="tag h-full w-[15vw] pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  Discovery
                </span>
              </div>
              <div className="number text-[2.5vw] h-full w-[15vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">01</span>
              </div>
              <div className="body flex flex-col text-white h-full w-[55vw] b">
                <h2 className=" text-[1.8vw]">
                  I'll create mockups that bring your brand to life
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw]">
                  <li className=" flex flex-row ">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Wireframing: Create low-fidelity wireframes to map out the
                    site’s structure.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Style Guide Creation: Develop a design language including
                    colors, fonts, and UI e
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Prototype Development: Build clickable prototypes for client
                    feedback.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Finalize Design: Approve the final design with detailed
                    mockups for all pages.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Finalize Design: Approve the final design with detailed
                    mockups for all pages.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Finalize Design: Approve the final design with detailed
                    mockups for all pages.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Finalize Design: Approve the final design with detailed
                    mockups for all pages.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Finalize Design: Approve the final design with detailed
                    mockups for all pages.
                  </li>
                </ul>
              </div>
              <div className="days text-[#2F2F2F] h-full w-[15vw]"></div>
            </div>
            <div
              className="content flex flex-row px-[2.5vw] py-[3vw] w-full h-[22vw] justify-center items-center"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="tag h-full w-[15vw]  pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  Design
                </span>
              </div>
              <div className="number text-[2.5vw] h-full w-[15vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">02</span>
              </div>
              <div className="body flex flex-col text-white h-full w-[55vw] b">
                <h2 className=" text-[1.8vw]">
                  I'll create mockups that bring your brand to life
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw]">
                  <li className=" flex flex-row ">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Wireframing: Create low-fidelity wireframes to map out the
                    site’s structure.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Style Guide Creation: Develop a design language including
                    colors, fonts, and UI e
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Prototype Development: Build clickable prototypes for client
                    feedback.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Finalize Design: Approve the final design with detailed
                    mockups for all pages.
                  </li>
                </ul>
              </div>
              <div className="days text-[#2F2F2F] h-full w-[15vw]"></div>
            </div>
            <div
              className="content flex flex-row px-[2.5vw] py-[3vw] w-full h-[20vw] justify-center items-center"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="tag h-full w-[15vw]  pt-[1vw]">
                <span className=" bg-transparent py-[0.7vw] px-[1.4vw] rounded-[4vw] border-[#2F2F2F] border text-white">
                  Build
                </span>
              </div>
              <div className="number text-[2.5vw] h-full w-[15vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">03</span>
              </div>
              <div className="body flex flex-col text-white h-full w-[55vw] b">
                <h2 className=" text-[1.8vw]">
                  I'll create mockups that bring your brand to life
                </h2>
                <ul className="list-none mt-[1.8vw] space-y-[1vw]">
                  <li className=" flex flex-row ">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Wireframing: Create low-fidelity wireframes to map out the
                    site’s structure.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Style Guide Creation: Develop a design language including
                    colors, fonts, and UI e
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Prototype Development: Build clickable prototypes for client
                    feedback.
                  </li>
                </ul>
              </div>
              <div className="days text-[#2F2F2F] h-full w-[15vw]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-[5vw] gap-[2vw] px-[2.5vw] font-semibold">
              {/* Figma Box */}
              <div className=" rounded-[0.9vw] bg-[#8CFF2E] text-black h-[15vw] shadow-md cursor-pointer group hover:px-[1vw]  transition-all duration-500">
                <div className=" w-full p-[1vw]">
                  <p className=" text-[5vw] ">95+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Percent</span>
                  <span className=" text-[1.7vw] opacity-50">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-[#242424] text-white h-[15vw] shadow-md cursor-pointer group hover:px-[1vw]  transition-all duration-500">
                <div className=" w-full p-[1vw]">
                  <p className=" text-[5vw]">95+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Percent</span>
                  <span className=" text-[1.7vw] opacity-50">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-white h-[15vw] shadow-md cursor-pointer group hover:px-[1vw]  transition-all duration-500">
                <div className=" w-full p-[1vw]">
                  <p className=" text-[5vw]">95+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Percent</span>
                  <span className=" text-[1.7vw] opacity-50">
                    Customer Satisfaction
                  </span>
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
              <h1>I’m all over the internet</h1>
            </div>
            <div className=" py-[2vw]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
                {/* Figma Box */}
                <div className=" rounded-[0.9vw] bg-white text-[3vw] h-[15vw] shadow-md cursor-pointer group">
                  <div className=" w-full p-[2vw]">
                    <p className="">behance</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <FaBehance className="group-hover:rotate-360 cursor-pointer transition-transform duration-700" />
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-white text-[3vw] h-[15vw] shadow-md cursor-pointer group">
                  <div className=" w-full p-[2vw]">
                    <p className="">Linkedin</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <FaLinkedin className="group-hover:rotate-360 cursor-pointer transition-transform duration-700" />
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-[#8CFF2E] text-[3vw] h-[15vw] shadow-md cursor-pointer hover:px-[1vw] transition-all duration-500">
                  <div className=" w-full  p-[2vw]">
                    <p className="">Get in touch</p>
                  </div>
                  <div className=" w-full  flex items-center justify-end px-[3vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <a href="mailto:sanith.s74@gmail.com">
                        <BsArrowReturnRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Banner />
          </div>

          <div
            className=" h-[100vh] flex flex-row"
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className=" h-full w-1/2 justify-center items-center flex flex-col px-[2vw] bg-[url(/footervector.svg)] bg-cover">
              <h1 className=" text-[5vw] text-white font-semibold">
                Let's create something extraordinary together.
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
                      <FaBehance className="hover:rotate-360 cursor-pointer transition-transform duration-700" />

                      <FaLinkedin className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-1/2 px-[4vw]">
                <h2 className="opacity-50 text-[1.8vw] text-left font-semibold p-[1vw] text-white">
                  Contact me
                </h2>
                <h2 className=" text-[3vw] text-left font-semibold p-[1vw] text-white">
                  sanith.s74<span className=" text-[#8CFF2E]">@</span>gmail.com
                </h2>
                <p className="text-[1.8vw] text-white text-left font-semibold p-[1vw] mb-[0.8vw]">
                  <span className="opacity-50">
                    Hit me up if you’re looking for a{" "}
                  </span>
                  <span className="text-white opacity-100">
                    fast, reliable web-designer
                  </span>
                  <span className="opacity-50">
                    {" "}
                    who can bring your vision to life.
                  </span>
                </p>
                <GreenButton text="Book a call" />
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
