import React from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";
import productOneimage from "../assets/product one.png";
import productTwoimage from "../assets/product two.png";
import productThreeimage from "../assets/product three.png";
import productFourimage from "../assets/product four.png";
import productMainimage from "../assets/product main.png";
import Title from "../Components/Common/Title";
import Flex from "../Components/Common/Flex";
import List from "../Components/Common/List";
import StarDesing from "../Components/Common/StarDesing";
import { FaRegHeart } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";

const Product = () => {
  return (
    <div className="pt-[80px] pb-[140px] ">
      <Container>
        <div>
          <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins  leading-[25px]">
            Home / Gaming /{" "}
            <span className="text-primaryColor">Havic HV G-92 Gamepad</span>
          </Text>
          <div className="mt-[80px] flex gap-[71px]">
            <div className="flex gap-[30px]">
              <div className="flex flex-col gap-4">
                <div className="w-[170px] h-[138px] bg-Secondary rounded-[4px]">
                  <img src={productOneimage} alt="productOneimage" />
                </div>
                <div className="w-[170px] h-[138px] bg-Secondary rounded-[4px]">
                  <img src={productTwoimage} alt="productTwoimage" />
                </div>
                <div className="w-[170px] h-[138px] bg-Secondary rounded-[4px]">
                  <img src={productThreeimage} alt="productThreeimage" />
                </div>
                <div className="w-[170px] h-[138px] bg-Secondary rounded-[4px]">
                  <img src={productFourimage} alt="productFourimage" />
                </div>
              </div>
              <div className="w-[500px] h-[600px] bg-Secondary rounded-[4px] flex justify-center items-center">
                <img
                  className=" object-cover"
                  src={productMainimage}
                  alt="productMainimage"
                />
              </div>
            </div>
            <div>
              <div>
                <Title className="text-[24px] text-primaryColor font-semibold font-inter">
                  Havic HV G-92 Gamepad
                </Title>
                <div className="flex items-center gap-4 mt-4">
                  <Flex className="items-center  gap-2">
                    <List className="flex gap-[1px] ">
                      <StarDesing></StarDesing>
                      <StarDesing></StarDesing>
                      <StarDesing></StarDesing>
                      <StarDesing></StarDesing>
                      <StarDesing></StarDesing>
                    </List>
                    <Text className="text-[14px] font-semibold font-poppins text-primaryColor/50 mt-1">
                      (150 Reviews)
                    </Text>
                  </Flex>
                  <div className="flex items-center mt-1 gap-4">
                    <Text>।</Text>
                    <Text className="text-[14px] text-[#00FF66] font-normal font-poppins">
                      In Stock
                    </Text>
                  </div>
                </div>
                <Text className="text-[24px] text-primaryColor font-normal font-inter mt-4 leading-relaxed">
                  $192.00
                </Text>
                <Text className="py-[24px] text-sm text-primaryColor font-normal font-poppins  leading-loose border-b border-primaryColor">
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </Text>
                <div className="flex mt-6 gap-6">
                  <Text className="text-xl text-primaryColor font-normal font-inter leading-5 tracking-wide">
                    Colours:
                  </Text>
                  <div className="flex gap-2">
                    <input
                      className="w-[20px] h-[20px] rounded-full  bg-red-500 appearance-none checked:rounded-full checked:border checked:border-primaryColor"
                      id="colorred"
                      type="radio"
                    />
                    <input
                      className="w-[20px] h-[20px] rounded-full  bg-blue-600 appearance-none checked:rounded-full checked:border checked:border-primaryColor"
                      id="colorblue"
                      type="radio"
                    />
                  </div>
                </div>
                <div className="flex mt-6  items-center gap-6">
                  <Text className="text-xl text-primaryColor font-normal font-inter leading-5 tracking-wide">
                    Size:
                  </Text>
                  <div className="flex gap-4">
                    <div className="w-[32px] h-[32px] border border-primaryColor/50 rounded-[4px] flex justify-center items-center hover:bg-ThirdColor duration-300  group hover:border-none cursor-pointer">
                      <Text className="text-[14px] text-primaryColor font-medium font-poppins  group-hover:text-white duration-200">
                        XS
                      </Text>
                    </div>
                    <div className="w-[32px] h-[32px] border border-primaryColor/50 rounded-[4px] flex justify-center items-center hover:bg-ThirdColor duration-300  group hover:border-none cursor-pointer">
                      <Text className="text-[14px] text-primaryColor font-medium font-poppins  group-hover:text-white duration-200">
                        S
                      </Text>
                    </div>
                    <div className="w-[32px] h-[32px] border border-primaryColor/50 rounded-[4px] flex justify-center items-center hover:bg-ThirdColor duration-300  group hover:border-none cursor-pointer">
                      <Text className="text-[14px] text-primaryColor font-medium font-poppins  group-hover:text-white duration-200">
                        M
                      </Text>
                    </div>
                    <div className="w-[32px] h-[32px] border border-primaryColor/50 rounded-[4px] flex justify-center items-center hover:bg-ThirdColor duration-300  group hover:border-none cursor-pointer">
                      <Text className="text-[14px] text-primaryColor font-medium font-poppins  group-hover:text-white duration-200">
                        L
                      </Text>
                    </div>
                    <div className="w-[32px] h-[32px] border border-primaryColor/50 rounded-[4px] flex justify-center items-center hover:bg-ThirdColor duration-300  group hover:border-none cursor-pointer">
                      <Text className="text-[14px] text-primaryColor font-medium font-poppins  group-hover:text-white duration-200">
                        XL
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <div className="w-[159px] h-[44px] border border-primaryColor/50 rounded-[4px] flex overflow-hidden cursor-pointer ">
                    <div className="w-[40px] h-full border-r border-primaryColor hover:bg-ThirdColor rounded-[2px] duration-300 group hover:border-none">
                      <Text className="text-[30px]  flex justify-center items-center group-hover:text-white duration-300 text-primaryColor font-medium font-poppins  ">
                        -
                      </Text>
                    </div>
                    <div className=" w-[80px] h-[44px] items-center flex justify-center border-r border-primaryColor hover:bg-ThirdColor rounded-[2px] duration-300 group  ">
                      <Text className="group-hover:text-white duration-300 text-xl text-primaryColor font-medium font-poppins">
                        2
                      </Text>
                    </div>
                    <div className="w-[40px] h-[44px] flex justify-center items-center hover:bg-ThirdColor rounded-[2px] duration-300 group">
                      <Text className="text-[24px] group-hover:text-white duration-300 text-primaryColor font-medium font-poppins">
                        +
                      </Text>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="py-[10px] px-[48px] bg-ThirdColor text-base text-white font-medium font-poppins rounded-[4px]">
                      Buy Now
                    </button>
                    <div className="w-[40px] h-[40px] border border-primaryColor/50 rounded-[4px] flex justify-center items-center">
                      <FaRegHeart className="text-[20px] " />
                    </div>
                  </div>
                </div>
                <div className="w-[399px] h-[180px] border-2 border-primaryColor/50 rounded-[4px] mt-[40px]">
                  <div className="pt-[24px] pb-[16px]">
                    <div className="flex items-center pl-[16px] gap-4">
                      <GrDeliver className="text-[32px]" />
                      <div>
                        <Title className="text-base text-primaryColor font-medium font-poppins">
                          Free Delivery
                        </Title>
                        <Text className="text-[12px] text-primaryColor font-medium font-poppins border-b border-primaryColor mt-2">
                          Enter your postal code for Delivery Availability
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[16px] pb-[24px]">
                    <div className="flex items-center pl-[16px] gap-4">
                      <TfiReload className="text-[32px]" />
                      <div>
                        <Title className="text-base text-primaryColor font-medium font-poppins">
                          Return Delivery
                        </Title>
                        <Text className="text-[12px] text-primaryColor font-medium font-poppins  mt-2">
                          Free 30 Days Delivery Returns. Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
