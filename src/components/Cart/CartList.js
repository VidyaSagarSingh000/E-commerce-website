import React from "react";
import CartItem from "./CartItem";

const CartList = ({ value }) => {
  const { cart } = value;
  return (
    <div>
      {cart.map(product => {
        return <CartItem key={product.id} value={value} product={product} />;
      })}
    </div>
  );
};

export default CartList;
