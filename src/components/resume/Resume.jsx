import React from "react";
import Education from "./Education";
import Summary from "./Summary";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="min-h-[calc(100vh-118px)]">
      <Summary />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
};

export default Resume;
