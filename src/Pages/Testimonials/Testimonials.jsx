import { useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {
  const [review, setReview] = useState([]);
  useState(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <SectionHeading
        subheading={"What our clients say"}
        heading={"Testimonials"}
      />
      <div className="w-[600px] mx-auto"><Swiper
        pagination={{
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            review.map(data=><SwiperSlide data={data} key={data._id}>
                <p className="text-center">{data.name}</p>
                <h3 className="mx-auto w-[500px]">{data.details}</h3>
            </SwiperSlide>)
        }
      </Swiper></div>
    </div>
  );
};

export default Testimonials;
