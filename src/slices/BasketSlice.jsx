import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    basketItems: [],
    basketTotalQuantity: 0,
    basketTotalAmount: 0,
};

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addToBasket(state, action){
            state.basketItems.push(action.payload);
        },
    },
});

export const { addToBasket } = BasketSlice.actions;

export default BasketSlice.reducer;