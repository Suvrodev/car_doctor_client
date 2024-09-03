import React from "react";
import person from "../../assets/AboutUS/person.jpg";
import parts from "../../assets/AboutUS/parts.jpg";

const About = () => {
  return (
    <div className="overflow-hidden bg-base-200">
      <div className="my-10 flex flex-col md:flex-row gap-20 md:gap-4">
        <div className="w-full md:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white "
          />
        </div>

        <div className="w-full md:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About US</h3>
          <h1 className=" text-xl md:text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn pColor text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
