import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const {user,successfullToast,unSuccessfullToast}=useContext(AuthContext)
    const checkMail=user?.email;
   
    const [bookings,setBooking]=useState([])
    const [check,setCheck]=useState(true)
    const [sort,setsort]=useState(true)

    const handleSort=()=>{
        setsort(!sort)
    }
    console.log("Sort: ",sort);

    let url=`http://localhost:5000/booking?email=${checkMail}&sort=${sort}`
   

   // console.log("URL: ",url);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[check,sort])
    // console.log("booking: ",bookings);


    const handleDelete=(_id)=>{
        fetch(`http://localhost:5000/booking/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                setCheck(!check)
                successfullToast("Deleted Successfully")
            }
        })
    }

    const handleBookingConfirm=(id)=>{
        console.log("Confirm: ",id);
        fetch(`http://localhost:5000/booking/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:true})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                setCheck(!check)
                successfullToast("Confirm Successfully")

            }
           
        })
    }
    return (
        <div>
        <h1>Bookings: {bookings.length} </h1>
        <button onClick={handleSort} className='btn btn-primary'>{sort?'Sort':'Default'}</button>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <th>Image</th>
                <th>Service Title</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Due Amount</th>
                <th>Mesage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                  bookings.map(booking=> <BookingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleBookingConfirm={handleBookingConfirm}
                  ></BookingRow> )
              }
               
            
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Booking;