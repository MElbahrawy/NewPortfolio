import React from "react";
import Marquee from "react-fast-marquee";
import Heading from "./Heading";

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
        <Heading title="Skills" />
        <div data-aos="flip-up">
          <p className="text-lg text-dark-light dark:text-white mb-3">
            I have a strong foundation in the following skills:
          </p>
          <Marquee
            pauseOnHover={true}
            speed={50}
            className="border-t-2 border-b-2 border-slate-300 dark:border-gray-600 "
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 p-10"
              >
                <img
                  src={skill.img}
                  alt={"icon8 website"}
                  className="size-16"
                />
                <p className="text-lg font-semibold text-dark-light dark:text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </Marquee>
          <p className="text-lg text-dark-light dark:text-white text-center my-3">
            {skills.map((skill, index) =>
              index === 0 ? (
                <span>{skill.name}</span>
              ) : (
                <span>, {skill.name}</span>
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
