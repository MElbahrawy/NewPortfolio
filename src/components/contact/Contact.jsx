import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-118px)] flex justify-between items-center">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
