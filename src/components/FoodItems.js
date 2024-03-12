import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../data/FoodData";

function FoodItems() {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center"> 
      {FoodData.map((food) => {
        return (
          <Foodcard
            name={food.name}
            id={food.id}
            img={food.img}
            rating={food.rating}
            desc={food.desc}
            price={food.price}
          />
        );
      })}
    </div>
  );
}

export default FoodItems;
