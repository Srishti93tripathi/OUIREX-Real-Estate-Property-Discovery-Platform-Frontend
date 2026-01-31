import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuBedSingle } from "react-icons/lu";
import { FaVectorSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import Swal from "sweetalert2";
const Property = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://quirex-real-estate-website-backend.vercel.app/api/property-list");
    if (response?.data?.code == 200) {
      setListData(response?.data?.data);
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handelBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    if(!userData?._id){
       navigate('/login');
       return;
    }
    const response = await axios.post("https://quirex-real-estate-website-backend.vercel.app/api/buy", {
      userId: userData?._id,
      propertyId,
    });
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: "error",
      });
    }
  };
  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className="row property py-5">
        <div className="text-center ">
          <div className="tagline">Properties </div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        {/* <div className='col-sm-1'></div> */}
        <div className="col-sm-11 mx-auto">
          <div className="row py-3 px-3 propertyCard">
            {listData?.map((item, index) => {
              return (
                <>
                  <div className="col-sm-3  px-3 mb-4" data-aos="zoom-in">
                    <div className="card  mx-auto shadow-lg border border-0">
                      <div className="cardImgDiv">
                        <img
                          src={`https://quirex-real-estate-website-backend.vercel.app/img/${item?.pic}`}
                          className="card-img-top img-fluid featuredimg cardImgProperty"
                          alt="..."
                        />
                        
                        <div className="badge">FOR RENT</div>
                        <div className="locationProperty">
                          <i className="fas fa-map-marker-alt"></i> {item?.location}
                        </div>
                        <div className="image-icons">
                          <div className="iconDiv">
                            <p className="m-0 ps-2">{item?.area}</p>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <p className="mycolor1 m-0">
                          <b>${item?.price}</b><span className="innerCardPrice">/Month</span>
                        </p>
                        <h5 className="card-title">
                          <b className="mycolor2 ">{item?.title}</b>
                        </h5>
                        <div className="listingDes">
                          {" "}
                          <p className="card-text featuredp">
                            {item?.description}
                          </p>
                        </div>
                        <div className="row">
                          <button
                            onClick={() => handelBuy(item?._id)}
                            className="btn btn-danger btnProperty"
                          >
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {listData?.length == 0 && (
              <h1 className="text-center">No Record Found</h1>
            )}
          </div>
        </div>
        {/* <div className='col-sm-1'></div> */}
      </div>
    </>
  );
};

export default Property;
