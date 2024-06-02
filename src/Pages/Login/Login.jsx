// import React from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authentication";
import Swal from "sweetalert2";


const Login = () => {

const{signin,userId}=useContext(AuthContext)

const navigate=useNavigate()
const location=useLocation()
console.log(location)
// console.log(navigate)

// if(userId){

//  return navigate("/")


// }



const handleLogin=(e)=>{
e.preventDefault()
const email=e.target.email.value;
const password=e.target.password.value;
console.log("login",email,password)


// const regExp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

// if(regExp.test(password)){
//     (Swal.fire("Congratulations!"))
// }

// else if(!regExp.test(password)){

//     return  (Swal.fire("Your password is  not valid!"))
//   }

signin(email,password)

.then(result=>{

    console.log(result.user)
    navigate(location?.state?location.state:"/")
   
})
.catch(error=>{

    console.log(error.message)
})

}



    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
          <h1 className='text-3xl text-center mt-5 mx-4'>Please Login Here</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
      
      
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
               
              </div>
              <div className=''>
                  <button>google</button>
                  <Link className='mx-6' to="/login"><a>please Login</a></Link>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;