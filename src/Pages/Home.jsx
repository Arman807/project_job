
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedImage from "./FeaturedImage/FeaturedImage";
import PopularMenu from "./PopularMenu/PopularMenu";
import Bannertwo from "./SwiperBanner/Bannertwo";
import Testimonials from "./Testimonials/Testimonials";



const Home = () => {
    
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner/>
            <Bannertwo/>
            <PopularMenu/>
            <FeaturedImage/>
            <Testimonials/>
        </div>
    );
};

export default Home;