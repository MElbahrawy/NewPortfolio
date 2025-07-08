import React, { useState } from "react";
import ValidateForm from "../../utilities/ValidateContactForm";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const contactData = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter Your Name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Your Email",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Enter Your Message here",
    },
  ];
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    setErrors({});
    e.preventDefault();
    const response = ValidateForm(form);
    if (Object.keys(response).length === 0) {
      sendEmail();
    } else {
      setErrors(response);
    }
  };

  const sendEmail = () => {
    emailjs
      .send("service_n7ticw2", "template_34gdr0a", form, {
        publicKey: "lhLR1wR7UknVVm8ju",
      })
      .then(
        () => {
          notify();
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert(error);
        }
      );
  };
  const notify = () =>
    toast("I got your message!, I will contact you soon.", {
      theme: "dark",
    });
  return (
    <div
      data-aos="flip-right"
      className=" bg-slate-100 dark:bg-gray-900 p-4 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-main-light">
        Get in Touch
      </h2>
      <form action="">
        {contactData.map((data) =>
          data.type === "textarea" ? (
            <div key={data.name}>
              <label
                htmlFor={data.name}
                className="mb-2 font-bold block text-dark-light dark:text-white"
              >
                {data.label}
              </label>
              <div>
                <textarea
                  name={data.name}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  id={data.name}
                  placeholder={data.placeholder}
                  cols="10"
                  rows="5"
                  className="w-full p-2 block rounded  dark:bg-gray-800 outline-none focus:border-b-2 focus:border-gray-400 dark:text-white "
                ></textarea>
              </div>
              {errors[data.name] && (
                <p className="text-red-500 mt-2 text-sm">{errors[data.name]}</p>
              )}
            </div>
          ) : (
            <div key={data.name} className="my-6">
              <label
                htmlFor={data.name}
                className="mb-2 font-bold block text-dark-light dark:text-white"
              >
                {data.label}
              </label>
              <div>
                <input
                  type={data.type}
                  value={form[data.name]}
                  onChange={(e) =>
                    setForm({ ...form, [data.name]: e.target.value })
                  }
                  name={data.name}
                  id={data.name}
                  placeholder={data.placeholder}
                  className="w-full p-2 block rounded  dark:bg-gray-800 outline-none  focus:border-b-2 focus:border-gray-400 dark:text-white "
                />
              </div>
              {errors[data.name] && (
                <p className="text-red-500 mt-2 text-sm">{errors[data.name]}</p>
              )}
            </div>
          )
        )}
        <button
          className="bg-gradient-to-r from-main-light to-secondary-light  w-full my-5 hover:from-main hover:to-secondary transition text-white py-3 px-4 rounded"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
