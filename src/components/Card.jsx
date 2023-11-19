import React from 'react'
import './CardStyles.css'
const Card = ({title, contents}) => {
  return (
    <div className='cardContainer'>
        <div className="headerContainer">
            <h3>{title}</h3>
        </div>
        <div className="paragraphContainer">
        {/* <div dangerouslySetInnerHTML={{__html: contents}} /> */}
        </div>
        
        
    </div>
  )
}

export default Card