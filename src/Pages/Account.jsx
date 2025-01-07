import React, { useEffect, useState } from "react";
import Container from "../Components/Common/Container";
import Text from "../Components/Common/Text";
import Title from "../Components/Common/Title";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

const Account = () => {
  const data = useSelector((state) => state.userinfo.value);
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
  const [email, Setemail] = useState("");
  const [address, Setaddress] = useState("");
  const [currentpass, Setcurrentpass] = useState("");
  const [newpass, Setnewpass] = useState("");
  const [confirmpass, Setconfirmpass] = useState("");
  const [cookiesdata, Setcookiesdata] = useState("");
  const navigaate = useNavigate();
  

  let Handleupdatesave = () => {
    console.log("save your changes");
  };
  let Handleupdatecancel = () => {
    console.log("cancel your changes");
  };
  useEffect(() => {
    const cookiesvalue = Cookies.get("token");
    Setcookiesdata(cookiesvalue);
  }, []);
  
  if (!cookiesdata) {
    navigaate("/")
  }
 
  console.log(cookiesdata);
// if (!cookiesdata) {
//   const redirect = ()=>{
//     navigaate("/")
//   }
  
  return (
    <div className="pt-20 pb-36">
      <Container>
        <div>
          <div className="flex justify-between">
            <Text className="text-sm text-primaryColor/50 font-normal leading-6">
              Home / <span className="text-primaryColor">My Account</span>
            </Text>
            <Text className="text-sm text-primaryColor/50 font-normal leading-6">
              Welcome! <span className="text-ThirdColor">{data?.name}</span>
            </Text>
          </div>
          <div className="mt-20 flex flex-col md:flex-row md:gap-32">
            <div className="md:w-1/4">
              <Title className="text-base text-primaryColor font-normal leading-6">
                Manage My Account
              </Title>
              <Text className="text-base font-normal text-ThirdColor mt-4 text-center">
                My Profile
              </Text>
            </div>
            <div className="md:w-3/4 shadow-md shadow-primaryColor/50">
              <div className="py-10 px-10">
                <Title className="text-xl text-ThirdColor font-medium">
                  Edit Your Profile
                </Title>
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="mt-4">
                    <Text className="text-base text-primaryColor font-normal">
                      First Name
                    </Text>
                    <input
                      onChange={(e) => setfirstname(e.target.value)}
                      className="w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded"
                      type="text"
                      value={firstname}
                    />
                  </div>
                  <div className="mt-4">
                    <Text className="text-base text-primaryColor font-normal">
                      Last Name
                    </Text>
                    <input
                      onChange={(e) => setsecondname(e.target.value)}
                      className="w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded"
                      type="text"
                      value={secondname}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="mt-6">
                    <Text className="text-base text-primaryColor font-normal">
                      Email
                    </Text>
                    <input
                      onChange={(e) => Setemail(e.target.value)}
                      className="w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded"
                      type="email"
                      value={email}
                    />
                  </div>
                  <div className="mt-6">
                    <Text className="text-base text-primaryColor font-normal">
                      Address
                    </Text>
                    <input
                      onChange={(e) => Setaddress(e.target.value)}
                      className="w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded"
                      type="text"
                      value={address}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Text className="text-base text-primaryColor font-normal">
                    Password Changes
                  </Text>
                  <input
                    onChange={(e) => Setcurrentpass(e.target.value)}
                    className="w-full h-12 bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal outline-none rounded"
                    type="password"
                    placeholder="Current Password"
                    value={currentpass}
                  />
                  <input
                    onChange={(e) => Setnewpass(e.target.value)}
                    className="w-full h-12 bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal outline-none rounded"
                    type="password"
                    placeholder="New Password"
                    value={newpass}
                  />
                  <input
                    onChange={(e) => Setconfirmpass(e.target.value)}
                    className="w-full h-12 bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal outline-none rounded"
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmpass}
                  />
                </div>
                <div className="flex justify-end items-center gap-8 mt-6">
                  <button
                    onClick={Handleupdatecancel}
                    className="cursor-pointer text-primaryColor"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={Handleupdatesave}
                    className="text-base py-2 px-6 text-Secondary bg-ThirdColor rounded"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Account;
