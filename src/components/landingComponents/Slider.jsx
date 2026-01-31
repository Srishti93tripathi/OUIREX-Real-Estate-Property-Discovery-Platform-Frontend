import React from "react";
import { FaHome } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import Typewriter from "typewriter-effect";

const Slider = () => {
  const navigate = useNavigate()
  const handelContact = () => {
      navigate("/contact-us");
  }
  return (
    <>
      <div className="row bg py-5" style={{ minHeight: "400px" }} >
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <p className="mb-0 sliderP">
                <i className="fa-solid fa-house"></i>
                Real Estate Agency
              </p>
              <b className="typewriter">
                
                <Typewriter
                  options={{
                    strings: ["Find Your Dream House."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <div className="sliderPLower">
              <p className="mt-3 pe-5">
                Welcome to Quirex, where your dream home awaits. Discover a curated selection of premier properties tailored to your lifestyle.
              </p>
              </div>
              <button className="btn sliderBtn rounded-0" onClick={handelContact}>Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center" data-aos="zoom-in-up">
              <img
                src="/img/21_1.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
