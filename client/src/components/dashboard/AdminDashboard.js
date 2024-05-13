import React from 'react'
import BookingsAdmin from '../bookings/BookingsAdmin'
import "../../../src/hallbook.css"
// import BookingsHod from '../bookings/BookingsHod'

// import Events from '../bookings/Events'
// import Index from '../bookings/Table'

const AdminDashboard = () => {
  return (
    <><div className='mt-6 min-h-screen' style={{backgroundColor:"lightgray"}}>

      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-black leading-7 ml-3 md:leading-10">
        Admin  <span style={{"color":"#6d7f69"}}> Dashboard</span> </h1>


        <div className=''>
          <BookingsAdmin/>
          {/* <Index/> */}
        </div>

{/* 
      <div className='mt-6 grid grid-flow-col col-auto	'>
        <div className=''>
          <BookingsAdmin/>

        </div>
        <div className=''>
          <Events />
        </div>
      </div> */}
    </div>
    </>
  )
}

export default AdminDashboard;