import React from "react";
import landing from "../../assets/landing.svg";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  const text = [
    "Frontend Developer",
    1000,
    "Web Developer",
    500,
    "React developer",
    1000,
  ];
  return (
    <div className="grid min-h-[calc(100vh-76px)] grid-cols-1 sm:grid-cols-2 justify-between items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  dark:text-white">
        Hello, <br />
        This is{" "}
        <span className="text-red-400 font-bold">Mohamed El Bahrawy</span> , I'm
        a <br />{" "}
        <TypeAnimation
          sequence={text}
          className="text-red-400 font-bold"
          repeat={Infinity}
        />
      </h1>
      <div className="sm:col-span-1 transition duration-300  aspect-square mx-auto  rounded-lg overflow-hidden">
        {" "}
        <img src={landing} className="w-full object-contain rounded" alt="" />
      </div>
    </div>
  );
};

export default Landing;
