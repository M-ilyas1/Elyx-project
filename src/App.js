import './App.css';
import car from "./images/car.png";
import Header from '../src/Component/Header/Header'
import AuctionCard from './Component/AuctionCard/AuctionCard';
import Carousel from './Component/Carousel/Carousel';

function App() {
  
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="bg-[#F8F8FF] p-[50px] w-full">

      <div className=" bg-white  justify-center text-center align-middle w-full ">
          <Carousel />
        </div>

      <section className="flex justify-center" >
        <div className='w-[1440px]'>
        <h1 className="pb-5 font-semibold text-4xl font-[poppins]" >Latest Auctions</h1>
          <hr className=" pb-7"/>
          <div className=" grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 ">
            {
              data.map((item) =>{
                return(
                  <AuctionCard
                  price={item.price}
                  name={item.name}
                  model={item.model}
                  engine={item.engine}
                  location={item.location}
                  image={item.image}
                  />
                )
              })
            }
          </div>
        </div>
        </section>

    </div>
  );
}

export default App;
