import React from "react";

function Navbar() {
  return (
    <nav
      className=" w-screen h-[10vh] flex flex-row justify-around items-center px-[3vw] bg-transparent text-[1vw] z-50 relative"
      style={{
        borderBottom: "1px solid gray",
      }}
    >
      <div className=" flex flex-row w-1/4 justify-between">
        <h2>Projects</h2>
        <h2>About & Contact</h2>
      </div>
      <div className="flex flex-row w-[30%] justify-around items-center">
        <span>Email : sanith.s74@gmail.com</span>
        <button className=" bg-gray-900 p-[0.5vw] rounded-[2vw] text-white">
          <a href="mailto:varadaraj277@gmail.com">Contact me</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
