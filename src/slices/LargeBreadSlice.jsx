import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// 액션함수를 위한 hooks 사용
import {pending, fulfilled, rejected} from '../Action';
import axios from 'axios';

const API_URL = "http://localhost:3001/ca/";

/* 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk('LargeBreadSlice/getList', async(payload,{rejectValue})=>{
  let result = null;
  
  try {
    result = await axios.get(API_URL,{
      params:{
        name: payload.name,
        image: payload.image,
        price: payload.price
      }
    });
  }catch(err){
    result = rejectValue(err.response);
  }
  return result;
});

/* 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem  = createAsyncThunk('LargeBreadSlice/ getItem', async(payload, {rejectWithValue})=>{
  let result = null;

  try{
    result= await axios.get(`${API_URL}${payload?.id}/`);
  }catch(err){
    result = rejectWithValue(err.response);
  }
  return result;
});
/* 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('LargeBreadSlice/postItem', async(payload, { rejectWithValue})=>{
  let result = null;
  
  try{
    result = await axios.post(API_URL,{
      name: payload.name,
      image: payload.image,
      price: payload.price
    })
  }catch(err){
    result = rejectWithValue(err.response);
  }
  return result;
});
/* 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk('LargeBreadSlice/putItem', async(payload, { rejectWithValue})=>{
  let result = null;
  
  try{
    result = await axios.put(API_URL,{
      name: payload.name,
      image: payload.image,
      price: payload.price
    })
  }catch(err){
    result = rejectWithValue(err.response);
  }
  return result;
});
/* 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk('LargeBreadSlice/deleteItem', async(payload, { rejectWithValue})=>{
  let result = null;
  
  try{
    result = await axios.delete(`${API_URL}${payload?.id}/`);
  }catch(err){
    result = rejectWithValue(err.response);
  }
  return result;
});

const LargeBreadSlice = createSlice({
  name: 'LargeBreadSlice',
  initialState: {
    data: null,       
    loading: false, 
    error:null        
  },
  reducers: {},
  extraReducers: { 
  /* 다중행 데이터 조회를 위한 액션 함수 */
  [getList.pending]: pending,
  [getList.fulfilled]: fulfilled,
  [getList.rejected]: rejected,

  /* 단일행 데이터 조회를 위한 액션 함수 */
  [getList.pending]: pending,
  [getList.fulfilled]: fulfilled,
  [getList.rejected]: rejected,

  /* 데이터 저장을 위한 액션 함수 */
  [postItem.pending]: pending,
  [postItem.fulfilled]: fulfilled,
  [postItem.rejected]: rejected,

  /* 데이터 수정을 위한 액션 함수 */
  [putItem.pending]: pending,
  [putItem.fulfilled]: fulfilled,
  [putItem.rejected]: rejected,

  /* 데이터 삭제를 위한 액션 함수 */
  [deleteItem.pending]: pending,
  [deleteItem.fulfilled]: fulfilled,
  [deleteItem.rejected]: rejected,

  },
});

export default LargeBreadSlice.reducer;
