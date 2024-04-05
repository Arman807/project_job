import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slideone from "../../assets/home/slide1.jpg"
import slidetwo from "../../assets/home/slide2.jpg"
import slidethree from "../../assets/home/slide3.jpg"
import slidefour from "../../assets/home/slide4.jpg"
import slidefive from "../../assets/home/slide5.jpg"
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
const Bannertwo = () => {
    return (
       <div>
        <div>
          <SectionHeading heading={"Order Online"} subheading={"from 11.00am to 10pm"}/>
        </div>
         <div>
            <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slideone} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slidetwo} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slidethree} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slidefour} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slidefive} alt="" /></SwiperSlide>
        
        
      </Swiper>
        </div>
       </div>
    );
};

export default Bannertwo;