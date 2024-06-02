// import React, { useEffect, useState } from 'react';

import { useLoaderData } from "react-router-dom";
import IndivitualService from "../IndivitualService/IndivitualService";

const Services = () => {
    const outcome=useLoaderData();
    // console.log(outcome)

    return (
        <div className="mt-20">
           <h1 className='text-center text-3xl text-teal-400 my-5'>Our Services & Activities</h1>
           <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4 ">
           {
            outcome.map(output=><IndivitualService output={output}></IndivitualService>)
           }
           </div>

          
        </div>
    );
};

export default Services;