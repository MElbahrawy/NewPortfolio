import React from "react";
import { twMerge } from "tailwind-merge";
const Heading = ({ title = "title", className }) => {
  return (
    <h1
      className={twMerge(
        `text-4xl text-gray-400 opacity-60 tracking-widest pt-14 font-bold text-center uppercase dark:text-white mb-10 `,
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
