import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Common/Container";
import Flex from "./Common/Flex";
import { FaApple } from "react-icons/fa";
import Text from "./Common/Text";
import Title from "./Common/Title";
import CommonBtn from "./Common/CommonBtn";
import { GrLinkNext } from "react-icons/gr";
import Heroimage from "../assets/Hero.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-[40px]">
      <Container>
        <Slider {...settings}>
          <div className="bg-primaryColor w-full h-[344px] flex items-center relative overflow-hidden customdot">
            <div className="pt-[68px] pl-[64px] flex flex-col gap-5">
              <Flex className="items-center gap-7">
                <FaApple className="text-Secondary w-[40px] h-[49px]" />
                <Text className="text-base font-normal font-poppins text-[#FAFAFA]">
                  iPhone 14 Series
                </Text>
              </Flex>
              <Title className="text-4xl font-semibold font-inter text-Secondary w-[294px] leading-[60px]">
                Up to 10%
                <br />
                off Voucher
              </Title>
              <Flex className="items-center gap-2">
                <CommonBtn classname="text-base font-normal font-poppins text-[#fff] border-b">
                  Shop Now
                </CommonBtn>
                <GrLinkNext className="text-[24px] font-normal font-poppins text-[#fff]" />
              </Flex>
            </div>
            <div className="flex-1 flex justify-center items-center text-[#fff] absolute bottom-[-10px] right-[252px]">
              <img
                className="w-[496px] h-[352px]"
                src={Heroimage}
                alt="Heroimage"
              />
            </div>
          </div>
          <div className="bg-primaryColor w-full h-[344px] flex items-center relative overflow-hidden">
            <div className="pt-[68px] pl-[64px] flex flex-col gap-5">
              <Flex className="items-center gap-7">
                <FaApple className="text-Secondary w-[40px] h-[49px]" />
                <Text className="text-base font-normal font-poppins text-[#FAFAFA]">
                  iPhone 14 Series
                </Text>
              </Flex>
              <Title className="text-4xl font-semibold font-inter text-Secondary w-[294px] leading-[60px]">
                Up to 10%
                <br />
                off Voucher
              </Title>
              <Flex className="items-center gap-2">
                <CommonBtn classname="text-base font-normal font-poppins text-[#fff] border-b">
                  Shop Now
                </CommonBtn>
                <GrLinkNext className="text-[24px] font-normal font-poppins text-[#fff]" />
              </Flex>
            </div>
            <div className="flex-1 flex justify-center items-center text-[#fff] absolute bottom-[-10px] right-[252px]">
              <img
                className="w-[496px] h-[352px] "
                src={Heroimage}
                alt="Heroimage"
              />
            </div>
          </div>
          <div className="bg-primaryColor w-full h-[344px] flex items-center relative overflow-hidden">
            <div className="pt-[68px] pl-[64px] flex flex-col gap-5">
              <Flex className="items-center gap-7">
                <FaApple className="text-Secondary w-[40px] h-[49px]" />
                <Text className="text-base font-normal font-poppins text-[#FAFAFA]">
                  iPhone 14 Series
                </Text>
              </Flex>
              <Title className="text-4xl font-semibold font-inter text-Secondary w-[294px] leading-[60px]">
                Up to 10%
                <br />
                off Voucher
              </Title>
              <Flex className="items-center gap-2">
                <CommonBtn classname="text-base font-normal font-poppins text-[#fff] border-b">
                  Shop Now
                </CommonBtn>
                <GrLinkNext className="text-[24px] font-normal font-poppins text-[#fff]" />
              </Flex>
            </div>
            <div className="flex-1 flex justify-center items-center text-[#fff] absolute bottom-[-10px] right-[252px]">
              <img
                className="w-[496px] h-[352px]"
                src={Heroimage}
                alt="Heroimage"
              />
            </div>
          </div>
          <div className="bg-primaryColor w-full h-[344px] flex items-center relative overflow-hidden">
            <div className="pt-[68px] pl-[64px] flex flex-col gap-5">
              <Flex className="items-center gap-7">
                <FaApple className="text-Secondary w-[40px] h-[49px]" />
                <Text className="text-base font-normal font-poppins text-[#FAFAFA]">
                  iPhone 14 Series
                </Text>
              </Flex>
              <Title className="text-4xl font-semibold font-inter text-Secondary w-[294px] leading-[60px]">
                Up to 10%
                <br />
                off Voucher
              </Title>
              <Flex className="items-center gap-2">
                <CommonBtn classname="text-base font-normal font-poppins text-[#fff] border-b">
                  Shop Now
                </CommonBtn>
                <GrLinkNext className="text-[24px] font-normal font-poppins text-[#fff]" />
              </Flex>
            </div>
            <div className="flex-1 flex justify-center items-center text-[#fff] absolute bottom-[-10px] right-[252px]">
              <img
                className="w-[496px] h-[352px]"
                src={Heroimage}
                alt="Heroimage"
              />
            </div>
          </div>
          <div className="bg-primaryColor w-full h-[344px] flex items-center relative overflow-hidden">
            <div className="pt-[68px] pl-[64px] flex flex-col gap-5">
              <Flex className="items-center gap-7">
                <FaApple className="text-Secondary w-[40px] h-[49px]" />
                <Text className="text-base font-normal font-poppins text-[#FAFAFA]">
                  iPhone 14 Series
                </Text>
              </Flex>
              <Title className="text-4xl font-semibold font-inter text-Secondary w-[294px] leading-[60px]">
                Up to 10%
                <br />
                off Voucher
              </Title>
              <Flex className="items-center gap-2">
                <CommonBtn classname="text-base font-normal font-poppins text-[#fff] border-b">
                  Shop Now
                </CommonBtn>
                <GrLinkNext className="text-[24px] font-normal font-poppins text-[#fff]" />
              </Flex>
            </div>
            <div className="flex-1 flex justify-center items-center text-[#fff] absolute bottom-[-10px] right-[252px]">
              <img
                className="w-[496px] h-[352px]"
                src={Heroimage}
                alt="Heroimage"
              />
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Hero;
