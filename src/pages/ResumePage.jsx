import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/utilities/PageTitle";
import Developing from "../components/utilities/Developing";
import Resume from "../components/resume/Resume";
const ResumePage = () => {
  const { t } = useTranslation("resumePage");
  console.log(t("title"));

  return (
    <div className="">
      <PageTitle title={t("title")} />
      <div className="mx-14">
        {/* <Developing /> */}
        <Resume />
      </div>
    </div>
  );
};

export default ResumePage;
