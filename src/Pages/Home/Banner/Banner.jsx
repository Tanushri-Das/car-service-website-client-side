import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
import CustomSpinner from "../../../Components/CustomSpinner/CustomSpinner";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  const slides = [
    {
      image: banner1,
      title: "Affordable Car Servicing",
      text: "Get affordable and reliable car servicing that ensures your vehicle stays in top condition. Our expert technicians provide thorough maintenance and repair services to keep your car running smoothly on the road.",
      buttons: ["Discover More", "Latest Project"],
    },
    {
      image: banner2,
      title: "Quality Car\nMaintenance",
      text: "Ensure the longevity of your vehicle with our\ncomprehensive car maintenance services.",
      buttons: ["Discover More", "Latest Project"],
    },
    {
      image: banner3,
      title: "Expert Car\nRepairs",
      text: "From minor fixes to major overhauls, trust our expert\ntechnicians to keep your car running smoothly.",
      buttons: ["Discover More", "Latest Project"],
    },
    {
      image: banner4,
      title: "Efficient\nService",
      text: "We value your time and strive to provide efficient\nand timely servicing for your vehicle.",
      buttons: ["Discover More", "Latest Project"],
    },
    {
      image: banner5,
      title: "Customer Satisfaction\nGuaranteed",
      text: "Your satisfaction is our priority. Experience top-notch\nservice and customer care at our auto center.",
      buttons: ["Discover More", "Latest Project"],
    },
    {
      image: banner6,
      title: "State-of-the-Art\nFacilities",
      text: "Equipped with the latest tools and technology, we offer\ncutting-edge solutions for all your car service needs.",
      buttons: ["Discover More", "Latest Project"],
    },
  ];

  return (
    <div className="mb-20">
      {loading ? (
        <CustomSpinner />
      ) : (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[800px]">
                <img
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "200px" }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start ps-8 md:p-20 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                  <h2
                    className="text-4xl lg:text-6xl font-bold"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </h2>
                  <p className="my-6" style={{ whiteSpace: "pre-line" }}>
                    {slide.text}
                  </p>
                  <div className="flex space-x-4">
                    {slide.buttons.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        className={`font-bold py-2 px-4 rounded ${
                          button === "Discover More"
                            ? "bg-[#ff3811]"
                            : "border border-white"
                        } text-white`}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
