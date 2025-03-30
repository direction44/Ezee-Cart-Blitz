import { createSlice } from "@reduxjs/toolkit";
import data  from "../../data"
const initialState={
    products:data,
    productsFromSearch:data
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload)
        },
        clearProduct:(state)=>{
            state.products=[]
        }
    }
})

export const{addProduct,clearProduct}=productSlice.actions;
export default productSlice.reducer