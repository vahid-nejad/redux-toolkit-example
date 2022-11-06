import React from "react";
import { products } from "../dummyData";
import { addToCart } from "../store/features/cartSlice";
import { useAppDispatch } from "../store/store";

const Products = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="rounded-md border shadow flex gap-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-md border shadow hover:shadow-md transition cursor-pointer w-40 p-2 flex flex-col justify-center items-center "
        >
          <img src="/vite.svg" alt="" className="w-24" />
          <p className="text-gray-700">{product.name}</p>
          <p className="text-green-500">{product.price} $</p>
          <button
            className="rounded-md shadow bg-violet-600 hover:bg-violet-700 text-white cursor-pointer py-2 px-4 "
            onClick={() => dispatch(addToCart({ product, qty: 1 }))}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
