import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
const initialState={
    cartItems:[],
    cartNumber:{subtotal:10,shipping:10,tax:4,total:244}
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const{payload:item}=action
            state.cartItems.push({...item,quantity:1})
        },
        removeFromCart:(state,action)=>{
              //write code to delete item from cart            
        }
    }
})

export const{addToCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer