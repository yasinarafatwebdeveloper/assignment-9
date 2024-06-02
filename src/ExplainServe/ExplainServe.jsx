import React from 'react';

const ExplainServe = ({oneservice}) => {
   const {name,image,details,price}=oneservice
    return (
        <div>
            <div className="card w-72 text-center items-center hover:bg-gray-600 mx-auto mt-6  bg-rose-800 text-white bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>{price}</p>
  </div>
</div>
        </div>
    );
};

export default ExplainServe;