import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
const initialState={
    cartItems:data.slice(0,3),
    cartNumber:{subtotal:10,shipping:10,tax:4,total:244}
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            //write code to add item in cart
        },
        removeFromCart:(state,action)=>{
              //write code to delete item from cart            
        }
    }
})

export const{addToCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer