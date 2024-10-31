import React, { useState } from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";
import productOneimage from "../assets/product one.png";
import productTwoimage from "../assets/product two.png";
import productThreeimage from "../assets/product three.png";
import productFourimage from "../assets/product four.png";
import productMainimage from "../assets/product main.png";
import Title from "../Components/Common/Title";
import Flex from "../Components/Common/Flex";
import List from "../Components/Common/List";
import StarDesing from "../Components/Common/StarDesing";
import { FaRegHeart } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import RelatedItem from "../Components/Relateditem";

const Product = () => {
  const [increment, Setincrement] = useState(1);
  const [zepcode, Setzepcode] = useState("");

  let Handleincrement = () => {
    Setincrement((prev) => prev + 1);
  };
  let Handledecrement = () => {
    if (increment > 1) {
      Setincrement((prev) => prev - 1);
    }
  };
  let Handlebuyproduct =()=>{
    console.log("buying successfully");
    
  }
  return (
    <div className="pt-20 pb-36">
      <Container>
        <Text className="text-sm text-primaryColor/50 font-normal leading-6">
          Home / Gaming /{" "}
          <span className="text-primaryColor">Havic HV G-92 Gamepad</span>
        </Text>
        <div className="mt-20 flex flex-col lg:flex-row gap-10">
          {/* Thumbnails and Main Image */}
          <div className="flex flex-col lg:flex-row gap-6 lg:w-2/3">
            <div className="flex flex-col gap-4 lg:w-1/4">
              {[
                productOneimage,
                productTwoimage,
                productThreeimage,
                productFourimage,
              ].map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[138px] bg-Secondary rounded-md overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={image}
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 bg-Secondary rounded-md flex justify-center items-center h-96 md:mt-28 ">
              <img
                className="object-contain"
                src={productMainimage}
                alt="Main Product"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <Title className="text-2xl text-primaryColor font-semibold">
              Havic HV G-92 Gamepad
            </Title>
            <div className="flex items-center gap-4 mt-4">
              <Flex className="items-center gap-2">
                <List className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <StarDesing key={index} />
                  ))}
                </List>
                <Text className="text-sm font-semibold text-primaryColor/50">
                  (150 Reviews)
                </Text>
              </Flex>
              <div className="flex items-center mt-1">
                <Text className="text-sm text-[#00FF66]">In Stock</Text>
              </div>
            </div>
            <Text className="text-2xl text-primaryColor mt-4">$192.00</Text>
            <Text className="py-6 text-sm text-primaryColor border-b border-primaryColor/50">
              PlayStation 5 Controller Skin high quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal.
            </Text>
            <div className="flex mt-6 gap-4">
              <Text className="text-lg text-primaryColor">Colours:</Text>
              <div className="flex gap-2">
                <input
                  className="w-5 h-5 rounded-full bg-red-500"
                  id="colorred"
                  type="radio"
                />
                <input
                  className="w-5 h-5 rounded-full bg-blue-600"
                  id="colorblue"
                  type="radio"
                />
              </div>
            </div>
            <div className="flex mt-6 items-center gap-4">
              <Text className="text-lg text-primaryColor">Size:</Text>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className="w-8 h-8 border border-primaryColor/50 rounded-md flex justify-center items-center hover:bg-ThirdColor cursor-pointer"
                  >
                    <Text className="text-sm text-primaryColor hover:text-white">
                      {size}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <div className="flex items-center border border-primaryColor/50 rounded-md overflow-hidden">
                <button
                  onClick={Handledecrement}
                  className="w-10 h-10 flex justify-center items-center border-r border-primaryColor hover:bg-ThirdColor"
                >
                  -
                </button>
                <Text className="w-20 text-center">{increment}</Text>
                <button
                  onClick={Handleincrement}
                  className="w-10 h-10 flex justify-center items-center hover:bg-ThirdColor"
                >
                  +
                </button>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={Handlebuyproduct}
                  className="py-2 px-4 bg-ThirdColor text-white rounded-md"
                >
                  Buy Now
                </button>
                <div className="w-10 h-10 border border-primaryColor/50 rounded-md flex justify-center items-center">
                  <FaRegHeart className="text-lg" />
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="w-full border-2 border-primaryColor/50 rounded-md mt-10">
              <div className="p-6 border-b border-primaryColor">
                <div className="flex items-center gap-4">
                  <GrDeliver className="text-2xl" />
                  <div>
                    <Title className="text-base text-primaryColor">
                      Free Delivery
                    </Title>

                    <input
                      value={zepcode}
                      onChange={(e) => Setzepcode(e.target.value)}
                      className="text-sm text-primaryColor border-b mt-2 w-full outline-none placeholder:text-sm placeholder:text-primaryColor"
                      placeholder="Enter your postal code"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <TfiReload className="text-2xl" />
                  <div>
                    <Title className="text-base text-primaryColor">
                      Return Delivery
                    </Title>
                    <Text className="text-sm text-primaryColor mt-2">
                      Free 30 Days Delivery Returns. Details
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedItem />
      </Container>
    </div>
  );
};

export default Product;
