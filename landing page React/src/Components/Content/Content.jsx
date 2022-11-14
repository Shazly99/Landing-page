import React, { useState } from 'react'
 import styled from 'styled-components'

function Content() {

 
  const [Error, setError] = useState(true)
  function handelerror(e) {
    if (e.target.valid) {
      setError(false)
    }
  }
  return (
    <>
      <div className="app__content ">

        <div className="app__content-header">
          <div className="app__header">
            <h1 className='app__header-h1 text-light'>CONTACT ME</h1>
            <i className="app__home-icon fa-solid fa-star"></i>
          </div>
        </div>

        <div className="app__content-form ">
          <div className="mb-3 app__content-form-name position-relative">
            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Name" required={'required'}/>
            <label className='control-label'>Name</label>
          </div>

          <div className="mb-3 app__content-form-name position-relative">
            <input onKeyUp={handelerror} type="email" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Email Address" required={'required'} />
            {
              Error&&
            <span className='error'>Not a valid email address</span>

            }
            <label className='control-label'>Email Address</label>
          </div>

          <div className="mb-3 app__content-form-name position-relative">
            <input type="number" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Phone Number" required={'required'} />
            <label className='control-label'>Phone Number</label>
          </div>

          <div className="mb-3 app__content-form-name position-relative">
            <textarea rows={6} type="number" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Message" required={'required'}/>
            <label className='control-label'>Message</label>
          </div>
          <button className='app__content-form-btn'>send</button>
        </div>



        <div className="app__footer-top w-100">
          <div className='container '>
            <div className="row">
              <div className="col-md-4 ">
                <h4 className="text-uppercase mb-4">LOCATION</h4>
                <p className="lead mb-0">
                  2215 John Daniel Drive
                  <br />
                  Clark, MO 65243
                </p>
              </div>
              <div className="col-md-4 ">
                <h4 className="text-uppercase mb-4">AROUND THE WEB </h4>

              </div>
              <div className="col-md-4 ">
                <h4 className="text-uppercase mb-4">ABOUT FREELANCER
                </h4>
                <p className="lead mb-0 px- ">
                  Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content