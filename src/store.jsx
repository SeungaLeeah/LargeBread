import {configureStore} from '@reduxjs/toolkit';
import LargeBreadSlice from './slices/LargeBreadSlice';

const store = configureStore({
    reducer: {
        LargeBreadSlice:LargeBreadSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;