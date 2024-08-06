import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Sucess = () => {
  const[loding,setloading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
{
  loding?<PropagateLoader  color='#36d7b7'/>:<div><h2 className="text-3xl font-semibold mb-4 text-center">Your Order Is Successful!</h2>
      <p className='text-center'>Your Order Has Been Succefully Placed</p></div>
}
      
    </div>
  )
}

export default Sucess