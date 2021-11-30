import React from "react";

import "../style.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src="../Images/banner.jpg" alt="Banner" />
        <div className="banner-content p-2">
          <div className="inner-div text-center m-2 p-2">
            <h1>Cook Book</h1>
            <p>Instead of going out to dinner, make own good food. ..</p>
            <p>Your Own Recipe Book Here...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
