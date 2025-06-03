import React from "react";

const Summary = () => {
  const obj = {
    address: "Jersey City, NJ",
    phone: "+201151245412",
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
      <h1 className="text-2xl pt-14 font-bold text-center uppercase dark:text-white mb-10">
        Summary
      </h1>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-10 items-center">
        <div className=" text-center lg:text-left">
          <h2 className="text-3xl  uppercase font-bold mb-5 text-main">
            Mohamed Alaa El-Deen El-Bahrawy
          </h2>
          <p className="dark:text-white ">
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
          <div className="w-3/4 mx-auto font-mono rounded-lg shadow-lg bg-gray-800 text-white hover:scale-110 transition">
            <div className="w-full flex gap-3 border-b-2 border-gray-600 p-2">
              <span className="size-3 rounded-full bg-red-600"></span>
              <span className="size-3 rounded-full bg-orange-600"></span>
              <span className="size-3 rounded-full bg-green-600"></span>
            </div>
            <div className="p-4 break-words">
              <p className=" mb-2">
                <span className="text-pink-700">Age:</span>{" "}
                {new Date().getFullYear() - 2002};
              </p>
              <p className=" mb-2">
                <span className="text-pink-700">Address:</span> {obj.address};
              </p>
              <p className=" mb-2">
                <span className="text-pink-700">Phone:</span> {obj.phone};
              </p>
              <p className=" mb-2">
                <span className="text-pink-700">Email:</span> {obj.email};
              </p>
              <p className=" mb-2">
                <span className="text-pink-700">Soft Skills:</span> [{" "}
                {obj.softSkills.join(", ")} ];
              </p>
              <p className=" mb-2">
                <span className="text-pink-700">Hard Skills:</span> [{" "}
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
