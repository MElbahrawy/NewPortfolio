import React from "react";

const Footer = () => {
    return (
        <div className="text-center border-t-2 border-slate-400 py-2 dark:text-white">
            Copyright © {new Date().getFullYear()} Mohamed El Bahrawy
        </div>
    );
};

export default Footer;
