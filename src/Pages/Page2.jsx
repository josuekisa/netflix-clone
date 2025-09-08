import React from "react";
import reum from "../assets/reum.png";

const Page2 = () => {
  return (
    <div className="  max-w-screen bg-[#141414] h-screen z-60 ">
      <h1 className="text-white text-2xl font-semibold ml-21  ">
        Top 10 des films aujourd'hui: France
      </h1>
      <div className=" flex items-start justify-center space-x-10 ml-12 mb-3">
        <img src={reum} alt="" />
        <img src={reum} alt="" />
        <img src={reum} alt="" />
        <img src={reum} alt="" />
        <img src={reum} alt="" />
      </div>
    </div>
  );
};

export default Page2;
