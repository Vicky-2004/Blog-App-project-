import React from "react";
import nlogo from "../assets/logo.png";

function Logo({ width = "100px" }) {
  return (
    <img
      src={nlogo}
      alt="MegaBlog Logo"
      style={{ width }}
      className="object-contain"
    />
  );
}

export default Logo;
