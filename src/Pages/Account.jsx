import React from 'react';
import Container from '../Components/Common/Container';
import Text from '../Components/Common/Text';
import Title from '../Components/Common/Title';

const Account = () => {
  return (
    <div className='pt-20 pb-36'>
      <Container>
        <div>
          <div className='flex justify-between'>
            <Text className="text-sm text-primaryColor/50 font-normal leading-6">
              Home / <span className='text-primaryColor'>My Account</span>
            </Text>
            <Text className="text-sm text-primaryColor/50 font-normal leading-6">
              Welcome! <span className='text-ThirdColor'>Md Rimel</span>
            </Text>
          </div>
          <div className='mt-20 flex flex-col md:flex-row md:gap-32'>
            <div className='md:w-1/4'>
              <Title className="text-base text-primaryColor font-normal leading-6">Manage My Account</Title>
              <Text className="text-base font-normal text-ThirdColor mt-4 text-center">My Profile</Text>
            </div>
            <div className='md:w-3/4 shadow-md shadow-primaryColor/50'>
              <div className='py-10 px-10'>
                <Title className="text-xl text-ThirdColor font-medium">Edit Your Profile</Title>
                <div className='flex flex-col md:flex-row gap-10'>
                  <div className='mt-4'>
                    <Text className="text-base text-primaryColor font-normal">First Name</Text>
                    <input
                      className='w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded'
                      type="text"
                      value="Md"
                    />
                  </div>
                  <div className='mt-4'>
                    <Text className="text-base text-primaryColor font-normal">Last Name</Text>
                    <input
                      className='w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded'
                      type="text"
                      value="Rimel"
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10'>
                  <div className='mt-6'>
                    <Text className="text-base text-primaryColor font-normal">Email</Text>
                    <input
                      className='w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded'
                      type="email"
                      value="rimel1111@gmail.com"
                    />
                  </div>
                  <div className='mt-6'>
                    <Text className="text-base text-primaryColor font-normal">Address</Text>
                    <input
                      className='w-full md:w-80 h-12 bg-SecondarySecond pl-4 mt-2 text-base text-primaryColor/50 font-normal outline-none rounded'
                      type="text"
                      value="Kingston, 5236, United States"
                    />
                  </div>
                </div>
                <div className='mt-6'>
                  <Text className="text-base text-primaryColor font-normal">Password Changes</Text>
                  <input
                    className='w-full h-12 bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal outline-none rounded'
                    type="password"
                    placeholder='Current Password'
                  />
                  <input
                    className='w-full h-12 bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal outline-none rounded'
                    type="password"
                    placeholder='New Password'
                  />
                  <input
                    className='w-full h-12 bg-SecondarySecond pl-4 mt-4 text-base text-primaryColor/50 font-normal outline-none rounded'
                    type="password"
                    placeholder='Confirm New Password'
                  />
                </div>
                <div className='flex justify-end items-center gap-8 mt-6'>
                  <p className='cursor-pointer text-primaryColor'>Cancel</p>
                  <button className='text-base py-2 px-6 text-Secondary bg-ThirdColor rounded'>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Account;
