import React from 'react'

const Input = ({type ,className , placeholder , onClick ,value ,onchange}) => {
  return (
    <>
     <input type={type} className={className} placeholder={placeholder} onClick={onClick} value={value} onChange={onchange} />
    </>
  )
}

export default Input
