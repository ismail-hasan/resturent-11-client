import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testmonial = () => {

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])


    return (
        <div className='my-20'>
            <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <>
                        <div key={review._id}>
                            <SwiperSlide className='text-center '>
                                <Rating className='w-full mx-auto mb-6'
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='text-4xl'>{review.name}</p>
                                <p className='text-base px-40'>{review.details}</p>
                            </SwiperSlide>
                        </div>

                    </>)
                }

            </Swiper>

        </div>
    );
};

export default Testmonial;