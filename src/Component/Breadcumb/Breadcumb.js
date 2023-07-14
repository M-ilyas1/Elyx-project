import React, { useState } from 'react';
import { Link,} from 'react-router-dom';


function Breadcumb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full bg-gray-100 flex justify-center'>
      <div className='w-[80%]'>
        <div className='relative'>
          <button
            className='p-2 outline-none bg-gray-100'
            onClick={toggleDropdown}
          >
            Home
          </button>
          {isOpen && (
            <ul className='absolute left-0 w-full mt-2 bg-white shadow-md rounded-md'>
              <li>
                <Link
                  to='/'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                >
                  Homepage-v1
                </Link>
              </li>
              <li>
                <Link
                  to='/HomePageV2'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                >
                  Homepage-v2
                </Link>
              </li>
              <li>
                <Link
                  to='/ActionListing'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                >
                  Action Listing
                </Link>
              </li>
              <li>
                <Link
                  to='/ActionDetails'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                >
                  Action Details
                </Link>
              </li>
            </ul>
          )}
          <Link to='/about' className='hover:text-blue-600 pl-10'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Breadcumb;
