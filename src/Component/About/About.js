import React from "react";
import Button from "../Button/Button";
import Img from "../../images/About.png";

export default function HeroBanner1() {

  return (
    <div>
      <div className="w-[100%] flex">
        <div className="w-[55%] flex flex-wrap justify-end items-center bg-white">
          <div className="w-[80%] bg-white">
            <h1 className="text-[48px] font-bold">
              About <span className="text-blue-600">ElyX’s</span>
            </h1>
            <p className="text-[20px] leading-[30px] mt-[15px]">
            ElyX Auctions are the best way to buy and sell classic, collector, and enthusiast vehicles.<br/><br/> ElyX’s knowledgeable community of more than 450,000 users and over 200,000 registered bidders vets each listing so potential buyers can bid with confidence.
            </p>
            <div className="mt-5">
              <Button
                label="PLACE BID"
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
    </div>
  );
}
