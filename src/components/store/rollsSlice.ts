import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../types/productsType';
import { fetchRolls } from '../fetching/fetchRolls';


const rollsSlice = createSlice({
   name: 'rolls',
   initialState: [] as Products[],
   reducers: {
      sortRolls: (state, action) => {
         switch (action.payload) {
            case 'priceLow':
               return [...state].sort((a, b) => parseInt(a.price) - parseInt(b.price));
            case 'priceHigh':
               return [...state].sort((a, b) => parseInt(b.price) - parseInt(a.price));
            case 'nameAZ':
               return [...state].sort((a, b) => a.name.localeCompare(b.name));
            case 'nameZA':
               return [...state].sort((a, b) => b.name.localeCompare(a.name));
            case 'lowWeight':
               return [...state].sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
            case 'highWeight':
               return [...state].sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
            default:
               return state;
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchRolls.fulfilled, (state, action) => {
         return action.payload;
      });
   }
});


export const { sortRolls } = rollsSlice.actions;
export const rollsReducer = rollsSlice.reducer;
