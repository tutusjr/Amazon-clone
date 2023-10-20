import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    productsNumber: 0,
}

export const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // check if the product is already in the cart
            const addProductExists = state.products.find(product => product.id === action.payload.id);
            if(addProductExists) {
                addProductExists.quaantity += parseInt(action.payload.quantity);
            }else{
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)});
            }
            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action) => {
            //find the product removing the array
            const productToRemove = state.products.find(product => product.id === action.payload);
            //remove the quantity from the product number
            state.productsNumber = state.productsNumber - productToRemove.quantity;
            //find index of the product removing
            const indexToRemove = state.products.findIndex(product => product.id === action.payload);
            //remove the product from the array
            state.products.splice(indexToRemove, 1);
        }
    }, 
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;