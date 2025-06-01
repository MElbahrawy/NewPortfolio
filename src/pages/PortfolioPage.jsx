import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/utilities/PageTitle";
import Developing from "../components/utilities/Developing";
import Portfolio from "../components/portfolio/Portfolio";
const PortfolioPage = () => {
  const { t } = useTranslation("portfolioPage");

  return (
    <div className="">
      <PageTitle title={t("title")} />
      <div className="mx-14">
        {/* <Developing /> */}
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioPage;
