import React from "react";
import bg from "../assets/verte-1.svg";
import card from "../assets/gumball-card.png";
import titre from "../assets/logo-lv.svg";
import n from "../assets/n-films.png";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const Home = () => {
  return (
    <div
      className="relative flex items-center bg-cover bg-center h-screen  "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-100  "></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414]  "></div>
      {/* Contenu au dessus du bg*/}
      <div className="flex flex-col justify-center space-y-6 z-10 h-screen">
        <img className="  w-92 ml-12 h-auto" src={titre} alt="title" />

        {/*Ecriture en dessous du titre*/}
        <div className="  absolute  ml-26 text-xl text-gray-50 ">
          <div className="hidden">
            <span className="block">
              Lorqu'il découvre qu'un condammé à mort possède de mystérieux
            </span>
            <span className="block">
              pouvoirs, un gardien de prison essaie désespérément d'empêcher
            </span>
            <span className="block">son exécution</span>
          </div>

          {/*boutton */}

          <div className="  grid grid-cols-2 space-x-3">
            <button className=" flex items-center justify-center p-3 text-black  bg-gray-200 font-semibold rounded-sm">
              <FaPlay />
              Lecture
            </button>
            <button className=" flex items-center justify-center p-3 bg-[#4C4C4D] font-semibold text-white rounded-sm ">
              <IoIosInformationCircleOutline />
              Plus d'infos
            </button>
          </div>
        </div>
        {/*dessous des boutons*/}

        <div className="flex items-center  ml-26  space-y-5 text-gray-50">
          <div className="grid grid-cols-1">
            <span className="text-xl font-semibold mb-3">
              Reprendre avec le profil User1
            </span>

            <div className=" grid grid-cols-7 space-x-4">
              <img className="" src={card} alt="gumball" />
              <img className="" src={card} alt="gumball" />
              <img className="" src={card} alt="gumball" />
              <img className="" src={card} alt="gumball" />
              <img className="" src={card} alt="gumball" />
              <img className="" src={card} alt="gumball" />
              <img className="" src={card} alt="gumball" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
