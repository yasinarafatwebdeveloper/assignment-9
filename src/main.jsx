import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainDiv from './Routers/MainDiv/MainDiv';
import Header from './Routers/Header/Header';
import Login from './Pages/Login/Login';
import ErrorElement from './Routers/ErrorElement/ErrorElement';
import Registration from './Pages/Registration/Registration';
import Authentication from './Authentication/Authentication';
import OneService from './OneService/OneService';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDiv></MainDiv>,
    errorElement:<ErrorElement></ErrorElement>,

    children: [
      {
        path: "/",

   
    
  
        element:  <Header></Header> ,
        loader:()=>fetch("/Data.json")
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/oneservice/:id",
        loader:()=>fetch("/Data.json"),
        element:<OneService></OneService>
      }



    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    <Authentication>
    <RouterProvider router={router} />

    </Authentication>
  </React.StrictMode>,
)
