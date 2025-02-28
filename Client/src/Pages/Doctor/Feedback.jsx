import React, { useState } from 'react'
import { FormateDate } from '../../utils/FormateDate'
import {AiFillStar} from "react-icons/ai"
import FeedbackForm from './FeedbackForm'
const Feedback = () => {

const [showFeedbackform,setShowFeedbackForm] = useState(false)

  return (
    <div>
      <div className=' mb-[50px]'>
        <h4 className=' text-[20px] lading-[30px] font-bold text-headingColor mb-[30px]'>All Reviews(272)</h4>

            <div className=' flex justify-between gap-10 mb-[30px]'>
                <div className=' flex gap-3'>
                    <figure className=' w-10 h-10 rounded-full'>
                        <img className=' w-full' src="https://i.pinimg.com/564x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg" alt="" />
                    </figure>

                    <div>
                        <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Akhil</h5>
                        <p className=' text-[14px] leading-6 text-textColor'>{FormateDate('02-14-2023')}</p>
                        <p className=' text_para mt-3 font-medium text-[15px]'>
                            Good services, highly recommended👍👍👍
                        </p>
                    </div>
                </div>

                <div className=' flex gap-1'>
                    {[...Array(5).keys()].map((_,index)=>(
                        <AiFillStar key ={index} color="#0067FF"/>
                    ))}
                </div>
            </div>
      </div>

      {!setShowFeedbackForm &&
      <div className=' text-center'>
      <button onClick={()=>setShowFeedbackForm(true)}
       className=' btn w-[15rem]'>
          Give Feedback
      </button>
    </div>}

    {setShowFeedbackForm && <FeedbackForm/>}


    </div>
  )
}

export default Feedback
