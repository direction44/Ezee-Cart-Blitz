import { createSlice } from "@reduxjs/toolkit";
import data  from "../../data"
import { uniq,sortBy } from "lodash";
import stringSimilarity from "string-similarity-js";
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
                state.productsFromSearch.forEach((p)=>{
                    p.setScore=stringSimilarity(`${p.name} ${p.category}`,state.searchTerm)
                })
                state.productsFromSearch=sortBy(state.productsFromSearch,"setScore").reverse()
        }
    }
})

export const{setSearchTerm}=productSlice.actions;
export default productSlice.reducer