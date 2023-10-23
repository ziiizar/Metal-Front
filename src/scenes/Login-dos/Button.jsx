import React from 'react'
import PropTypes from "prop-types";

const Button = ({text}) => {
  return (
    <>
     <button type='submit' className=" bg-gradient-to-r from-orange-400 via-pink-500 to-blue-800 rounded-md h-8 hover:transition-all hover:bg-gradient-to-r hover:from-orange-600 hover:via-pink-700 hover:to-blue-900  "  >{text}</button>
     </>
   
  )
}

Button.propTypes ={
    text: PropTypes.string,
}


export default Button