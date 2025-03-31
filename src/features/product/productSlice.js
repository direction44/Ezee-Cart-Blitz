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
    categories:[defaultCategory,...categories],
    selectedCategory:defaultCategory,
    single:data[0],
    singleSimilarProduct:data.slice(0,4),
    searchTerm:""
}
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        setSearchTerm:(state,action)=>{
                const{payload:searchTerm}=action
                state.searchTerm=searchTerm
                console.log("searchTerm",searchTerm)
        }
    }
})

export const{setSearchTerm}=productSlice.actions;
export default productSlice.reducer