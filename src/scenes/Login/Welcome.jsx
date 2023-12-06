import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Welcome = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="w-screen h-screen  text-white flex place-content-center items-center  overflow-hidden bg-loginBackground bg-cover relative">
      <div className="absolute azulLogin z-10 w-full h-[95%] top-0 right-0"></div>
      <div
        onClick={handleClick}
        className="absolute negroLogin z-10 w-[30%] md:w-[10%] h-[15%] bottom-0 left-0 flex place-content-center items-center"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="23"
            fill="none"
            viewBox="0 0 30 23"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M5.381 11.182l3.694 4.657c.138.162.249.357.326.575a2.185 2.185 0 01.02 1.385c-.071.221-.177.422-.31.59a1.431 1.431 0 01-.468.39c-.175.09-.363.133-.551.129a1.168 1.168 0 01-.548-.153 1.466 1.466 0 01-.456-.411L.994 10.662 0 9.41l.994-1.253L7.087.476c.267-.313.62-.484.984-.476.364.008.712.194.97.52.257.324.405.762.411 1.221.007.46-.129.904-.377 1.24L5.381 7.637h18.525c1.616 0 3.166.81 4.31 2.25C29.357 11.327 30 13.281 30 15.319c0 2.037-.642 3.99-1.785 5.431-1.143 1.44-2.693 2.25-4.309 2.25h-3.75c-.373 0-.73-.187-.994-.52a2.03 2.03 0 01-.412-1.253c0-.47.148-.92.412-1.253.264-.332.621-.52.994-.52h3.75c.87 0 1.705-.435 2.32-1.21.616-.776.962-1.828.962-2.925 0-1.097-.346-2.15-.962-2.925-.615-.776-1.45-1.212-2.32-1.212H5.381z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* <div className="bola rounded-full w-[500px] h-[500px] relative top-[48%] right-[10%] z-10 "></div>

      <div className="bola rounded-full w-[300px] h-[300px] relative top-[-48%] right-[-25%] z-10 "></div>

      <div className=" relative top-[20%] z-10 blur-sm">
        <img className="relative " src="src/assets/Group 10.svg" alt=""></img>
        <img
          className="z-20 absolute top-[30%] right-[33%]"
          src="src/assets/Shape.svg"
          alt=""
        />
      </div> */}

      <div className="sm:w-[40%]  h-auto border-[1px] border-gray-400 rounded-xl  flex place-content-center items-center shadow-md  max-h-[500px] max-w-[320px]  z-20 backdrop-blur-md">
        <div className="flex flex-col justify-between  gap-4 w-[85%] h-[90%] pt-5">
          {children}
        </div>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  children: PropTypes.element,
};

export default Welcome;
