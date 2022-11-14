import React from 'react'
import  images  from "../../assets/image.js";
function Home() {
  return (
    <>
      <div className="app__home ">
        <div className="app__app-content">

            <img src={images.avatar} alt="" />
            <div className="app__header text-center ">
              <h1 className='app__header-h1 text-light'>Start react</h1>
              <i className="app__home-icon fa-solid fa-star"></i>
            </div>
          <p className='app__header-p text-center'>Graphic Artist - Web Designer - Illustrator</p>
            
        </div>
      </div>
    </>
  )
}

export default Home