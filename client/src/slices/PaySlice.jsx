import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
//import {cloneDeep} from 'lodash';

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


const PaySlice = createSlice({
  name: 'addCart',
  initialState: {
    data: null,       
    loading: false, 
    error:null        
  },
  reducers: {},
  extraReducers: {
    [addCart.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [addCart.fulfilled]: (state,{meta,payload})=>{
        let data = [];

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
    [addCart.rejected]: (state,{payload})=>{
      return{
        data: payload?.date,
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    }
  },
});

export default PaySlice.reducer;
