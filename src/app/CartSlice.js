import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    cartTotalQuantity:0,
    cartTotalAmount:0

};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemOnCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };

        state.cartItem.push(temp);

        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItem = removeItem;

      localStorage.setItem("cart", JSON.stringify(state.cartItem));

      toast.success(`${action.payload.title} Remove From Cart`);
    },

    setIncreaseItemQTY:(state,action)=>{
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY Increased`);
       
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setDecreaseItemQTY:(state,action)=>{
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity>1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.success(`Item QTY Decreased`);
       
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setClearItemCart:(state,action)=>{
      state.cartItem=[]
      toast.success(`Cart IS Clear`)
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setGetTotal:(state,action)=>{
let{totalAmount,totalQty}=state.cartItem.reduce((cartTotal,cartItem)=>{
  const{price,cartQuantity}= cartItem;
  const totalPrice = price * cartQuantity;

  cartTotal.totalAmount += totalPrice
  cartTotal.totalQty +=cartQuantity

  return cartTotal
},{
  totalAmount:0,
  totalQty:0
})

state.cartTotalAmount =totalAmount;
state.cartTotalQuantity=totalQty
    }
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemOnCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearItemCart,
  setGetTotal
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItem = (state) => state.cart.cartItem;
export const selectTotalQty = (state) => state.cart.cartTotalQuantity;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;

export default CartSlice.reducer;
