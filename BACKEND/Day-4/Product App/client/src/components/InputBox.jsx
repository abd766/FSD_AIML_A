import React from "react";

const InputBox = ({ title }) => {
  return (
    <div className="">
      <div className="font-bold">
        <h2>{title}</h2>
      </div>
      <div className="border border-slate-200">
        <input placeholder={`Enter your ${title}`} />
      </div>
    </div>
  );
};

export default InputBox;
