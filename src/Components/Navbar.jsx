import React from "react";
import Flex from "./Common/Flex";
import Title from "./Common/Title";
import Container from "./Common/Container";
import List from "./Common/List";
import Listitem from "./Common/Listitem";
import Input from "./Common/Input";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const Location =useLocation()
  return (
    <nav className="w-full pt-[39px] pb-[15px] mt-[39px] mb-[15px] border-b bg-[#fff] ">
      <Container>
        <Flex className="justify-between items-center  ">
          <Flex>
            <Title className="text-[24px] font-bold font-inter text-primaryColor">
              Exclusive
            </Title>
          </Flex>
          <Flex>
            <List className="flex gap-[48px]">
              <Link to="/"><Listitem className={`${Location.pathname == "/" && "border-b border-primaryColor"}`}>Home</Listitem></Link>
              <Listitem>Contact</Listitem>
             <Link to="/About"> <Listitem className={`${Location.pathname == "/About" && "border-b border-primaryColor"}`}>About</Listitem></Link>
              <Link to="/signup"><Listitem className={`${Location.pathname == "/signup" && "border-b border-primaryColor"}`}>Signup</Listitem></Link>
            </List>
          </Flex>
          <Flex className="gap-[40px]">
            <Flex className="w-[243px] h-[38px] relative">
              <Input
                className="w-full h-full bg-SecondarySecond rounded-[4px] text-[14px] font-poppins font-semibold text-[#000000] placeholder:text-[12px] placeholder:font-poppins placeholder:text-[#000]/50 placeholder:font-normal pl-[20px] pr-[40px]"
                placeholder="What are you looking for?"
                type="text"
              />
              <CiSearch className="absolute bottom-[7px] right-[12px] text-[24px] text-[#000]" />
            </Flex>
           {Location.pathname == '/signup' || Location.pathname == '/login'?
           
            <Flex className="items-center hidden">
             
              <MdOutlineLocalGroceryStore className="text-[32px] text-primaryColor" />
            </Flex>
            :
            <Flex className="items-center ">
             
            <MdOutlineLocalGroceryStore className="text-[32px] text-primaryColor" />
          </Flex>
          }
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
