import React from 'react'
import { TiPlus } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { dicrement, increment, removeFromCart } from '../Redux/Slices/Cartslice';
import toast from 'react-hot-toast';




const Itemcart = ({id,name,price,img,quan}) => {
   const dispatch = useDispatch();

 
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2  mb-3'>
        <MdDelete  className='absolute right-7 cursor-pointer text-gray-600 hover:text-green-600' onClick={()=>{dispatch(removeFromCart({id,name,price,img,quan}));toast(`${name} Rmoved!`, {
  icon: '👋😊',
});}}/>

        <img src={img} alt="" 
        className='w-[50px] h-[50px]'
        />
        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>
         <div  className='flex justify-between items-cneter '>
            <span className='text-green-500 font-bold'>₹ {price}</span>
         <div className='flex justify-between items-cneter gap-2 absolute right-7'>
         <LuMinus className='text-gray-600 border-gray-600 border-2 hover:text-white hover:bg-green-500 hover:border:none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' onClick={()=>quan>1?dispatch(dicrement({id,name,price,img,quan})):quan=1}/>
            <span>{quan}</span>

            <TiPlus className='text-gray-600 border-gray-600 border-2 hover:text-white hover:bg-green-500 hover:border:none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' onClick={()=>dispatch(increment({id,name,price,img,quan}))}/>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Itemcart