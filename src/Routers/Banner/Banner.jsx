// import React from 'react';
import image  from"../../assets/education.jpg"

const Banner = () => {
    return (
        <div className=" lg:my-40 md:my:my-30 sm:my-10">
            <h1 className="text-3xl text-center text-pink-600 my-10">Education Training Banner</h1>
           <img className="my-12" src={image} alt="" />
        </div>
    );
};

export default Banner;