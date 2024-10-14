import React from 'react'
import Container from '../Components/Common/Container'
import Text from '../Components/Common/Text'
import Title from '../Components/Common/Title'

const Account = () => {
  return (
    <div className='pt-[80px] pb-[140px]'>
      <Container>
        <div>
          <div className='flex justify-between'>
          <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins  leading-[25px]">Home / <span className='text-primaryColor'>My Acoount</span></Text>
          <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins  leading-[25px]">Welcome! <span className='text-ThirdColor'>Md Rimel </span></Text>
          
          </div>
          <div className='mt-[80px] flex gap-[134px]'>
            <div className='w-[166px]'>
              <Title className="text-base text-primaryColor font-normal font-poppins leading-[25px]">Manage My Account </Title>
              <Text className="text-base font-normal font-poppins text-ThirdColor mt-[16px] text-center  ">My Profile</Text>

            </div>
            <div className='w-[870px] h-[630px] shadow-md shadow-primaryColor/50'>
            <div className='py-[40px] px-[80px]'>
                  <Title className="text-xl text-ThirdColor font-medium font-poppins">Edit Your Profile</Title>
              <div className='flex gap-[50px]'>
                <div className='mt-4'>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">First Name</Text>
                  <input className='w-[330px] h-[50px] bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px]' type="text"  value="Md"/>
                </div>
                <div className='mt-4'>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">Last Name</Text>
                  <input className='w-[330px] h-[50px] bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px]' type="text"  value="Rimel"/>
                </div>
              </div>
              <div className='flex gap-[50px]'>
              <div className='mt-6'>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">Email</Text>
                  <input className='w-[330px] h-[50px] bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px]' type="email"  value="rimel1111@gmail.com"/>
                </div>
                <div className='mt-6'>
                  <Text className="text-base  text-primaryColor font-normal font-poppins">Address</Text>
                  <input className='w-[330px] h-[50px] bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px]' type="text"  value="Kingston, 5236, United State"/>
                </div>
              
              </div>
              <div className='mt-[24px]'>
                <Text className="text-base text-primaryColor font-normal font-poppins">Password Changes</Text>
                <input className='w-full h-[50px] bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px]  ' type="password" placeholder='Current Passwod'/>
                <input className='w-full h-[50px] bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px] ' type="password" placeholder='New Passwod'/>
                <input className='w-full h-[50px] bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal font-poppins outline-none rounded-[4px] ' type="password" placeholder='Confirm New Passwod'/>
                
              </div>
              <div className='flex justify-end items-center gap-[32px] mt-[24px]'>
                <p>Cancel</p>
                <button className='text-base py-[16px] px-[48px] text-Secondary bg-ThirdColor rounded-[4px]'>Save Changes</button>
              </div>

            </div>
            </div> 
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Account
