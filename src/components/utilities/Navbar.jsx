import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const navs = [
        {
            name: "Home",
            path: "/",
            svg: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        },
        {
            name: "Resume",
            path: "/resume",
            svg: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
        },
        {
            name: "Portfolio",
            path: "/portfolio",
            svg: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
        },
        {
            name: "Contact",
            path: "/contact",
            svg: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
        },
    ];
    return (
        <div
            id="navbar"
            className="flex sm:bg-transparent bg-slate-900  rounded-3xl sm:flex-col py-5 px-4 gap-5 fixed bottom-4 sm:bottom-1/2 start-1/2 sm:start-0 -translate-x-1/2  sm:-translate-x-0 sm:translate-y-1/2  bg-opacity-60"
        >
            {navs.map((nav) => (
                <NavLink
                    to={nav.path}
                    key={nav.name}
                    className="relative text-red-400  group p-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={nav.svg}
                        />
                    </svg>
                    <span className="absolute text-lg font-bold transition-all duration-300 top-full opacity-0 group-hover:opacity-100 sm:top-1/2 start-1/2 sm:start-0 -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2  group-hover:-top-5 sm:group-hover:top-1/2 sm:group-hover:start-full ">
                        {nav.name}
                    </span>
                </NavLink>
            ))}
        </div>
    );
};

export default Navbar;
