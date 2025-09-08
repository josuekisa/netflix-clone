import { React, useState } from "react";
import bg from "../assets/verte-1.svg";
import card from "../assets/gumball-card.png";
import titre from "../assets/logo-lv.svg";
import n from "../assets/n-films.png";
import jojo from "../assets/jojo.png";
import cage from "../assets/cage.png";
import saul from "../assets/saul.png";
import brba from "../assets/brba.png";
import toxique from "../assets/toxique.png";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { SlArrowLeft } from "react-icons/sl";
const Home = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 10,
    },
    created() {
      setLoaded(true);
    },
  });

  const [loaded, setLoaded] = useState(false);

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
        <div className="  absolute  ml-22 text-xl text-gray-50 ">
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

        <div className="flex items-center  ml-22  space-y-5 text-gray-50">
          <div className="grid grid-cols-1">
            <span className="text-2xl font-semibold mb-3">
              Reprendre avec le profil User1
            </span>

            <div ref={sliderRef} className=" keen-slider     ">
              {loaded && instanceRef.current && (
                <SlArrowLeft
                  className="absolute w-32 left-0 top-1/2 -translate-y-1/2 z-60  text-red-600 p-2"
                  onClick={() => instanceRef.current?.prev()}
                />
              )}
              <img
                className="rounded-md  keen-slider__slide number-slide1 "
                src={toxique}
                alt="gumball"
              />
              <img
                className="rounded-md  keen-slider__slide number-slide2"
                src={cage}
                alt="gumball"
              />
              <img
                className="rounded-md  keen-slider__slide number-slide3"
                src={brba}
                alt="gumball"
              />
              <img
                className="rounded-md  keen-slider__slide number-slide4 "
                src={jojo}
                alt="gumball"
              />
              <img
                className="rounded-md keen-slider__slide  number-slide5 "
                src={saul}
                alt="gumball"
              />
              <img
                className="rounded-md keen-slider__slide number-slide6 "
                src={brba}
                alt="gumball"
              />
              <img
                className="rounded-md  keen-slider__slide number-slide "
                src={jojo}
                alt="gumball"
              />

              {/* Flèche droite */}
              {loaded && instanceRef.current && (
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2"
                  onClick={() => instanceRef.current?.next()}
                >
                  ➡️
                </button>
              )}
            </div>
          </div>
        </div>
        {/** afficeh films */}
      </div>
    </div>
  );
};

export default Home;
