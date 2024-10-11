import React, { children } from 'react'

const Title = ({children ,className}) => {
  return (
    <div>
      <h2 className={className}>{children}</h2>
    </div>
  )
}

export default Title
