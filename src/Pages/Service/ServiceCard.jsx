import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, img, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 border-2">
        <figure>
          <img src={img} alt="Shoes"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-orange-500 font-bold">Price: ${price} </h2>
          <Link to={`/checkout/${_id}`}> <p className="text-orange-500"> <FaArrowRight/></p></Link>
        </div>
      </div>
    );
};

export default ServiceCard;