import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Main from '../components/Main'

const Home = () => {
    const [show,setShow] = useState(false);
  return (
    <>

    {/* navbar  */}
    <div className='text-2xl p-4 flex justify-between'>
       <h1 className='font-bold text-black'>Rupesh <i className="ri-arrow-down-s-line text-zinc-800 "></i></h1>
      {show? <input type="text" placeholder='Search..'  className='w-[84%] mx-auto h-9 text-[15px] absolute top-4 rounded-l-md px-4  flex search items-center bg-zinc-300 outline-none' autoFocus/>:""}
      {
        !show?<i className="ri-search-line py-1 px-2 text-xl font-bold cursor-pointer bg-zinc-300 rounded-xl" onClick={()=>setShow(true)} ></i>:<i className="ri-close-line py-1 px-2 text-xl font-bold cursor-pointer bg-zinc-300 rounded-xl" onClick={()=>setShow(false)} ></i>
      }

    </div>

    {/* card  */}
    <div className='w-[95%] h-40 mx-auto bg-[#151515] rounded-2xl shadow-2xl p-5 flex flex-row justify-between relative'>
        <div className="">
        <h1 className=' text-white font-semibold'>Total Balance</h1>
        <h1 className='text-white text-4xl font-bold'>₹500</h1></div>
       <div className=" flex flex-col gap-1 text-end">
        <div className="">
        <h1 className=' text-white font-semibold text-sm pt-1'> Cash In</h1>
        <h1 className='text-white text-lg font-semibold'>₹2500000</h1>
        </div>
        <div className="">
        <h1 className=' text-white font-semibold text-sm pt-3'> Cash Out</h1>
        <h1 className='text-white text-lg font-semibold'>₹500</h1>
        </div></div>
        <i className="ri-file-pdf-line text-white absolute bottom-5 text-3xl cursor-pointer"></i>
    </div>
    <div className="w-[95%] mx-auto my-2 rounded-lg h-12 bg-[#E1DFEF] flex flex-row justify-between items-center p-3">
        <p className='text-xl font-bold'>Notes</p>
        <p className='w-32 flex justify-between text-xl font-bold '> <span className='text-green-500'>IN</span> <span className='text-red-500'>OUT</span> </p>
    </div>
    <div className="w-full h-96 p-2  overflow-y-scroll scrollside">
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'></span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'></span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>



        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>
        <div className="w-full h-14 border-2 mt-2 rounded-xl cursor-pointer  flex justify-between items-center p-3 relative">
            <p className='absolute bottom-1 left-3 text-[10px] tracking-wider font-semibold text-zinc-500'>18-09-24, 12:45PM</p>
            <h1 className=' text-md font-semibold w-[40%] text-ellipsis overflow-hidden whitespace-nowrap pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam accusamus dolores dolore illo recusandae omnis culpa consequatur perspiciatis modi?</h1>
            <p className='w-32 flex justify-between'> <span className='text-black font-semibold'>₹500</span> <span className='text-black font-semibold'>₹444</span> </p>
        </div>

    </div>
    </>
  )
}

export default Home
