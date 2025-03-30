import { createSlice } from "@reduxjs/toolkit";
import data  from "../../data"
import { uniq } from "lodash";
const categories=uniq(data.map((product)=>{
    return product.category
})).sort()
const defaultCategory="All"
const initialState={
    products:data,
    productsFromSearch:data,
    categories:[defaultCategory,...categories]
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