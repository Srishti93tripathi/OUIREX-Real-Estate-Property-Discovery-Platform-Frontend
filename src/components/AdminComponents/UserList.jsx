// import React from 'react'
// import NavBar from '../landingComponents/NavBar'
// const UserList = () => {
//   return (
//     <div>
//         <NavBar/>
//      UserList 
//     </div>
//   )
// }

// export default UserList

import React, { useEffect, useState } from "react";
import NavBar from '../landingComponents/NavBar'
import axios from "axios";
const UserList = () => {
  const [list, setList] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const response = await axios.get(
        "https://quirex-real-estate-website-backend.vercel.app/api/admin-user-list"
      );
      if (response?.data?.code == 200) {
        setList(response?.data?.data);
      }
    };
  return (
    <>
        <NavBar/>
        <div className="row">
        <h1 className="btncolor my-4 text-center">User List </h1>
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          {/* table ki starting */}
          <table className="table table-hover table-bordered table-sm">
            <thead className="table table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Country</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Profile</th>
                
                
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.contact}</td>
                      <td>{item?.country}</td>
                      <td>{item?.state}</td>
                      <td>{item?.city}</td>
                      <td>
                        <img
                          height="60"
                          width="60"
                          src={`https://quirex-real-estate-website-backend.vercel.app/img/${item?.profile}`}
                          alt=""
                          className="rounded-circle"
                        />
                      </td>
                      
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {list?.length == 0 && <p className="text-center">No Record Found!</p>}
        </div>
        <div className="col-sm-1"></div>
      </div>  
    </>
  )
}

export default UserList

