import React from "react";
import ProgressCard from "../utilities/ProgressCard";
import Heading from "./Heading";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      major: "Computer Science and Engineering",
      institution: "Menofia University",
      duration: "2019 - 2024",
    },
    {
      degree: "High School",
      institution: "Benha Secondary for boys school",
      duration: "2019 - 2016",
    },
  ];
  return (
    <div className="my-24">
      <Heading title="Education" />
      <div className="relative flex flex-col py-2">
        <div className="w-2 h-full rounded bg-main-light dark:bg-white absolute -left-4 md:left-1/2 md:transform md:-translate-x-1/2"></div>
        {education.map((edu, index) => (
          <ProgressCard
            key={index}
            dir={index % 2 === 0 ? "fade-right" : "fade-left"}
            edu={edu}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
