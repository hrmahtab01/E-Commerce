import React from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";
import Title from "../Components/Common/Title";
import ModelImage from "../assets/model.png";
import Team from "../Components/Team";
import Delivery from "../Components/Delivery";

const About = () => {
  
  return (
    <div className="py-[80px] pb-[80px] ">
      <div className="flex  md:justify-end justify-center">
        <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins  leading-[25px] text-center">
          Home / <span className="text-primaryColor">About</span>
        </Text>
        <div className="lg:flex lg:gap-[75px] lg:mt-[42px] grid grid-cols-1">
          <div className="mt-[137px]">
            <Title className="text-[54px] text-primaryColor font-medium font-poppins ">
              Our Story
            </Title>
            <Text className="text-base text-primaryColor font-normal font-poppinsm leading-[23px] md:w-[525px] mt-[40px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported{" "}
              <br /> by wide range of tailored marketing, data and service
              solutions, <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 <br />{" "}
              millioons customers across the region.{" "}
            </Text>
            <Text className="text-base text-primaryColor font-normal font-poppinsm leading-[23px] md:w-[525px] mt-6">
              Exclusive has more than 1 Million products to offer, growing at a{" "}
              <br />
              very fast. Exclusive offers a diverse assotment in categories{" "}
              <br />
              ranging from consumer.
            </Text>
          </div>
          <div className="">
            <img className="w-[705px] h-[609px] xl:w-[850px] object-cover rounded-s-[4px]" src={ModelImage} alt="ModelImage" />
          </div>
        </div>
      </div>
      <Container>
       <div>
       <Team/>
       <div className="mt-[160px]">
       <Delivery/>
       </div>
       </div>
      </Container>
    </div>
  );
};

export default About;
