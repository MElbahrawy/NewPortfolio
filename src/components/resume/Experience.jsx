import React from "react";
import ProgressCard from "../utilities/ProgressCard";
import Heading from "./Heading";

const Experience = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      jobDuration: "09/2024 - 04/2025",
      location: "Remote",
      description:
        "Worked alongside another React developer on multiple projects, including a job portal website, a beauty center website, and a hosting/server management company website. Developed new sections, completed frontend tasks, and optimized a travel assistance website.",
    },
    {
      title: "React Web Developer Internship",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      jobDuration: "06/2024 - 10/2024",
      location: "Hybrid, Egypt",
      description:
        "Enhanced soft skills, improved English proficiency, and expanded technical knowledge. Learned web development basics and developed full-stack applications using React.js, Node.js, and Express.",
    },
    {
      title: "React Native Development Internship",
      company: "Information Technology Institute (ITI)",
      jobDuration: "08/2022 - 09/2022",
      location: "Menofia, Egypt",
      description:
        "Utilized HTML, CSS, JavaScript, and React.js to build dynamic user interfaces. Presented the final project to stakeholders and received positive feedback on the UX.",
    },
  ];
  return (
    <div>
      <div className="my-24">
        <Heading title="Experience" />
        <div className="relative flex flex-col py-2">
          <div className="w-2 h-full rounded bg-main-light dark:bg-white absolute -left-4 md:left-1/2 md:transform md:-translate-x-1/2"></div>
          {jobs.map((job, index) => (
            <ProgressCard key={index} job={job} className="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
