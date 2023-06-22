import React from "react";
import bike1 from '../../images/bike1.jpeg';
  const data = [
    {
      id: 1,
      price: "$100000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "7WD",
      location: "California,USA",
      image: bike1,
    },
    {
      id: 2,
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "7WD",
      location: "California,USA",
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rbij6UaMWZepF46PxDE2lscOZ3o1ivrrti1Oxu-sFg&s`,
    },
    {
      id: 3,
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "7WD",
      location: "Californsia,USA",
      image:bike1
    },
    {
      id: 4,
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "7WD",
      location: "California,USA",
      image: bike1,
    },
    {
      id: 5,
      price: "$500000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "7WD",
      location: "California,USA",
      image: bike1,
    },
    {
      id: 6,
      price: "$600000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "7WD",
      location: "California,USA",
      image: bike1,
    },
    {
      id: 7,
      price: "$700000",
      name: "mitsubishii delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: bike1,
    },
    {
      id: 8,
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "7WD",
      location: "California,USA",
      image: bike1,
    },
  ];
 const Products = () => {
    return (

      <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3  xl:grid-cols-4 gap-3">
        {data.map((data) => (
          <div className="main font-[poppins]" key={data.id}>
            <div className="image relative">
              <img className="w-[336px] h-[240px]" src={data.image} alt={data.name} />
              <div className="bg-blue-700 price absolute bottom-3 left-3 rounded">
                <h1 className="py-2 px-2 ml-1 font-bold line-height-18px text-white font-size-22px leading-5">
                  <span className="pr-2">
                  BID
                  </span>
                  {data.price}
                </h1>
              </div>
            </div>
            <div className="content">
              <h1 className="font-semibold font-size-18px line-height-26px w-[280px] h-[48px] ml-6 pt-5 capitalize text-lg tracking-wider">
                {data.model} {data.name} {data.engine}
              </h1>
              <p className="capitalize font-normal font-size-14px line-height-14px text-sm ml-6 mt-10">
                {data.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default Products;