import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Services from "../../Services/Services";
import Footer from "../../Footer/Footer";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import EducationSlider from "../../EducationSlider/EducationSlider";


const Header = () => {
    return (
        <div >
            {/* this is header */}
            {/* <Outlet></Outlet> */}
            <Navbar ></Navbar>
            <div className="my-20">
            <Banner></Banner>
          

        
           <PrivateRoute>

           <Services></Services>
           </PrivateRoute>
           <EducationSlider></EducationSlider>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Header;