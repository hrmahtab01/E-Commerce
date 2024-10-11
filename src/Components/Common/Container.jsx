import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-Container mx-auto'>
      {children}
    </div>
  )
}

export default Container
