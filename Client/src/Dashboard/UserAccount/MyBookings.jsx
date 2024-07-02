import React from 'react'
import {BASE_URL} from "../../config.jsx"
import useFetchData from "../../Hooks/UserFetchData.jsx"
import DoctorCard from "./../../Componets/Doctors/DoctorCard.jsx"
import Loading from "../../Componets/Loader/Loading.jsx"
import Error from "../../Componets/Error/Error.jsx"

const MyBookings = () => {

  const {data:appointments,loading,error} = useFetchData(`${BASE_URL}/auth/user/appointment/my-appointment`)

  return (
    <div>
      {
        loading && !error && <Loading/>
      }
      {error && !loading && <Error errMessage={error}/>}

      { !loading && !error && (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {appointments.map(doctor =>(
          <DoctorCard doctor={doctor} key={doctor._id}/>
        )
        )}
      </div>
      )}

      {!loading && !error && appointments.length == 0 && 
      <h2 className=' mt-5 text-center  leading-7 text-[20px] font-semibold text-primaryColor'>Cuurently No Bookings 🤦‍♂️🤦‍♂️</h2>
      }
    </div>
  )
}

export default MyBookings
