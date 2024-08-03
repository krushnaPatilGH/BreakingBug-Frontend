import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer:{       // CHANGE THE = TO :
        user: userReducer,
    }
});

export default store;