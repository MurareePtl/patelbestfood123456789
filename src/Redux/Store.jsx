import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/Cartslice";
import Categoryslice from "./Slices/CategorySlice";
import SearchSlice from "./Slices/SearchSlice";






const Store = configureStore({
    reducer:{
        cart:Cartslice,
        category:Categoryslice,
        search:SearchSlice,
    },
})

export default Store