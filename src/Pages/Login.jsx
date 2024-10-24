import React from "react";
import SideImage from "../assets/side image.png";
import Title from "../Components/Common/Title";
import CommonBtn from "../Components/Common/CommonBtn";
import Text from "../Components/Common/Text";

const Login = () => {
  return (
    <div className="mt-[60px] mb-[140px]">
      <div className="">
        <div className="md:flex md:gap-[129px] grid grid-cols-1 ">
          <img
            className="md:w-[919px] md:h-[781px] xl:w-[1030px] "
            src={SideImage}
            alt=""
          />
          <div className="flex flex-col justify-center mt-10 md:mt-0  items-center">
            <div className="w-[371px] ">
              <Title className="text-[36px] text-primaryColor font-medium font-inter leading-[30px] tracking-wider">
                Log in to Exclusive
              </Title>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] mt-[24px]">
                Enter your details below
              </Text>
              <div className=" md;w-[371px] h-[32px] w-full mt-[48px]">
                <input
                  className="w-full h-full border-b outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins"
                  type="email"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div className=" md:w-[371px] w-full h-[32px] mt-[48px]">
                <input
                  className="w-full h-full border-b outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex gap-[87px] items-center mt-[40px]">
                <CommonBtn classname="py-4 px-[48px] bg-[#DB4444] text-base text-Secondary font-medium font-poppins leading-[24px] rounded-[4px] ">
                  Log In
                </CommonBtn>
                <Text className="text-base text-ThirdColor font-normal  font-poppins leading-[24px] cursor-pointer">
                  Forget Password?
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
