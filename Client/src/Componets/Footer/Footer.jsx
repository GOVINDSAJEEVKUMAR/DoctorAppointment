import React from 'react'
import {Link} from "react-router-dom"
import {RiLinkedinFill} from "react-icons/ri"
import  {AiFillYoutube,AiFillGithub,AiOutlineInstagram, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"


const socialLinks=[
  {
    path:"",
    icon:<AiFillYoutube className=' group-hover:text-white w-4 h-5'/>
  },
  {
    path:"",
    icon:<AiFillGithub className=' group-hover:text-white w-4 h-5'/>
  },
  {
    path:"",
    icon:<RiLinkedinFill className=' group-hover:text-white w-4 h-5'/>
  },
  {
    path:"",
    icon:<AiFillInstagram className=' group-hover:text-white w-4 h-5'/>
  }
];
const quickLinks01=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctor',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  }
];

const quickLinks02 =[
  {
    path:'',
    display:'Find Doctor'
  },
  {
    path:'',
    display:'Book Appointment'
  },
  {
    path:'',
    display:'Find Location'
  },
  {
    path:'',
    display:'Get a Option'
  }
]



const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className=' pb-16 pt-10'>
      <div className=' container'>
        <div className=' flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src="https://i.pinimg.com/564x/ac/e3/f2/ace3f270ef08d214d71b2765e33a41b4.jpg" alt="" className=' w-10 h-10' />
            <p className=' text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright @ {year} developed by Me </p>

            <div className=' flex items-center gap-3 mt-4'>
              {socialLinks.map((link,index)=>
              <Link to={link.path} key={index} className=' w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>
              )}

            </div>
             
          </div>

          <div>
            <h2 className=' text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>
            <ul>
              {quickLinks01.map((item,index)=>
              <li key={index} className=' mb-4'>
                <Link to={item.path} className=' text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>
            )}
            </ul>
          </div>

          <div>
            <h2 className=' text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>I wants to :</h2>
            <ul>
              {quickLinks02.map((item,index)=>
              <li key={index} className=' mb-4'>
                <Link to={item.path} className=' text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>
            )}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
