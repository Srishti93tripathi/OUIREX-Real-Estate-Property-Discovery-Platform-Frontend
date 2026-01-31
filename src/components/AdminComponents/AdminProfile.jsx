import {React, useEffect, useState} from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import NavBar from '../landingComponents/NavBar'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const schemauser = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(20),
    email: yup.string().required(),
    contact: yup.number().required().min(10),
    password: yup.string().required().min(2).max(20),
    country: yup.string().required().min(2).max(20),
    state: yup.string().required(),
    city: yup.string().required(),
    profile: yup.mixed()
  })

const AdminProfile = () => {
  const navigate = useNavigate();
  const UserData = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    
    setValue('name', UserData?.name);
    setValue('email', UserData?.email);
    setValue('contact', UserData?.contact);
    setValue('password', UserData?.password);
    setValue('country', UserData?.country);
    setValue('state', UserData?.state);
    setValue('city', UserData?.city);

  },[])
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
      resolver: yupResolver(schemauser),
    });
  const updateUser = async (data) =>{
    if(data?.profile?.length == 0){
      Swal.fire({
        title: "File Upload Error",
        message: "Please upload a Valid File.",
        icon: "error"
      })
      return
    }
    const formData = new FormData();
    formData.append('userId', UserData?._id);
    formData.append('name', data?.name);
    formData.append('email', data?.email);
    formData.append('contact', data?.contact);
    formData.append('password', data?.password);
    formData.append('country', data?.country);
    formData.append('state', data?.state);
    formData.append('city', data?.city);
    formData.append('profile', data?.profile[0]);
    const response = await axios.put('https://quirex-real-estate-website-backend.vercel.app/api/user-update', formData, {
      
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response?.data?.code == 200) {
          Swal.fire({
            title: "Profile Update",
            text: response?.data?.message,
            icon: "success"
          });
          localStorage.setItem('userInfo', JSON.stringify(response?.data?.data))
          navigate('/property')
        } else {
          Swal.fire({
            title: "Profile Update",
            text: response?.data?.message,
            icon: "error"
          })
        }
  }
  return (
    <> 
      <NavBar/>
      <div className="container my-5">
        <h2 className="text-center">Admin Profile</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit((d)=> updateUser(d))}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="text" className="form-control" placeholder="Enter your name" {...register('name')} />
                    </div>
                    {errors?.name && <p className='text-danger'>{errors?.name?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input type="email" className="form-control" placeholder="Enter your email" {...register('email')} disabled/>
                    </div>
                    {errors?.email && <p className='text-danger'>{errors?.email?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input type="number" className="form-control" placeholder="Enter phone number" {...register('contact')}/>
                    </div>
                    {errors?.contact && <p className='text-danger'>{errors?.contact?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input type="text" className="form-control" placeholder="Password" {...register('password')}/>
                    </div>
                    {errors?.password && <p className='text-danger'>{errors?.password?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <select className="form-select">
                      <option selected>Select your country</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>California</option>
                      <option>Afghanistan	Asia</option>
                      <option>Albania	Europe</option>
                      <option>Algeria	Africa</option>
                      <option>American Samoa	Oceania</option>
                      <option>Andorra	Europe</option>
                      <option>Angola	Africa</option>
                      <option>Anguilla	Caribbean</option>
                      <option>Antigua and Barbuda	Caribbean</option>
                      <option>Argentina	South America</option>
                      <option>Armenia	Asia</option>
                      <option>Aruba	Caribbean</option>
                      <option>Australia	Oceania</option>
                      <option>Austria	Europe</option>
                      <option>Azerbaijan	Asia</option>
                    </select>
                    
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <select className="form-select">
                      <option selected>Select your state</option>
                      <option>Uttar Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chattishgarh</option>
                      <option>Goa</option>
                      <option>Gujrat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnatka</option>
                      <option>Kerla</option>
                      <option>Manipur</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>

                    </select>
                    
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <select className="form-select">
                      <option selected>Select your city</option>
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Adoni</option>
                      <option>Amaravati</option>
                      <option>Anantapur</option>
                      <option>Chandragiri</option>
                      <option>Chittoor</option>
                      <option>Dowlaiswaram</option>
                      <option>Eluru</option>
                      <option>Guntur</option>
                      <option>Kadapa</option>
                      <option>Kakinanda</option>
                      <option>Kurnool</option>
                      <option>Machilipatnam</option>
                      <option>Nagarjunakonda</option>
                      <option>Rajahmundry</option>
                      <option>Srikakulam</option>
                      <option>Tirupati</option>
                      <option>Vijayawada</option>
                    </select>
                    
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Profile Picture</label>
                    <div className="input-group">
                      <span className="input-group-text"><MdAddPhotoAlternate /></span>
                      <input type="file" className="form-control"  {...register('profile')}/>
                    </div>
                    {errors?.profile && <p className='text-danger'>{errors?.profile?.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn  px-5 btn-login">Update</button>
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

export default AdminProfile;

