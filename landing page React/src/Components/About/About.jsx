import React from 'react'

function About() {
  return (
    <>
      <div className='app__about'>
        

        <div className="app__header">
          <h1 className='app__header-h1 text-light'>About</h1>
          <i class="app__home-icon fa-solid fa-star"></i>
        </div>

        <div class="row container d-flex justify-content-center mt-5">
          <div class="col-lg-4  ml-auto"><p class="lead app__about-p">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
          <div class="col-lg-4 mr-auto"><p class="lead app__about-p">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>


      </div>
    </>
  )
}

export default About