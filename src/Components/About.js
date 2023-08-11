import React from "react";
import Navbar from "./Navbar";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1 className="Title">About Us</h1>
        <div className="card1 "data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="row ">
            <div className="text">
              <div className="card1-body">
                <h5 className="card1-title">Daily Dispatch</h5>
                <p className="card1-text">
                  Welcome to DailyDispatch - Your Trusted Source for Timely and
                  Reliable News! Stay informed, enlightened, and engaged with
                  the latest stories from around the world. Unparalleled news
                  coverage, diverse categories, and a user-friendly experience
                  await you. Join our community and be inspired by stories of
                  resilience and humanity. Subscribe to our newsletter and
                  follow us on social media for personalized news alerts. Thank
                  you for being a part of DailyDispatch - your go-to destination
                  for news!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
