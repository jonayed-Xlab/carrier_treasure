import React, { useState, useEffect } from "react";
import "./Profile.css";
import img from "../img/admin/ok.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile();
  });

  const getProfile = () => {
    axios.get("http://localhost:8080/api/profile").then((res) => {
      setProfile(res.data);
    });
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
              {profile.map((profile, index) => (
                <div className="card-body">
                  <p className="card-text font-weight-bold "> User Name</p>
                  <p className="card-text "> {profile.name}</p>
                  <p className="card-text font-weight-bold"> Email</p>
                  <p className="card-text "> {profile.email}</p>
                  <p className="card-text font-weight-bold"> Password</p>
                  <p className="card-text ">{profile.password} </p>
                  <Link to="/editProfile" className="btn btn-warning px-5">
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
