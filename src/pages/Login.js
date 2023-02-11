import React from "react";
import { Link } from "react-router-dom";
import LoginCard from "../components/LoginCard";

function Login() {
  return (
    <>
      <div className="bg-[#131319] h-[100vh] flex justify-center items-center">
        <LoginCard isModal={false} />
      </div>
    </>
  );
}

export default Login;
