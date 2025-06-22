import React from 'react'
import card from "@/assets/card.svg";


const Range = () => {
  return (
 <div className="container mx-auto mt-10 flex flex-col items-center gap-6 px-4">
  <div className="text-center mt-[56px]">
    <p className="font-bold text-[24px] sm:text-[28px] md:text-[32px]">
      Browse The Range
    </p>
    <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#666666] mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-6 mt-[40px] sm:mt-[50px] md:mt-[62px]">
    <div className="text-center w-[80%] sm:w-[45%] md:w-[30%]">
      <img src={card} alt="Dining" className="w-full h-auto rounded-md shadow-md" />
      <p className="font-semibold mt-[20px] text-[18px]">Dining</p>
    </div>
    <div className="text-center w-[80%] sm:w-[45%] md:w-[30%]">
      <img src={card} alt="Living" className="w-full h-auto rounded-md shadow-md" />
      <p className="font-semibold mt-[20px] text-[18px]">Living</p>
    </div>
    <div className="text-center w-[80%] sm:w-[45%] md:w-[30%]">
      <img src={card} alt="Bedroom" className="w-full h-auto rounded-md shadow-md" />
      <p className="font-semibold mt-[20px] text-[18px]">Bedroom</p>
    </div>
  </div>
</div>
  )
}

export default React.memo(Range)  