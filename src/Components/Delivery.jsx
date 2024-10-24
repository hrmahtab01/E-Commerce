import React from "react";
import Container from "./Common/Container";
import { CiDeliveryTruck } from "react-icons/ci";
import Title from "./Common/Title";
import Text from "./Common/Text";
import { PiHeadsetDuotone } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Delivery = () => {

  const Location = useLocation()
  return (
    <div className={`mt-[80px]  ${Location.pathname == '/About' ? "mb-[80px]" : 'mb-[153px]'}`}>
      <Container>
        <div className="px-[113px] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-[#2F2E30]/30 flex justify-center items-center">
              <div className="w-[58px] h-[57px] rounded-full bg-primaryColor  flex justify-center items-center ">
                <CiDeliveryTruck className="text-[32px] text-Secondary " />
              </div>
            </div>
            <Title className="text-[20px] font-semibold font-poppins text-primaryColor mt-[24px]">
              FREE AND FAST DELIVERY
            </Title>
            <Text className="text-[14px] font-poppins font-normal text-primaryColor mt-2">
              Free delivery for all orders over $140
            </Text>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-[#2F2E30]/30 flex justify-center items-center">
              <div className="w-[58px] h-[57px] rounded-full bg-primaryColor  flex justify-center items-center ">
                <PiHeadsetDuotone className="text-[32px] text-Secondary " />
              </div>
            </div>
            <Title className="text-[20px] font-semibold font-poppins text-primaryColor mt-[24px]">
            24/7 CUSTOMER SERVICE
            </Title>
            <Text className="text-[14px] font-poppins font-normal text-primaryColor mt-2">
            Friendly 24/7 customer support
            </Text>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-[#2F2E30]/30 flex justify-center items-center">
              <div className="w-[58px] h-[57px] rounded-full bg-primaryColor  flex justify-center items-center ">
                <AiOutlineSafety className="text-[32px] text-Secondary " />
              </div>
            </div>
            <Title className="text-[20px] font-semibold font-poppins text-primaryColor mt-[24px]">
            MONEY BACK GUARANTEE
            </Title>
            <Text className="text-[14px] font-poppins font-normal text-primaryColor mt-2">
            We reurn money within 30 days
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
