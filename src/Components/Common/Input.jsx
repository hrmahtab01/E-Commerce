import React from 'react'

const Input = ({type ,className , placeholder , onClick}) => {
  return (
    <>
     <input type={type} className={className} placeholder={placeholder} onClick={onClick} />
    </>
  )
}

export default Input
