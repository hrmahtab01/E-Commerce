import React from "react";
import Container from "../Components/Common/Container";
import { FaPhone } from "react-icons/fa";
import Text from "../Components/Common/Text";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="pt-[80px] pb-[140px]">
      <Container>
        <div className="flex gap-[30px]">
          <div className="w-[340px] h-[457px] rounded-[4px] shadow-sm shadow-primaryColor">
            <div className="py-[40px] px-[35px]">
              <div className="pb-[32px] border-b border-primaryColor">
                <div className="flex gap-4 items-center">
                  <div className="w-[40px] h-[40px] rounded-full bg-ThirdColor flex justify-center items-center">
                    <FaPhone className="text-ThirdColo  text-xl text-Secondary rotate-90 " />
                  </div>
                  <Text className="text-base text-primaryColor font-medium font-poppins">
                    Call To Us
                  </Text>
                </div>
                <Text className="text-[14px] text-primaryColor font-normal font-poppins leading-[21px] mt-6">
                  We are available 24/7, 7 days a week.
                </Text>
                <Text className="text-[14px] text-primaryColor font-normal font-poppins leading-[21px] mt-4 ">
                  Phone: +8801611112222
                </Text>
              </div>
              <div className="  mt-[32px]">
                <div className="flex gap-4 items-center">
                  <div className="w-[40px] h-[40px] rounded-full bg-ThirdColor flex justify-center items-center">
                    <CiMail className="text-ThirdColo  text-xl text-Secondary  " />
                  </div>
                  <Text className="text-base text-primaryColor font-medium font-poppins">
                    Write To US
                  </Text>
                </div>
                <Text className="text-[14px] text-primaryColor font-normal font-poppins leading-[21px] mt-6">
                  Fill out our form and we will contact you within 24 hours.
                </Text>
                <Text className="text-[14px] text-primaryColor font-normal font-poppins leading-[21px] mt-4 ">
                  Emails: customer@exclusive.com
                </Text>
                <Text className="text-[14px] text-primaryColor font-normal font-poppins leading-[21px] mt-4 ">
                  Emails: support@exclusive.com
                </Text>
              </div>
            </div>
          </div>
          <div className="w-[800px] h-[457px] shadow-sm shadow-primaryColor rounded-[4px]">
            <div className="py-[40px] px-[32px]">
              <div className="flex gap-4">
                <div className="relative">
                  <input
                    className="w-[235px] h-[50px] bg-Secondary rounded-[4px] pl-4 placeholder:text-base placeholder:text-primaryColor/50 placeholder:font-normal placeholder:font-poppins"
                    type="text"
                  />
                  <label className="absolute left-4 top-0 mt-3 text-primaryColor">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="w-[235px] h-[50px] bg-Secondary rounded-[4px] pl-4 placeholder:text-base placeholder:text-primaryColor/50 placeholder:font-normal placeholder:font-poppins"
                    type="email"
                  />
                  <label className="absolute left-4 top-0 mt-3 text-primaryColor">
                    Your Email<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="w-[235px] h-[50px] bg-Secondary rounded-[4px] pl-4 placeholder:text-base placeholder:text-primaryColor/50 placeholder:font-normal placeholder:font-poppins"
                    type="text"
                  />
                  <label className="absolute left-4 top-0 mt-3 text-primaryColor">
                    Your Phone<span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              <div className="w-[737px] h-[207px]  mt-[32px] relative ">
                <input
                  className=" w-full h-full bg-Secondary rounded-[4px] pb-[163px] pl-[16px] text-base text-primaryColor font-medium font-poppins"
                  type="text"
                />
                <label className="absolute top-[13px] left-[16px] text-base text-primaryColor/50 font-normal font-poppins">
                  Your Massage
                </label>
              </div>
              <div className="mt-[32px] flex justify-end">

              <button className="py-[16px] px-[48px] bg-ThirdColor  rounded-[4px] text-base text-[#fff]  font-medium font-poppins">Send Massage</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
