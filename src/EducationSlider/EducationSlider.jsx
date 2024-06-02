import React from 'react';


import logo1 from "../assets/img_7.jpg"
 import logo2 from "../assets/img_9.jpg"

 import logo3 from "../assets/img_4.jpg"
 
 import logo4 from "../assets/img_8.jpg"
const EducationSlider = () => {
    return (
        <div>
            
            <div className="carousel w-full mt-10">
  <div id="slide1" className="carousel-item relative w-full h-96 hover:bg-red-800">
    <img src={logo1} className="w-full h-96" />
    {/* <h2>this is slider</h2> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

   
      <a href="#slide4" className="btn btn-circle">❮</a> 

      {/* <h2 className='text-white text-3xl'>this is slider</h2> */}
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96">
    <img src={logo2} className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src={logo3} className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img src={logo4} className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>



        </div>
    );
};

export default EducationSlider;