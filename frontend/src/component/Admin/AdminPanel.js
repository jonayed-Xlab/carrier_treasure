import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";
import { Link , useHistory} from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

export default function AdminPanel() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [root, setRoot] = useState([]);
  const [axiosEmail,setAxiosEmail] = useState('');
  const [axiosPassword,setAxiosPassword] = useState('');
  useEffect(() => {
    getRoot();
  });

  const sendDashboard = (e)=>{
    e.preventDefault();
    root.map((val,key)=>{

      if((val.email == email) && (val.password == password)){
        history.push('/dashboard')
      }else{
        alert('failed');
      }
    })
  }
  const getRoot = () => {
    axios.get("http://localhost:8080/api/profile").then((res) => {
      setRoot(res.data);
    });

  };
  return (
    <div className="bg">
     {/* {root.map((val,key)=> (setAxiosEmail(val.email),
     setAxiosPassword(val.password)
     ))
     } */}

     
<form>
      <div className="container p">
        <div className="row ">
          <div className="card card__bd">
            <div className="card-body">
              <h5 className="card-title">
                <span className="">admin </span>
                <span>
                  <PersonIcon />
                </span>
              </h5>
              <br />

              <div className="row">
                <div className="col-md-6 col">
                  <h6 className="card-subtitle mb-3 ">Enter UserName</h6>
                  <input type="text" className="input__field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} required/>
                  <h6 className="card-subtitle mb-3 ">Enter Password</h6>
                  <input type="password" className="input__field"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="col-md-6 col logo mt-3">
                  <Link to="/" className="logo">
                    <h3>SOBIPABE</h3>
                  </Link>
                  <h6 className="mt-0 msg">Authorized person access</h6>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3 offset-md-9">
                  <input type="submit" className="input__submit btn-success"
                  onClick={sendDashboard} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
