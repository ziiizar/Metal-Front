import PropTypes from "prop-types";

const Button = ({text}) => {
  return (
    <>
     <button type='submit' className=" bg-orange-400 rounded-full h-6 hover:transition-all w-fit px-3 text-white"  >{text}</button>
     </>
   
  )
}

Button.propTypes ={
    text: PropTypes.string,
}


export default Button