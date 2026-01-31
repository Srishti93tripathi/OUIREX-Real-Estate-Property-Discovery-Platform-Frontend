import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from './components/landingComponents/NavBar';
// import "./App.css";

const NotFound = () => {
    // const navigate = useNavigate();
    // useEffect(()=> {
    //    navigate('/login');
    // },[]);
  return (
    <>
    <NavBar/>
    <div className='row mx-auto text-center'>
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>
        <h1 className='text-danger headNot'>404</h1>
        <h2 className='headNot1'>NOT FOUND</h2>
        <p>The resource requested is not found on this server!</p>

      </div>
      <div className='col-sm-2'></div>
    </div>
    </>
  )
}

export default NotFound
