import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {pending, rejected} from '../Action';
import axios from 'axios';
import {cloneDeep} from 'lodash';

const API_URL = `http://localhost:3001`

/* 데이터 저장을 위한 비동기 함수 */
export const addCart = createAsyncThunk('LargeBreadSlice/addCart', async(payload, { rejectWithValue})=>{
    let result = null;
    
    try{
        result = await axios.post(`${API_URL}/product`,{
            amount: payload.amount,
            product_id: payload.product_id
      })
    }catch(err){
      result = rejectWithValue(err.response);
    }
    return result;
  });

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
    extraReducers: {
    /* 데이터 저장을 위한 액션 함수 */
        [addCart.pending]: pending,
        [addCart.fulfilled]: (state,{meta,payload})=>{
            const data = cloneDeep(state.data);
            data.item.unshift(payload.data.item);
            data.item.pop();
            return{
                data: data,
                loading: false,
                error: null
            }
        },
        [addCart.rejected]: rejected,
    }
});

export const { addToBasket, removeFromBasket, DecreaseBasket, cleanBasket, TotalPrice } = BasketSlice.actions;

export default BasketSlice.reducer;