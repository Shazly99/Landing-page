import React from 'react'
import image from '../../assets/image'

function NotFound() {
  return (
    <div className='app__notfound'>
        <img src={image.error} alt="" />
    </div>
  )
}

export default NotFound