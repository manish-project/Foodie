import React from "react";
import Button from "../layouts/Button";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Foodcard(props) {
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col gap-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <img
        src={props.img}
        alt=""
        className="w-auto h-[130px] cursor-grab hover:scale-200 transition-all duration-300 ease-in-out"
      />
      <div className="flex justify-between text-sm items-center">
        <h2>{props.name}</h2>
        <span className="text-brightColor font-semibold">₹{props.price}</span>
      </div>
      <p className="font-normal text-sm word-wrap">
        {props.desc.slice(0, 50)}...
      </p>
      <div className="flex justify-between items-center">
        <span className="flex items-center text-brightColor">
          <FaStar /> <FaStarHalfAlt /> {props.rating}
        </span>
        <Button title="Add to cart" />
      </div>
    </div>
  );
}

export default Foodcard;
