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
    single:"",
    singleSimilarProduct:data.slice(0,4),
    searchTerm:""
}
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        setSearchTerm:(state,action)=>{
                const{payload:searchTerm}=action
                state.productsFromSearch=state.products
                state.searchTerm=searchTerm
                if(state.searchTerm.length>0){
                    state.productsFromSearch.forEach((p)=>{
                        p.setScore=stringSimilarity(`${p.name} ${p.category}`,state.searchTerm)
                    })
                    state.productsFromSearch=sortBy(state.productsFromSearch,"setScore").reverse()
                }
        },
        setSelectedCategory:(state,action)=>{
            const{payload:selectedCategory}=action
            state.searchTerm=""
            state.selectedCategory=selectedCategory
            console.log(selectedCategory)
            if(selectedCategory===defaultCategory)
            {
                state.productsFromSearch=state.products
            }
            else
            {
                state.productsFromSearch=state.products.filter((p)=>p.category==selectedCategory)
            }
        },
        setSingleProduct:(state,action)=>{
            const {payload:id}=action
            state.single=state.products.find((p)=>p.id===+id)
            state.singleSimilarProduct=state.products.filter((p)=>(state.single.category===p.category&&state.single.id!==p.id))
        }
    }
})

export const{setSearchTerm,setSelectedCategory,setSingleProduct}=productSlice.actions;
export default productSlice.reducer