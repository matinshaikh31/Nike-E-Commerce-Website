import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemOnCart,setOpenCart } from "../../app/CartSlice";

export const Item = ({
  ifExists,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {

const dispatch = useDispatch();

const onCartToggle = () => {
  dispatch(
    setOpenCart({
      cartState: true,
    })
  );
};
  const onAddToCart = () => {
    const item = {id, title, text, img, price, color,shadow};
    dispatch(setAddItemOnCart(item))
  };

  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        ifExists ? " justify-items-start" : " justify-items-center"
      }  rounded-xl py-4 px-5  transition-all duration-700 ease-in-out w-full  hover:scale-105  `}
    >
      <div
        className={`grid items-center ${
          ifExists ? " justify-items-start" : " justify-items-center"
        } `}
      >
        <h1 className="  text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200 text-base md:text-sm font-normal filter drop-shadow">
          {" "}
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80 px-1 rounded">
            <h1 className="text-black text-sm font-medium blur-effect-theme">
              ${price}
            </h1>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <StarIcon className="icon-style  w-5 h-5 md:w-4 md:h-4" />
            <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200"
            onClick={()=>onAddToCart()}
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            className="bg-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow shadow-slate-200 text-black text-sm"
            onClick={()=>{onAddToCart();onCartToggle();}}>
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? " absolute top-5 right-1" : " justify-items-center"
        }`}
      >
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className={` transitions-theme hover:-rotate-12 ${
            ifExists
              ? " h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64"
          }`}
        />
      </div>
    </div>
  );
};
