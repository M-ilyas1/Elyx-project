import "./App.css";
import Header from "../src/Component/Header/Header";
import Carousel from "./Component/Carousel/Carousel";

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
      </section>

    </div>
  );
}

export default App;
