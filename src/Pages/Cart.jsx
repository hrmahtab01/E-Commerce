import React, { useState } from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";
import Flex from "../Components/Common/Flex";
import monitorImage from "../assets/feature three.png";
import { RxCross2 } from "react-icons/rx";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import GamingImage from "../assets/feature one.png";
import CommonBtn from "../Components/Common/CommonBtn";
import Title from "../Components/Common/Title";

const Cart = () => {
  const [increament, Setincrement] = useState(1);
  const [gameincremnt, Setgameincrement] = useState(2);
  const [oneprice, Setoneprice] = useState(650);
  const [twoprice, Settwoprice] = useState(550);
  const [coupon, Setcoupon] = useState("");
  const [couponrr, Setcouponrr] = useState("");

  let Handleincreament = () => {
    Setincrement((prev) => prev + 1);
  };
  let handledcrement = () => {
    if (increament > 1) {
      Setincrement((prev) => prev - 1);
    }
  };
  let Handlegameincrement = () => {
    Setgameincrement((prev) => prev + 1);
  };
  let Handlegamedecrement = () => {
    if (gameincremnt > 1) {
      Setgameincrement((prev) => prev - 1);
    }
  };

  const monitor = increament * oneprice;
  const gamepad = gameincremnt * twoprice;
  const totalprice = monitor + gamepad;

  let Handleproccess = () => {
    console.log("your proccess success");
  };
  let Handlecoupondata = (e) => {
    Setcoupon(e.target.value);
    Setcouponrr("");
  };
  let HandleSubmitcoupon = () => {
    if (!coupon) {
      Setcouponrr("type your code");
    }
    if (coupon) {
      console.log("your code is success");
    }
  };
  return (
    <div className="pt-[80px] pb-[220px]">
      <Container>
        <div>
          <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins leading-[24px]">
            Home / <span className="text-primaryColor">Cart</span>
          </Text>
          <div className="mt-[80px] flex flex-col gap-10">
            <Flex className="py-[24px] bg-[#fff] shadow-sm shadow-primaryColor rounded-[4px] md:px-[40px] px-10 md:gap-[284px] gap-6">
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px]">
                Product
              </Text>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px]">
                Price
              </Text>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px]">
                Quantity
              </Text>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px]">
                Subtotal
              </Text>
            </Flex>
            {/* {'product part'} */}

            <Flex className="py-[24px] bg-[#fff] shadow-sm shadow-primaryColor rounded-[4px] md:px-[40px] px-10 md:gap-11 items-center">
              <Flex className="items-center gap-5 ">
                <div className="w-[54px] h-[54px] relative ">
                  <img src={monitorImage} alt="monitorImage" />
                  <div className="w-[18px] h-[18px] rounded-full bg-ThirdColor flex justify-center items-center absolute top-0 -left-1">
                    <RxCross2 className="text-[6px] text-[#fff]" />
                  </div>
                </div>
                <Text className="text-base text-primaryColor font-normal  font-poppins leading-[24px] ">
                  LCD Monitor
                </Text>
              </Flex>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] md:mr-[250px] mr-5 ml-5 md:ml-[130px]">
                $650
              </Text>
              <div className="w-[72px] h-[44px] border border-primaryColor/40 rounded-[4px] flex items-center justify-center gap-[6px] md:mr-[250px] mr-5 ">
                <Text className="text-base text-primaryColor font-normal font-poppins">
                  {increament}
                </Text>
                <Flex className="flex flex-col">
                  <GrFormPrevious
                    onClick={Handleincreament}
                    className="rotate-90 text-base"
                  />
                  <GrFormNext
                    onClick={handledcrement}
                    className="rotate-90 text-base"
                  />
                </Flex>
              </div>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] ">
                {monitor}
              </Text>
            </Flex>
            <Flex className="py-[24px] bg-[#fff] shadow-sm shadow-primaryColor rounded-[4px] md:px-[40px] px-10  md:gap-11  items-center">
              <Flex className="items-center md:gap-5 gap-2 ">
                <div className="w-[54px] h-[54px] relative ">
                  <img src={GamingImage} alt="GamingImage" />
                </div>
                <Text className="text-base text-primaryColor font-normal  font-poppins leading-[24px] ">
                  H1 Gamepad
                </Text>
              </Flex>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] md:mr-[250px] mr-5 md:ml-[120px] ml-5">
                $550
              </Text>
              <div className="w-[72px] h-[44px] border border-primaryColor/40 rounded-[4px] flex items-center justify-center gap-[6px] md:mr-[250px] mr-5 ">
                <Text className="text-base text-primaryColor font-normal font-poppins">
                  {gameincremnt}
                </Text>
                <Flex className="flex flex-col">
                  <GrFormPrevious
                    onClick={Handlegameincrement}
                    className="rotate-90 text-base"
                  />
                  <GrFormNext
                    onClick={Handlegamedecrement}
                    className="rotate-90 text-base"
                  />
                </Flex>
              </div>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] ">
                {gamepad}
              </Text>
            </Flex>
          </div>
          <div className="mt-[80px] md:flex  md:gap-[173px] grid grid-cols-1 space-y-10 ">
            <div className="md:flex gap-4 grid grid-cols-1 place-items-center">
              <input
                onChange={Handlecoupondata}
                value={coupon}
                className={`w-[300px] h-[56px] relative border ${
                  couponrr ? "border-red-500" : "border-primaryColor"
                }  rounded-[4px] outline-none placeholder:text-base placeholder:text-primaryColor/40  placeholder:font-normal placeholder:font-poppins pl-6 text-base text-primaryColor font-normal font-poppins`}
                type="text"
                placeholder="Coupon Code"
              />

              <CommonBtn
                onClick={HandleSubmitcoupon}
                classname="w-[211px] h-[56px] bg-ThirdColor text-base text-Secondary font-medium font-poppins rounded-[4px]"
              >
                Apply Coupon
              </CommonBtn>
            </div>
            <div className="md:w-[470px] h-[320px] rounded-[4px] border-[2px] border-primaryColor mx-5">
              <div className="py-[24px] px-[32px]">
                <Title className="text-xl text-primaryColor font-medium font-poppins leading-[28px]">
                  Cart Total
                </Title>
                <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor">
                  <Text className="text-base  text-primaryColor font-normal font-poppins">
                    Subtotal:
                  </Text>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">
                    {totalprice}
                  </Text>
                </div>
                <div className="flex justify-between border-b pt-[16px] pb-[16px] border-primaryColor">
                  <Text className="text-base  text-primaryColor font-normal font-poppins">
                    Shipping:
                  </Text>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">
                    Free
                  </Text>
                </div>
                <div className="flex justify-between pt-[16px] pb-[16px] ">
                  <Text className="text-base  text-primaryColor font-normal font-poppins">
                    Total:
                  </Text>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">
                    {totalprice}
                  </Text>
                </div>
                <Flex className="justify-center">
                  <button
                    onClick={Handleproccess}
                    className="py-[16px] px-[48px] bg-ThirdColor rounded-[4px] text-base text-Secondary font-medium font-poppins"
                  >
                    Procees to checkout
                  </button>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
