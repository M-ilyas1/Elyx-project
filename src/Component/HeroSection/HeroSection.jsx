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
        alert("this is end");
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
      <div className="w-full h-[100vh] md:h-auto sm:h-auto flex relative ">
        <div className="w-full 2xl:w-[70%] xl:w-[70%] lg:w-[70%] bg-[rgb(53,53,53)] flex md:flex-col-reverse sm:flex-col-reverse">
          <div className="w-[705px] my-[118px] ml-[240px] lg:ml-[80px] xl:w-[550px] lg:w-[450px] md:my-[100px] md:ml-[100px] sm:ml-[50px] font-[Poppins] text-white">
            <h1 className="text-[48px] lg:text-[30px] mb-2 lg:mb-0">
              2014 Mercedes-Benz E350 4MATIC Wagon
            </h1>
            <p className="text-[20px] lg:text-[16px] leading-[30px] lg:leading-[25px] capitalize pr-3 mt-[24px] lg:mt-[10px]">
              This 2014 Porsche Carrera GT is one of 1,270 examples built during
              a four-year production run and was delivered...
            </p>
            <div className="flex gap-20 my-1 uppercase mt-[48px] lg:mt-[20px]">
              <div>
                <h3 className="text-[20px] lg:text-[16px] leading-[18px]">
                  Current bid:
                </h3>
                <h1 className="text-[#0C50CA] text-[36px] lg:text-[22px] leading-[36px] mt-[6px]">
                  $215,000
                </h1>
              </div>
              <div className="mr-11">
                <h3 className="text-[20px] lg:text-[16px] leading-[18px]">
                  City :
                </h3>
                <h1 className="text-[#0C50CA] text-[36px] lg:text-[22px] leading-[36px] mt-[6px]">
                  Lexington, KY
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-[30px]">
              <TimeBtn
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              />
            </div>
            <div className="mt-[48px] xl:mt-[35px] lg:mt-[25px] ">
              <Button
                label="PLACE BID"
                height={"h-[72px]"}
                width={"w-[224px]"}
                variants="primary"
              />
            </div>
          </div>

          <div className="2xl:absolute 2xl:right-[10%] 2xl:top-[8%] xl:absolute xl:right-[6%] xl:top-[7%] lg:absolute lg:right-[2%] lg:top-[12%] md:ml-[100px] md:mt-[50px] sm:mx-auto">
            <img
              src={Img}
              alt=""
              className="w-[640px] h-[640px] xl:h-[550px] xl:w-[550px] lg:w-[500px] lg:h-[500px]"
            />
          </div>
        </div>
        <div className="w-[30%] bg-[#0C50CA] hidden 2xl:block xl:block lg:block "></div>
      </div>
    </>
  );
}

export default HeroSection;
