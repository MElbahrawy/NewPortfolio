import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, tools, article, live, github, img } = project;

  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100  h-80 dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg relative group"
    >
      <div className="h-full w-full bg-black">
        <img
          src={img}
          className="w-full h-full object-cover object-top filter group-hover:blur-sm"
          alt=""
        />
      </div>
      <div className="absolute flex gap-1  text-white transition-all duration-300 -top-40 group-hover:top-5 right-5 ">
        {live && (
          <a
            href={live}
            target="_blank"
            className="bg-black bg-opacity-50 p-1 rounded"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="bg-black bg-opacity-50 p-1 rounded"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        {article && (
          <a
            href={article}
            target="_blank"
            className="bg-black bg-opacity-50 p-1 rounded"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                clipRule="evenodd"
              />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
          </a>
        )}
      </div>
      <div className="absolute transition-all duration-300 bg-slate-300 dark:bg-gray-800  dark:text-white  shadow-lg -bottom-48 group-hover:bottom-0 left-0 w-full p-2">
        <h2 className="text-xl font-bold mb-2">
          <a
            href={live ? live : article ? article : github ? github : ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <p className=" max-h-20 text-xs overflow-y-auto ">{description}</p>
        <div className="flex gap-1 items-center mt-4">
          {tools.map((tool, index) => (
            <p
              key={index}
              className="bg-main hover:bg-main-dark text-white text-[0.6rem] p-1 rounded"
            >
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
