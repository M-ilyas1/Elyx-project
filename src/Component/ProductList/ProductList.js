import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid } from "react-icons/bs";
import Products from "../Products/Products";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

import { ImHammer2 } from "react-icons/im";

function ProductList() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle checkbox selection
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <div>
      <section className="flex">
        {/* ==========================filter  start here================== */}

        <div className="filter w-[399px] h-[1252px] border-2">
          {/* ===== */}
          {/* Dropdown */}
          <div className="p-4 ">
            <button
              className="flex justify-between items-center w-full"
              onClick={toggleDropdown}
            >
              <ImHammer2 />
              <span className="font-bold block"> Auction Type</span>{" "}
              {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>

            {/* Dropdown content */}
            {isOpen && (
              <div>
                {/* Checkbox options */}
                <div className="pt-4">
  


                 
                  <label className="flex items-center ">
                    <input
                      type="checkbox"
                      className="rounded-full"
                      onChange={() => handleCheckboxChange("Premiun(196)")}
                      checked={selectedOptions.includes("Premiun(196)")}
                    />
                    <span className="ml-2">Premiun(196)</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      onChange={() => handleCheckboxChange("Not Reserve(1)")}
                      checked={selectedOptions.includes("Not Reserve(1)")}
                    />
                    <span className="ml-2">Not Reserve(1)</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      onChange={() => handleCheckboxChange("Results(10)")}
                      checked={selectedOptions.includes("Results(10)")}
                    />
                    <span className="ml-2">Results(10)</span>
                  </label>

                  {/* Add more checkbox options here */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==========================filter  end here================== */}

        <div className="productlist h-[1664px]">
          <div className="title flex justify-between py-5">
            <h1 className="text-[28px] font-bold">
              Live Now <span>(16)</span>
            </h1>
            <div className="flex items-center gap-3">
              <TfiMenuAlt className="text-[30px] hover:text-blue-700" />{" "}
              <BsGrid className="text-[30px] hover:text-blue-700" />
              <select className="text-[30px]">
                <option>Bid: Low To High</option>
                <option>Bid: High To Low</option>
                <option>Latest</option>
              </select>
            </div>
          </div>

          <div>
            <Products />
          </div>
          <div className="flex justify-between items-center pt-10 text-gray-400">
            <p>1-20 On 166+Results</p>
            <div className="buttons flex items-center">
              <button className="shadow py-3 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                <AiOutlineLeft />
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                1
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                2
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                3
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                4
              </button>
              <button className="shadow py-2 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                5
              </button>
              <button className="shadow py-3 p-4 mr-1 hover:bg-blue-700 hover:text-white rounded">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
// ======================== dropdown list

// import React, { useState } from 'react';
// import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

// const ProductList = () => {
//   // State for managing the dropdown and checkbox selections
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to handle checkbox selection
//   const handleCheckboxChange = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   return (
//     <div className="w-64 bg-gray-200">
//       {/* Sidebar heading */}
//       <div className="p-4 bg-gray-300">Filter Options</div>

//       {/* Dropdown */}
//       <div className="p-4">
//         <button
//           className="flex x justify-between items-center w-full text-left bg-white py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
//           onClick={toggleDropdown}
//         >
//           Dropdown {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
//         </button>

//         {/* Dropdown content */}
//         {isOpen && (
//           <div className="bg-white mt-2 rounded-md border border-gray-300">
//             {/* Checkbox options */}
//             <div className="p-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox"
//                   onChange={() => handleCheckboxChange('Option 1')}
//                   checked={selectedOptions.includes('Option 1')}
//                 />
//                 <span className="ml-2">Option 1</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox"
//                   onChange={() => handleCheckboxChange('Option 2')}
//                   checked={selectedOptions.includes('Option 2')}
//                 />
//                 <span className="ml-2">Option 2</span>
//               </label>
//               {/* Add more checkbox options here */}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
// ===================================================
