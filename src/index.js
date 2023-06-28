import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"
// import About from "./pages/About"


// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route>
//         <Route path='Home' element={<Home/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
