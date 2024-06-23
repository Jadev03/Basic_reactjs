import React from 'react'
import './Toggle.css'

const Toggle = ({changeState}) => {
 
  return (
    <div>
        <button type='' onClick={()=>changeState((prevstate)=>!prevstate)}>Toggle Text colour</button>
    </div>
  )
}

export default Toggle