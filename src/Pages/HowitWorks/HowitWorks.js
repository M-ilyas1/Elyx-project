import React from "react";
import HowItsWorkBanner from "../../Component/HowItsWorkBanner/HowItsWorkBanner";
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import HowItsWorkContent from "../../Component/HowItsWorkContent/HowitsWorkContent";

export default function HowitWorks() {
  return (
    <div>
      <Breadcumb />
      <HowItsWorkBanner />
      <HowItsWorkContent/>
    </div>
  );
}
