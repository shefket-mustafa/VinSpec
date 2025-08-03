import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { bannerData } from "../../mockData/mockData";

export default function HeroBanner2() {

   

    const [bannerUrl, setBannerUrl] = useState(bannerData.images);
    const keys = Object.keys(bannerData) as (keyof typeof bannerData)[];
    const [mobileArrowIndex, setMobileArrowIndex] = useState(0);

    const goLeft = () => {
        const newIndex = mobileArrowIndex === 0 ? keys.length - 1 : mobileArrowIndex - 1;
        setMobileArrowIndex(newIndex);
        setBannerUrl(bannerData[keys[newIndex]]);
    };
    const goRight = () => {
        const newIndex = mobileArrowIndex === keys.length - 1 ? 0 : mobileArrowIndex + 1;
        setMobileArrowIndex(newIndex);
        setBannerUrl(bannerData[keys[newIndex]]);
    };

    const bannerUrlHandler = (key: keyof typeof bannerData) => {
        setBannerUrl(bannerData[key])
    };

  return (
    <>
    <div className="flex flex-col md:flex-row gap-10 py-10 h-60 items-center px-10 md:px-25">

      <div className=" w-full md:flex flex-col justify-center items-center gap-5">
        {/* Heading text */}
        <h1 className=" text-4xl font-bold md:text-5xl">What do we check for in the report?</h1>
        <p className="text-sm py-3">
        VinSpec is the largest online database for used vehicles, containing over one billion data entries from around the world.
        </p>
      </div>


    </div>

        {/* Second part of banner */}
    <div className="md:px-25 ">
        {/* Image buttons */}
        <div className="hidden md:flex gap-10 items-center font-light justify-center py-15 ">
            <button onClick={() => bannerUrlHandler('images')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Recorded images</button>
            <button onClick={() => bannerUrlHandler('damages')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Damages</button>
            <button onClick={() => bannerUrlHandler('odometer')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Odometer Rollbacks</button>
            <button onClick={() => bannerUrlHandler('specifications')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Specifications and equipment</button>
            <button onClick={() => bannerUrlHandler('marketValue')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Market value</button>
            <button onClick={() => bannerUrlHandler('safety')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Safety Records</button>
            <button onClick={() => bannerUrlHandler('disaster')} className="border-1 border-gray-300 cursor-pointer hover:bg-gray-300 transform transition  px-3 py-1 rounded-2xl">Natural Disasters</button>
        </div>

        <div className="bg-cyan-50 flex flex-col rounded-lg md:flex-row justify-center items-center relative">
  {/* Image with text */}
  <div className="w-full md:w-1/2 h-96 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${bannerUrl.url})` }}></div>

   {/* Arrows (only visible on mobile) */}
   <div className="md:hidden flex justify-center gap-10 mt-6">
          <button
            onClick={goLeft}
            className="px-4 py-2 rounded-full text-xl bg-white hover:bg-gray-200"
            >
            <FaArrowLeft />
          </button>
          <button
            onClick={goRight}
            className="px-4 py-2 rounded-full text-xl bg-white hover:bg-gray-200"
            >
            <FaArrowRight />
          </button>
        </div>
              {/* Description */}
  <div className="md:w-1/2 flex justify-center items-center px-4">
    <p className="font-light max-w-80 py-10 text-center md:text-left">{bannerUrl.text}</p>
  </div>
 
</div>
</div>
    </>
  );
}
