import React from "react";
import "./TravelBlog.css";
const TravelBlog = (props) => {
  return (
    <div className="container-wrapper">
      <h1 className="top-header">{props.heading}</h1>

      <img src={props.img1} alt="" className="images1"></img>
      <img src={props.img2} alt="" className="images2"></img>
      <img src={props.img3} alt="" className="images3"></img>

      <p className="bottom-paragraph">{props.description}</p>
    </div>
  );
};

export default TravelBlog;
