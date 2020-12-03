import React from "react";
import loading from "../images/spinner.svg";

const Loading = () => {
  return (
    <div className="fixed w-full h-full bg-gray-700 bg-opacity-40 flex items-center justify-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
