import React from "react";
import "./travelblog.css";
const travelblog = (props) => {
  return (
    <div className="container-wrapper">
      <h1 className="top-header">{props.heading}</h1>
      <div className="images">
        <img src={props.Img1} alt="" className="Img1"></img>
        <img src={props.Img2} alt="" className="Img2"></img>
        <img src={props.Img3} alt="" className="Img3"></img>
      </div>
      <p className="bottom-paragraph">{props.description}</p>
    </div>
  );
};

export default travelblog;
