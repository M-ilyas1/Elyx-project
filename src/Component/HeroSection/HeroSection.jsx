import React, { useState, useEffect } from "react";
import Img from "../../images/imgcar.png";
import Button from "../Button/Button";
import TimeBtn from "./TimeBtn";

function HeroSection() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const startTimer = () => {
    const countDownDate = new Date("May 30,2024 ").getTime();

     setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        {
          alert("this is end");
        }
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <div className="flex justify-between w-full h-[100vh]">
        <div className="w-[75%] relative bg-[#353535]">
          <div className="w-[65%] items-center pl-20 pt-16 font-[Poppins] text-white">
            <h1 className="text-[48px] leading-[56px] mb-2">
              2014 Mercedes-Benz E350 4MATIC Wagon
            </h1>
            <p className="text-[20px] leading-[30px]">
              This 2014 Porsche Carrera GT is one of 1,270 examples built during
              a four-year production run and was delivered...
            </p>
            <div className="flex justify-between my-5 uppercase ">
              <div>
                <h3 className="text-[20px] leading-[18px]">Current bid :</h3>
                <h1 className="text-[#0C50CA] text-[36px] leading-[36px]">
                  $215,000
                </h1>
              </div>
              <div className="mr-28">
                <h3 className="text-[20px] leading-[18px]">City :</h3>
                <h1 className="text-[#0C50CA] text-[36px] leading-[36px] ">
                  Lexington, KY
                </h1>
              </div>
            </div>
            <div className="flex justify-between ">
              <TimeBtn
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              />
            </div>
            <Button
              label="PLACE BID"
              height={"h-[72px]"}
              width={"w-[224px]"}
              variants="primary"
            />
          </div>
        </div>
        <div className="absolute right-[7.2%] top-[24%] p-5 bg-gradient-to-r from-[#353535] from-[50%] to-[#0C50CA] to-[50%] opacity-[0.98] shadow-2xl">
          <img className="w-[440px] h-[440px]" src={Img} alt={Img} />
        </div>
        <div className=" bg-[#0C50CA] w-[25%]"></div>
      </div>
    </>
  );
}

export default HeroSection;
