import { useEffect, useState } from "react";
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
import inhanceimage from "../assets/Inhance.png"
import CommonBtn from "./Common/CommonBtn";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      top: "-25%",
      right: "10px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      border: "none",
      borderRadius: "50%",
      padding: "10px",
      cursor: "pointer",
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
      position: "absolute",
      top: "-25%",
      right: "60px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      border: "none",
      borderRadius: "50%",
      padding: "10px",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    <GrFormPrevious className="text-2xl" />
  </button>
);

const Categories = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-02-20T00:00:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const settings = {   
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
        <div>
          <Flex className="items-center gap-4">
            <Flex className="w-[20px] h-[40px] bg-ThirdColor rounded-md"></Flex>
            <Text className="text-base font-semibold font-poppins text-ThirdColor">
              Categories
            </Text>
          </Flex>
          <Title className="lg:text-[36px] text-2xl font-semibold font-inter text-primaryColor mt-[24px]">
            Browse By Category
          </Title>
        </div>
        <div className="pt-[60px] lg:cateslick smallcateslcik border-b">
          <Slider {...settings}>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <CiMobile4 className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Phones
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px]  group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <HiOutlineComputerDesktop className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Computers
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <BsSmartwatch className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  SmartWatch
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group  hover:bg-ThirdColor duration-300 ">
              <div className="flex flex-col justify-center items-center">
                <CiCamera className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Camera
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300r">
              <div className="flex flex-col justify-center items-center">
                <CiHeadphones className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  HeadPhones
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <FaGamepad className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Gaming
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <CiHeadphones className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  HeadPhones
                </Text>
              </div>
            </div>
            <div className="md:w-[170px] h-[145px] w-[100px] bg-SecondarySecond  rounded-[4px] group hover:bg-ThirdColor duration-300">
              <div className="flex flex-col justify-center items-center">
                <CiCamera className="text-[56px] text-primaryColor text-center mt-[25px] group-hover:text-Secondary duration-300" />
                <Text className="text-base font-normal font-poppins text-primaryColor mt-[16px] group-hover:text-Secondary duration-300">
                  Camera
                </Text>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-full h-[500px] bg-primaryColor">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="py-[70px] pl-[56px]">
              <div>
                <Text className="text-base font-semibold font-poppins text-[#00FF66] ">
                  Categories
                </Text>
                <Title className=" text-3xl lg:text-5xl font-semibold font-inter text-Secondary  leading-[60px] mt-[32px] tracking-wider">
                  Enhance Your <br /> Music Experience
                </Title>
              </div>
              <div className="flex lg:gap-6 gap-4 mt-[32px]">
                <div className="w-[62px] h-[62px] bg-Secondary rounded-full flex flex-col justify-center items-center">
                  <span className="text-base text-primaryColor font-poppins font-semibold">
                    {timeLeft.days}
                  </span>
                  <span className="text-[11px] text-primaryColor font-normal font-poppins">
                    Days
                  </span>
                </div>
                <div className="w-[62px] h-[62px] bg-Secondary rounded-full flex flex-col justify-center items-center">
                  <span className="text-base text-primaryColor font-poppins font-semibold">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[11px] text-primaryColor font-normal font-poppins">
                    Hours
                  </span>
                </div>
                <div className="w-[62px] h-[62px] bg-Secondary rounded-full flex flex-col justify-center items-center">
                  <span className="text-base text-primaryColor font-poppins font-semibold">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[11px] text-primaryColor font-normal font-poppins">
                    Minutes
                  </span>
                </div>
                <div className="w-[62px] h-[62px] bg-Secondary rounded-full flex flex-col justify-center items-center">
                  <span className="text-base text-primaryColor font-poppins font-semibold">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[11px] text-primaryColor font-normal font-poppins">
                    Seconds
                  </span>
                </div>
              </div>
              <CommonBtn classname="py-[16px] px-[48px] rounded-[4px] bg-FourColor text-base font-medium font-poppins mt-[40px]">
                Buy Now!
              </CommonBtn>
            </div>
            <div className="relative w-2/4">
              <div className="bg-[#D9D9D9]/30 w-[500px] h-[500px] rounded-full blur-[50px] z-0 "></div>
            </div>
            <img
              src={inhanceimage}
              alt="Enhance Your Music Experience"
              onError={() => console.error("Image failed to load")}
              className="hidden lg:block absolute top-0 w-[600px] h-[420px] right-[60px] rotate-y-[-180deg] z-[999]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
