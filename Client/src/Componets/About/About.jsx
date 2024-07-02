import React from 'react'
import aboutCard from "../.././assets/aboutCard.png"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className=' flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

                <div className=' relative w-3/4 lg:w-1/2 xl:w-[770px] 
                z-10 order-2 lg:order-1'>
                    <img src="https://i.pinimg.com/564x/e6/21/c2/e621c2c9381c059cc61f17f76647de20.jpg" alt="" />
                    <div className=' absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[17%]'>
                        <img src="https://dynamic.brandcrowd.com/template/preview/design/ffe5a634-53d6-4262-948b-e6e90c1f1613/2a3a8922-92dd-4fef-a5a8-90022e996194?v=4&designTemplateVersion=8&logoTemplateVersion=1&size=design-preview-standalone-1x" alt="" />
                    </div>
                </div>

                {/*  about content */}

                <div className=' w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className=' heading'>Proud to be one of the nations best</h2>
                <p className=' text_para'>Primary care physicians can treat urgent health issues such as a cold, flu, fever, sudden pain, insect bites, rash, and allergies. From everyday pains to complex diseases, your primary doctor is able to make a diagnosis, prescribe treatment, and provide advice about maintaining or improving your health</p>

                <p className=' text_para mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente tenetur totam itaque id. Voluptas ducimus perspiciatis voluptates quam suscipit laudantium nihil asperiores culpa eius totam, dolor est libero architecto!</p>

                <Link to="/">
                <button className=' btn w-[10rem]'> Learn More</button>
                </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
