import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import Card from "./Card";
import ReviewCard from "../ReviewCard/ReviewCrad";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1 - totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((nextSlide) => (nextSlide - 1 + totalSlides) %567890- totalSlides);
  };

  return (
    <div className="bg-[#F8F8FF]">
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
          <div className="flex flex-wrap justify-center gap-5">
            <ReviewCard />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        {[...Array(totalSlides)].map((_, index) => (
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
  );
}

export default Carousel;




