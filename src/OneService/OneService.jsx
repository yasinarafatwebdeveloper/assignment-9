import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ExplainServe from '../ExplainServe/ExplainServe';

const OneService = () => {


    const {id}=useParams()
    // console.log(id)

const [oneservice,setOneservice]=useState({})


const anotherService=useLoaderData()
  

useEffect(()=>{

    const serve=anotherService.find(serve=>serve.id==id)

    setOneservice(serve)
},[anotherService,id])

console.log(oneservice)
    return (
        <div>
           <ExplainServe oneservice={oneservice}></ExplainServe>
        </div>
    );
};

export default OneService;