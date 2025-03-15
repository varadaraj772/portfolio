import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { PiAsterisk } from "react-icons/pi";
import GreenButton from "./components/GreenButton";
import { FaFigma } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import Banner from "./components/Banner";

function page() {
  return (
    <>
      <Navbar />
      <main className=" h-[90vh] w-screen flex flex-row justify-center items-center bg-gray-200">
        <section className="h-full w-[30%] flex justify-center items-start ">
          <div className=" text-black h-[40%] flex items-end p-[2vw]  w-full">
            <div className="w-full flex flex-row justify-around mt-[2vw]">
              <div className="flex justify-center items-center  h-[14vh]">
                <Image
                  src="/react.png"
                  alt="Image of the developer"
                  width={50}
                  height={50}
                />
              </div>
              <div className=" h-[10%] flex flex-col items-start text-[1vw] font-bold">
                <h1 className="text-[2vw]">Sanith Suvarna</h1>
                <h2 className="opacity-50 text-[1vw] text-left">
                  UX/UI Designer
                </h2>
                <div className=" flex flex-row mt-[1vw] text-[1.5vw] gap-[1vw] opacity-50">
                  <FaXTwitter className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                  <FiInstagram className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                  <FaLinkedin className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" h-full w-[70%] flex flex-col items-start justify-around text-[7.5vw] mt-[-2vw]">
          <span className="w-full flex items-center gap-[2vw]">
            Hi! I'm{" "}
            <span className=" bg-white py-[0.5vw] px-[0.8vw] rounded-[4vw] text-[4vw]">
              Sanith Suvarna
            </span>
          </span>
          <span className="w-full mt-[-4.5vw] gap-[2vw]">
            a{" "}
            <span className=" bg-[#2F2F2F] py-[0.5vw] px-[0.8vw] rounded-[4vw] text-white text-[4vw]">
              UX/UI Designer
            </span>
          </span>
          <span className="w-full mt-[-3vw] flex items-center gap-[2vw]">
            from{" "}
            <span className=" bg-transparent py-[0.1vw] px-[2vw] rounded-[4vw] text-[#2F2F2F] border-[#2F2F2F] border text-[4vw]">
              Mangalore
            </span>
          </span>
          <span className="w-full  mt-[-4vw]">turning Your</span>
          <span className="w-full  mt-[-4vw]">Ideas into pixel-</span>
          <span className="w-full  mt-[-4vw]">perfect realities</span>
        </section>
      </main>
      <main className="w-screen flex flex-col justify-center items-center bg-gray-200">
        <section className="h-[25%] w-full flex flex-row justify-between mt-[4vw]">
          <span className="text-[2vw] w-[30%] px-[2vw]">(2018 - PRESENT)</span>
          <div className="text-[2vw] text-gray-700 w-[70%] px-[2vw] flex flex-col">
            <span className="mb-[2vw]">
              I’m dedicated to crafting websites that bring your ideas to life,
              combining design and development to deliver fast, impactful
              results.
            </span>
            <GreenButton text="Download Resume" />
          </div>
        </section>
        <section className="bg-black w-full mt-[2vw]">
          <Banner />
          <div className="">
            <div className="">
              <h1 className=" text-white text-[9vw] p-[1vw]">
                I blend creativity with technical expertise
              </h1>
            </div>
            <div className="bg-black">
              <GreenButton text="Become a client" />
            </div>
          </div>
          <div className="flex flex-col py-[2vw]">
            <div className="flex flex-row h-[30vw]">
              <div className="w-1/2 flex flex-col text-white">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[80%] w-1/2 object-cover rounded-[2vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[80%] w-1/2 object-cover rounded-[2vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[80%] w-1/2 object-cover rounded-[2vw]"
                />
              </div>
            </div>
            <div className="flex flex-row h-[30vw] mt-[3vw]">
              <div className="w-1/2 flex flex-col text-white">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[80%] w-1/2 object-cover rounded-[2vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[80%] w-1/2 object-cover rounded-[2vw]"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[80%] w-1/2 object-cover rounded-[2vw]"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-row h-[100vh]">
            <div className=" w-1/2 p-[1vw]">
              <h2 className=" text-[8vw]">My Creative Toolbox</h2>
            </div>
            <div className=" w-1/2 flex flex-col justify-around items-center p-[1vw]">
              <div className=" bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]">
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
              <div className=" bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]">
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
              <div className=" bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]">
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
          <Banner />
          <div className=" bg-black h-[100vh]">
            <div className="head">
              <h1 className=" text-[5vw] text-white p-[1vw]"> How it works</h1>
            </div>
            <div className="content flex flex-row justify-around p-[1vw]">
              <div className="tag">
                <span className=" bg-transparent py-[0.1vw] px-[1vw] rounded-[4vw] border-[#2F2F2F] border text-[1.5vw] text-white">
                  Discovery
                </span>
              </div>
              <div className="number text-[1.5vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">01</span>
              </div>
              <div className="body flex flex-col text-white">
                <h2>We'll dive deep into your goals and vision</h2>
                <ul className="list-none space-y-2">
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Initial Consultation: Understand the client’s vision, goals,
                    and target audience.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Research: Analyze competitors and industry trends to gather
                    insights.
                  </li>
                  <li className=" flex flex-row">
                    <PiAsterisk className="text-lg text-[#8CFF2E] mr-[1vw]" />
                    Define Scope: Set the project’s objectives, deliverables,
                    and timelines.
                  </li>
                </ul>
              </div>
              <div className="days text-[#2F2F2F]">03/05 Days</div>
            </div>
            <div className="content flex flex-row justify-around p-[1vw]">
              <div className="tag">
                <span className=" bg-transparent py-[0.1vw] px-[1vw] rounded-[4vw] border-[#2F2F2F] border text-[1.5vw] text-white">
                  Design
                </span>
              </div>
              <div className="number text-[1.5vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">02</span>
              </div>
              <div className="body flex flex-col text-white">
                <h2>I'll create mockups that bring your brand to life</h2>
                <ul className="list-none space-y-2">
                  <li className=" flex flex-row">
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
              <div className="days text-[#2F2F2F]">01/02 Weeks</div>
            </div>
            <div className="content flex flex-row justify-around p-[1vw]">
              <div className="tag">
                <span className=" bg-transparent py-[0.1vw] px-[1vw] rounded-[4vw] border-[#2F2F2F] border text-[1.5vw] text-white">
                  Design
                </span>
              </div>
              <div className="number text-[1.5vw]">
                <span className=" text-[#8CFF2E]">/</span>
                <span className=" text-white">03</span>
              </div>
              <div className="body flex flex-col text-white">
                <h2>I'll create mockups that bring your brand to life</h2>
                <ul className="list-none space-y-2">
                  <li className=" flex flex-row">
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
              <div className="days text-[#2F2F2F]">01/02 Weeks</div>
            </div>
          </div>
          <div className=" bg-gray-200">
            <div className=" w-full h-[4vw] text-black opacity-50 p-[1vw] font-semibold text-[1.5vw]">
              {" "}
              {"{06}"} — Contact me
            </div>
            <div className=" text-[7vw] p-[1vw]">
              <h1>I’m all over the internet</h1>
            </div>
            <div className=" p-[2vw]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
                {/* Figma Box */}
                <div className=" rounded-[0.9vw] bg-white text-[3vw] h-[15vw] shadow-md cursor-pointer">
                  <div className=" w-full p-[2vw]">
                    <p className="">Figma</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <FaFigma />
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-white text-[3vw] h-[15vw] shadow-md cursor-pointer">
                  <div className=" w-full p-[2vw]">
                    <p className="">Instagram</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <FiInstagram />
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-white text-[3vw] h-[15vw] shadow-md cursor-pointer">
                  <div className=" w-full p-[2vw]">
                    <p className="">Twitter</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <FaXTwitter />
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-white text-[3vw] h-[15vw] shadow-md cursor-pointer">
                  <div className=" w-full p-[2vw]">
                    <p className="">Linkedin</p>
                  </div>
                  <div className=" w-full flex items-center justify-end px-[2vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
                <div className=" rounded-[0.9vw] bg-[#8CFF2E] text-[3vw] h-[15vw] shadow-md cursor-pointer">
                  <div className=" w-full  p-[2vw]">
                    <p className="">Get in touch</p>
                  </div>
                  <div className=" w-full  flex items-center justify-end px-[3vw]">
                    <div className=" bg-[#8CFF2E] p-[1vw] rounded-[100%]">
                      <BsArrowReturnRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Banner />
          <div className=" h-[100vh] bg-black flex flex-row">
            <div className=" h-full w-1/2 justify-center items-center flex flex-col px-[2vw]">
              <h1 className=" text-[5vw] text-white font-semibold">
                Let's create something extraordinary together.
              </h1>
              <h2 className=" text-[2vw] text-white opacity-50 w-full">
                Let’s make an impact
              </h2>
            </div>
            <div className="h-full w-1/2 flex flex-col">
              <div className=" text-white h-[40%] flex items-end p-[2vw]">
                <div className="w-1/2 flex flex-row justify-around mt-[2vw]">
                  <div className=" h-[10%] flex flex-row justify-center items-center">
                    <Image
                      src="/react.png"
                      alt="Image of the developer"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className=" h-[10%] flex flex-col items-start text-[1vw] font-bold">
                    <h1 className="text-[2vw]">Sanith Suvarna</h1>
                    <h2 className="opacity-50 text-[1vw] text-left">
                      UX/UI Designer
                    </h2>
                    <div className=" flex flex-row mt-[1vw] text-[1.5vw] gap-[1vw] opacity-50">
                      <FaXTwitter className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      <FiInstagram className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                      <FaLinkedin className="hover:rotate-360 cursor-pointer transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-1/2">
                <h2 className="opacity-50 text-[2vw] text-left font-semibold p-[1vw]">
                  Contact me
                </h2>
                <h2 className=" text-[3vw] text-left font-semibold p-[1vw] text-white">
                  sanith.s74<span className=" text-[#8CFF2E]">@</span>gmail.com
                </h2>
                <p className="text-[2vw] text-white text-left font-semibold p-[1vw]">
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
          <footer className=" w-full h-[10vh] flex items-center justify-center text-[1vw] text-white opacity-50">
            Copyright © sanith suvarna, 2024
          </footer>
        </section>
      </main>
    </>
  );
}

export default page;
