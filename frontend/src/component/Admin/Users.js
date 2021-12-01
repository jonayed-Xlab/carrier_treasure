import React, { useState, useEffect } from "react";
import axios from "axios";


function Users() {
  const[userList, setUserList] = useState([]);
  
  useEffect(() => {
    getUserList();
  });

  const getUserList = () => {
    axios.get("http://localhost:8080/api/user").then((res) => {
      setUserList(res.data);
    });
  };

  return (
    <div>
      <main className="mt-5 pt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-4">User list</div>
          </div>
          <div className="row">
            <div className="col col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">USER__ID</th>
                    <th scope="col">USER NAME</th>
                    <th scope="col">EMAIL ID</th>
                    <th scope="col">PASSWORD</th>
                    
                  </tr>
                </thead>
                <tbody>
                  
                  {userList.map((user, index) => (
                  <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      
                  </tr>
                      ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Users;
