import React from "react";
import Breadcumb from "../../Component/Breadcumb/Breadcumb";
import AboutBanner from '../../Component/AboutBanner/AboutBanner';
import AboutContent from "../../Component/AboutContent/AboutContent";
import Reviews from '../../Component/Reviews/Reviews'


function About() {
  return (
   <div>
      <Breadcumb/>
      <AboutBanner/>
      <AboutContent/>
      <section className="bg-gray-100 p-[50px]">
      <h1 className='text-[40px] font-bold text-center p-10'>Client Testimonials</h1>
        <div className="  flex flex-wrap justify-center gap-7">
          <Reviews />
        </div>
      </section>
   </div>
  );
}

export default About;
