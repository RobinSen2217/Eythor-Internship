import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu,logo,logoName  } from "../assets";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";


function Sidebar({ open, setOpen, navBg }) {
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div>
      <nav id="nav" className="top-0 fixed shadow-md shadow-slate-400 z-10">
        <div
          style={{ backgroundColor: `var(--${navBg})` }}
          className={`flex flex-col  justify-between pb-14 h-screen ${
            open ? "w-[210px]" : "w-[64px]"
          } transition-all duration-500 delay-[25ms] text-gray-100 px-4`}
        >
          <div>
            <div
              className={`py-3 flex flex-nowrap  items-center `}
            >
             
              <div className=" text-nowrap">
               <img
                  src={logo}
                 
                  alt="Logo"
                  className="inline w-10  mx-auto"
                />
                <img
                 src={logoName}
                  // style={{
                  //   transitionDelay: `${2}00ms`,

                  // }}
                  className={`inline ml-3 transition-all duration-300 ${
                    !open && "opacity-0 translate-x-24"
                  }`}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4 justify-between relative">
            <RxHamburgerMenu
                size={26}
                className="cursor-pointer text-black "
                onClick={() => setOpen(!open)}
              />
              {navLinks.slice(0,4).map((link, i) => (
              <Link
                to={link.link}
                key={i}
                className={` ${
                  link.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium py-1  ${
                  open ? " pl-1 " : "pl-0"
                } transition-[padding] duration-500 text-black hover:text-sky-500 rounded-md`}
              >
                <div>{React.createElement(link.icon, { size: "26" })}</div>
                <h2
                  className={`whitespace-pre text-md duration-300 ${
                    !open && "opacity-0 translate-x-24 overflow-hidden"
                  }`}
                >
                  {link.name}
                </h2>

                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-20 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-10 group-hover:duration-300 group-hover:w-fit `}
                >
                  {link.name}
                </h2>

              </Link>
            ))}
            </div>
          </div>

          <div >
            {navLinks.slice(4).map((link, i) => (
             <Link
             to={link.link}
             key={i}
             className={` ${
               link.margin && "mt-5"
             } group flex items-center text-sm py-3 gap-3.5 font-medium   ${
               open ? " pl-1 " : "pl-0"
             } transition-[padding] duration-500 text-black hover:text-sky-500 rounded-md`}
           >
             <div>{React.createElement(link.icon, { size: "26" })}</div>
             <h2
               className={`whitespace-pre text-md duration-300 ${
                 !open && "opacity-0 translate-x-24 overflow-hidden"
               }`}
             >
               {link.name}
             </h2>


                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-20 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
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
