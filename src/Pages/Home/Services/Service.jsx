import "./Service.css";
import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
  const { img, title, price } = service;
  console.log(service);
  return (
    <div className="service-card rounded-md p-4">
      <img src={img} alt="" className="w-full h-64 rounded-md object-cover" />
      <h2 className="text-2xl font-bold my-3">{title}</h2>
      <div className="flex justify-between">
        <p className="about-heading font-semibold">Price : ${price}</p>
        <FaArrowRight className="about-heading" />
      </div>
    </div>
  );
};

export default Service;
