import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/utilities/PageTitle";
import Developing from "../components/utilities/Developing";
import Contact from "../components/contact/Contact";
const ContactPage = () => {
  const { t } = useTranslation("contactPage");
  console.log(t("title"));

  return (
    <div className="">
      <PageTitle title={t("title")} />
      <div className="mx-14 ">
        {/* <Developing /> */}
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
