import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-118px)] grid grid-cols-1 sm:grid-cols-2 justify-between items-center py-10 gap-10">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
