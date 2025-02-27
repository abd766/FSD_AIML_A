import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-lg">
        <div>
            <Button title={"ABD766"} onclick={""}/>
        </div>
      <div className="flex space-between">
        <Button title={"Add"} onclick={""} />
        <Button title={"Edit"} onclick={""} />
        <Button title={"Delete"} onclick={""} />
      </div>
    </div>
  );
};

export default Navbar;
