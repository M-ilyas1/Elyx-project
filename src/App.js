import Reviews from './Component/Reviews/Reviews.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import NavBar from "./Component/Header/Header.jsx";
import SubmitForAuction from "./Pages/SubmitForAuction/SubmitForAuction.js";
import HowitWorks from "./Pages/HowitWorks/HowitWorks.js";
import GetinEmail from "./Pages/GetinEmail/GetinEmail.js";

function App() {
  return (
    <>

    <NavBar/>
    <Routes>
          <Route index element={<Home />} />
          <Route  path="about"  element={<About />} />
          <Route  path="SubmitForAuction"  element={<SubmitForAuction />} />
          <Route  path="HowitWorks"  element={<HowitWorks />} />
          <Route  path="GetinEmail"  element={<GetinEmail />} />

      </Routes>

<section className="bg-[#F8F8FF] p-[50px] w-full">
<div className="flex flex-wrap justify-center gap-7">
  <Reviews />
</div>
</section>
      </>
  );
}
export default App;