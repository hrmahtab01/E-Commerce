import React, { useState } from "react";
import Container from "../Components/Common/Container";
import { FaPhone } from "react-icons/fa";
import Text from "../Components/Common/Text";
import { CiMail } from "react-icons/ci";


const Contact = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [phone, Setphone] = useState("");
  const [message , Setmessage]=useState('')
  const [namerr, Setnamerr] = useState("");
  const [emailrr, Setemailrr] = useState("");
  const [phonerr, Setphonerr] = useState("");
  const [messagerr , Setmessagerr]=useState('')

  let HandleNamevalue = (e) => {
    Setname(e.target.value);
    Setnamerr('')
  };
  let HandleemailValue = (e) => {
    Setemail(e.target.value);
    Setemailrr('')
  };
  let handlephoneValue = (e) => {
    Setphone(e.target.value);
    Setphonerr("")
  };
  let HandleMessageInput =(e)=>{
    Setmessage(e.target.value)
    Setmessagerr("")
  }

  let HandleSubmitMessage =()=>{  
    if (!name) {
      Setnamerr("type your name")
    }
    if (!email) {
      Setemailrr("type your email")
    }
    if (!phone) {
      Setphonerr('type your phone number')
    }
    if (!message) {
      Setmessagerr("type your message")
    }
    if (name && email && phone && message ) {
      console.log("success your message");
      
    }
  }
  return (
    <div className="pt-[80px] pb-[140px]">
      <Container>
        <div className="md:flex gap-[30px] grid grid-cols-1 ">
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
          <div className="md:w-[800px] md:h-[457px] w-full h-full shadow-sm shadow-primaryColor rounded-[4px]">
            <div className="py-[40px] px-[32px]">
              <div className="md:flex gap-4 grid grid-cols-1">
                <div className="relative">
                  <input
                    onChange={HandleNamevalue}
                    value={name}
                    className="w-[235px] h-[50px] bg-Secondary rounded-[4px] pl-4 placeholder:text-base placeholder:text-primaryColor/50 placeholder:font-normal placeholder:font-poppins"
                    type="text"
                  />
                  {namerr && (
                    <p className="text-[14px] text-red-500 font-medium font-poppins ml-2">{namerr}</p>
                  )}
                  <label className={`absolute left-4 top-0 mt-3 text-primaryColor ${name && "hidden"}`}>
                    Your Name<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={HandleemailValue}
                    value={email}
                    className="w-[235px] h-[50px] bg-Secondary rounded-[4px] pl-4 placeholder:text-base placeholder:text-primaryColor/50 placeholder:font-normal placeholder:font-poppins"
                    type="email"
                  />
                  {emailrr && (
                    <p className="text-[14px] font-medium text-red-500 font-poppins">{emailrr} </p>
                  )}
                  <label className={`absolute left-4 top-0 mt-3 ${email && "hidden"} text-primaryColor`}>
                    Your Email<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={handlephoneValue}
                    value={phone}
                    className="w-[235px] h-[50px] bg-Secondary rounded-[4px] pl-4 placeholder:text-base placeholder:text-primaryColor/50 placeholder:font-normal placeholder:font-poppins"
                    type="text"
                  />
                  {phonerr && (
                    <p className="text-[14px] text-red-500 font-medium font-poppins">{phonerr}</p>
                  )}
                  <label className={`absolute left-4 ${phone && "hidden"} top-0 mt-3 text-primaryColor`}>
                    Your Phone<span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              <div className="md:w-[737px] md:h-[207px] w-[320px] h-[70px]  mt-[32px] relative ">
                <input
                onChange={HandleMessageInput}
                value={message}
                  className=" w-full h-full bg-Secondary rounded-[4px] pb-[163px] pl-[16px] py-5 md:py-0 text-base text-primaryColor font-medium font-poppins"
                  type="text"
                  placeholder="Your message"
                />
                {messagerr && (
                  <p className="text-[14px] font-medium text-red-500 font-poppins">{messagerr}</p>
                )}
                {/* <label className={`absolute top-[13px] ${message && "hidden"} left-[16px] text-base text-primaryColor/50 font-normal font-poppins`}>
                  Your Massage
                </label> */}
              </div>
              <div className="mt-[32px] flex md:justify-end justify-center">
                <button onClick={HandleSubmitMessage} className="py-[16px] px-[48px] mt-[200px] md:mt-0 bg-ThirdColor  rounded-[4px] text-base text-[#fff]  font-medium font-poppins">
                  Send Massage
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
