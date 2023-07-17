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
}
