import React from "react";
import HowItsWorkBanner from "../../Component/HowItsWorkBanner/HowItsWorkBanner";
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import HowItsWorkContent from "../../Component/HowItsWorkContent/HowitsWorkContent";
import { PopularItems } from "../../Component";

export default function HowitWorks() {
  return (
    <div>
      <Breadcumb />
      <HowItsWorkBanner />
      <HowItsWorkContent/>
      <PopularItems/>

    </div>
  );
}
