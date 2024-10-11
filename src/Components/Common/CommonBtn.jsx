import React from 'react'

const CommonBtn = ({children , classname}) => {
  return (
    <button className={classname}>{children}</button>
  )
}

export default CommonBtn
