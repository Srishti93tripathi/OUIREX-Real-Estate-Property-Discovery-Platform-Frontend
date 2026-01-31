import React from 'react'

const Testimonial = () => {
  return (
   
      <>

<div className="row py-5 background ">
  <div className="text-center ">
      <div className="tagline ">Our Testimonial</div>
      <h2 className="section-title">Clients Feedback</h2>
    </div>
     <div className="col-sm-10 mx-auto" data-aos="fade-up"
     data-aos-duration="1200">
        <div className="row py-3">
           <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>Quirex made buying our first home incredibly easy. From detailed listings to helpful support, everything was smooth and transparent. We found our dream home in just a few days!</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/img/1.jpg_1.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Jacob William</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>As a first-time seller, I was nervous, but Quirex guided me through every step. Their platform is simple and effective. I sold my property faster than I expected!</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/img/2.jpg_1.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Kelian Anderson</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>Finding a rental was never this easy. With just a few filters, I landed a perfect apartment in a great location. Highly recommend Quirex for stress-free property searches!</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/img/3.jpg_2.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Adam Joseph</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
 
  



    </>

  )
}

export default Testimonial
