import { createSlice } from "@reduxjs/toolkit";

const SearchSlice =createSlice({
    name:"Search",
    initialState:{
        Search:"",
    },
    reducers:{
        SetSearch:(state,action)=>{
            state.Search=action.payload;
        }
    }
})


export const {SetSearch}=SearchSlice.actions;
export default SearchSlice.reducer;
