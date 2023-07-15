import React from 'react'
import Aution from '../../Component/Auction Details/Auction'
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import { PopularItems } from '../../Component';

export default function ActionDetails() {
  return (
    <div>
      <Breadcumb/>
      <div className='container'>
      <Aution/>
      </div>
      <div>
      <PopularItems/>

      </div>
    </div>
  )
}
