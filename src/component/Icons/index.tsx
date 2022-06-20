import React from 'react'

function Icon(props: any) {
  const { className, un } = props
  return <i className={`iconfont ${className}`}>{un}</i>
}

export default Icon
