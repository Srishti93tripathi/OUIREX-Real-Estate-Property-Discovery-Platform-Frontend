//services
import React from "react";

import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
const Services = () => {
 const location=useLocation(); 
 
  return (
    <>
    {location?.pathname!="/" &&   <NavBar/>}
    <div  className="row py-5 bg services">
      <div className="text-center ">
      <div className="tagline">Our Services </div>
      <h2 className="section-title">Our Main Focus</h2>
    </div>
      <div className="col-sm-10 card1 mx-auto">
        <div className="row py-3">
          <div className="col-sm-4" data-aos="zoom-in" data-aos-duration="1300">
            <div className="card mx-auto shadow-lg p-4 border border-0 serviceCard">
              <img src="/img/home.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Buy a home</b></h3>
              <p className="text-center serP">Explore verified listings across prime locations with tailored recommendations and expert support making home buying simple, secure, and stress-free.</p>
              <p className="text-center py-3 serBtn"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
          <div className="col-sm-4" data-aos="zoom-out" data-aos-duration="1300">
            <div className="card mx-auto shadow-lg p-4 border border-0 serviceCard" >
              <img src="/img/22.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Rent a home</b></h3>
              <p className="text-center serP">Looking for a place to stay? Explore our carefully selected rental listings that suit every budget and lifestyle. With flexible terms and trusted landlords, renting with Quirex is stress-free and reliable.</p>
              <p className="text-center py-3 serBtn"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
          <div className="col-sm-4 " data-aos="zoom-in" data-aos-duration="1300">
            <div className="card mx-auto shadow-lg p-4 border border-0 serviceCard">
              <img src="/img/23.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Sell a home</b></h3>
              <p className="text-center serP">List your property with confidence. Our expert team ensures your home gets the right exposure, attracts serious buyers, and sells at the best market value — fast, easy, and hassle-free.</p>
              <p className="text-center py-3 serBtn"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services;
