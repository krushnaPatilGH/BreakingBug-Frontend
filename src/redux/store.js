import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

// CHANGE THE = TO :
const store = configureStore({
    reducer:{
        user: userReducer,
    }
});

export default store;