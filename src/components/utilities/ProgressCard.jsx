import React from "react";

const ProgressCard = ({ edu, job, className }) => {
  return (
    <div className=" w-full mb-10 flex even:justify-end odd:justify-start  relative before:w-5 before:h-5 before:bg-main-light dark:before:bg-white before:rounded-full before:absolute before:-left-6 md:even:before:left-1/2 md:even:before:translate-x-[-50%] md:odd:before:left-1/2 md:odd:before:translate-x-[-50%] before:-top-1 before:z-10">
      <div className="bg-slate-100 dark:bg-gray-800 dark:text-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all w-full md:w-72 lg:w-2/5 hover:scale-105">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent mb-3">
          {edu ? edu.degree : job.title}
        </h3>
        {edu ? (
          edu.major && <h4 className="text-lg font-semibold">{edu.major}</h4>
        ) : (
          <h4 className="text-lg font-semibold">{job.company}</h4>
        )}
        <div className="flex items-baseline justify-between gap-2">
          {edu?.institution ||
            (job?.location && (
              <h5 className="text-md">
                {edu ? edu.institution : job.location}
              </h5>
            ))}
          <p className="text-xs text-gray-400 ">
            {edu ? edu.duration : job.jobDuration}
          </p>
        </div>
        <p className="text-sm mt-5">{job?.description}</p>
      </div>
    </div>
  );
};

export default ProgressCard;
