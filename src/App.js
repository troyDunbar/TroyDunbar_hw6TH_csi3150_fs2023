import React from "react";
import "./App.css";
import travelblog from "./components/TravelBlog";
//importing my data
import TravelData from "./TravelData";

function App() {
  const info = TravelData.map((item) => {
    return (
      <travelblog
        key={item.id}
        heading={item.placeHeading}
        img1={item.placeImg1}
        img2={item.placeImg2}
        img3={item.placeImg3}
        description={item.placeDescription}
      />
    );
  });

  return (
    <div className="App">
      <section className="container">{info}</section>
    </div>
  );
}

export default App;
