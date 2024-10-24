import React from "react";
import Container from "./Common/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import teamOneiamge from "../assets/team three.png";
import teamImagetwo from "../assets/team two.png";
import teamImagethree from "../assets/team one.png";
import Title from "./Common/Title";
import Text from "./Common/Text";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[80px]">
      <Container>
        <div className="slider-container teamslick">
          <Slider {...settings}>
            <div>
              <div className="w-[370px] bg-SecondarySecond h-[430px]">
                <img src={teamOneiamge} alt="teamOneiamge" />
              </div>
              <div className="mt-[32px]">
                <Title className="text-[32px] text-primaryColor font-medium font-inter">
                  Tom Cruise
                </Title>
                <Text className="text-base font-normal text-primaryColor font-poppins mt-2">
                  Founder & Chairman
                </Text>
              </div>
              <ul className="flex gap-4 mt-4">
                <li className="text-[24px] text-primaryColor">
                  <CiTwitter />
                </li>
                <li className="text-[24px] text-primaryColor">
                  <FaInstagram />
                </li>
                <li className="text-[24px] text-primaryColor">
                  <RiLinkedinLine />
                </li>
              </ul>
            </div>
            <div>
              <div className="w-[370px] bg-SecondarySecond h-[430px]">
                <img src={teamImagetwo} alt="teamImagetwo" />
              </div>
              <div className="mt-[32px]">
                <Title className="text-[32px] text-primaryColor font-medium font-inter">
                  Emma Watson
                </Title>
                <Text className="text-base font-normal text-primaryColor font-poppins mt-2">
                  Managing Director
                </Text>
              </div>
              <ul className="flex gap-4 mt-4">
                <li className="text-[24px] text-primaryColor">
                  <CiTwitter />
                </li>
                <li className="text-[24px] text-primaryColor">
                  <FaInstagram />
                </li>
                <li className="text-[24px] text-primaryColor">
                  <RiLinkedinLine />
                </li>
              </ul>
            </div>
            <div>
              <div className="w-[370px] bg-SecondarySecond h-[430px]">
                <img src={teamImagethree} alt="teamImagethree" />
              </div>
              <div className="mt-[32px]">
                <Title className="text-[32px] text-primaryColor font-medium font-inter">
                  Will Smith
                </Title>
                <Text className="text-base font-normal text-primaryColor font-poppins mt-2">
                  Product Designer
                </Text>
              </div>
              <ul className="flex gap-4 mt-4">
                <li className="text-[24px] text-primaryColor">
                  <CiTwitter />
                </li>
                <li className="text-[24px] text-primaryColor">
                  <FaInstagram />
                </li>
                <li className="text-[24px] text-primaryColor">
                  <RiLinkedinLine />
                </li>
              </ul>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Team;
