import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";

function Cart() {
  return (
    <>
      <div className="fixed right-0 top-0 lg:w-[20vw] md:w-[20vw] bg-white h-full w-full p-5 mb-3">
        <div className="flex my-5 mx-5 justify-between items-center m">
          <h1 className="text-xl font-bold">My Order</h1>
          <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className="absolute bottom-0">
          <h2 className="font-semibold text-gray-800 P-2">Items:</h2>
          <h2 className="font-semibold text-gray-800 P-2">Total Amount:</h2>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <div className="mx-auto w-full">
            <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] md:w-[16vw] mb-5  ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
