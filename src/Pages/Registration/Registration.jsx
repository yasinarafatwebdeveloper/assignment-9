import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Authentication';
import Swal from 'sweetalert2';

const Registration = () => {

const {createUser}=useContext(AuthContext)


// const [message,setMessage]=useState("")
const handleRegister=(e)=>{

e.preventDefault();

const email=e.target.email.value;
const name=e.target.name.value;
const password=e.target.password.value;
const regExp=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// if(password===""){

// setMessage("please Send your password")


// }
if(regExp.test(password)){

   (Swal.fire("Congratulations!"))
}
else if(!regExp.test(password)){

  return  (Swal.fire("Your password is  not valid!"))
}
// if(){

//     return alert("you must sent 6 charecter")
// }



console.log("this is result", email,name,password)
createUser(email,password)
    .then(result=>{

        console.log(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
}



    return (
        <div>
           
          <div className="hero min-h-screen bg-base-200">
        
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

    <h1 className='text-3xl text-center mt-5 mx-4'>Please Registration Here</h1>
    
        {/* <p className='text-center text-xl text-red-700'>{message}</p> */}
    
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
         
        </div>
        <div className=''>
            <button>google</button>
            <Link className='mx-6' to="/login"><a>please Register</a></Link>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;