import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "./locales/i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Navbar from "./components/utilities/Navbar";
import DarkBtn from "./components/utilities/DarkBtn";
import Footer from "./components/utilities/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      anchorPlacement: "center-bottom",
    });
    const theme = localStorage.getItem("isDark");
    theme !== null && setIsDark(theme === "true" ? true : false);
  }, []);

  const handleDarkMode = (value) => {
    setIsDark(value);
    localStorage.setItem("isDark", value);
  };

  useEffect(() => {
    // تغيير اتجاه الصفحة بناءً على اللغة
    if (i18n.language === "ar") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [i18n.language]);

  return (
    <div className={`App ${isDark && "dark"}`}>
      <div className="bg-white text-dark dark:bg-dark dark:text-light z-10 relative">
        <DarkBtn isDark={isDark} setIsDark={handleDarkMode} />
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
