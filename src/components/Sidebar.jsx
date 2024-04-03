import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, logo, logoName } from "../assets";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";


function Sidebar({ open, setOpen, navBg }) {
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div>
      <nav id="nav" className="top-0 fixed shadow-md shadow-slate-400 z-10 ">
        <div
          style={{ backgroundColor: `var(--${navBg})` }}
          className={`flex flex-col justify-between py-6 h-screen ${open ? "w-[210px]" : "w-[64px]"} transition-all duration-500 delay-[25ms] text-gray-100 px-4 overflow-hidden`}
        >
          <div>
            <div
              className={`py-3 flex  items-center overflow-hidden`}
            >
                <img
                  src={logo}
                  alt="Logo"
                  className=" w-8 "
                />
                <div className={` ml-3 transition-all w-[100px] scale-100 ease-in-out duration-300 flex-shrink-0 ${!open ?"opacity-0 ":"opacity-100 "}`}>
                <img
                 src={logoName}
                 className=""
                />
                </div>
            </div>
            <div className="mt-4 flex flex-col   gap-4 justify-between ">
              <RxHamburgerMenu
                size={32}
                className="cursor-pointer text-black "
                onClick={() => setOpen(!open)}
              />
              {navLinks.slice(0, 4).map((link, i) => (
                <Link
                  to={link.link}
                  key={i}
                  className={` ${link.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-medium py-1  transition-[padding] duration-500 text-black hover:text-sky-500 rounded-md `}
                >
                  <div className="flex justify-center ">
                    <link.icon size={32} />
                  </div>
                  <h2
                    className={`whitespace-pre text-md duration-300 ${!open && "opacity-0  overflow-hidden"}`}
                  >
                    {link.name}
                  </h2>

                  <h2
                    className={`${open && "hidden"} absolute left-20 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                  >
                    {link.name}
                  </h2>

                </Link>
              ))}
            </div>
          </div>

          <div  className="flex flex-col   gap-4 justify-between ">
          {navLinks.slice(4).map((link, i) => (
                <Link
                  to={link.link}
                  key={i}
                  className={` ${link.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-medium py-1  transition-[padding] duration-500 text-black hover:text-sky-500 rounded-md `}
                >
                  <div className="flex justify-center ">
                    <link.icon size={32} />
                  </div>
                  <h2
                    className={`whitespace-pre text-md duration-300 ${!open && "opacity-0  overflow-hidden"}`}
                  >
                    {link.name}
                  </h2>

                  <h2
                    className={`${open && "hidden"} absolute left-20 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                  >
                    {link.name}
                  </h2>

                </Link>
              ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
