import React from 'react'
function Breadcumb() {
  return (
    <div className='w-full bg-gray-100 flex justify-center'>
    <div className='w-[80%]'>
        <select className='p-2 outline-none bg-gray-100'>
            <option>Home</option>
            <option>Homepage-v1</option>
            <option>Homepage-v1</option>
            <option>Action Listing</option>
            <option>Action Details</option>
        </select>
        <a href='#' className='hover:text-blue-600 pl-10'>About</a>
    </div>
    </div>
  )
}

export default Breadcumb