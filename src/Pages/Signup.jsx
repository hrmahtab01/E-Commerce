import React from "react";
import SideImage from "../assets/side image.png";
import Title from "../Components/Common/Title";
import Text from "../Components/Common/Text";
import CommonBtn from "../Components/Common/CommonBtn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mt-[60px] mb-[140px]">
      <div className="md:flex md:gap-[129px] grid grid-cols-1 ">
        <img
          className="md:w-[919px] md:h-[781px] xl:w-[1030px] "
          src={SideImage}
          alt=""
        />
        <div className="w-[371px] mt-[125px]">
          <Title className="text-[36px] text-primaryColor font-medium font-inter leading-[30px] tracking-wider">
            Create an account
          </Title>
          <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] mt-[24px]">
            Enter your details below
          </Text>
          <div className=" w-[371px] h-[32px] mt-[48px]">
            <input
              className="w-full h-full border-b outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className=" w-[371px] h-[32px] mt-[48px]">
            <input
              className="w-full h-full border-b outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins"
              type="email"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className=" w-[371px] h-[32px] mt-[48px]">
            <input
              className="w-full h-full border-b outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins"
              type="password"
              placeholder="Password"
            />
          </div>
          <CommonBtn classname="py-4 px-[122px] bg-[#DB4444] text-base text-Secondary font-medium font-poppins leading-[24px] rounded-[4px] mt-[40px]">
            Create Account
          </CommonBtn>
          <CommonBtn classname="py-4 px-[84px] bg-[#fff] border border-[#000000]/40 text-base text-primaryColor font-medium font-poppins leading-[24px] rounded-[4px] mt-[40px] flex gap-4 items-center">
            <FcGoogle className="text-[24px]" /> Sign up with Google
          </CommonBtn>
          <Text className="text-base text-primaryColor/70 font-normal font-poppins leading-[24px]  mt-[34px] text-center ">
            Already have account?{" "}
           <Link to="/login"> <span className="text-primaryColor font-medium border-b ml-4 cursor-pointer">
              Log in
            </span></Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Signup;
