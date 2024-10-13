import React from "react";
import Container from "./Common/Container";
import Flex from "./Common/Flex";
import Title from "./Common/Title";
import Text from "./Common/Text";
import Input from "./Common/Input";
import { MdSend } from "react-icons/md";
import Qscanerimage from "../assets/Qr Code.png";
import Playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-[80px] bg-primaryColor border-b border-Secondary/30">
        <Container>
          <Flex className="gap-[87px]">
            <div>
              <Title className="text-[24px] text-Secondary font-bold font-inter leading-loose tracking-wider">
                Exclusive
              </Title>
              <Text className="text-xl text-Secondary font-medium font-poppins mt-6">
                Subscribe
              </Text>
              <Text className="text-base text-Secondary font-normal font-poppins leading-[24px] mt-6">
                Get 10% off your first order
              </Text>
              <div className="w-[217px] h-[48px] relative mt-7  ">
                <Input
                  className=" w-full h-full rounded-[4px] border pl-[15px] bg-primaryColor border-Secondary placeholder:text-base placeholder:text-Secondary/40 placeholder:font-normal placeholder:font-poppins placeholder:leading-relaxed text-Secondary text-base font-normal font-poppins"
                  placeholder="Enter your email"
                  type="email"
                />
                <MdSend className="text-[24px] text-Secondary absolute right-[15px] top-[12px]" />
              </div>
            </div>
            <div>
              <Title className="text-xl text-Secondary font-medium font-poppins leading-[28px]">
                Support
              </Title>
              <Text className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-6">
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </Text>
              <Text className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                exclusive@gmail.com
              </Text>
              <Text className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                +88015-88888-9999
              </Text>
            </div>
            <div>
              <Title className="text-xl text-Secondary font-medium font-poppins leading-[28px]">
                Account
              </Title>
              <ul>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-6">
                  My Account
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  Login / Register
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  Cart
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  Wishlist
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  Shop
                </li>
              </ul>
            </div>
            <div>
              <Title className="text-xl text-Secondary font-medium font-poppins leading-[28px]">
                Quick Link
              </Title>
              <ul>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-6">
                  Privacy Policy
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  Terms Of Use
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  FAQ
                </li>
                <li className="text-base text-Secondary  font-normal font-poppins  leading-[24px] mt-4">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <Title className="text-xl text-Secondary font-medium font-poppins leading-[28px]">
                Download App
              </Title>
              <Text className="text-[12px] text-Secondary font-medium font-poppins  leading-[28px] mt-6">
                Save $3 with App New User Only
              </Text>
              <Flex className="gap-2 mt-[10px]">
                <img
                  className="w-[80px] h-[80px]"
                  src={Qscanerimage}
                  alt="Qscanerimage"
                />
                <div>
                  <img
                    className="w-[110px] h-[40px]"
                    src={Playstore}
                    alt="Playstore"
                  />
                  <img
                    className="w-[110px] h-[40px]"
                    src={appstore}
                    alt="appstore"
                  />
                </div>
              </Flex>
              <ul className="flex gap-6 mt-6">
                <li className="text-[24px] text-Secondary">
                  <FaFacebookF />
                </li>
                <li className="text-[24px] text-Secondary">
                  <FaTwitter />
                </li>
                <li className="text-[24px] text-Secondary">
                  <FaInstagram />
                </li>
                <li className="text-[24px] text-Secondary">
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="pt-[16px] pb-[24px] bg-primaryColor w-full">
        <Container>
          <div className="flex justify-center items-center gap-2">
            <FaCopyright className="text-xl text-[#fff]" />
            <Text className="text-base text-[#fff] font-medium font-inter">Copyright mahtab 2024. All right reserved</Text>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
