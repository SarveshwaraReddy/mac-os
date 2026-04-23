import React from 'react'
import "./title.css"
const Title = ({ title = "Spotify" }) => {
  return (
    <div className='title'>{title}
    <hr /></div>
    
  )
}

export default Title