import  { useState } from "react";
import PropTypes from "prop-types";

function Accordion({ header, body, active }) {
  const [isActive, setIsActive] = useState(active);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`w-[280px] p-5 bg-teal-600 border border-[#c9c6c655] rounded-md  duration-500 group ${
        isActive ? "" : " bg-slate-800"
      }`}
    >
      <div className="flex items-center">
        <div className={`w-full `}>{header}</div>
        <div
          className={`text-xl cursor-pointer duration-00 
          `
        }
          onClick={handleToggleActive}
        > 
          {isActive ? "-" : "+" }
          
        </div>
      </div>
      <div
        className={`overflow-hidden text-justify duration-500 max-h-0 ${
          isActive ? "max-h-[100px]" : ""
        }`}
      >
        {body}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  header: PropTypes.string,
  body: PropTypes.node,
  active: PropTypes.number,
};

export default Accordion;
