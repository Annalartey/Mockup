import React from "react";
import ImageSlider from "./ImageSlider";

import image1 from "./assets/slide_1.jpeg";
import image2 from "./assets/slide_2.jpeg";
import image3 from "./assets/slide_3.jpeg";
import image4 from "./assets/slide_4.jpeg";
import image5 from "./assets/slide_5.jpeg";
import image6 from "./assets/slide_6.jpeg";

function Try() {
    return (
      <div>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h1>Text Goes Here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </ImageSlider>
      </div>
    )
}

export default Try
