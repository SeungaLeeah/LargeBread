import { createSlice } from "@reduxjs/toolkit";

const BasketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketItems: localStorage.getItem("basketItems")
        ? JSON.parse(localStorage.getItem("basketItems"))
        : [],
        basketTotalQuantity: 0,
        basketTotalAmount: 0,
        basketQuantity:0,

        data: null,       
        loading: false, 
        error:null   
    },
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
        removeFromBasket(state, action){
            const nextBasketItems = state.basketItems.filter(
                (basketItem) => basketItem.id !== action.payload.id
            );
            state.basketItems = nextBasketItems;
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
        },
        DecreaseBasket(state, action){
            const itemIndex = state.basketItems.findIndex(
                (basketItem)=> basketItem.id === action.payload.id
            );

            if(state.basketItems[itemIndex].basketQuantity > 1){
                state.basketItems[itemIndex].basketQuantity -= 1;
            }else if(state.basketItems[itemIndex].basketTotalQuantity === 1){
                const nextBasketItems = state.basketItems.filter(
                    (basketItem) => basketItem.id !== action.payload.id
                );
                state.basketItems = nextBasketItems;
            }
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
        },

        cleanBasket(state, action){
            state.basketItems=[]
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
        },
        TotalPrice(state, action){
          let {total,quantity, amount} = state.basketItems.reduce(
                (basketTotal, basketItem)=>{
                const {price, basketQuantity } = basketItem;
                const itemTotal = price * basketQuantity;

                basketTotal.total += itemTotal
                basketTotal.quantity += basketQuantity
                basketTotal.amount = basketQuantity

                return basketTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                    amount:0,
                }
            );
            state.basketTotalQuantity = quantity;
            state.basketTotalAmount = total;
            state.basketQuantity= amount;
        }
    },
});

export const { addToBasket, removeFromBasket, DecreaseBasket, cleanBasket, TotalPrice } = BasketSlice.actions;

export default BasketSlice.reducer;