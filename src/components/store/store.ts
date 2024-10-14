import { configureStore } from '@reduxjs/toolkit';
import { rollsReducer } from './rollsSlice';
import { cartReducer } from './cartSlice';



export const store = configureStore({
   reducer: {
      rolls: rollsReducer,
      cart: cartReducer,
   },
});


export type RootState = ReturnType<typeof store.getState>;
