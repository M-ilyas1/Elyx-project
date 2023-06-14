import './App.css';
import Header from '../src/Component/Header/Header'
import car from "./images/car.png";
import ReviewCard from './Component/ReviewCard/ReviewCrad';

function App() {
  const data = [
    {
      id: 1,
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "1990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    },
    {
      id: 2,
      price: "$200000",
      name: "mitsubishi delica star wagon exceed",
      model: "2990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    }, 
    {
      id: 3,
      price: "$300000",
      name: "mitsubishi delica star wagon exceed",
      model: "3990",
      engine: "7WD",
      location: "Californsia,USA",
      image: car,
    },
    {
      id: 4,
      price: "$400000",
      name: "mitsubishi delica star wagon exceed",
      model: "4990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    },
    {
      id: 5,
      price: "$500000",
      name: "mitsubishi delica star wagon exceed",
      model: "5990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    }, 
    {
      id: 6,
      price: "$600000",
      name: "mitsubishi delica star wagon exceed",
      model: "6990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    },   
    {
      id: 7,
      price: "$700000",
      name: "mitsubishii delica star wagoon exceed",
      model: "7990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    }, 
    {
      id: 8,
      price: "$800000",
      name: "mitsubishi delica star wagon exceed",
      model: "8990",
      engine: "7WD",
      location: "California,USA",
      image: car,
    }, 
  ];
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <section className="bg-[#F8F8FF] p-[50px] w-full">
      <div className="flex flex-wrap justify-center gap-7 ">
     <ReviewCard /> 
     </div>

        </section>
    </div>
  );
}

export default App;
