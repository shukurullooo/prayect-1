import React from "react";
import homeBg from "../../assets/home.svg";
import Range from "./brauseTheRange/Range";
import OurPradacts from "./OurPradacts/OurPradacts";

const Home = () => {
  return (

    <>
    <div className="relative w-full container mx-auto">
      <img src={homeBg} alt="Home background" className="w-full h-auto mt-5" />

      <div
        className="
          absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2 
          z-10 
          w-[80%] sm:w-[440px] md:w-[550px] lg:w-[663px]
          
          sm:py-8
          rounded-[10px] 
          bg-white/70 
          text-center
        "
      >
        <p className="font-semibold text-sm sm:text-base leading-none tracking-widest mb-4">
          New Arrival
        </p>

        <p className="font-bold text-[28px] sm:text-[40px] md:text-[52px] leading-[36px] sm:leading-[50px] md:leading-[65px] text-[#B88E2F] mb-4">
          Discover Our <br /> New Collection
        </p>

        <p className="font-medium text-sm sm:text-base md:text-[18px] leading-[20px] sm: text-[#333333] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <button className="w-[160px] sm:w-[180px] md:w-[222px] h-[54px] sm:h-[64px] md:h-[74px] font-medium text-sm sm:text-[16px] md:text-[18px] bg-[#B88E2F] text-white rounded">
          BUY NOW
        </button>
      </div>
    </div>
    <Range/>

    <OurPradacts/>




    </>


  );
};

export default React.memo(Home);
