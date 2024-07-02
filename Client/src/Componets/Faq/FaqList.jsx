import React from 'react'
import FaqItem from './FaqItem'
import {faqs} from "../../assets/Data/Faq"

const FaqList = () => {
  return (
    <div>
      <ul className=' mt-[38px]'>
        {faqs.map((item,index)=>(
            <FaqItem item ={item} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export default FaqList
