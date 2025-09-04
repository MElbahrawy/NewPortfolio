import React from "react";
import "./PageTitle.css";
const PageTitle = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold relative flex justify-center pt-10 text-main ">
      <span className="">{title}</span>
      <span className="stroke text-5xl text-center font-black tracking-wide uppercase opacity-20 dark:opacity-10 -z-10 absolute top-2 start-1/2 -translate-x-1/2 ">
        {title}
      </span>
    </h1>
  );
};

export default PageTitle;
