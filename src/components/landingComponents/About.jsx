import React from "react";
import NavBar from "./NavBar";
const About = () => {
  return (
    <>
      <NavBar />
      <div className="row mt-4"> 
        <div className="col-sm-11 mx-auto">
          <div className="tagline">About US</div>
          <div className="row mx-auto">
            <div className="col-sm-5 aboutDiv">
              <h2 className="headAbout">Why Choose Quirex?</h2>
              <p className="aboutP mb-4">
                At Quirex, we go beyond just buying and selling properties — we
                help people find places they can truly call home. With a deep
                understanding of the real estate market and a passion for
                customer satisfaction, we offer handpicked listings, expert
                guidance, and transparent processes that make your property
                journey smooth and stress-free.
              </p>
              <p className="aboutP">
                <span className="mycolor1">&#8212;</span>&nbsp; Verified
                Listings – 100% authentic and up-to-date properties
              </p>
              <p className="aboutP">
                <span className="mycolor1">&#8212;</span>&nbsp; Wide Property
                Range – Homes, plots, rentals & investments
              </p>
              <p className="aboutP">
                <span className="mycolor1">&#8212;</span>&nbsp; Transparent
                Deals – No hidden fees or false promises
              </p>
              <p className="aboutP">
                <span className="mycolor1">&#8212;</span>&nbsp; Prime Locations
                – Properties in top-rated neighborhoods
              </p>
              <div className="row aboutImgDiv">
                <div className="col-sm-3 ms-0">
                    <img
                  src="/img/home9.jpg"
                  alt="not found"
                  height={"120"}
                  width={"180"}
                />
                </div>
                
                <div className="col-sm-3">
                  <img
                  src="/img/home10.jpg"
                  alt="not found"
                  height={"120"}
                  width={"180"}
                />
                </div>
                <div className="col-sm-3">
                  <img
                  src="/img/home11.jpg"
                  alt="not found"
                  height={"120"}
                  width={"180"}
                />
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div
              className="col-sm-6 aboutDiv"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="row">
                <div className="col-6 leftImgDiv px-3">
                  <img src="/img/home13.jpeg" height={"480"} alt="" />
                </div>
                <div className="col-6 px-3">
                  <div className="row leftImgDiv1">
                    <img src="/img/home12.jpg" alt="" />
                  </div>
                  <div className="row leftImgDiv1  mt-3">
                    <img src="/img/home15.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
