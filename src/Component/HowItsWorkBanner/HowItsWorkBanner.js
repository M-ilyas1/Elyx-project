import React from 'react'
import Button from "../Button/Button";
import Img from "../../images/HowItsWorkBanner.png";

export default function HowItsWorkBanner() {
  return (
    <div className="w-[100%] flex">
        <div className="w-[55%] flex flex-wrap justify-end items-center bg-white">
          <div className="w-[80%] bg-white">
            <h1 className="text-[48px] font-bold">
              How It <span className="text-blue-600">Work</span>
            </h1>
            <p className="text-[20px] leading-[30px] mt-[15px] pr-10">
            ElyX’s knowledgeable community of more than 450,000 users and over 200,000 registered bidders vets each listing so potential buyers can bid with confidence.
            </p>
            <div className="mt-10">
              <Button
                label="Browse Auction"
                height={"h-[72px]"}
                width={"w-[224px]"}
                variants="primary"
              />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Img})` }}
          className="w-[45%] h-[80vh] bg-cover"
        ></div>
      </div>
  )
}
