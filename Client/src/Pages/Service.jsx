import React from 'react'
import { services } from '../assets/Data/Service'
import ServiceCard from '../Componets/Services/ServiceCard'

const Service = () => {
  return (
    <section>
      <div className=' container'>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] '>
      {services.map((item,index)=>(
        <ServiceCard item={item} index={index} key={index}/>
      ))}
      
    </div>

      </div>
    </section>
  )
}

export default Service
