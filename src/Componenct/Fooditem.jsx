import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../FoodData/Data'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const Fooditem = () => {

 const category =  useSelector((state)=>state.category.category)
 const search =useSelector((state)=>state.search.Search)

  const handletoast = (name)=>toast.success(`Added To Cart ${name} Sucessfully`)
  return (
    <>

<Toaster
  position="top-center"
  reverseOrder={false} />
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10 '>
      
       {
        FoodData.filter((food)=>{
          if(category==="All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
         return(
          category===food.category && food.name.toLowerCase().includes(search.toLowerCase())
         )
          }
        }).map((food)=>{
          return   <FoodCart  
            key={food.id}  
            id={food.id} 
            name={food.name} 
            price={food.price}
            desc ={food.desc}
            rate = {food.rating}
            img ={food.img}
            handletoast={handletoast}
            />
        })
       }

{/* FoodData.map((food)=>(
            <FoodCart  
            key={food.id}  
            id={food.id} 
            name={food.name} 
            price={food.price}
            desc ={food.desc}
            rate = {food.rating}
            img ={food.img}
            handletoast={handletoast}
            />
         )) */}
    </div>
    </>
  )
}

export default Fooditem