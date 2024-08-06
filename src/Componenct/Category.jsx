import React, { useEffect, useState } from 'react'
import FoodData from '../FoodData/Data'
import { useDispatch, useSelector } from 'react-redux'
import { setcategory } from '../Redux/Slices/CategorySlice'

const Category = () => {
  const [categories,setcategories] =useState([])
  const listactogery=()=>{
    const uniqlist = [...new Set(FoodData.map((food)=>food.category)),]
    setcategories(uniqlist)
    console.log(categories)
  }
  
  useEffect(()=>{
listactogery();

  },[])

  const dispatch = useDispatch();
  const selectCatogety = useSelector((state)=>state.category.category);
  return (
    <div className='mx-6'>
        <h3 className='font-semibold text-xl'>Find The Best Food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectCatogety==="All" && "bg-green-500 text-white"}`} onClick={()=>dispatch(setcategory("All"))}>All</button>
           {
            categories.map((catogery,index)=>(
              <button className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectCatogety===catogery && "bg-green-500 text-white"}`} key={index}  onClick={()=>dispatch(setcategory(catogery))}> {catogery}</button>
             
            ))
           }
        </div>
    </div>
  )
}

export default Category