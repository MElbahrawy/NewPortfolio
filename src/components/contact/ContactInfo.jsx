import React from "react";
import SocialMedia from "../utilities/SocialMedia";

const ContactInfo = () => {
  return (
    <div className="">
      <h1 className=" text-3xl font-bold bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent uppercase">
        Let's Work Together!
      </h1>
      <p className=" my-4 dark:text-white">
        If you have any questions or concerns, please don't hesitate to contact
        me. I am open to any work opportunities that align with my skills and
        interests.
      </p>
      <SocialMedia />
    </div>
  );
};

export default ContactInfo;
