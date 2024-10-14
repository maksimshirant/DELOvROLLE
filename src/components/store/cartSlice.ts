import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../cards/CardItem";


interface CartItem {
   product: Product;
   quantity: number;
}

interface CartState {
   items: CartItem[];
}

const initialState: CartState = {
   items: [],
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<Product>) => {
         const itemIndex = state.items.findIndex(
            item => item.product.id === action.payload.id
         );
         if (itemIndex >= 0) {
            state.items[itemIndex].quantity += 1;
         } else {
            state.items.push({ product: action.payload, quantity: 1 });
         }
      },
      removeFromCart: (state, action: PayloadAction<number>) => {
         state.items = state.items.filter(item => item.product.id !== action.payload);
      },
      clearCart: state => {
         state.items = [];
      }
   }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
