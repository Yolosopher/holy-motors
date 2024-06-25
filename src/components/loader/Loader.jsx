import React from "react";
import { BounceLoader } from "react-spinners";
import "./loader.style.scss";

const Loader = ({ isFullScreen, size }) => {
  return (
    <div className={`loader-box${isFullScreen && " fullscreen"}`}>
      <BounceLoader color="#ff0000" size={size ?? 60} />
    </div>
  );
};

export default Loader;
