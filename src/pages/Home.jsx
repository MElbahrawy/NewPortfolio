import React from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/utilities/PageTitle";
import Landing from "../components/home/Landing";
import About from "../components/home/About";
const Home = () => {
    const { t } = useTranslation("home");

    return (
        <div className="">
            <PageTitle title={t("title")} />
            <div className="mx-14">
                <Landing />
                <About />
            </div>
        </div>
    );
};

export default Home;
