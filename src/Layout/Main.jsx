import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useLocation } from "react-router-dom";




const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navbar/>}
          <Outlet/>
          {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;