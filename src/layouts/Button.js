import React from "react";

function Button(props) {
  return (
    <button className="px-4 py-1 border-2 border-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full lg:px-7 font-semibold lg:py-2.5 cursor-pointer">
      {props.title}
    </button>
  );
}

export default Button;
