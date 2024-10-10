import React from 'react'
import Title from '../Components/Title'
import CommonBtn from '../Components/CommonBtn'

const Home = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold font-poppins'> Hasibur Rahman Mahtab</h1>
      <h1 className='text-2xl font-semibold font-inter'> Hasibur Rahman Mahtab</h1>
      <Title>Features Products</Title>
      <Title>Create an account</Title>
      <CommonBtn classname="text-[20px] font-semibold text-[#000] px-3 py-2 bg-teal-400 rounded-lg">Click my head</CommonBtn>
    </div>
  )
}

export default Home
