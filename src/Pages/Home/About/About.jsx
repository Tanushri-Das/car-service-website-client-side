import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <img src={img1} alt="" className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={img2}
            alt=""
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-[20px] about-heading font-bold">About Us</h2>
          <p className="font-bold text-[45px]">
            We are qualified <br /> & of experience <br /> in this field
          </p>
          <p className="text-[16px] about-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-[16px] about-text">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="bg-[#ff3811] text-white font-bold py-2 px-4 rounded">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
