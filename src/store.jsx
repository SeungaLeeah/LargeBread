import {configureStore} from '@reduxjs/toolkit';
import BasketSlice,{TotalPrice} from './slices/BasketSlice';
import LargeBreadSlice from './slices/LargeBreadSlice';
import PaySlice from './slices/PaySlice';
const store = configureStore({
    reducer: {
        LargeBreadSlice:LargeBreadSlice,
        basket:BasketSlice,
        addCart:PaySlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
    store.dispatch(TotalPrice());
export default store;