import React from 'react'

const CommonBtn = ({children , classname ,onClick}) => {
  return (
    <button className={classname} onClick={onClick}>{children}</button>
  )
}

export default CommonBtn
