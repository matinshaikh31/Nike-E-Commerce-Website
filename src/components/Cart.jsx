import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { selectCartItem, selectCartState, selectTotalAmount, selectTotalQty, setClearItemCart, setGetTotal } from "../app/CartSlice.js";
import { setCloseCart } from "../app/CartSlice.js";


const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItem = useSelector(selectCartItem);
  const totalAmount =useSelector(selectTotalAmount)
  const totalQty =useSelector(selectTotalQty)



  useEffect(()=>{
    dispatch(setGetTotal())
  },[cartItem,dispatch])

const onClearCartItem=()=>{

dispatch(setClearItemCart())
}

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0  invisible translate-x-8"
      }`}
    >
      <div
        className={`blur-effect-theme h-screen  max-w-xl w-full absolute right-0`}
      >
        <CartCount totalQty={totalQty} onCartToggle={onCartToggle} onClearCartItem={onClearCartItem} />

        {cartItem.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div className="">
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItem?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
<div className=" fixed bottom-0 bg-white w-full px-5 py-2 grid">
<div className=" flex items-center justify-between">
<h1 className="text-base font-semibold uppercase">SubTotal</h1>
<h1 className=" text-sm rounded-none bg-theme-cart text-slate-100 px-3 py-0.5">${totalAmount}</h1>
</div>
<div className=" grid items-center gap-2">
<p className="text-sm  font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
 <button className="button-theme bg-theme-cart text-white">CheckOut</button>    
 </div>
 </div>       
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
