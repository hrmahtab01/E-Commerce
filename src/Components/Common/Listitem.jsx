import React, { Children } from 'react'

const Listitem = ({children ,}) => {
  return (
    <>
      <li className="text-base font-poppins" >{children}</li>
    </>
  )
}

export default Listitem
