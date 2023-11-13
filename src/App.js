import "./App.css";
import TravelBlog from "./components/TravelBlog/travelblog";
//importing my data
import TravelData from "./TravelData";
import Hero from "./components/Hero/hero";

function App() {
  const info = TravelData.map((item) => {
    return (
      <TravelBlog
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
      <section className="container">
        <Hero />
        {info}
      </section>
    </div>
  );
}

export default App;
