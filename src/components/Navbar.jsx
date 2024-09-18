import React from 'react'

const Navbar = () => {
  return (
    <div className='text-2xl p-4 flex justify-between'>
       <h1 className='font-bold text-black'>Rupesh <i className="ri-arrow-down-s-line text-zinc-800 "></i></h1>
       <i className="ri-add-fill py-1 px-2 cursor-pointer bg-zinc-300 rounded-xl"></i>
    </div>
  )
}

export default Navbar
