import React, { useState } from 'react'
import Loader from "../../Componets/Loader/Loading.jsx"
import Error from "../../Componets/Error/Error.jsx"
import useGetProfile  from "../../Hooks/UserFetchData.jsx"
import { BASE_URL } from "../../config.jsx"
import Tabs from './Tabs.jsx'

const DashBoard = () => {

  const {data, loading, error} = useGetProfile(`${BASE_URL}/auth/doctor/profile/me`);

  const [tab,setTab] = useState ('overview')
  return (
    <section>
      <div className=' max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader/>}
        {/* {error && !loading && <Error errMessage={error}/>} */}

        {
          !loading && !error && data && (
            <div className=' grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={tab} setTab={setTab}/>
            </div>
          )
        }
      </div>

    </section>
  )
}

export default DashBoard
