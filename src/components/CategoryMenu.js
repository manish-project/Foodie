import React from "react";
import Button from "../layouts/Button";

function CategoryMenu() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-semibold text-center pt-24 pb-4 lg:mb-24 mb-9">
          Our Dishes
        </h1>
      </div>
      <div className=" flex xl:mx-36 lg:mx-24 md:mx-24 justify-between flex-wrap">
        <div className="sm:flex sm:p-5 sm:gap-3 sm:items-center">
          <h2 className="lg:inline-block md:inline-block text-xl font-bold">
            Find the best food.
          </h2>
          <input
            placeholder="Your search begins here."
            className="lg:ml-6 md:ml-5 h-12 lg:w-96 rounded border-4 border-gray-200"
          />
        </div>
        <div className="my-5 flex gap-3 flex-wrap">
          <Button title="All" />
          <Button title="Lunch" />
          <Button title="Brakfast" />
          <Button title="Dinner" />
          <Button title="Snacks" />
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;
