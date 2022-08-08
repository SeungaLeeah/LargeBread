import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    basketItems: localStorage.getItem("basketItems")
     ? JSON.parse(localStorage.getItem("basketItems"))
     : [],
    basketTotalQuantity: 0,
    basketTotalAmount: 0,
};

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addToBasket(state, action){
            const itemIndex = state.basketItems.findIndex(
                (item)=> item.id === action.payload.id
            );
            if(itemIndex >= 0) { 
                state.basketItems[itemIndex].basketQuantity += 1;
            }else{
                const tempItem = {...action.payload, basketQuantity: 1};
                state.basketItems.push(tempItem);
            }
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
        },
    },
});

export const { addToBasket } = BasketSlice.actions;

export default BasketSlice.reducer;