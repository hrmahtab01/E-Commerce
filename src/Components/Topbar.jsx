import React from "react";
import Container from "./Common/Container";
import Text from "./Common/Text";
import Title from "./Common/Title";
import Flex from "./Common/Flex";

const Topbar = () => {
  return (
    <div className="bg-primaryColor w-full py-3 ">
      <Container>
        <Flex className="justify-between items-center my-auto lg:ml-[250px]">
          <Flex className="gap-7 md:gap-0">
            <Text className="text-[12px] md:text-base w-[250px] md:w-full font-poppins font-normal text-Secondary">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </Text>
            <Text className="text-[12px] lg:text-base font-poppins  font-semibold text-Secondary ml-[2px] lg:ml-2 border-b ">
              ShopNow
            </Text>
          </Flex>
          <div className="hidden lg:block">
            <select className="bg-primaryColor text-Secondary" name="" id="">
                <option className="text-Secondary text-[12px] lg:text-[14px] font-poppins font-normal" value="Englis"> English </option>
                <option className="text-Secondary text-[12px] lg:text-[14px] font-poppins font-normal" value="Bangla">Bangla </option>
                <option className="text-Secondary text-[12px] lg:text-[14px] font-poppins font-normal" value="Hidni">Hindi </option>
            </select>
          </div> 
        </Flex>
      </Container> 
    </div> 
  );
};

export default Topbar;
