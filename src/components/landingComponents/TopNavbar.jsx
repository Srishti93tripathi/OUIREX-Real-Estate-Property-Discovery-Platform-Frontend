import React from 'react'
import { FaDribbble, FaInstagram, FaRegEnvelope, FaTwitter, FaHome } from "react-icons/fa";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';


const TopNavbar = () => {
  return (
   <>
    <div className="row mycolor sticky-top topNavbar">
          <div className="col-sm-6 py-1 mycolor">
            <div className="row">
              <div className="col-3 py-1 text-end">
                <MailOutlinedIcon fontSize="small" className='btncolor'/>
                &nbsp; <b className="text-light email"> Info@webmail.com</b>
              </div>
              <div className="col-6 py-1">
                <LocationOnOutlinedIcon fontSize="small" className='btncolor'/>
                &nbsp; <b className="text-light location"> 15/A, NestTower,NYC</b> 
              </div>
            </div>
          </div>
          <div className="col-sm-6 py-1 text-end text-light mycolor">
            {/* <FaFacebookF />
            &nbsp;&nbsp; <FaTwitter />
            &nbsp;&nbsp;
            <FaInstagram />
            &nbsp;&nbsp;
            <FaDribbble /> */}
            <div className="social-icons">
                <Link><div className="topNavIcon"><i className="fa-brands fa-facebook-f"></i></div></Link>
                <Link><div className="topNavIcon"><i className="fa-brands fa-twitter"></i></div></Link>
                <Link><div className="topNavIcon"><i className="fa-brands fa-instagram"></i></div></Link>
                <Link><div className="topNavIcon"><i class="fa-brands fa-youtube"></i></div></Link>
            </div>
            
         
          </div>
        </div>
   </>
  )
}

export default TopNavbar
