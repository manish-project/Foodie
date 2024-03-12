import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function ItemCard() {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-3 mb-3">
      <MdDelete className="absolute right-7 text-gray-800 hover:text-red-600" />

      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="Images"
        className="w-[50px] h-[50px]"
      />
      <div className="leading-8">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹130</span>
          <div className="flex items-center justify-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl cursor-pointer" />
            <span className="text-xl font-medium ">1</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500  hover:border-none rounded-md text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
