import React from "react";
import "./Poster.css";
function Poster({ poster }) {
  return (
    <div className="">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={poster} className="check w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Poster;
