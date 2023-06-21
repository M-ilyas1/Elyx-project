import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReviewCard from "../ReviewCard/ReviewCrad";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    setCurrentSlide(currentSlide => currentSlide === 0 ? -1 : currentSlide - 1);
  };

  const Next = () => {
    setCurrentSlide(currentSlide => currentSlide + 1);
  };

  return (
    <div>
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-bold mt-5 ml-4 text-2xl">What our clients say</h1>
        </div>

        <div className="mr-10">
          <button onClick={prev}>
            <BsArrowLeftShort className="border-2 border-blue-700 w-[48px] h-[48px] p-1 text-4xl rounded-[100px] hover:bg-blue-700 hover:text-white hover:cursor-pointer m-1" />
          </button>
          <button onClick={Next} type="button">
            <BsArrowRightShort className="border-2 border-blue-700 w-[48px] h-[48px] p-1 text-4xl rounded-[100px] hover:bg-blue-700 hover:text-white hover:cursor-pointer m-1" />
          </button>
        </div>
        
      </div>

      <div className="flex justify-evenly gap-">
            <ReviewCard/>

        </div>

      <div className="flex justify-center pb-10 pt-5">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentSlide ? "bg-blue-700" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}