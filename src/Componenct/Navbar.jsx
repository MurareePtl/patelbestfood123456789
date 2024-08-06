import React from 'react'
import { useDispatch } from 'react-redux'
import { SetSearch } from '../Redux/Slices/SearchSlice';

const Navbar = () => {
  const dispatch=useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-6  '>
<div>
    <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
    <h1 className='text-xl font-bold'>Patel Foods</h1>
</div>
<div>
    <input onChange={(e)=>dispatch(SetSearch(e.target.value))} type="search" name='search' placeholder='Search Here' autoComplete='off' className='p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-[25vw]'/>
</div>
    </nav>
  )
}

export default Navbar