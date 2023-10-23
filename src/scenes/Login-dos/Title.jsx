import React from 'react'
import PropTypes from "prop-types";

const Title = ({title, subtitle}) => {
  return (
    <div className="flex flex-col">
                  <h2 className="figmaTitleText">{title}</h2>
                  <p>{subtitle}</p>
                </div>
  )
}

Title.propTypes ={
    title: PropTypes.string,
    subtitle:PropTypes.string
}

export default Title