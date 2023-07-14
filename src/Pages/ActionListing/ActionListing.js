import React from 'react'
import HeroBanner2 from '../../Component/HeroBanner2/HeroBanner2'
import ProductList from '../../Component/ProductList/ProductList'
import Breadcumb from "../../Component/Breadcumb/Breadcumb";

export default function ActionListing() {
  return (
    <div>
      <section>
        <Breadcumb/>
        <HeroBanner2/> 
      </section>

      <section>
        <ProductList/>
      </section>
    </div>
  )
}
