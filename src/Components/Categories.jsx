import React from "react";
import Container from "./Common/Container";
import Flex from "./Common/Flex";
import Title from "./Common/Title";
import Text from "./Common/Text";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";


const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '-25%',
        right: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 1,
      }}
    >
     <MdNavigateNext className="text-2xl" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '-25%',
        right: '60px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 1,
      }}
    >
   <GrFormPrevious className="text-2xl" />
    </button>
  );

const Categories = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="my-[80px]">
      <Container>
        <div>
          <Flex className="items-center gap-4">
            <Flex className="w-[20px] h-[40px] bg-ThirdColor rounded-md"></Flex>
            <Text className="text-base font-semibold font-poppins text-ThirdColor">
              Categories
            </Text>
          </Flex>
          <Title className="text-[36px] font-semibold font-inter text-primaryColor mt-[24px]">
            Browse By Category
          </Title>
        </div>
        <div className="mt-[60px] cateslick">
          <Slider {...settings}>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <CiMobile4 className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Phones
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px]  group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <HiOutlineComputerDesktop className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Computers
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <BsSmartwatch className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  SmartWatch
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group  hover:bg-ThirdColor duration-300 ">
              <div className="flex flex-col justify-center items-center">
                <CiCamera className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Camera
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300r">
              <div className="flex flex-col justify-center items-center">
                <CiHeadphones className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  HeadPhones
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <FaGamepad className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Gaming
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <CiHeadphones className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  HeadPhones
                </Text>
              </div>
            </div>
            <div className="w-[170px] h-[145px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <CiCamera className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Camera
                </Text>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
