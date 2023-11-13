import React from 'react'
import PropTypes from "prop-types";

const Title = ({title, subtitle}) => {
  return (
    <div className="flex flex-col">
                  <h3 className="text-xl">{title}</h3>
                  <p className='text-8'>{subtitle}</p>
                </div>
  )
}

Title.propTypes ={
    title: PropTypes.string,
    subtitle:PropTypes.string
}

export default Title