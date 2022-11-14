import React, { useState } from 'react'
import image from '../../assets/image'

function Portfolio() {
  const [imageSrc, setImagesrc] = useState('');
  const [headerSrc, setheadersrc] = useState('');

  function pathImage(e) {
    setImagesrc(e.nativeEvent.path[1].firstChild.currentSrc);
    console.log(e);
    setheadersrc(e.nativeEvent.path[1].children[1].innerHTML);
  }

  return (
    <>
      <div className="app__portfolio mb-5 pb-5">
        <div className="app__portfolio-header">
          <div className="app__header mt-5 mb-5">
            <h1 className='app__header-h1 text-dark'>PORTFOLIO</h1>
            <i className="app__home-icon fa-solid fa-star"></i>
          </div>
        </div>

        <div className="app__portfolio-image container">
          <div className="row ">
            <div className="col-md-4 ">
              <div onClick={(e) => pathImage(e)} data-bs-toggle="modal" data-bs-target="#modalId" className=' app__portfolio-image-content  mb-4 position-relative'>
                <img src={image.cabin} className="w-100 img-fluid  rounded-3" />
                <div className="hidding">LOG CABIN</div>
                <div className="overlayout "></div>
                <i className="app__portfolio-image-icon position-absolute fw-bolder fa-solid fa-plus"></i>
              </div>
            </div>

            <div className="col-md-4 ">
              <div onClick={(e) => pathImage(e)} data-bs-toggle="modal" data-bs-target="#modalId" className='app__portfolio-image-content  mb-4 position-relative'>
                <img src={image.cake} className="w-100 img-fluid  rounded-3" />
                <div className="hidding">TASTY CAKE</div>
                <div className="overlayout"></div>
                <i className="app__portfolio-image-icon position-absolute fw-bolder fa-solid fa-plus"></i>
              </div>
            </div>

            <div className="col-md-4 ">
              <div onClick={(e) => pathImage(e)} data-bs-toggle="modal" data-bs-target="#modalId" className='app__portfolio-image-content  mb-4 position-relative'>
                <img src={image.circus} className="w-100 img-fluid  rounded-3" />
                <div className="hidding">CIRCUS TENT</div>
                <div className="overlayout"></div>
                <i className="app__portfolio-image-icon position-absolute fw-bolder fa-solid fa-plus"></i>
              </div>
            </div>

            <div className="col-md-4 ">
              <div onClick={(e) => pathImage(e)}  data-bs-toggle="modal" data-bs-target="#modalId" className='app__portfolio-image-content  mb-4 position-relative'>
                <img src={image.game} className="w-100 img-fluid  rounded-3" />
                <div className="hidding">CONTROLLER</div>

                <div className="overlayout"></div>
                <i className="app__portfolio-image-icon position-absolute fw-bolder fa-solid fa-plus"></i>
              </div>
            </div>

            <div className="col-md-4 ">
              <div onClick={(e) => pathImage(e)}  data-bs-toggle="modal" data-bs-target="#modalId" className='app__portfolio-image-content   mb-4 position-relative'>
                <img src={image.safe} className="w-100 img-fluid  rounded-3" />
                <div className="hidding">LOCKED SAFE</div>
                <div className="overlayout"></div>
                <i className="app__portfolio-image-icon position-absolute fw-bolder fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="col-md-4 ">
              <div onClick={(e) => pathImage(e)}  data-bs-toggle="modal" data-bs-target="#modalId" className='app__portfolio-image-content  mb-4 position-relative'>
                <img src={image.submarine} className="w-100 img-fluid  rounded-3" />
                <div className="hidding">SUBMARINE</div>
                <div className="overlayout"></div>
                <i className="app__portfolio-image-icon position-absolute fw-bolder fa-solid fa-plus"></i>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* dynamic modal */}
      <div className="modal fade" id="modalId" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div className="modal-dialog modal-sm " role="document">
          <div className="modal-content">
            <div className="modal-header position-relative ">
              <div className="app__portfolio-header">
                <div className="app__header mt-5 mb-5">
                  <h1 className='app__header-h1 text-dark'>{headerSrc.toLocaleUpperCase()}</h1>
                  <i className="app__home-icon fa-solid fa-star"></i>
                </div>
              </div>
              <i class="position-absolute fa-solid fa-xmark app__model__btn-close" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div className="modal-body">
              <img className='app__model-img mb-5' src={imageSrc} />
              <p className='mb-3 w-75 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa ipsa voluptates consequatur dolorum nam voluptatibus quaerat perspiciatis, est qui dignissimos facilis praesentium neque. Suscipit ut corrupti voluptatibus omnis natus.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="modal__footer-btn" data-bs-dismiss="modal">
                <i class="fa-solid fa-xmark mt-1"></i>Close Window</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio