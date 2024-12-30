import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { OrderData } from '../types/productsType';

export const fetchRolls: any = createAsyncThunk('rolls/fetchRolls', async () => {
   const response = await axios.get('http://localhost:1010/api/rolls');
   return response.data;
});

export const constPostRolls = createAsyncThunk(
   'rolls/postRolls',
   async (data: OrderData) => {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      return response.data;
   }
);