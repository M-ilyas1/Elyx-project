function TimeBtn({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <div className="flex text-center uppercase gap-5 lg:gap-2 ">
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[70px] sm:h-[70px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] sm:text-[18px]">
          {timerDays}
        </h1>
        <h3 className="sm:text-[12px]">Days</h3>
      </div>
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[70px] sm:h-[70px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] sm:text-[18px]">
          {timerHours}
        </h1>
        <h3 className="sm:text-[12px]">Hours</h3>
      </div>
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[70px] sm:h-[70px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] sm:text-[18px]">
          {timerMinutes}
        </h1>
        <h3 className="sm:text-[12px]">Minutes</h3>
      </div>
      <div className="bg-[#37474F] 2xl:w-[125px] 2xl:h-[125px] xl:w-[100px] xl:h-[100px] lg:w-[95px] lg:h-[95px] md:w-[115px] md:h-[115px] sm:w-[70px] sm:h-[70px]">
        <h1 className="text-[55px] xl:text-[48px] lg:text-[35px] sm:text-[18px]">
          {timerSeconds}
        </h1>
        <h3 className="sm:text-[12px]">Seconds</h3>
      </div>
    </div>
  );
}

export default TimeBtn;
