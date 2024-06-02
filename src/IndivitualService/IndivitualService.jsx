import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IndivitualService = ({output}) => {
// console.log(output)
    const {id,name,image,details,price}=output


// const [page,setPage]=useState({})



    return (
        <div>
            <div className="card h-96 bg-base-100 shadow  hover:rotate-3 scale-100 translate-x-6 ">


  <figure><img className='w-60 border rounded-2xl' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">

      <Link to={`/oneservice/${id}`}>
      <button className="btn btn-neutral hover:bg-orange-800">Our services</button>
      
      </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default IndivitualService;