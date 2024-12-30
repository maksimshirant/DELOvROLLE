export type Products = {
   id: number,
   name: string,
   weight: string,
   ingredients: string[],
   price: number,
   img: string,
   much: string,
   legend: string
};

export type CartItem = {
   product: Products;
   quantity: number;
};

export type OrderData = {
   name: string;
   phone: string;
   address: string;
   comment: string;
   totalPrice: number;
   cartItems: CartItem[];
};