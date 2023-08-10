import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import slider from '../../assets/slider.jpg'


const Services = () => {


    return (
        <div className='bg-blue-gray-100 py-4'>
            <h2 className='text-center text-4xl mb-4'>Our Service</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={3}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='w-[80%] mx-auto'
            >
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[20rem] w-[30rem]' src={slider} alt="" /></SwiperSlide>
                .
            </Swiper>
        </div>
    );
};

export default Services;