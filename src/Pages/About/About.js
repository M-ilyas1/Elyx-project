import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../images/index";
import HeroBanner1 from "../../Component/HeroBanner1/HeroBanner1";
import Cardimg from "../../Component/Cardimg/Cardimg";
import AuctionCard from "../../Component/AuctionCard/AuctionCard";
import Cta from "../../Component/Cta/Cta";
import Reviews from "../../Component/Reviews/Reviews";

function About() {
  const AuctionData8 = [
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: img1,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: img2,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: img3,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: img4,
    },
    {
      price: "$5000000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "5WD",
      location: "California,USA",
      image: img5,
    },
    {
      price: "$6000000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "6WD",
      location: "California,USA",
      image: img6,
    },
    {
      price: "$7000000",
      name: "mitsubishii delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: img7,
    },
    {
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "8WD",
      location: "California,USA",
      image: img8,
    },
  ];
  return (
    <div className="container m-auto">
      <section>
        <HeroBanner1 />
      </section>
      <section>
        <Cardimg />
      </section>
      <section className="w-full flex justify-center mt-28">
        <div className="px-[110px]">
          <h1 className="pb-5 font-semibold text-4xl font-[poppins]">
            Lattest Auctions
          </h1>
          <hr className=" pb-7" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            {AuctionData8.map((item) => {
              return (
                <AuctionCard
                  price={item.price}
                  name={item.name}
                  model={item.model}
                  engine={item.engine}
                  location={item.location}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <Cta />
      </section>
      <section className="bg-[#F8F8FF] p-[50px] w-full">
        <div className="flex flex-wrap justify-center gap-7">
          <Reviews />
        </div>
      </section>
    </div>
  );
}

export default About;
