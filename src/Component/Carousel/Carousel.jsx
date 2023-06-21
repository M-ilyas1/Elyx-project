import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReviewCard from "../ReviewCard/ReviewCrad";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => {
      const numSlides = 5;
      return (prevSlide + numSlides - 1) % numSlides;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const numSlides = 5;
      return (prevSlide + 1) % numSlides;
    });
  };

  return (
    <div className="bg-gray-100 ">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold mt-5 text-2xl">What our clients say</h1>
        </div>

        <div className="mr-10">
          <button onClick={previousSlide}>
            <BsArrowLeftShort className="border-2 border-blue-700 w-[48px] h-[48px] p-1 text-4xl rounded-[100px] hover:bg-blue-700 hover:text-white hover:cursor-pointer m-1" />
          </button>
          <button onClick={nextSlide} type="button">
            <BsArrowRightShort className="border-2 border-blue-700 w-[48px] h-[48px] p-1 text-4xl rounded-[100px] hover:bg-blue-700 hover:text-white hover:cursor-pointer m-1" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition"
          style={{
            transform: `translateX(-${currentSlide * 24.5}%)`,
          }}
        >
          {[0, 1, 2, 3,].map((index) => (
            <div key={index} className="flex">
              <ReviewCard />
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-10 pt-5 ">
          {[0, 1, 2, 3,].map((index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentSlide ? "bg-blue-700" : "bg-gray-400 bg-"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
