import "./App.css";
import Header from "../src/Component/Header/Header";
// import AuctionCard from './Component/AuctionCard/AuctionCard';
// import car from "./images/car.png";
import ReviewCard from "./Component/ReviewCard/ReviewCrad";
import Carousel from "./Component/Carousel/Carousel";
import Example from "./Component/footer/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="bg-[#F8F8FF] p-[50px] w-full">
        {/* <ReviewCard /> */}

        <div className=" bg-white  justify-center text-center align-middle w-full ">
          <Carousel />
        </div>
      </section>

      <section className="bg-[#F8F8FF] p-[50px] w-full">
        <div className="flex flex-wrap justify-center gap-7 "></div>
      </section>
      <section>
        <div>
         <footer/>
        </div>
      </section>
    </div>
  );
}

export default App;
