import React from "react";

function BtnPink({ children = "button", onCLick, type = "button", onSubmit }) {
  return (
    <button
      type={type}
      className="bg-pink text-white text-sm md:text-xl font-semibold w-fit py-3 md:py-4 px-10 rounded-full flex items-center justify-center"
      onClick={onCLick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
}

export default BtnPink;
