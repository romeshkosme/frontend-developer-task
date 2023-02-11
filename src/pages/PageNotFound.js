import React from "react";
import PageNotFoundImg from "../assets/pageNotFound.png";

function PageNotFound() {
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center flex-col">
        <img src={PageNotFoundImg} />
        <h2 className="text-gray-600 text-xl mt-5">Page not found.</h2>
      </div>
    </>
  );
}

export default PageNotFound;
