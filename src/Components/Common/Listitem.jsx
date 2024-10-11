import React, { Children } from 'react'

const Listitem = ({children ,className}) => {
  return (
    <>
      <li className={className} >{children}</li>
    </>
  )
}

export default Listitem
