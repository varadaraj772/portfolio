import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { PiAsterisk } from "react-icons/pi";
import GreenButton from "./components/GreenButton";

function page() {
  return (
    <>
      <Navbar />
      <main className=" h-[90vh] w-screen flex flex-row justify-center items-center bg-gray-200">
        <section className="h-full w-[30%] flex justify-center items-start mx-[2vw]">
          <div className=" w-full flex flex-row justify-around mt-[2vw]">
            <div className=" h-[10%] flex flex-row justify-center items-center">
              <Image
                src="/react.png"
                alt="Image of the developer"
                width={50}
                height={50}
              />
            </div>
            <div className=" h-[10%] flex flex-col justify-center items-center text-[1vw] font-bold">
              <span>Sanith Suvarna</span>
              <span>UX/UI Designer</span>
              <div className=" flex flex-row items-center justify-around w-full mt-[1vw] text-[2vw]">
                <FaXTwitter />
                <FiInstagram />
                <FaLinkedin />
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
          <div className="banner bg-[#1C1C1C] h-[10vh] w-full flex flex-row justify-between items-center text-[3vw] px-[2vw]">
            <div className="flex flex-row gap-[1vw]">
              {" "}
              <span className=" text-[#8CFF2E]">8+</span>
              <span className="text-white">years of experience</span>
            </div>
            <span className=" text-[#8CFF2E]">
              <PiAsterisk />
            </span>
            <div className="flex flex-row text-[3vw] gap-[1vw]">
              {" "}
              <span className=" text-[#8CFF2E]">{">95%"}</span>
              <span className="text-white">Client retention rate</span>
            </div>
          </div>
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
                <h2 className="w-full text-center text-[3vw] font-bold">React.Js</h2>
                <h3 className="w-full text-center text-[1.5vw] opacity-50">Javascript Library</h3>
                </div>
              </div>
              <div className=" bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]">
                <img src="/react.png" alt="React" className=" h-1/2" />
                <div>
                <h2 className="w-full text-center text-[3vw] font-bold">React.Js</h2>
                <h3 className="w-full text-center text-[1.5vw] opacity-50">Javascript Library</h3>
                </div>
              </div>
              <div className=" bg-white h-1/4 w-1/2 rounded-[1vw] flex flex-row justify-center items-center gap-[2vw]">
                <img src="/react.png" alt="React" className=" h-1/2" />
                <div>
                <h2 className="w-full text-center text-[3vw] font-bold">React.Js</h2>
                <h3 className="w-full text-center text-[1.5vw] opacity-50">Javascript Library</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="banner bg-[#1C1C1C] h-[10vh] w-full flex flex-row justify-between items-center text-[3vw] px-[2vw]">
            <div className="flex flex-row gap-[1vw]">
              {" "}
              <span className=" text-[#8CFF2E]">8+</span>
              <span className="text-white">years of experience</span>
            </div>
            <span className=" text-[#8CFF2E]">
              <PiAsterisk />
            </span>
            <div className="flex flex-row text-[3vw] gap-[1vw]">
              {" "}
              <span className=" text-[#8CFF2E]">{">95%"}</span>
              <span className="text-white">Client retention rate</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default page;
