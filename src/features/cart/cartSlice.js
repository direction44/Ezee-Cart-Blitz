import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"
const initialState={
    cartItems:[],
    cartNumber:{subtotal:0,shipping:0,tax:0,total:0}
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
            const {payload:item}=action
            // state.cartItems=state.cartItems.filter((p)=>p.id!=item.id)
            let index=state.cartItems.findIndex((product)=>product.id===item.id) 
            state.cartItems.splice(index,1)        
        },
        setQuantity:(state,action)=>{
            const {item,qty}=action.payload
            state.cartItems=state.cartItems.map((cartItem)=>{
                return cartItem.id===item.id?{...cartItem,quantity:cartItem.quantity+qty}:cartItem
            })

            state.cartItems=state.cartItems.filter((cartItem)=>cartItem.quantity>=1)
        },
        setCartNumbers:(state)=>{
            let subtotal=0,shipping=0,tax=0,total=0
            state.cartItems.forEach(item => {
                subtotal+=item.quantity*item.price
                shipping+=item.quantity*40
            });
            tax=(subtotal*18)/100
            total=subtotal+tax+shipping
            state.cartNumber={subtotal,shipping,tax,total}
        }
    }
})

export const{addToCart,removeFromCart,setQuantity,setCartNumbers}=cartSlice.actions

export default cartSlice.reducer