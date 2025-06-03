import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    { name: "HTML5", img: "https://img.icons8.com/color/96/html-5--v1.png" },
    { name: "CSS3", img: "https://img.icons8.com/color/96/css3.png" },
    {
      name: "Responsive Design",
      img: "https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Responsive-Design-seo-and-marketing-vectorslab-flat-vectorslab.png",
    },
    {
      name: "JavaScript ",
      img: "https://img.icons8.com/color/96/javascript--v1.png",
    },
    {
      name: "Bootstrap",
      img: "https://img.icons8.com/fluency/96/bootstrap.png",
    },
    { name: "ReactJs", img: "https://img.icons8.com/officel/80/react.png" },
    {
      name: "Redux Toolkit",
      img: "https://img.icons8.com/color/96/redux.png",
    },
    {
      name: "Material UI",
      img: "https://img.icons8.com/color/96/material-ui.png",
    },
    { name: "RESTful API", img: "https://img.icons8.com/cotton/100/api.png" },
    {
      name: "Tailwind",
      img: "https://img.icons8.com/color/96/tailwindcss.png",
    },
  ];
  return (
    <div>
      <div className="my-24">
        <h1 className="text-2xl pt-14 font-bold text-center uppercase dark:text-white mb-10">
          Skills
        </h1>
        <Marquee
          pauseOnHover={true}
          speed={50}
          className="border-t-2 border-b-2 border-gray-600 "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2 p-10"
            >
              <img src={skill.img} alt={"icon8 website"} className="size-16" />
              <p className="text-lg font-semibold dark:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
