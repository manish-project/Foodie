import React from "react";
import { BiRestaurant } from "react-icons/bi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-white rounded-t-3xl lg:mt-12 mt-8">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className=" flex items-center font-semibold text-xl pb-4">
            <BiRestaurant />
            Foodie
          </h1>
          <p className="text-md">
            Indulge in a symphony if flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <ul className="font-medium ">
              <li>
                <Link
                  to="/"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/Reviews"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <ul>
              <li>
                <Link
                  to="/"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Our Dishes
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Premium Menu
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <ul>
              <li>
                <Link
                  to="/"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  maniskumarr8@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  7482888428
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Social Media
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="bg-gray-900" />
      <p className="text-center py-4 font-semibold gap-2">
        <span className="">&copy;</span>Copyright developed by
        <span className="text-md text-brightColor"> Manish </span>| All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
