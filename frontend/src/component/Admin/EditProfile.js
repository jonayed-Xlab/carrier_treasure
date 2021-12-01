import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { auth } from "../firebase";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState('');

  const sendProfileData= (e) => {
    e.preventDefault();

  
        const data = {
          name: name,
          email: email,
          password: password,
        };
    
        axios.post('http://localhost:8080/api/profile', data).then(res => {
          setData(res.data);
          setName('');
          setEmail('');
          setPassword('');
          alert("succes submition")
     
          }).catch((error) => {
            alert(error.message)
          })
};
  return (
    <div>
      <main className="mt-5 pt-2">
        <div className="container-fluid">
          <div className="row">
            <div
              className="card cr shadow p-3 mb-5 bg-white rounded"
              style={{ width: "40rem" }}
            >
              <div className="card-body">
                <p className="card-text font-weight-bold mt-2"> </p>

                <p className="card-text font-weight-bold mt-3"> User Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="card-text font-weight-bold mt-2"> Email</p>
                <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <p className="card-text font-weight-bold mt-2"> Password</p>
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <Link
                  to="/editProfile"
                  className="btn btn-success px-5 mt-3 ml-3"
                  onClick={sendProfileData}

                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default EditProfile;
