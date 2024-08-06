import React from 'react'
import Navbar from '../Componenct/Navbar'
import Category from '../Componenct/Category'
import Fooditem from '../Componenct/Fooditem'
import Cart from '../Componenct/Cart'

const Home = () => {
  return (
    <div>
       <div >
       <Navbar/>
       <Category/>
       </div>
        <Fooditem />
        <Cart/>
    </div>
  )
}

export default Home