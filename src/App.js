import './App.css';
import Header from '../src/Component/Header/Header'
import ReviewCard from './Component/ReviewCard/ReviewCrad';
import Carousel from './Component/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="bg-[#F8F8FF] p-[50px] w-full">
      <ReviewCard />
          <div className="flex justify-center gap-7">
          <Carousel/> 
           
          </div>
        </section>
    </div>
  );
}

export default App;
