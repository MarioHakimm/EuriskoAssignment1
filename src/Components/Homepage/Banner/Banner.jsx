import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <>
      <div id="homeBannerMain">
        {/* <img id="top-cloud" src="./assets/images/cloud.png" alt="cloudImg" /> */}
        <div>
          <img id="mypic" src="/assets/Images/MyPic.jpeg" alt="My pic" />

          <h1>I'm Mario</h1>
          <h2>A Full Stack Developer</h2>
        </div>
      </div>
    </>
  );
}

export default Banner;
