import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/Cartslice';


const FoodCart = ({id,name,price,desc,img,rate,handletoast}) => {
  const dispatch = useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex-col rounded-lg gap-3'>
        <img src={img} alt=""  className='w-autoh h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'/>
        <div className='text-sm flex justify-between items-center'>
            <h2>{name}</h2>
            <span className='text-green-500'>₹ {price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between items-center'>
            <span className='flex justify-center items-center gap-2'>
            <FaStar  className='text-[yellow] mr-1'/>{rate}

            </span>
            <button className='p-1 text-white bg-green-500 hover:green-600 rounded-lg text-sm ' onClick={()=>{dispatch(addToCart({id,name,price,img,quan:1}));handletoast(name);}} >Add To Cart</button>
        </div>
    </div>
  )
}

export default FoodCart