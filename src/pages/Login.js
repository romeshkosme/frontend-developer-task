import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="bg-[#131319] h-[100vh] flex justify-center items-center">
        {/* card */}
        <div className="border-2 border-white rounded-[8px] bg-[#27292D] w-[463px] h-[420px] py-[40px] px-[24px]">
          {/*  */}
          <p className="text-[#6B6C70] font-[500] text-[14px] text-center">
            WELCOME BACK
          </p>
          <h2 className="text-white font-[600] text-[18px] text-center">
            Log into your account
          </h2>
          {/* form */}
          <div className="flex flex-col mt-[40px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[17px]">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent w-[415px] h-[43px] mt-[8px] px-2 text-white"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[17px]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent w-[415px] h-[43px] mt-[8px] px-2 text-white"
            />
          </div>
          <Link to={"/home"}>
            <button className="bg-[#4A96FF] rounded-[4px] text-white text-[16px] font-[500] w-[415px] h-[43px] mt-[20px]">
              Login now
            </button>
          </Link>
          <p className="text-[#7F8084] text-[14px] font-[400] mt-[20px]">
            Not registered yet?&nbsp;
            <span className="text-[#C5C7CA] font-[500]">Register</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
