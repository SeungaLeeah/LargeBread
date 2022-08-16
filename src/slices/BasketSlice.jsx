import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {pending, rejected} from '../Action';
import axios from 'axios';

const API_URL = `http://localhost:3001`

/* 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('LargeBreadSlice/postItem', async(payload, { rejectWithValue})=>{
    let result = null;
    
    try{
      result = await axios.post(API_URL,{
        product_name: payload.product_name,
        img_url: payload.img_url,
        price: payload.price
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
          let {total,quantity} = state.basketItems.reduce(
                (basketTotal, basketItem)=>{
                const {price, basketQuantity } = basketItem;
                const itemTotal = price *basketQuantity;

                basketTotal.total += itemTotal
                basketTotal.quantity += basketQuantity
                
                return basketTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.basketTotalQuantity = quantity;
            state.basketTotalAmount = total;
        }
    },
    extraReducers: {
    /* 데이터 저장을 위한 액션 함수 */
        [postItem.pending]: pending,
        [postItem.fulfilled]: (state,{meta,payload})=>{
            let data = null;

            if(Array.isArray(state.data)){
            data=[...state.data];
            data.push(payload.data);
            }else{
            data=payload.data;
            }
            return{
            data: data,
            loading: false,
            error: null
            }
        },
        [postItem.rejected]: rejected,
            }
        });

export const { addToBasket, removeFromBasket, DecreaseBasket, cleanBasket, TotalPrice } = BasketSlice.actions;

export default BasketSlice.reducer;