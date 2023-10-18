import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
        <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation,Autoplay]}
        className='h-1/2'
        autoplay={{delay: 4500, disableOnInteraction: false}}
        loading={"lazy"}
        >
            <SwiperSlide>
                <img src={'../images/carousel_1.jpg'} alt="no_image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_2.jpg'} alt="no_image"/>
            </SwiperSlide>
            <SwiperSlide className="bg-black">
              <video autoPlay={true} loop muted
              src={"../images/carousel_vid.mp4"} type="video/mp4"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_4.jpg'} alt="no_image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={'../images/carousel_5.jpg'} alt="no_image"/>
            </SwiperSlide>
        </Swiper>
        <div className="h-1/2 bg-gradient-to-b from-stone-900"></div>
    </div>
  )
}

export default Carousel