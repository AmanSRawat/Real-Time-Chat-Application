import React from 'react';

const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  loginClassName = '',
  isRequired = false,
  placeholder = '',
  value = '',
  onChange = ()=>{}
}) => {
  return (
    <div className={`${className}`}>
    <label className="block mb-2 text-sm font-medium text-gray-900" >
      {label}
    </label>
    <input
        type={type}
        id={name}
        name={name}
        className={`mt-1 border border-gray-50 text-gray-600 text-sm rounded-lg  block w-full p-2.5  ${loginClassName}`}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
