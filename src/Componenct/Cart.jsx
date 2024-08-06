import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import Itemcart from './Itemcart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';





const Cart = () => {
  const[itemcart,setitemcart]=useState(false)

  const Cartitems = useSelector((state)=>state.cart.cart);
  const TotalQty = Cartitems.reduce((totalqyt,item)=>totalqyt+item.quan,0);
  const TotalPrice = Cartitems.reduce((total,item)=>total+item.quan*item.price,0);
  const navigate = useNavigate();
  
  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5  ${itemcart?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
<div className='flex justify-between items-center my-3 '>
    <span className='text-xl font-bold text-gray-800'>My Order</span>
    <ImCross className='border-2 border-gray-600 text-gray-600 font-bold p-1 cursor-pointer rounded-md hover:text-red-300 hover:border-red-300'  onClick={()=>setitemcart(false)}/>

</div>
{/* add into cart */}
{
  Cartitems.length>0?
Cartitems.map((food)=>(
  <Itemcart key={food.id} 
  id={food.id} 
  name={food.name} 
  price={food.price}
quan = {food.quan}
  img ={food.img}
  />
)):<h1 className='font-bold text-center text-xl'>Your Cart Is Empty</h1>
}

<div className='absolute bottom-0'>
    <h3 className='font-semibold text-gray-800'>Items:{TotalQty}</h3>
    <h3 className='font-semibold text-gray-800'>Total Amount:{TotalPrice}</h3>
    <hr  className='w-[90vw] lg:w-[18vw] my-2'/>
    <button onClick={()=>navigate("/Sucess")} className='bg-green-500 font-bold text-white px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
</div>


    </div>
    <FaShoppingCart  className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${TotalQty>0 && "animate-bounce delay-500 transition-all"}`} onClick={()=>setitemcart(true)}/>
    </>
  )
}

export default Cart