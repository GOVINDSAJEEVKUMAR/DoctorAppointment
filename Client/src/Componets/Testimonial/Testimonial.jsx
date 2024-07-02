import React from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {HiStar} from "react-icons/hi"


const Testimonial = () => {
  return (
    <div className=' mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            }
        }}
        >
            <SwiperSlide>
                <div className=' py-[30px] px-5 rounded-[13px]'>
                    <div className=' flex items-center gap-[13px]'>
                        <img src="https://i.pinimg.com/564x/8d/da/39/8dda39d89cea777270772bb62782035c.jpg" alt="" className=' w-10 h-10' />
                        <div>
                            <h4 className=' text-[18px] leading-[30px] font-semibold text-headingColor'>Rahman</h4>
                            <div className=' flex items-center gap-[2px]'>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have take medical services from them. They treat so well and they are providing the best medical services"</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className=' py-[30px] px-5 rounded-[13px]'>
                    <div className=' flex items-center gap-[13px]'>
                        <img src="https://i.pinimg.com/736x/cb/75/9a/cb759abe9a4d8d1acdcd3fc7d3142f74.jpg" alt="" className=' w-10 h-10' />
                        <div>
                            <h4 className=' text-[18px] leading-[30px] font-semibold text-headingColor'>Rahman</h4>
                            <div className=' flex items-center gap-[2px]'>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have take medical services from them. They treat so well and they are providing the best medical services"</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className=' py-[30px] px-5 rounded-[13px]'>
                    <div className=' flex items-center gap-[13px]'>
                        <img src="https://i.pinimg.com/564x/89/3c/82/893c82586956364ea1b510cb5f721031.jpg" alt="" className=' w-10 h-10' />
                        <div>
                            <h4 className=' text-[18px] leading-[30px] font-semibold text-headingColor'>Rahman</h4>
                            <div className=' flex items-center gap-[2px]'>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have take medical services from them. They treat so well and they are providing the best medical services"</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className=' py-[30px] px-5 rounded-[13px]'>
                    <div className=' flex items-center gap-[13px]'>
                        <img src="https://i.pinimg.com/564x/7d/99/c4/7d99c407825d4e6ba9f882b9d6095da9.jpg" alt="" className=' w-10 h-10' />
                        <div>
                            <h4 className=' text-[18px] leading-[30px] font-semibold text-headingColor'>Rahman</h4>
                            <div className=' flex items-center gap-[2px]'>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have take medical services from them. They treat so well and they are providing the best medical services"</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className=' py-[30px] px-5 rounded-[13px]'>
                    <div className=' flex items-center gap-[13px]'>
                        <img src="https://i.pinimg.com/564x/bc/db/4a/bcdb4a84f64a9c1b3e29064994e31862.jpg"alt="" className=' w-10 h-10' />
                        <div>
                            <h4 className=' text-[18px] leading-[30px] font-semibold text-headingColor'>Rahman</h4>
                            <div className=' flex items-center gap-[2px]'>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have take medical services from them. They treat so well and they are providing the best medical services"</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className=' py-[30px] px-5 rounded-[13px]'>
                    <div className=' flex items-center gap-[13px]'>
                        <img src="https://i.pinimg.com/564x/9c/90/e2/9c90e2369f92e3e5cc2fdb488874cb5a.jpg" alt="" className=' w-10 h-10' />
                        <div>
                            <h4 className=' text-[18px] leading-[30px] font-semibold text-headingColor'>Rahman</h4>
                            <div className=' flex items-center gap-[2px]'>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                                <HiStar className=' text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have take medical services from them. They treat so well and they are providing the best medical services"</p>
                </div>
            </SwiperSlide>

        </Swiper>
      
    </div>
  )
}

export default Testimonial
