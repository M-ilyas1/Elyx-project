import "./App.css";
import Header from "../src/Component/Header/Header";
// import AuctionCard from './Component/AuctionCard/AuctionCard';
// import car from "./images/car.png";
import ReviewCard from "./Component/ReviewCard/ReviewCrad";
import Carousel from "./Component/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <div className=" bg-white  justify-center text-center align-middle w-full ">
        <Carousel />
      </div>

      
    </div>
  );
}

export default App;
