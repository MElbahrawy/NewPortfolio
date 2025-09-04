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
      <div data-aos="fade-right">
        <h1 className="text-3xl sm:text-4xl md:text-5xl ">
          Hello, This is
          <br />
          <span className="text-transparent bg-gradient-to-r from-main via-secondary to-main bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold">
            Mohamed El Bahrawy
          </span>{" "}
          <br />a{" "}
          <TypeAnimation
            sequence={text}
            className="text-transparent bg-gradient-to-r from-main to-secondary bg-clip-text text-2xl sm:text-5xl md:text-6xl font-bold"
            repeat={Infinity}
          />
        </h1>
        <a
          href="https://drive.google.com/file/d/1TqdfWNwQVyjPc-o_QZBfH9KBp68aDQZD/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" bg-gradient-to-r from-main to-secondary rounded text-white text-start py-2 px-6 mt-4 hover:to-secondary-dark transition">
            Get CV{" "}
            <img
              width="24"
              height="24"
              className="ml-2 inline-block"
              src="https://img.icons8.com/material-rounded/24/ffffff/download--v1.png"
              alt="download--v1"
            />
          </button>
        </a>
      </div>
      <div
        // data-aos="fade-down"
        className="sm:col-span-1 transition duration-300  aspect-square mx-auto  rounded-lg overflow-hidden"
      >
        {" "}
        <img src={landing} className="w-full object-contain rounded" alt="" />
      </div>
    </div>
  );
};

export default Landing;
