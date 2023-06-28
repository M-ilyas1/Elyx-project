import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import NavBar from "./Component/Header/Header.jsx";
import SubmitForAuction from "./pages/SubmitForAuction/SubmitForAuction.js";
import HowitWorks from "./pages/HowitWorks/HowitWorks.js";
import GetinEmail from "./pages/GetinEmail/GetinEmail.js";
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
      </>
  );
}
export default App;