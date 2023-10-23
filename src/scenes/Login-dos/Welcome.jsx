import React from "react";
import Terms from "./Terms";
import Title from "./Title";
import PropTypes from "prop-types";

const Welcome = ({children}) => {
  return (
    <div className="w-full h-full prueba text-white flex place-content-center items-center  overflow-hidden ">

      {/* <div className="bola rounded-full w-[500px] h-[500px] relative top-[70%] right-[10%] z-10 " ></div> */}

      <div className="bola rounded-full w-[300px] h-[300px] relative top-[-48%] right-[-25%] z-10 " ></div>

      <div className=" relative top-[20%] z-10 blur-sm" >

        <img className="relative " src="public\Group 10.svg" alt="">

        </img>
        <img className="z-20 absolute top-[30%] right-[33%]" src="public\Shape.svg" alt="" />  
        
      </div>

      <div className="sm:w-[40%]  h-4/5 border-[1px] border-gray-400 rounded-md  flex place-content-center items-center shadow-2xl shadow-black   max-h-[500px] max-w-[320px] absolute z-20 ">

      <div className="w-11/12 h-[90%]">
        <div className="flex flex-col justify-between w-full h-full">

     

        {children}
        </div>
    </div>
    
      </div>
    </div>
  );
};

Welcome.propTypes ={
  children: PropTypes.element
}


export default Welcome;
