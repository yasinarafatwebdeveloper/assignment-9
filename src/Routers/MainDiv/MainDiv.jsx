import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { ToastBar } from "react-hot-toast";


const MainDiv = () => {
    return (
        <div className=" ">
            {/* this is main div */}
            {/* <Header></Header> */}
            <Outlet></Outlet>
            {/* <Banner></Banner> */}
            {/* <ToastBar></ToastBar> */}
        </div>
    );
};

export default MainDiv;