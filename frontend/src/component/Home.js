import React, { useState, useEffect } from "react";
import "./Home.css";
import Poster from "./Poster";
import Product from "./Product";
import poster_three from "./img/poster__home__page/poster_two.jpg";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getPost();
  });
  const getPost = () => {
    axios.get("http://localhost:8080/api/product").then((res) => {
      setPostList(res.data);
    });
  };
  return (
    <div className="home">
      <div className="container-fluid">
        <input
          type="text"
          id="home"
          className="form-control my-2 px-3"
          placeholder="Search"
          name="title"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className="banner">
          <Poster poster={poster_three} />
        </div>
        <div className="row">
          {postList
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.productName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              <div className="col-sm-3">
                
                <Product
                  id={item.id}
                  productId = {item.productId}
                  title={item.productName}
                  description={item.productDescription}
                  price={item.productPrice}
                  image={item.imgURL}

                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
