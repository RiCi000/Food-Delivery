import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { DecreaseItemQuantityItem, IncreseItemQuantityItem } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(DecreaseItemQuantityItem(pizzaId))}
      >
        -
      </Button>
      <span className="py-3 sm:flex sm:items-center sm:justify-btween">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(IncreseItemQuantityItem(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
