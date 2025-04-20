import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// img import 
import img1 from '../../images/home/slide1.jpg'
import img2 from '../../images/home/slide2.jpg'
import img3 from '../../images/home/slide3.jpg'
import img4 from '../../images/home/slide4.jpg'
import img5 from '../../images/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <div className='my-20'>
            <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={'ORDER ONLINE'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-center capitalize text-2xl italic -mt-15'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-center capitalize text-2xl italic -mt-15'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-center capitalize text-2xl italic -mt-15'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-center capitalize text-2xl italic -mt-15'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-center capitalize text-2xl italic -mt-15'>salad</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;