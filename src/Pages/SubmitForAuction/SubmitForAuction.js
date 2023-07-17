
import React from 'react'
import PlanMain from '../../Component/Plan/PlanMain'
import PlaneProcess from '../../Component/PlanProcess/PlaneProcess'
import { PopularItems } from '../../Component'
import Footer from '../../Component/Footer/Footer'

export default function SubmitForAuction() {
  return (
    <div>
      <PlanMain/>
      <PlaneProcess/>
      <PopularItems/>

      <section>
      <div>
        <Footer bgColor="bg-[#FFFFFF]" textColor="text-[#353535]" />
      </div>
      </section>
    </div>
    

  )

import React from "react";
import PlanMain from "../../Component/Plan/PlanMain";
import PlanPricing from "../../Component/PlanPricing/PlanPricing";
import PlaneProcess from "../../Component/PlanProcess/PlaneProcess";

export default function SubmitForAuction() {
  return (
    <div className="bg-gray-100">
      <div className="container">
        <PlanMain />
      </div>
      <div className=" container text-center mb-10">
        <h1 className="text-[48px] font-bold mt-10">
          Your auction is just one click away
        </h1>
        <p className="text-[22px] text-gray-400 font-normal mt-2 mb-20">
          Our application process is free and only takes 5 minutes.
        </p>
        <PlanPricing />
      </div>
      <PlaneProcess />
    </div>
  );

}
