import React from "react";

const ProgressCard = ({ edu, job, className }) => {
  return (
    <div className=" w-full mb-10 flex even:justify-end odd:justify-start  relative before:w-5 before:h-5 before:bg-gray-800 dark:before:bg-white before:rounded-full before:absolute before:-left-6 md:even:before:left-1/2 md:even:before:translate-x-[-50%] md:odd:before:left-1/2 md:odd:before:translate-x-[-50%] before:-top-1 before:z-10">
      <div className="bg-gray-800 text-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all w-full md:w-72 lg:w-2/5 hover:scale-105">
        <h3 className="text-2xl font-bold mb-3">
          {edu ? edu.degree : job.title}
        </h3>
        {edu ? (
          edu.major && <h4 className="text-lg font-semibold">{edu.major}</h4>
        ) : (
          <h4 className="text-lg font-semibold">{job.company}</h4>
        )}
        {edu?.institution ||
          (job?.location && (
            <h5 className="text-lg">{edu ? edu.institution : job.location}</h5>
          ))}
        <p className="text-sm text-gray-400 mt-4">
          {edu ? edu.duration : job.jobDuration}
        </p>
        <p className="text-sm mt-2">{job?.description}</p>
      </div>
    </div>
  );
};

export default ProgressCard;
