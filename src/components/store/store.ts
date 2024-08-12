import { configureStore } from '@reduxjs/toolkit';
import { rollsReducer } from './rollsSlice';



export const store = configureStore({
   reducer: {
      rolls: rollsReducer,
   },
});


export type RootState = ReturnType<typeof store.getState>;
