import React from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";
import Flex from "../Components/Common/Flex";
import Title from "../Components/Common/Title";
import { MdDone } from "react-icons/md";
import monitorImage from "../assets/feature three.png";
import GamingImage from "../assets/feature one.png";
import BkashImage from "../assets/Bkash.png";
import NagadImage from "../assets/Nagad.png";
import MastercardImage from "../assets/Mastercard.png";
import Visaimage from "../assets/Visa.png";
import CommonBtn from "../Components/Common/CommonBtn";


const Checkout = () => {

  
  
  return (
    <div className="pt-[80px] pb-[140px]">
      <Container>
        <div>
          <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins leading-[21px]">
            Accout / My account / Product / View cart /{" "}
            <span className="text-primaryColor">CheckOut</span>{" "}
          </Text>
          <Flex className="mt-[80px] gap-[173px] md:flex grid grid-cols-1">
            <div>
              <Title className="text-4xl text-primaryColor font-medium font-inter leading-[31px]">
                Billing Details
              </Title>
              <div className="w-[470px] h-[814px]">
                <div className="mt-[48px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    First Name<span className="text-ThirdColor">*</span>
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    Company Name
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    Street Address
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    Apartment, floor, etc. (optional)
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    Town/City<span className="text-ThirdColor">*</span>
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    Phone Number<span className="text-ThirdColor">*</span>
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <Text className="text-base text-primaryColor/40 font-normal font-poppins">
                    Email Address<span className="text-ThirdColor">*</span>
                  </Text>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-poppins pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="flex mt-6 gap-4">
                  <div className="w-[24px] h-[24px] bg-ThirdColor rounded-[4px] flex justify-center items-center">
                    <MdDone className="text-Secondary text-[14px]" />
                  </div>
                  <Text className="text-base text-primaryColor font-normal font-poppins">
                    Save this information for faster check-out next time
                  </Text>
                </div>  
              </div>
            </div>
            <div className="w-[527px] h-[600px] mt-[80px]">
              <div>
                <div className="flex justify-between items-center w-[422px] h-[54px]">
                  <div className="flex gap-6 items-center ">
                    <img
                      className="w-[49px] h-[42px]"
                      src={monitorImage}
                      alt="monitorImage"
                    />
                    <Text className="text-base text-primaryColor font-normal font-poppins">
                      LCD Monitor
                    </Text>
                  </div>
                  <Text className="text-base text-primaryColor font-normal font-poppins">
                    $650
                  </Text>
                </div>
                <div className="flex justify-between items-center mt-[32px] w-[422px] h-[54px]">
                  <div className="flex gap-6 items-center">
                    <img
                      className="w-[49px] h-[42px]"
                      src={GamingImage}
                      alt="GamingImage"
                    />
                    <Text className="text-base text-primaryColor font-normal font-poppins">
                      H1 Gamepad
                    </Text>
                  </div>
                  <Text className="text-base text-primaryColor font-normal font-poppins">
                    $1100
                  </Text>
                </div>
                <div className="mt-[32px]">
                  <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor w-[422px]">
                    <Text className="text-base  text-primaryColor font-normal font-poppins">
                      Subtotal:
                    </Text>
                    <Text className="text-base  text-primaryColor font-normal font-poppins">
                      $1750
                    </Text>
                  </div>
                  <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor w-[422px]">
                    <Text className="text-base  text-primaryColor font-normal font-poppins">
                      Shipping:
                    </Text>
                    <Text className="text-base  text-primaryColor font-normal font-poppins">
                      Free
                    </Text>
                  </div>
                  <div className="flex justify-between pt-[16px] pb-[16px] w-[422px] ">
                    <Text className="text-base  text-primaryColor font-normal font-poppins">
                      Total:
                    </Text>
                    <Text className="text-base  text-primaryColor font-normal font-poppins">
                      $1750
                    </Text>
                  </div>
                </div>
                <div className="mt-[32px] flex gap-[155px]">
                  <div className="flex gap-4">
                    <input
                      className="w-[24px] h-[24px] bg-primaryColor active:bg-primaryColor"
                      type="radio"
                    />
                    <Text className="text-base text-primaryColor font-normal font-poppins">
                      Bank
                    </Text>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-[42px] h-[28px]"
                      src={BkashImage}
                      alt="BkashImage"
                    />
                    <img
                      className="w-[42px] h-[28px]"
                      src={Visaimage}
                      alt="Visaimage"
                    />
                    <img
                      className="w-[42px] h-[28px]"
                      src={MastercardImage}
                      alt="MastercardImage"
                    />
                    <img
                      className="w-[42px] h-[28px]"
                      src={NagadImage}
                      alt="NagadImage"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-[32px]">
                  <input
                    className="w-[24px] h-[24px] bg-primaryColor active:bg-primaryColor"
                    type="radio"
                  />
                  <Text className="text-base text-primaryColor font-normal font-poppins">
                    Cash on delivery
                  </Text>
                </div>
                <div className="md:flex gap-4 mt-[32px] grid grid-cols-1">
                  <input
                    className="w-[300px] h-[56px] border border-primaryColor rounded-[4px] outline-none placeholder:text-base placeholder:text-primaryColor/40  placeholder:font-normal placeholder:font-poppins pl-6 text-base text-primaryColor font-normal font-poppins"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <CommonBtn classname="w-[211px] h-[56px] bg-ThirdColor text-base text-Secondary font-medium font-poppins rounded-[4px]">
                    Apply Coupon
                  </CommonBtn>
                </div>
                <CommonBtn classname="w-[211px] h-[56px] bg-ThirdColor text-base text-Secondary font-medium font-poppins rounded-[4px] mt-[32px]">
                  Place Order
                </CommonBtn>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
