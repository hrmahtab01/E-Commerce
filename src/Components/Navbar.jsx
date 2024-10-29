import React, { useState } from "react";
import Flex from "./Common/Flex";
import Title from "./Common/Title";
import Container from "./Common/Container";
import List from "./Common/List";
import Listitem from "./Common/Listitem";
import Input from "./Common/Input";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation();
  const [menuBar, setMenuBar] = useState(false);
  const [srcvalue, Setsrcvalue] = useState("");
  const [srcbtn, Setsrcbtn] = useState(false);

  let handlechangeinput = (e) => {
    Setsrcvalue(e.target.value);
  };
  let handleSrcsubmit =()=>{
    Setsrcvalue('')
  }

  return (
    <nav className="w-full lg:pt-[39px] pt-[16px] pb-[15px] lg:mt-[39px] mb-[15px] border-b bg-[#fff] ">
      <Container>
        <Flex className="justify-between items-center md:flex hidden ">
          <Flex>
            <Title className="text-[24px] font-bold font-inter text-primaryColor">
              Exclusive
            </Title>
          </Flex>
          <Flex>
            <List className="flex gap-[48px]">
              <Link to="/">
                <Listitem
                  className={`${
                    location.pathname === "/" && "border-b border-primaryColor"
                  }`}
                >
                  Home
                </Listitem>
              </Link>
              <Link to="/Contact">
                <Listitem
                  className={`${
                    location.pathname === "/Contact" &&
                    "border-b border-primaryColor"
                  }`}
                >
                  Contact
                </Listitem>
              </Link>
              <Link to="/About">
                <Listitem
                  className={`${
                    location.pathname === "/About" &&
                    "border-b border-primaryColor"
                  }`}
                >
                  About
                </Listitem>
              </Link>
              <Link to="/signup">
                <Listitem
                  className={`${
                    location.pathname === "/signup" &&
                    "border-b border-primaryColor"
                  }`}
                >
                  Signup
                </Listitem>
              </Link>
            </List>
          </Flex>
          <Flex className="gap-[40px]">
            <Flex className="w-[243px] h-[38px] relative">
              <Input
                onchange={handlechangeinput}
                value={srcvalue}
                className="w-full h-full bg-SecondarySecond rounded-[4px] text-[14px] font-poppins font-semibold text-[#000000] placeholder:text-[12px] placeholder:font-poppins placeholder:text-[#000]/50 placeholder:font-normal pl-[20px] pr-[40px]"
                placeholder="What are you looking for?"
                type="text"
              />
              <CiSearch onClick={handleSrcsubmit} className="absolute bottom-[7px] right-[12px] text-[24px] text-[#000]" />
            </Flex>
            <Flex
              className={`items-center ${
                location.pathname === "/signup" ||
                location.pathname === "/login"
                  ? "hidden"
                  : "block"
              }`}
            >
              <MdOutlineLocalGroceryStore className="text-[32px] text-primaryColor" />
            </Flex>
          </Flex>
        </Flex>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <Flex className="justify-between items-center">
            <Title className="text-[16px] font-bold font-inter text-primaryColor">
              Exclusive
            </Title>
            <Flex className="w-[143px] h-[38px] relative">
              <Input
                onchange={handlechangeinput}
                value={srcvalue}
                className="w-full h-full bg-SecondarySecond rounded-[4px] text-[14px] font-poppins font-semibold text-[#000000] placeholder:text-[12px] placeholder:font-poppins placeholder:text-[#000]/50 placeholder:font-normal pl-[20px] pr-[40px]"
                placeholder="What are you looking for?"
                type="text"
              />
              <CiSearch onClick={handleSrcsubmit} className="absolute bottom-[7px] right-[12px] text-[24px] text-[#000]" />
            </Flex>
            <button onClick={() => setMenuBar(!menuBar)}>
              {menuBar ? (
                <RxCross2 className="text-[24px]" />
              ) : (
                <IoMdMenu className="text-[24px]" />
              )}
            </button>
          </Flex>
          {menuBar && (
            <div className="mt-2 bg-white border rounded-lg shadow-md">
              <List className="flex flex-col gap-2 p-4">
                <Link to="/">
                  <Listitem
                    className={`${
                      location.pathname === "/" && "font-bold text-primaryColor"
                    }`}
                  >
                    Home
                  </Listitem>
                </Link>
                <Link to="/Contact">
                  <Listitem
                    className={`${
                      location.pathname === "/Contact" &&
                      "font-bold text-primaryColor"
                    }`}
                  >
                    Contact
                  </Listitem>
                </Link>
                <Link to="/About">
                  <Listitem
                    className={`${
                      location.pathname === "/About" &&
                      "font-bold text-primaryColor"
                    }`}
                  >
                    About
                  </Listitem>
                </Link>
                <Link to="/signup">
                  <Listitem
                    className={`${
                      location.pathname === "/signup" &&
                      "font-bold text-primaryColor"
                    }`}
                  >
                    Signup
                  </Listitem>
                </Link>
              </List>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
