import React from "react";
import Container from "./Common/Container";
import Flex from "./Common/Flex";
import Title from "./Common/Title";
import Text from "./Common/Text";
import Featureone from "../assets/feature one.png";
import Featuretwo from "../assets/feature two.png";
import Featurethree from "../assets/feature three.png";
import Featurefour from "../assets/feature four.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import StarDesing from "./Common/StarDesing";
import List from "./Common/List";
import CommonBtn from "./Common/CommonBtn";


const Features = () => {

    
  return (
    <div className="mt-[140px]">
      <Container>
        <div>
          <Flex className="items-center gap-4">
            <Flex className="w-[20px] h-[40px] bg-ThirdColor rounded-md"></Flex>
            <Text className="text-base font-semibold font-poppins text-ThirdColor">
              Features
            </Text>
          </Flex>
          <Title className="text-[36px] font-semibold font-inter text-primaryColor mt-[24px]">
            Features Products
          </Title>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[40px] gap-[30px] place-items-center md:place-items-start ">
          <div>
            <div className="w-[270px] h-[250px] bg-SecondarySecond flex justify-center items-center rounded-[4px] relative group ">
              <img
                className=" w-[170px] h-[170px] "
                src={Featureone}
                alt="Featureone"
              />
              <CiHeart className="absolute top-3 right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#FFf] text-primaryColor" />
              <IoEyeOutline className="absolute top-[54px] right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#fff] text-primaryColor" />
              <Text className="px-[12px] py-[4px] bg-ThirdColor text-[12px] font-normal font-poppins text-Secondary rounded-[4px] absolute top-3 left-3">
                -40%
              </Text>
              <Text className="w-full bg-primaryColor py-2 text-Secondary text-center absolute bottom-0 hidden group-hover:block group-hover:duration-300  cursor-pointer">
                Add To Cart
              </Text>
            </div>
            <Title className="text-base font-medium text-primaryColor font-poppins mt-[16px]">
              HAVIT HV-G92 Gamepad
            </Title>
            <Flex className="gap-3 mt-2">
              <Text className="text-base font-medium font-poppins text-ThirdColor">
                $120
              </Text>
              <Text className="text-base font-medium font-poppins text-primaryColor relative">
                $160
                <div className="w-full h-[2px] bg-primaryColor absolute top-[50%] translate-y-[-50%]"></div>
              </Text>
            </Flex>
            <Flex className="items-center mt-2 gap-2">
              <List className="flex gap-[1px] ">
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
              </List>
              <Text className="text-[14px] font-semibold font-poppins text-primaryColor/50 mt-1">
                (88)
              </Text>
            </Flex>
          </div>
          <div>
            <div className="w-[270px] h-[250px] bg-SecondarySecond flex justify-center items-center rounded-[4px] relative group ">
              <img
                className=" w-[170px] h-[170px] "
                src={Featuretwo}
                alt="Featuretwo"
              />
              <CiHeart className="absolute top-3 right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#FFf] text-primaryColor" />
              <IoEyeOutline className="absolute top-[54px] right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#fff] text-primaryColor" />
              <Text className="px-[12px] py-[4px] bg-ThirdColor text-[12px] font-normal font-poppins text-Secondary rounded-[4px] absolute top-3 left-3">
                -35%
              </Text>
              <Text className="w-full bg-primaryColor py-2 text-Secondary text-center absolute bottom-0 hidden group-hover:block group-hover:duration-300 cursor-pointer">
                Add To Cart
              </Text>
            </div>
            <Title className="text-base font-medium text-primaryColor font-poppins mt-[16px]">
              HAVIT HV-G92 Gamepad
            </Title>
            <Flex className="gap-3 mt-2">
              <Text className="text-base font-medium font-poppins text-ThirdColor">
              $960
              </Text>
              <Text className="text-base font-medium font-poppins text-primaryColor relative">
              $1160
                <div className="w-full h-[2px] bg-primaryColor absolute top-[50%] translate-y-[-50%]"></div>
              </Text>
            </Flex>
            <Flex className="items-center mt-2 gap-2">
              <List className="flex gap-[1px] ">
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
              </List>
              <Text className="text-[14px] font-semibold font-poppins text-primaryColor/50 mt-1">
                (75)
              </Text>
            </Flex>
          </div>
          <div>
            <div className="w-[270px] h-[250px] bg-SecondarySecond flex justify-center items-center rounded-[4px] relative group ">
              <img
                className=" w-[170px] h-[170px] "
                src={Featurethree}
                alt="Featurethree"
              />
              <CiHeart className="absolute top-3 right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#FFf] text-primaryColor" />
              <IoEyeOutline className="absolute top-[54px] right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#fff] text-primaryColor" />
              <Text className="px-[12px] py-[4px] bg-ThirdColor text-[12px] font-normal font-poppins text-Secondary rounded-[4px] absolute top-3 left-3">
                -30%
              </Text>
              <Text className="w-full bg-primaryColor py-2 text-Secondary text-center absolute bottom-0 hidden group-hover:block group-hover:duration-300  cursor-pointer">
                Add To Cart
              </Text>
            </div>
            <Title className="text-base font-medium text-primaryColor font-poppins mt-[16px]">
              HAVIT HV-G92 Gamepad
            </Title>
            <Flex className="gap-3 mt-2">
              <Text className="text-base font-medium font-poppins text-ThirdColor">
              $370
              </Text>
              <Text className="text-base font-medium font-poppins text-primaryColor relative">
              $400
                <div className="w-full h-[2px] bg-primaryColor absolute top-[50%] translate-y-[-50%]"></div>
              </Text>
            </Flex>
            <Flex className="items-center mt-2 gap-2">
              <List className="flex gap-[1px] ">
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
              </List>
              <Text className="text-[14px] font-semibold font-poppins text-primaryColor/50 mt-1">
                (99)
              </Text>
            </Flex>
          </div>
          <div>
            <div className="w-[270px] h-[250px] bg-SecondarySecond flex justify-center items-center rounded-[4px] relative group ">
              <img
                className=" w-[170px] h-[170px] "
                src={Featurefour}
                alt="Featurefour"
              />
              <CiHeart className="absolute top-3 right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#FFf] text-primaryColor" />
              <IoEyeOutline className="absolute top-[54px] right-3 text-[24px] px-[5px] py-[5px] rounded-full bg-[#fff] text-primaryColor" />
              <Text className="px-[12px] py-[4px] bg-ThirdColor text-[12px] font-normal font-poppins text-Secondary rounded-[4px] absolute top-3 left-3">
                -25%
              </Text>
              <Text className="w-full bg-primaryColor py-2 text-Secondary text-center absolute bottom-0 hidden group-hover:block group-hover:duration-300  cursor-pointer">
                Add To Cart
              </Text>
            </div>
            <Title className="text-base font-medium text-primaryColor font-poppins mt-[16px]">
              HAVIT HV-G92 Gamepad
            </Title>
            <Flex className="gap-3 mt-2">
              <Text className="text-base font-medium font-poppins text-ThirdColor">
              $375
              </Text>
              <Text className="text-base font-medium font-poppins text-primaryColor relative">
                $400
                <div className="w-full h-[2px] bg-primaryColor absolute top-[50%] translate-y-[-50%]"></div>
              </Text>
            </Flex>
            <Flex className="items-center mt-2 gap-2">
              <List className="flex gap-[1px] ">
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
                <StarDesing></StarDesing>
              </List>
              <Text className="text-[14px] font-semibold font-poppins text-primaryColor/50 mt-1">
                (99)
              </Text>
            </Flex>
          </div>
        </div>
        <Flex className="justify-center pt-[51px] pb-[59px] border-b">
            <CommonBtn classname="py-[16px] px-[48px] bg-ThirdColor text-base font-poppins font-normal text-Secondary rounded-[4px] hover:text-primaryColor hover:bg-ThirdColor duration-300">
            View All Products
            </CommonBtn>
        </Flex>
      </Container>
    </div>
  );
};

export default Features;
