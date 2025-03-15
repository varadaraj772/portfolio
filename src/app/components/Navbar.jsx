import React from "react";

function Navbar() {
  return (
    <nav className=" w-screen h-[10vh] flex flex-row justify-around items-center px-[3vw] bg-transparent text-[1vw] z-50 relative" style={{
        borderBottom: "1px solid gray"
    }}>
      <div className=" flex flex-row w-1/4 justify-between">
        <h2>Projects</h2>
        <h2>About & Contact</h2>
      </div>
      <div className="flex flex-row w-[30%] justify-around items-center">
        <a href="mailto:varadaraj277@gmail.com">
          Email : varadaraj277@gmail.com
        </a>
        <button className=" bg-gray-900 p-[0.5vw] rounded-[2vw] text-white">
          Contact me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
