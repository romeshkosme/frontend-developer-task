import React, { useState } from "react";
import closeIcon from "../assets/close.png";
import showPasswordIcon from "../assets/showPassword.png";

function RegisterCard({ setIsOpen, setModalState }) {
  const [password, setPassword] = useState();
  const [passwordType, setPasswordType] = useState(true);
  return (
    <>
      {/* card */}
      <div className="bg-gradient-to-r p-[2px] from-[#969696] to-[#343434] rounded-[8px]">
        <div className="rounded-[8px] bg-[#27292D] w-[463px] py-[40px] px-[24px] cursor-default">
          {/*  */}
          <div className="relative">
            <span
              onClick={() => {
                setIsOpen(false);
                setModalState("register");
              }}
              className="absolute h-[30px] w-[30px] bg-[#131319] rounded-full flex justify-center items-center cursor-pointer right-0"
            >
              <img src={closeIcon} className="h-[20px]" />
            </span>
            <p className="text-[#6B6C70] font-[500] text-[14px] text-center">
              SIGN UP
            </p>
            <h2 className="text-white font-[600] text-[18px] text-center">
              Create an account to continue
            </h2>
          </div>
          {/* form */}
          <div className="flex flex-col mt-[40px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[17px]">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent w-[415px] h-[43px] mt-[8px] px-2 text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[17px]">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a preferred username"
              className="border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent w-[415px] h-[43px] mt-[8px] px-2 text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <label className="text-[#C5C7CA] text-[14px] font-[500] leading-[17px]">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordType ? "password" : "text"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a strong password"
                className="border-[1.5px] border-[#35373B] rounded-[4px] bg-transparent w-[415px] h-[43px] mt-[8px] px-2 text-white focus:outline-none"
              />
              <img
                src={showPasswordIcon}
                className="absolute top-4 right-4 w-[30px] cursor-pointer"
                onClick={() => setPasswordType(!passwordType)}
              />
            </div>
          </div>
          <button className="bg-[#4A96FF] rounded-[4px] text-white text-[16px] font-[500] w-[415px] h-[43px] mt-[20px]">
            Continue
          </button>
          <p className="text-[#7F8084] text-[14px] font-[400] mt-[20px]">
            Already have an account?&nbsp;
            <span
              className="text-[#C5C7CA] font-[500] cursor-pointer"
              onClick={() => setModalState("login")}
            >
              Login →
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterCard;
