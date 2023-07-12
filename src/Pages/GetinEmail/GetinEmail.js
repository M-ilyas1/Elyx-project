import React from 'react';
import Breadcumb from '../../Component/Breadcumb/Breadcumb';
import About from '../../Component/About/About';
import AboutContent from '../../Component/AboutContent/AboutContent';
import Reviews from '../../Component/Reviews/Reviews'
export default function GetinEmail() {
  return (
    <div>
      <Breadcumb/>
      <About/>
      <AboutContent/>
      <section className="bg-gray-100 p-[50px]">
      <h1 className='text-[40px] font-bold text-center p-10'>Client Testimonials</h1>
        <div className="  flex flex-wrap justify-center gap-7">
          <Reviews />
        </div>
      </section>
    </div>
  )
}
