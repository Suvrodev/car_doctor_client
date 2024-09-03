import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  console.log(service);
  return (
    <div className=" w-full md:w-220px] bg-base-100 shadow-xl p-0 md:p-5 border-2 rounded-md">
      <img src={img} alt="" className="rounded-md" />

      <div className="px-5 my-4">
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="flex justify-between items-center px-5 my-4">
        <h2 className="text-xl text-orange-500 font-bold">Price: ${price} </h2>
        <Link to={`/checkout/${_id}`}>
          {" "}
          <p className="text-orange-500">
            {" "}
            <FaArrowRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
