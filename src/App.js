import Header from "../src/Component/Header/Header";
import FilterSection from "./Component/FilterSection/FilterSection";
import MainSection2 from './Component/MainSection2/MainSection2'
import Carousel from "./Component/Carousel/Carousel";
import Example from "./Component/footer/footer";
import car from "./images/car.png";
import AuctionCard from "./Component/AuctionCard/AuctionCard";
import Product from "./Component/Product/Product";
import HeroSection from "./Component/HeroSection/HeroSection";
import PopularItems from "./Component/PopularItems/PopularItems";

function App() {
  const AuctionData8 = [
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: car,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$5000000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "5WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$6000000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "6WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$7000000",
      name: "mitsubishii delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "8WD",
      location: "California,USA",
      image: car,
    },
  ];
  const AuctionData4=[
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: car,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: car,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: car,
    },
  ]
  return (
    <div >
    <section className="flex justify-center items-center">
      <div className="w-[1440px]">
        <header>
          <Header />
        </header>
        
        <section>
          <FilterSection/>
        </section>
        
        <section>
          <HeroSection />
        </section>     
         
        <section>
          <MainSection2/>
        </section>
        
        
        <section className="w-full flex justify-center">
          <div >
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
        <section className="bg-[#F8F8FF] w-full">
          <div className=" bg-white  justify-center text-center align-middle w-full ">
            <Carousel />
          </div>
        </section>

        <section>
          <div >
            <h1 className="pb-5 font-semibold text-4xl font-[poppins]">
              Lattest Auctions
            </h1>
            <hr className=" pb-7" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
              {AuctionData4.map((item) => {
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
          <Product />
        </section>
        <section>
          <PopularItems />
        </section>
        <section className="bg-[#F8F8FF] w-full">
          <div className="flex flex-wrap justify-center gap-7 "></div>
        </section>

        <section>
          <div>
            <Example />
          </div>
        </section>
      </div>
    </section>
    </div>
  );
}
export default App;

