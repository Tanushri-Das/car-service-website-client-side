import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-20">
      <div className="text-center">
        <h2 className="text-[20px] about-heading font-bold mb-1">Service</h2>
        <p className="font-bold text-[45px] mb-2">Our Service Area</p>
        <p className="text-[16px] about-text mb-12">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button className="border border-[#ff3811] py-2 px-4 rounded font-semibold about-heading">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
