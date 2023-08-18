import React from "react";
import Lottie from "react-lottie";
import nofound from "assets/lottie/404.json";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: nofound,
        }}
        height={300}
        width={300}
      />
    </div>
  );
};

export default NotFound;
