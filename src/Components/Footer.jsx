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
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-10 lg:py-20 bg-primaryColor border-b border-Secondary/30 px-4 lg:px-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Subscribe Section */}
            <div>
              <Title className="text-xl lg:text-2xl text-Secondary font-bold leading-loose">
                Exclusive
              </Title>
              <Text className="text-base lg:text-lg text-Secondary font-medium mt-6">
                Subscribe
              </Text>
              <Text className="text-xs lg:text-sm text-Secondary leading-6 mt-3">
                Get 10% off your first order
              </Text>
              <div className="relative mt-7">
                <Input
                  className="w-full h-12 rounded border pl-3 bg-primaryColor border-Secondary placeholder:text-Secondary/40 text-Secondary text-sm"
                  placeholder="Enter your email"
                  type="email"
                />
                <MdSend className="text-lg text-Secondary absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Support Section */}
            <div>
              <Title className="text-xl text-Secondary font-medium leading-7">
                Support
              </Title>
              <Text className="text-base text-Secondary font-normal leading-6 mt-6">
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </Text>
              <Text className="text-base text-Secondary font-normal leading-6 mt-4">
                exclusive@gmail.com
              </Text>
              <Text className="text-base text-Secondary font-normal leading-6 mt-4">
                +88015-88888-9999
              </Text>
            </div>

            {/* Account Section */}
            <div>
              <Title className="text-xl text-Secondary font-medium leading-7">
                Account
              </Title>
              <ul>
                {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
                  <li key={item} className="text-base text-Secondary font-normal leading-6 mt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <Title className="text-xl text-Secondary font-medium leading-7">
                Quick Link
              </Title>
              <ul>
                {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
                  <li key={item} className="text-base text-Secondary font-normal leading-6 mt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App Section */}
            <div>
              <Title className="text-xl text-Secondary font-medium leading-7">
                Download App
              </Title>
              <Text className="text-xs lg:text-sm text-Secondary font-medium leading-6 mt-6">
                Save $3 with App New User Only
              </Text>
              <Flex className="gap-2 mt-2">
                <img className="w-20 h-20" src={Qscanerimage} alt="Qr Code" />
                <div>
                  <img className="w-28 h-10" src={Playstore} alt="Playstore" />
                  <img className="w-28 h-10" src={appstore} alt="Appstore" />
                </div>
              </Flex>
              <ul className="flex gap-4 mt-6">
                <li className="text-lg text-Secondary">
                  <FaFacebookF />
                </li>
                <li className="text-lg text-Secondary">
                  <FaTwitter />
                </li>
                <li className="text-lg text-Secondary">
                  <FaInstagram />
                </li>
                <li className="text-lg text-Secondary">
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Section */}
      <div className="py-4 bg-primaryColor">
        <Container>
          <div className="flex justify-center items-center gap-2">
            <FaCopyright className="text-xl text-white" />
            <Text className="text-base text-white font-medium">
              Copyright mahtab 2024. All rights reserved
            </Text>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
