import React from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { Link } from "react-router-dom";

const New_Event = () => {
  defineElement(lottie.loadAnimation);
  return (
    <div className=" w-full  lg:col-span-2 flex border-4 border-teal-950  border-dotted  gap-2 place-content-center ">
      <Link to={"/Events/NewEvent"}>
        <lord-icon
          src="https://cdn.lordicon.com/mecwbjnp.json"
          trigger=""
          colors="primary:#121331,secondary:#121331"
          style={{ width: "120px", height: "120px" }}
          className="cursor-pointer"
        ></lord-icon>
      </Link>
    </div>
  );
};

export default New_Event;
