import React from "react";
import Flex from "./Common/Flex";
import Title from "./Common/Title";
import Container from "./Common/Container";
import List from "./Common/List";
import Listitem from "./Common/Listitem";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Flex className="justify-between items-center ">
          <Flex>
            <Title className="text-[24px] font-bold font-inter text-primaryColor">
              Exclusive
            </Title>
          </Flex>
          <Flex>
            <List  className="flex">
              <Listitem className=" text-base font-poppins" >Home</Listitem>
              <Listitem className=" text-base font-poppins">Contact</Listitem>
              <Listitem className=" text-base font-poppins">About</Listitem>
              <Listitem className=" text-base font-poppins">Signup</Listitem>
            </List>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
