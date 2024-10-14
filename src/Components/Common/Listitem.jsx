import React, { Children } from 'react'

const Listitem = ({children , className}) => {
  return (
    <>
      <li className={`text-base font-poppins ${className}`} >{children}</li>
    </>
  )
}

export default Listitem
