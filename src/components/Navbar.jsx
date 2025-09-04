import { useEffect, useState } from "react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "animate.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsFaded(true);
      } else {
        setIsScrolled(false);
        setIsFaded(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "bg-[#141414] animate__animated animate__fadeIn"
          : "bg-[#14141400] animate__animated animate__fadeIn"
      } fixed w-screen top-0 z-10   text-white`}
    >
      <div className=" relative flex items-center justify-between">
        {/**partie a gauche */}

        <div className=" flex px-3  left-0 ">
          <img className="w-36" src={logo} alt="" />
          <ul className="hidden md:flex justify-center items-center space-x-3 ml-5 text-xs font-semibold">
            <li>Accueil </li>
            <li>Films</li>
            <li>Jeux</li>
            <li>Nouveautés les plus regardées </li>
            <li>Ma liste</li>
            <li>Explorer Par langue</li>
            <li></li>
          </ul>
          {/**mobile version */}
          <ul className="flex justify-center items-center md:hidden ml-5 text-xs">
            Parcourir
            <span className="text-2xl">
              <MdOutlineArrowDropDown />
            </span>
          </ul>
        </div>
        {/**partie a droite */}
        <div className="relative flex px-3 mt-2 mr-4 justify-end space-x-1.5 text-xl ">
          <div className="flex space-x-3.5">
            <span>
              {" "}
              <FaMagnifyingGlass />
            </span>
            <span>
              <FaRegBell />
            </span>
            <span>
              <MdInsertPhoto />
            </span>
          </div>
          <span className="hidden md:flex">
            <MdOutlineArrowDropDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
