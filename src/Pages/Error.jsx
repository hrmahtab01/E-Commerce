import React from 'react'
import Container from '../Components/Common/Container'
import Text from '../Components/Common/Text'
import Title from '../Components/Common/Title'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='pt-[80px] pb-[140px]'>
      <Container>
        <div>
        <Text className="text-[14px] text-primaryColor/50 font-normal font-poppins  leading-[25px]">
          Home / <span className="text-primaryColor">404 Error</span>
        </Text>
        <div className='flex flex-col justify-center items-center mt-[140px]'>
          <Title className="text-[110px] text-primaryColor font-medium font-inter leading-[115px] tracking-wider">404 Not Found</Title>
          <Text className="text-base text-primaryColor font-normal font-poppins mt-[40px]">Your visited page not found. You may go home page.</Text>
          <Link to='/'><button className='py-[16px] px-[48px] bg-ThirdColor rounded-[4px] text-base text-Secondary font-medium font-poppins mt-[80px]'>Back to home page</button></Link>
        </div>
        </div>
      </Container>
      
    </div>
  )
}

export default Error
