import React from 'react'

const Button = (props) => {
  const {
    children,
    variant = 'bg-black',
    onClick = () => {},
    type = 'button'
  } = props
  return (
    <button
      className={`h-10 px-5 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
