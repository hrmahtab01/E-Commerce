import React, { Children } from 'react'

const Title = ({children}) => {
  return (
    <div>
      <h2 className='text-base font-poppins font-semibold text-[#000]'>{children}</h2>
    </div>
  )
}

export default Title
