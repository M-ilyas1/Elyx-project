import {
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "./images/index.js";
import Cardimg from "./Component/Cardimg/Cardimg";
import {
  Header,
  FilterSection,
  HeroBanner2,
  Carousel,
  Example,
  AuctionCard,
  Cta,
  Products,
  HeroSection,
  PopularItems,
} from "./Component";
import ProductList from "./Component/ProductList/ProductList.js";

function App() {
  const AuctionData8 = [
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: car1,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: car2,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: car3,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: car4,
    },
    {
      price: "$5000000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "5WD",
      location: "California,USA",
      image: car5,
    },
    {
      price: "$6000000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "6WD",
      location: "California,USA",
      image: car6,
    },
    {
      price: "$7000000",
      name: "mitsubishii delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: car7,
    },
    {
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "8WD",
      location: "California,USA",
      image: car1,
    },
  ];
  const AuctionData4 = [
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "1WD",
      location: "California,USA",
      image: car6,
    },
    {
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "2WD",
      location: "California,USA",
      image: car7,
    },
    {
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "3WD",
      location: "Californsia,USA",
      image: car8,
    },
    {
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "4WD",
      location: "California,USA",
      image: car2,

    },
  ];
  
  const products= [
    {
      id: 1,
      price: "$100000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "7WD",
      location: "California,USA",
      image: img1,
    },
    {
      id: 2,
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "7WD",
      location: "California,USA",
      image: img2,

    },
    {
      id: 3,
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "7WD",
      location: "Californsia,USA",
      image:img3
    },
    {
      id: 4,
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "7WD",
      location: "California,USA",
      image: img4,
    },
    {
      id: 5,
      price: "$500000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "7WD",
      location: "California,USA",
      image: img5,
    },
    {
      id: 6,
      price: "$600000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "7WD",
      location: "California,USA",
      image: img6,
    },
    {
      id: 7,
      price: "$700000",
      name: "mitsubishi delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: img7,
    },
    {
      id: 8,
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "7WD",
      location: "California,USA",
      image: img8,
    },
  ]
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="container">

          <header>
            <Header />
          </header>

          <section>
            <FilterSection />
          </section>

          <section className="mt-28">
            <div className="container">
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
          
          

          <section className="">
            <div className="container mt-16">
              <h1 className="pb-5 font-bold text-4xl">Closed To Me</h1>
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

          <section className="container">
            <div className="flex justify-between py-16 flex-wrap">
              <h1 className="text-4xl font-bold">
                Latest Elyx Auctions For You
              </h1>
              <div className="flex gap-1">
                <button className="bg-gray-200 text-black hover:bg-[#0C50CA] hover:text-white px-2 py-3 text-[24px] rounded">
                  ACTIVE BID
                </button>

                <button className="bg-gray-200 text-black hover:bg-[#0C50CA] hover:text-white px-2 py-3 text-[24px] rounded">
                  COMMING SOON
                </button>

                <button className="bg-gray-200 text-black hover:bg-[#0C50CA] hover:text-white px-2 py-3 text-[24px] rounded">
                  COMPLETED
                </button>
              </div>
            </div>
            <Products/>
          </section>

          <section className="bg-[#F8F8FF] p-[30px]  ">
            <div className=" justify-center text-center ">
              <Carousel />
            </div>
          </section>

          <section>
            <Cta />
          </section>

          <section>
            <div>
              <Cardimg />
            </div>
          </section>

          <section>
            <HeroSection />
          </section>

          <section>
            <HeroBanner2 />
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

                {/* product section start */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
            {products.map((detail=>{
              return(
              <Products
              price={detail.price}
              name={detail.name}
              model={detail.model}
              engine={detail.engine}
              location={detail.location}
              image={detail.image}
              />
              )
            }))}
          </div>
                {/* product section end */}


        </div>
      </section>
    </div>
  );
}
export default App;
