import React from "react";
import Heading from "./Heading";

const Summary = () => {
  const obj = {
    address: "Brooklyn, New York",
    phone: "+1 (347) 681-6076",
    email: "mohamedelbahrawy512@gmail.com",
    softSkills: [
      "Problem Solving",
      "Management Skills",
      "Time Management",
      "Collaboration",
      "Creativity",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "JavaScript (ES6, ECMAScript 6)",
      "Bootstrap",
      "ReactJs (React)",
      "Redux Toolkit",
      "Material UI",
      "RESTful API",
      "Tailwind",
    ],
  };
  return (
    <div className="mb-28">
      <Heading title="Summary" />
      <div
        className="grid grid-col-1 lg:grid-cols-2 gap-10 items-center"
        style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
      >
        <div className=" text-center lg:text-left">
          <h2
            data-aos="fade-down"
            className="text-2xl sm:text-3xl  uppercase font-bold mb-5 text-transparent bg-gradient-to-r from-main to-secondary bg-clip-text "
          >
            Mohamed Alaa El-Deen El-Bahrawy
          </h2>
          <p data-aos="fade-up" className="dark:text-white ">
            Junior Frontend Developer with hands-on experience in building and
            enhancing web applications using React.js, JavaScript (ES6), HTML5,
            CSS3, and Bootstrap. Passionate about creating responsive, user-
            friendly interfaces and optimizing website performance. Adept at
            collaborating with backend developers and UI/UX teams to deliver
            scalable, high-quality solutions. Strong problem-solving abilities,
            creativity, and time management skills, ensuring efficient
            development and timely project delivery.
          </p>
        </div>
        <div>
          <div
            data-aos="flip-up"
            className="w-3/4 mx-auto font-mono rounded-lg shadow-lg bg-slate-100 dark:bg-gray-800 text-white "
          >
            <div className="w-full flex gap-3 border-b-2 border-slate-300 dark:border-gray-600 p-2">
              <span className="size-3 rounded-full bg-red-600"></span>
              <span className="size-3 rounded-full bg-orange-600"></span>
              <span className="size-3 rounded-full bg-green-600"></span>
            </div>
            <div className="p-4 break-words text-dark dark:text-white">
              <p className=" mb-2">
                <span className="text-main-light">Age:</span>{" "}
                {new Date().getFullYear() - 2002};
              </p>
              <p className=" mb-2">
                <span className="text-main-light">Address:</span> {obj.address};
              </p>
              <p className=" mb-2">
                <span className="text-main-light">Phone:</span>{" "}
                <a
                  className="hover:text-main-dark transition"
                  href={`tel:${obj.phone}`}
                >
                  {obj.phone}
                </a>
                ;
              </p>
              <p className=" mb-2">
                <span className="text-main-light">Email:</span>{" "}
                <a
                  className="hover:text-main-dark transition"
                  href={`mailto:${obj.email}`}
                >
                  {obj.email}
                </a>
                ;
              </p>
              <p className=" mb-2">
                <span className="text-main-light">Soft Skills:</span> [{" "}
                {obj.softSkills.join(", ")} ];
              </p>
              <p className=" mb-2">
                <span className="text-main-light">Hard Skills:</span> [{" "}
                {obj.skills.slice(0, 3).join(", ")} ];
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
