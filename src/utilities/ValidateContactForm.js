import i18next from "i18next";

const ValidateForm = (form) => {
  const lang = i18next.language;
  const errMsgs = {
    en: {
      name: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email address",
      message: "Message is required",
    },
    ar: {
      name: "يجب إدخال الاسم",
      emailRequired: "يجب إدخال البريد الإلكتروني",
      emailInvalid: "عنوان البريد الإلكتروني غير صالح",
      message: "يجب إدخال الرسالة",
    },
  };
  const selectedMessages = errMsgs[lang];

  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form.name === "") {
    errors.name = selectedMessages.name;
  }
  if (form.email === "") {
    errors.email = selectedMessages.emailRequired;
  } else if (!emailRegex.test(form.email)) {
    errors.email = selectedMessages.emailInvalid;
  }
  if (form.message === "") {
    errors.message = selectedMessages.message;
  }
  return errors;
};
export default ValidateForm;
