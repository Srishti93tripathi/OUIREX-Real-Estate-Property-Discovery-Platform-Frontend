// import React from 'react'

// const EditListing = () => {
//   return (
//     <div>
//       EditListing
//     </div>
//   )
// }

// export default EditListing

import React, {useEffect} from 'react'
import NavBar from '../landingComponents/NavBar';
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom';

const schemaproperty = yup 
  .object()
  .shape({
    title: yup.string().required().min(2).max(20),
    price: yup.string().required(),
    area: yup.string().required().min(2).max(30),
    location: yup.string().required().min(2).max(30),
    description: yup.string().required().min(2).max(100),
    pic: yup.mixed()
  })
const EditListing = () => {
  const navigate = useNavigate();
  const propertyData = JSON.parse(localStorage.getItem("propertyInfo"));
  useEffect(() => {
      
      setValue('title', propertyData?.title);
      setValue('price', propertyData?.price);
      setValue('area', propertyData?.area);
      setValue('location', propertyData?.location);
      setValue('description', propertyData?.description);
  
    },[])
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schemaproperty),
  });
  const editProperty = async (data) => {
    if(data?.pic?.length == 0){
          Swal.fire({
            title: "File Upload Error",
            message: "Please upload a Valid File.",
            icon: "error"
          })
          return
        }
    const formData = new FormData();
    formData.append('propertyId', propertyData?._id);
    formData.append('title', data?.title);
    formData.append('price', data?.price);
    formData.append('area', data?.area);
     formData.append('description', data?.description);
    formData.append('location', data?.location);
    formData.append('pic', data?.pic[0]);
    const response = await axios.put('https://quirex-real-estate-website-backend.vercel.app/api/edit-property', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response?.data?.code == 200) {
      
      Swal.fire({
        title: "Edit Property",
        text: response?.data?.message,
        icon: "success"
      })
      reset()
      localStorage.removeItem('propertyInfo');
      navigate('/admin-list');
    } else {
      Swal.fire({
        title: "Edit Property",
        text: response?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center">Edit Property</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit((d) => editProperty(d))} >
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input {...register('title')} type="text" className="form-control" placeholder="Enter title." />
                    </div>
                    {errors?.title && <p className='text-danger'>{errors?.title?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input {...register('price')} type="text" className="form-control" placeholder="Enter Price" />
                    </div>
                    {errors?.price && <p className='text-danger'>{errors?.price?.message}</p>}

                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Area</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input {...register('area')} type="text" className="form-control" placeholder="Enter area" />
                    </div>
                    {errors?.area && <p className='text-danger'>{errors?.area?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input {...register('location')} type="text" className="form-control" placeholder="Location" />
                    </div>
                    {errors?.location && <p className='text-danger'>{errors?.location?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Description</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input {...register('description')} type="text" className="form-control" placeholder="Description" />
                    </div>
                    {errors?.description && <p className='text-danger'>{errors?.description?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Image</label>
                    <div className="input-group">
                      <input {...register('pic')} type="file" className="form-control" />
                    </div>
                    {errors?.pic && <p className='text-danger'>{errors?.pic?.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <input type="submit" className="btn  px-5 btn-login" value="Edit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EditListing

