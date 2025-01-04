import React, { useState } from "react";
import SideImage from "../assets/side image.png";
import Title from "../Components/Common/Title";
import Text from "../Components/Common/Text";
import CommonBtn from "../Components/Common/CommonBtn";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userdata } from "../Slice/UserSlice";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [namerr, Setnamerr] = useState("");
  const [emailrr, Setemailrr] = useState("");
  const [passwordrr, Setpasswordrr] = useState("");
  const [showpass, Setshowpass] = useState(false);
  const [userexiterr, Setuserexiterr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, Setloader] = useState(false);

  let HandleNamevalue = (e) => {
    Setname(e.target.value);
    Setnamerr("");
  };
  let Handlepasswordvalue = (e) => {
    Setpassword(e.target.value);
    Setpasswordrr("");
  };
  let handleEmaivalue = (e) => {
    Setemail(e.target.value);
    Setemailrr("");
  };

  let HandleSubmit = async () => {
    if (!name) {
      Setnamerr("name is require");
    }
    if (!email) {
      Setemailrr("email is require");
    }
    if (!password) {
      Setpasswordrr("password is require");
    }
    try {
      if (name && email && password) {
        await axios.post("http://localhost:4000/api/v1/auth/registetion", {
          name,
          email,
          password,
        });

        toast.success("Signup successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        Setloader(true);

        dispatch(
          userdata({
            name: name,
            email: email,
            password: password,
          })
        );

        localStorage.setItem(
          "user",
          JSON.stringify({
            name: name,
            email: email,
            password: password,
          })
        );

        setTimeout(() => {
          Setloader(false);
          navigate("/Login");
        }, 2000);
      }
    } catch (error) {
      toast.error("something went wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  let Handleshowpassword = () => {
    Setshowpass(!showpass);
  };

  return (
    <div className="mt-[60px] mb-[140px]">
      <div className="md:flex md:gap-[129px] grid grid-cols-1 ">
        <img
          className="md:w-[919px] md:h-[781px] xl:w-[1030px] "
          src={SideImage}
          alt=""
        />
        <div className="w-[371px] mt-[125px]">
          <Title className="text-[36px] text-primaryColor font-medium font-inter leading-[30px] tracking-wider">
            Create an account
          </Title>
          <Text className="text-base text-primaryColor font-normal font-poppins leading-[24px] mt-[24px]">
            Enter your details below
          </Text>
          <div className=" w-[371px] h-[32px] mt-[48px]">
            <input
              onChange={HandleNamevalue}
              value={name}
              className={`w-full h-full border-b ${
                namerr ? "border-red-500" : "border-black/30"
              } outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins`}
              type="text"
              placeholder="Name"
            />
            {namerr && (
              <p className="text-[14px] font-medium text-red-500 font-poppins">
                {namerr}
              </p>
            )}
          </div>
          <div className=" w-[371px] h-[32px] mt-[48px]">
            <input
              onChange={handleEmaivalue}
              value={email}
              className={`w-full h-full border-b ${
                emailrr ? "border-red-500" : "border-black/30"
              } outline-none placeholder:text-base placeholder:text-primaryColor/40 placeholder:font-normal placeholder:font-poppins text-base text-primaryColor font-normal font-poppins`}
              type="email"
              placeholder="Email or Phone Number"
            />
            {emailrr && (
              <p className="text-[14px] font-medium text-red-500 font-poppins">
                {emailrr}
              </p>
            )}
          </div>
          <div className=" w-[371px] h-[32px] mt-[48px] relative">
            <input
              onChange={Handlepasswordvalue}
              value={password}
              className={`w-full h-full border-b ${
                passwordrr ? " border-red-500" : "border-black/30"
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
              <p className="text-[14px] font-medium font-poppins text-red-500">
                {passwordrr}
              </p>
            )}
          </div>
          {userexiterr && (
            <p className="text-[14px] font-medium font-poppins text-red-500">
              {userexiterr}
            </p>
          )}
          {loader ? (
            <div className="flex justify-center mt-[40px]">
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
              onClick={HandleSubmit}
              classname="py-4 px-[122px] bg-[#DB4444] text-base text-Secondary font-medium font-poppins leading-[24px] rounded-[4px] mt-[40px]"
            >
              Create Account
            </CommonBtn>
          )}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />

          <CommonBtn classname="py-4 px-[84px] bg-[#fff] border border-[#000000]/40 text-base text-primaryColor font-medium font-poppins leading-[24px] rounded-[4px] mt-[40px] flex gap-4 items-center">
            <FcGoogle className="text-[24px]" /> Sign up with Google
          </CommonBtn>
          <Text className="text-base text-primaryColor/70 font-normal font-poppins leading-[24px]  mt-[34px] text-center ">
            Already have account?{" "}
            <Link to="/login">
              {" "}
              <span className="text-primaryColor font-medium border-b ml-4 cursor-pointer">
                Log in
              </span>
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Signup;
