import { createSlice } from "@reduxjs/toolkit";




const Cartslice = createSlice({
name:"cart",
initialState:{
    cart:[],
},
reducers:{
    addToCart:(state,action)=>{

        const existitem = state.cart.find((item)=>item.id===action.payload.id);
        if(existitem){
           state.cart= state.cart.map((item)=>item.id===action.payload.id?{...item,quan:item.quan+1}:item)
        }
        else{
            state.cart.push(action.payload)
        }
       
    },
    removeFromCart:(state,action)=>{
       state.cart= state.cart.filter((item)=>item.id!==action.payload.id)
    },
    increment:(state,action)=>{
        state.cart = state.cart.map((item)=>item.id===action.payload.id?{...item,quan:item.quan+1}:item)
    },
    dicrement:(state,action)=>{
        state.cart = state.cart.map((item)=>item.id===action.payload.id?{...item,quan:item.quan-1}:item)
    },
},

})

export const {addToCart,removeFromCart,increment,dicrement}=Cartslice.actions;
export default Cartslice.reducer;


