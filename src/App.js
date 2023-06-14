import './App.css';
import Header from '../src/Component/Header/Header'
import ReviewCard from './Component/ReviewCard/ReviewCrad';

function App() {

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <section className="bg-[#F8F8FF] p-[50px] w-full">
          <div className="flex justify-center gap-7">
            <ReviewCard />
          </div>
        </section>
    </div>
  );
}

export default App;
