import React from "react";
import Button from "../layouts/Button";

function Home() {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center  lg:px-32 px-5 bg-cover bg-no-repeat bg-[url('./Images/hero.jpg')]">
      <div className="w-full lg:w-2.5/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl ">
          Elevate Your Inner Foodie With Every Bite!
        </h1>
        <p className="text-backgroundColor font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat
          nesciunt enim accusantium nostrum quasi libero aliquid est nulla
          provident.
        </p>
        <div className="pb-5 text-green-500">
          <Button title="Order now" />
        </div>
      </div>
    </div>
  );
}

export default Home;
