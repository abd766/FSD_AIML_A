import React from "react";

const Button = ({ title, onclick }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border rounded shadow-lg bg-black text-white m-2 p-4 hover:bg-slate-600">
        <button onClick={onclick}>{title}</button>
      </div>
    </div>
  );
};

export default Button;
