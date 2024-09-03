import React from 'react';

const BookingRow = ({booking,handleDelete,handleBookingConfirm}) => {
   
    const {_id,customer_name,date,dueAmount,email,img,location,phone,service_title,message,status}=booking;

    return (
        <tr>
      <th>
        <label>
            <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </label>
      </th>
      <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img}></img> }
            </div>
          </div>
       
      </td>
      <td>
        {service_title}
      </td>
      <td>{customer_name}</td>
      <td>{date}</td>
      <td>{email}</td>
      <td>${dueAmount}</td>
      <th>
        {message}
      </th>
      <th>
        {
            status==true?
            <button className="btn btn-ghost btn-xs text-green-400">Confirmed</button>
            :
            <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs text-yellow-400">Please Confirm</button>
        }
      </th>
    </tr>
    );
};

export default BookingRow;