import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logofoot.png";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#151515] py-[77px]">
      <div className="lg:ms-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        <div className="ps-9 lg:ps-0">
          <NavLink
            to="/"
            className="w-20 h-20 flex justify-center items-center"
          >
            <img src={logo} alt="" />
          </NavLink>
          <p className="footer-text text-[16px] my-2">
            Edwin Diaz is a software and web technologies engineer, a life coach{" "}
            <br />
            trainer who is also a serial .
          </p>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-[#212122] text-white rounded-full flex justify-center items-center mb-2">
              <FaGoogle size={16} />
            </div>
            <div className="w-12 h-12 bg-[#212122] text-white rounded-full flex justify-center items-center mb-2">
              <FaLinkedin size={16} />
            </div>
            <div className="w-12 h-12 bg-[#212122] text-white rounded-full flex justify-center items-center mb-2">
              <FaInstagram size={16} />
            </div>
            <div className="w-12 h-12 bg-[#212122] text-white rounded-full flex justify-center items-center mb-2">
              <FaFacebook size={16} />
            </div>
          </div>
        </div>
        <div className="ps-9 lg:ps-0">
          <p className="mb-12 text-[20px] font-semibold text-white">About</p>
          <p className="mb-2 text-[16px] font-normal text-white">Home</p>
          <p className="mb-2 text-[16px] font-normal text-white">Service</p>
          <p className="mb-2 text-[16px] font-normal text-white">Contact</p>
        </div>
        <div className="ps-9 lg:ps-0">
          <p className="mb-12 text-[20px] font-semibold text-white mt-[-35px]">
            Company
          </p>
          <p className="mb-2 text-[16px] font-normal text-white">
            Why Car Doctor
          </p>
          <p className="mb-2 text-[16px] font-normal text-white">About</p>
        </div>
        <div className="ps-9 lg:ps-0">
          <p className="mb-12 text-[20px] font-semibold text-white">Support</p>
          <p className="mb-2 text-[16px] font-normal text-white">
            Support Center
          </p>
          <p className="mb-2 text-[16px] font-normal text-white">Feedback</p>
          <p className="mb-2 text-[16px] font-normal text-white">Accesbility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
