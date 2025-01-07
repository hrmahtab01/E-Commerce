import React, { useState } from "react";
import SideImage from "../assets/side image.png";
import Title from "../Components/Common/Title";
import CommonBtn from "../Components/Common/CommonBtn";
import Text from "../Components/Common/Text";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [emailrr, Setemailrr] = useState("");
  const [passwordrr, Setpasswordrr] = useState("");
  const [showpass, Setshowpass] = useState(false);
  const data = useSelector((state) => state.userinfo.value);
  const navigate = useNavigate();
  const [loader, Setloader] = useState(false);

  let Handleemailvalue = (e) => {
    Setemail(e.target.value);
    Setemailrr("");
  };
  let HandlepasswordValue = (e) => {
    Setpassword(e.target.value);
    Setpasswordrr("");
  };

  let HandleLogin = async () => {
    if (!email) {
      Setemailrr("email is require");
    }
    if (!password) {
      Setpasswordrr("password is require");
    }
    if (email && password) {
      axios
        .post("http://localhost:4000/api/v1/auth/login", {
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          
          const token = result.data.token;
          if (result.data.message === "login successfully") {
            toast.success("Login successfully", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
            });
            Cookies.set("token", token);
            Setloader(true);
            setTimeout(() => {
              Setloader(false);
              navigate("/Account");
            }, 2000);
          }
        })
        .catch((error) => {
          toast.error("invalid credentials", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
        });
    }
  };
  let Handleshowpassword = () => {
    Setshowpass(!showpass);
  };
  return (
    <div className="mt-[60px] mb-[140px]">
      <div className="">
        <div className="md:flex md:gap-[129px] grid grid-cols-1 ">
          <img
            className="md:w-[919px] md:h-[781px] xl:w-[1030px] "
            src={SideImage}
            alt=""
          />
          <div className="flex flex-col justify-center mt-10 md:mt-0  items-center">
            <div className="w-[371px] ">
              <Title className="text-[36px] text-primaryColor font-medium font-inter leading-[30px] tracking-wider">
                Log in to Exclusive
              </Title>
              <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] mt-[24px]">
                Enter your details below
              </Text>
              <div className=" md;w-[371px] h-[32px] w-full mt-[48px] ">
                <input
                  onChange={Handleemailvalue}
                  value={email}
                  className={`w-full h-full border-b ${
                    emailrr ? "border-red-500" : "border-black/30"
                  } outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins`}
                  type="email"
                  placeholder="Email or Phone Number"
                />
                {emailrr && (
                  <p className="text-[14px] text-red-500 font-medium font-poppins">
                    {emailrr}
                  </p>
                )}
              </div>
              <div className=" md:w-[371px] w-full h-[32px] mt-[48px] relative">
                <input
                  onChange={HandlepasswordValue}
                  value={password}
                  className={`w-full h-full border-b ${
                    passwordrr ? "border-red-500" : "border-black/30"
                  } outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins`}
                  type={`${showpass ? "text" : "password"}`}
                  placeholder="Password"
                />
                <button
                  onClick={Handleshowpassword}
                  className="absolute top-[50%] translate-y-[-50%] right-5"
                >
                  {showpass ? <IoEye /> : <IoMdEyeOff />}
                </button>
                {passwordrr && (
                  <p className="text-[14px] font-medium text-red-500 font-poppins">
                    {passwordrr}
                  </p>
                )}
              </div>

              <div className="flex gap-[87px] items-center mt-[40px]">
                {loader ? (
                  <div className="flex justify-center ">
                    <ThreeDots
                      visible={true}
                      height="40"
                      width="40"
                      color="#4fa94d"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  <CommonBtn
                    onClick={HandleLogin}
                    classname="h-14 w-44 bg-[#DB4444] text-base text-Secondary font-medium font-poppins leading-[24px] rounded-[4px] "
                  >
                    Log In
                  </CommonBtn>
                )}
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  transition={Slide}
                />

                <Text className="text-base text-ThirdColor font-normal  font-poppins leading-[24px] cursor-pointer">
                  Forget Password?
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
