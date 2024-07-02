import React from 'react'
import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"
import About from '../Componets/About/About'
import ServicesList from '../Componets/Services/ServicesList'
import DoctorList from '../Componets/Doctors/DoctorList'
import FaqList from '../Componets/Faq/FaqList'
import Testimonial from '../Componets/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
    {/* hero section */}
    <>
    <section className=' hero_section pt-[20px] 2xl:h-[800px] '>
      <div className='container'>
        <div className=' flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* hero content */}
          <div>
            <div className=' lg:w-[570px]'>
              <h1 className=' text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]'>We Help Patients live Healthy</h1>
              <p className=' text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate ipsam vitae, incidunt minima perferendis inventore illum aliquid iste sit? Cum inventore dolor voluptatem officiis distinctio modi in cupiditate magnam.</p>

              <button className='btn w-[20rem]'>Request For Appoinment</button>
            </div>

            {/* container */}
            <div className=' mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className=' text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                <span className=' w-[100px] h-2 bg-yellowColor rounded-full block mt-[14px]'></span>
                <p className=' text_para'>Years of Experience</p>
              </div>

              <div>
                <h2 className=' text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                <span className=' w-[100px] h-2  bg-purpleColor rounded-full block mt-[14px]'></span>
                <p className=' text_para'>Clinic Location</p>
              </div>

              <div>
                <h2 className=' text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className=' w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[14px]'></span>
                <p className=' text_para'>Patient Satisfaction</p>
              </div>
            </div>


          </div>

          {/* hero con */}

          <div className=' flex gap-[30px] justify-end'>
            <div>
              <img className='w-full ' src="https://i.pinimg.com/564x/04/57/66/0457660d750996aec1e5706deff3e364.jpg" alt="" />
            </div>

            <div className=' mt-[30px]'>
              <img  src="https://i.pinimg.com/564x/68/cc/24/68cc242b45d55c3b276d8eccb64ae853.jpg" alt="" className=' w-full mb-[30px] '/>
              <img  src="https://i.pinimg.com/564x/e1/f2/21/e1f221772f229f97549745ab674f7767.jpg" alt="" className=' w-full ' />
            </div>

            


          </div>

        </div>
      </div>

    </section>

    {/* end */}

    <section>
      <div className=' container'>
        <div className=' lg:w-[470px] mx-auto'>
          <h2 className=' heading text-center'>Providing the best medical services</h2>
      <p className=' text_para text-center'>World-class care foe everyone. Our health systems offers unmatched expert health care</p>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {/* 1 */}
          <div className=' py-[30px] px-5'>
            <div className=' flex items-center justify-center'>
              <img src="https://i.pinimg.com/564x/2e/80/a0/2e80a0b84f2afc0b21df07b67a892371.jpg" alt="" className=' w-[10rem] h-[10rem]' />
            </div>

            <div className=' mt-[30px]'>
              <h2 className=' text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Doctor</h2>
              <p className=' text-[16px] leading-7 text-textColor font-[400]'>World-class care for everyone. Our health System offers unmatched, expert health care, From the lab to clients</p>
              <Link to ='/doctors' className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
              <BsArrowRight className=' group-hover:text-white w-6 h-5'/>
              </Link>

            </div>


          </div>

          {/* 2 */}

          <div className=' py-[30px] px-5'>
            <div className=' flex items-center justify-center'>
              <img src="https://i.pinimg.com/564x/2c/f1/e3/2cf1e39e5894f6cabf95c96ebd5e48b7.jpg" alt="" className=' w-[10rem] h-[10rem]' />
            </div>

            <div className=' mt-[30px]'>
              <h2 className=' text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Location</h2>
              <p className=' text-[16px] leading-7 text-textColor font-[400]'>World-class care for everyone. Our health System offers unmatched, expert health care, From the lab to clients</p>
              <Link to ='/doctors' className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
              <BsArrowRight className=' group-hover:text-white w-6 h-5'/>
              </Link>

            </div>


          </div>

          {/* 3 */}

          <div className=' py-[30px] px-5'>
            <div className=' flex items-center justify-center'>
              <img src="https://i.pinimg.com/564x/67/dd/22/67dd227c069c17b83d8dbaa991d9a35e.jpg" alt="" className=' w-[10rem] h-[10rem]' />
            </div>

            <div className=' mt-[30px]'>
              <h2 className=' text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
              <p className=' text-[16px] leading-7 text-textColor font-[400]'>World-class care for everyone. Our health System offers unmatched, expert health care, From the lab to clients</p>
              <Link to ='/doctors' className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
              <BsArrowRight className=' group-hover:text-white w-6 h-5'/>
              </Link>

            </div>


          </div>
        </div>

      </div>
    </section>

    {/* about section start */}
    <About/>

    {/* Service */}

    <section>
      <div className='container'>
        <div className=' xl:w-[470px] mx-auto'>
          <h2 className=' heading text-center'>Our Medical Services</h2>
          <p className=' text_para text-center'>World-class care for everyone. Our health Systems offers unmatched,expert health care </p>

        </div>
        <ServicesList/>
      </div>
    </section>

    {/* service end */}
    {/* Features */}
    <section>
      <div className=' container'>
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* content */}
          <div className=' xl:w-[670px]'>
            <h2 className='heading'>
              Get virtual treatement <br/> anytime
            </h2>
            <ul className=' pl-4'>
              <li className=' text_para'>1.Schedule the appointment directly</li>

              <li className=' text_para'>2.Search for your physician here, and contact their office</li>

              <li className=' text_para'>3.View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>

            </ul>
            <Link to='/'>
            <button className=' btn w-[10rem]'>Learn More</button>
            </Link>
          </div>

          {/* image */}

          <div className=' relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img src="https://i.pinimg.com/564x/70/d3/b6/70d3b690144db4a6269a962af50c6c99.jpg" alt="" className=' w-3/4' />

            <div className=' w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>

              <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-[6px] lg:gap-3'>

                  <p className=' text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue, 24</p>

                  <p className=' text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>10 : 00 AM</p>

                </div>

                <span className=' w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src="https://i.pinimg.com/564x/22/e4/e0/22e4e079c332b3f3589f4a8b73545076.jpg" alt="" />
                </span>

              </div>

              <div className=' w-[65px] lg:w-[96px] bg-[#CCF0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                Consultation
              </div>

              <div className=' flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                <img src="https://i.pinimg.com/564x/7e/96/83/7e96833e2becc48ea62f41c1b63af465.jpg" alt="" className=' w-8 h-8' />
                <h4 className=' text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                text-headingColor '>Wayne Collins</h4>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
    
    
    {/* Features end */}

    {/* Great doctors */}

    <section>
      <div className="container">
      <div className=' xl:w-[470px] mx-auto'>
          <h2 className=' heading text-center'>Our Great Doctors</h2>
          <p className=' text_para text-center'>World-class care for everyone. Our health Systems offers unmatched,expert health care </p>

        </div>

        <DoctorList/>
      </div>
    </section>

    {/* Great doctors end */}

    {/* faq */}

    <section>
      <div className=' container'>
        <div className=' flex justify-between gap-[50px] lg:gap-0'>
          <div className=' w-1/2 hidden md:block'>
          <img src="https://i.pinimg.com/564x/e0/7d/e7/e07de7badad7b6cb2c45871e7a5cb2b9.jpg" alt="" />
          </div>

          <div className=' w-full md:w-1/2'>
          <h2 className=' heading'>Most Questions by our beloved patients</h2>
          <FaqList/>

          </div>

        </div>
      </div>
    </section>

    {/* faq end */}

    {/* testimonial */}
      <section>
        <div className=' container'>
        <div className=' xl:w-[470px] mx-auto'>
          <h2 className=' heading text-center'>What Our Patients Say</h2>
          <p className=' text_para text-center'>World-class care for everyone. Our health Systems offers unmatched,expert health care </p>

        </div>
        <Testimonial/>
        </div>
      </section>



    {/* testimonial end */}



    </>
    </>
  )
}

export default Home
