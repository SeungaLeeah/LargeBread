import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

export const getLargeBread = createAsyncThunk("LargeBreadSlice/getLargeBread", async(payload,{rejectWithValue})=>{
  let result = null;

  try{
    result = await axios.get('');
  }catch(err) {
    result = rejectWithValue(err.response);
  }
  return result;
});

const LargeBreadSlice = createSlice({
  name: 'LargeBread',
  initialState: {
    data: null,       
    loading: false, 
    error:null        
  },
  reducers: {},
  extraReducers: {
    [getLargeBread.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [getLargeBread.fulfilled]: (state,{payload})=>{
      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getLargeBread.rejected]: (state,{payload})=>{
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

export default LargeBreadSlice.reducer;
