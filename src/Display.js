import React from 'react'
import './Display.css'


const Display = ({colour,state}) => {
  return (
    <div className="Dbox" style={{backgroundColor:colour===''?'white':colour,color:state===true?'black':'white'}}> {colour === '' ? (
      <p>Empty value</p>
    ) : (
      <p>{colour}</p>
    )}
    </div>
  )
}

export default Display