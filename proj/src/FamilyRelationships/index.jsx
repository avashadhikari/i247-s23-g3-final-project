import Sticky from "react-stickynode";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import SameSexMarriageViz from "../viz/SameSexMarriageViz";
import { useState } from "react";

const FamilyRelationships = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease",
      once: false,
      mirror: true,
    });
  });

  return (
    <>
      <div
        className="center snap-y snap-mandatory scroll-smooth"
        data-aos="zoom-in-up"
        id="content-familyrelationships"
      >
        <SameSexMarriageViz />

        <iframe
          width="100%"
          height="1084"
          frameborder="0"
          src="https://observablehq.com/embed/d98d229f68b277cf@125?cells=myRadarChart"
        ></iframe>
      </div>
    </>
  );
};
export default FamilyRelationships;