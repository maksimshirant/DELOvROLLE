import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRolls: any = createAsyncThunk('rolls/fetchRolls', async () => {
   const response = await axios.get('http://localhost:1010/api/rolls');
   return response.data;
});