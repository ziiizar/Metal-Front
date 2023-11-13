import React from 'react'
import PropTypes from "prop-types";

const Terms = ({text, link}) => {
  return (
    // <div className="flex flex-col gap-y-2 text-black mb-5">
              <div className="text-8 flex gap-1 place-content-center mb-5 text-black">
                <p>{text}</p>
                
                  {link}
                
              </div>
              /* <div >
                <ul className="flex text-xs justify-between">
                  <li>
                    <a className='hover:text-blue-500'  href="">Terms & Condition</a>
                  </li>
                  <li>
                    <a  className='hover:text-blue-500' href="">Support</a>
                  </li>
                  <li>
                    <a  className='hover:text-blue-500' href="">Customer Care</a>
                  </li>
                </ul>
              </div> */
            // </div>
  )
}

Terms.propTypes ={
    text: PropTypes.string,
    link:PropTypes.element
}

export default Terms