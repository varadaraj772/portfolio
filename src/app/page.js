import React from "react";
import Navbar from "./components/Navbar";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { PiAsterisk } from "react-icons/pi";
import GreenButton from "./components/GreenButton";
import { FaBehance } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import Banner from "./components/Banner";
import Toolbox from "./components/Toolbox";

function page() {
  return (
    <>
      <Navbar />
      <main className="w-screen flex flex-col justify-center items-center bg-[url(/background.png)] relative top-[-10vh]">
        <div className="flex flex-row w-full justify-center items-center">
          <section className="h-full w-[40%] flex justify-center items-start relative top-[10vh]">
            <div className=" text-black h-[40%] flex items-end p-[2vw]  w-full">
              <div className="w-full flex flex-row justify-around mt-[2vw] ">
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
            </div>
          </section>
          <section className=" h-full w-[70%] flex flex-col items-start justify-between text-[6.5vw] mt-[-2vw] py-[2vw] relative top-[10vh]">
            <span className="w-full flex items-center gap-[2vw]">
              Hi! I'm{" "}
              <span className=" bg-white py-[0.5vw] px-[0.8vw] rounded-[4vw] text-[3vw]">
                Sanith Suvarna
              </span>
            </span>
            <span className="w-full mt-[-4vw] gap-[2vw]">
              a{" "}
              <span className=" bg-[#2F2F2F] py-[0.5vw] px-[0.8vw] rounded-[4vw] text-white text-[3vw]">
                UX/UI Designer
              </span>
            </span>
            <span className="w-full mt-[-2vw] flex items-center gap-[2vw]">
              from{" "}
              <span className=" bg-transparent py-[0.1vw] px-[2vw] rounded-[4vw] text-[#2F2F2F] border-[#2F2F2F] border text-[3vw]">
                Mangalore
              </span>
            </span>
            <span className="w-full  mt-[-3vw]">turning Your</span>
            <span className="w-full  mt-[-3vw]">Ideas into pixel-</span>
            <span className="w-full  mt-[-3vw]">perfect realities</span>
          </section>
        </div>
        <section className="h-[25%] w-full flex flex-row justify-between mt-[10vw] py-[2vw]">
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
      </main>
      <main className="w-screen flex flex-col justify-center items-center relative top-[-10vh] bg-black">
        <div></div>
        <section className=" w-full">
          <Banner />
          <div className="bg-[url(/svg.svg)] py-[7vw]">
              <h1 className=" text-white text-[9vw] px-[2vw]">
                I blend creativity with technical expertise
              </h1>
            <div className="bg-black px-[2vw]">
              <GreenButton text="Become a client" />
            </div>
          </div>
          <div className="flex flex-col py-[2vw]">
            <div
              className="flex flex-row h-[30vw]"
              style={{
                borderTop: "0.5px solid rgba(255, 255, 255, 0.5)",
                borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="w-1/2 flex flex-col text-white bg-red-70 p-[2vw]">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[70%] object-cover rounded-[2vw] w-3/4"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white bg-red-70 p-[2vw]">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[70%] object-cover rounded-[2vw] w-3/4"
                />
              </div>
            </div>
            <div
              className="flex flex-row h-[30vw]"
              style={{
                borderTop: "0.5px solid rgba(255, 255, 255, 0.5)",
                borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="w-1/2 flex flex-col text-white bg-red-70 p-[2vw]">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[70%] object-cover rounded-[2vw] w-3/4"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white bg-red-70 p-[2vw]">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[70%] object-cover rounded-[2vw] w-3/4"
                />
              </div>
            </div>
            <div
              className="flex flex-row h-[30vw]"
              style={{
                borderTop: "0.5px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="w-1/2 flex flex-col text-white bg-red-70 p-[2vw]">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[70%] object-cover rounded-[2vw] w-3/4"
                />
              </div>
              <div className="w-1/2 flex flex-col text-white bg-red-70 p-[2vw]">
                <span className="text-[2.5vw]">
                  Project Heading - 02/02/2024
                </span>
                <span className="opacity-50 text-[2vw]">Field</span>{" "}
                <img
                  src="/nexus.jpg"
                  alt="Project Image: Nexus"
                  className="h-[70%] object-cover rounded-[2vw] w-3/4"
                />
              </div>
            </div>
          </div>
          <Toolbox />
          <div className="relative top-[-50vh]">
            <Banner />
          </div>

          <div className=" relative top-[-50vh]">
            <div className="head">
              <h1 className=" text-[6.5vw] text-white px-[2vw]">
                {" "}
                How it works
              </h1>
            </div>

            <div
              className="content flex flex-row px-[2vw] py-[1vw] w-full h-[17vw] justify-center items-center"
              style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)", borderTop: "0.5px solid rgba(255, 255, 255, 0.5)" }}
            >
              <div className="tag h-full w-[15vw]  p-[0.2vw]">
                <span className=" bg-transparent py-[0.1vw] px-[1vw] rounded-[4vw] border-[#2F2F2F] border text-[1.5vw] text-white">
                  Discover
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
              <div className="days text-[#2F2F2F] h-full w-[15vw]">
                01/02 Weeks
              </div>
            </div>
            <div
              className="content flex flex-row px-[2vw] py-[1vw] w-full h-[17vw] justify-center items-center"
              style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)", borderTop: "0.5px solid rgba(255, 255, 255, 0.5)" }}
            >
              <div className="tag h-full w-[15vw]  p-[0.2vw]">
                <span className=" bg-transparent py-[0.1vw] px-[1vw] rounded-[4vw] border-[#2F2F2F] border text-[1.5vw] text-white">
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
              <div className="days text-[#2F2F2F] h-full w-[15vw]">
                01/02 Weeks
              </div>
            </div>
            <div
              className="content flex flex-row px-[2vw] py-[1vw] w-full h-[17vw] justify-center items-center"
              style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)", borderTop: "0.5px solid rgba(255, 255, 255, 0.5)" }}
            >
              <div className="tag h-full w-[15vw]  p-[0.2vw]">
                <span className=" bg-transparent py-[0.1vw] px-[1vw] rounded-[4vw] border-[#2F2F2F] border text-[1.5vw] text-white">
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
              <div className="days text-[#2F2F2F] h-full w-[15vw]">
                01/02 Weeks
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-[5vw] justify-items-center font-semibold">
              {/* Figma Box */}
              <div className=" rounded-[0.9vw] bg-[#8CFF2E] text-black h-[19.5vw] shadow-md cursor-pointer group w-[25vw]">
                <div className=" w-full p-[2vw]">
                  <p className=" text-[5.4vw] ">95+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Percent</span>
                  <span className=" text-[1.7vw] opacity-50">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-[#242424] text-white h-[19.5vw] shadow-md cursor-pointer group w-[25vw]">
                <div className=" w-full p-[2vw]">
                  <p className=" text-[5.4vw]">95+</p>
                </div>
                <div className=" w-full flex flex-col items-end justify-end px-[2vw]">
                  <span className=" text-[1.2vw]">Percent</span>
                  <span className=" text-[1.7vw] opacity-50">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
              <div className=" rounded-[0.9vw] bg-white h-[19.5vw] shadow-md cursor-pointer group w-[25vw]">
                <div className=" w-full p-[2vw]">
                  <p className=" text-[5.4vw]">95+</p>
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
          <div className=" bg-[#F8F8F8] relative top-[-30vh]">
            <div className=" w-full h-[4vw] text-black opacity-50 p-[1vw] font-semibold text-[1.5vw]">
              {" "}
              {"{00}"} — Contact me
            </div>
            <div className=" text-[7vw] px-[2vw]">
              <h1>I’m all over the internet</h1>
            </div>
            <div className=" p-[2vw]">
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
          <div className ="relative top-[-30vh]">
          <Banner />
          </div>
         
          <div className=" h-[100vh] bg-[url(/footervector.svg)] flex flex-row relative top-[-30vh]">
            <div className=" h-full w-1/2 justify-center items-center flex flex-col px-[2vw]">
              <h1 className=" text-[5vw] text-white font-semibold">
                Let's create something extraordinary together.
              </h1>
              <h2 className=" text-[2vw] text-white opacity-50 w-full">
                Let’s make an impact
              </h2>
            </div>
            <div className="h-full w-1/2 flex flex-col">
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
          <footer className=" w-full h-[10vh] flex items-center justify-center text-[1vw] text-white opacity-50 relative top-[-30vh]">
            Copyright © sanith suvarna, 2024
          </footer>
        </section>
      </main>
    </>
  );
}

export default page;
