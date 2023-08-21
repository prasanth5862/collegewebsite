import React from "react";
import "./style.css";
import collegeBuilding from "../../Assets/collegeBuilding.png";

const Home = () => {
  return (
    <div id="Home">
      <div className="home-content">
        <h1 className="home-content-heading">
          Empowering Minds, Shaping Futures: Your Journey Starts Here
        </h1>
        <p className="home-content-subheading">
          Embark on a transformative academic odyssey, where knowledge meets
          opportunity, and dreams take flight.
        </p>
        <div className="home-content-actions">
          <button
            style={{
              backgroundColor: "#F37337",
              boxShadow: "0px 24px 100px #F6272533",
              color: "#fff",
              borderColor: "#F37337",
              marginRight: "20px",
            }}
          >
            Explore
          </button>
          <button
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 24px 100px #F6272533",
              color: "#F37337",
              borderColor: "#F37337",
            }}
          >
            Contact Us 
          </button>
          </div>
          </div>
          <div className="home-content-image">
            <img src={collegeBuilding} alt="collegeBuilding" />
      </div>
    </div>
  );
};
// college website
export default Home;
