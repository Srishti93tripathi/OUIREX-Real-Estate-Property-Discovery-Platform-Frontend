import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuBedSingle } from "react-icons/lu";
import { FaVectorSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import NavBar from "../landingComponents/NavBar";
import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const AdminPropertyList = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://quirex-real-estate-website-backend.vercel.app/api/property-list");
    if (response?.data?.code == 200) {
      setListData(response?.data?.data);
    }
  };

  const handelDeleteProperty = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.post(
          "https://quirex-real-estate-website-backend.vercel.app/api/delete-property",
          { _id }
        );
        if (response?.data?.code == 200) {
          Swal.fire({
            title: "Delete Property",
            message: response?.data?.message,
            icon: "success",
          });
          fetchData();
        } else {
          Swal.fire({
            title: "Delete Property",
            message: response?.data?.message,
            icon: "error",
          });
        }
      }
    });
  };

  const handelEditProperty = async (data)=> {

    localStorage.setItem("propertyInfo", JSON.stringify(data));
    navigate("/admin-edit-listing");
    
  };


  return (
    <>
      <NavBar />
      <div className="row property py-5">
        <div className="text-center ">
          <div className="tagline ">Properties </div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        {/* <div className="col-sm-1"></div> */}
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
                        <div className="row d-flex">
                          <button
                            onClick={() => handelDeleteProperty(item?._id)}
                            className="btn btn-dark btnPropertyD ms-1"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handelEditProperty(item)}
                            className="btn btnPropertyE me-1"
                          >
                            Edit
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
        {/* <div className="col-sm-1"></div> */}
      </div>
    </>
  );
};

export default AdminPropertyList;


