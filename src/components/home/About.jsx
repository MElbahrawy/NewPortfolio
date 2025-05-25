import React from "react";
import avatar from "../../assets/avatar2.webp";
import SocialMedia from "../utilities/SocialMedia";
const About = () => {
  return (
    <div className="flex flex-wrap-reverse sm:grid-cols-2 justify-between items-center gap-10 mb-10 sm:mb-40">
      <div className=" transition duration-300 w-3/4 sm:w-48 md:w-64 lg:w-1/4 aspect-square mx-auto shadow-lg hover:shadow-sm shadow-neutral-900 hover:shadow-red-400 rounded-lg overflow-hidden">
        {" "}
        <img src={avatar} className="w-full object-cover rounded" alt="" />
      </div>
      <h1 className="w-full sm:w-1/2 text-xl sm:text-sm md:text-xl  dark:text-white">
        <span className="font-bold text-red-400 text-2xl uppercase">
          Who am i?
        </span>{" "}
        <br />
        I'm enthusiastic Junior Frontend Developer with a strong foundation in
        frontend basics and technologies and a passion for creating engaging
        user interfaces. Eager to contribute to dynamic projects and expand my
        skills in a collaborative team environment and learn and share my ideas.
        A quick learner and thirst for knowledge and, I embrace challenges as
        opportunities for growth, and I am eager to leverage my skills to create
        outstanding user experiences while continuously expanding my technical
        expertise.
        <SocialMedia />
      </h1>
    </div>
  );
};

export default About;
