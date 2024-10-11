import React from "react";
import Container from "./Common/Container";
import Text from "./Common/Text";
import Title from "./Common/Title";
import Flex from "./Common/Flex";

const Topbar = () => {
  return (
    <div className="bg-primaryColor w-full py-3">
      <Container>
        <Flex className="justify-between items-center my-auto">
          <Flex className="ml-[250px]">
            <Text className="text-base font-poppins font-normal text-Secondary">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </Text>
            <Text className="text-base font-poppins  font-semibold text-Secondary ml-2 border-b ">
              ShopNow
            </Text>
          </Flex>
          <div>
            <select className="bg-primaryColor text-Secondary" name="" id="">
                <option className="text-Secondary text-[14px] font-poppins font-normal" value="Englis"> English </option>
                <option className="text-Secondary text-[14px] font-poppins font-normal" value="Bangla">Bangla </option>
                <option className="text-Secondary text-[14px] font-poppins font-normal" value="Hidni">Hindi </option>
            </select>
          </div> 
        </Flex>
      </Container> 
    </div> 
  );
};

export default Topbar;
