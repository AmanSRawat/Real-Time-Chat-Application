import React from 'react'

const Button = ({
    label = 'Button',
    type = 'button',
    className = ''
}) => {
  return (
    <div>
      <button type={type} className={`text-white bg-blue-500 hover:bg-blue-700 focus:outline-none *:focus:ring-blue-300
        font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className}`} >
        {label}
      </button>
    </div>
  )
}

export default Button
