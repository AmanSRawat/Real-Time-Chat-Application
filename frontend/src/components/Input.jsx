import React from 'react';

const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  isRequired = false,
  placeholder = ''
}) => {
  return (
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900" >
      {label}
    </label>
    <input
        type={type}
        id={name}
        name={name}
        className={`mt-1 bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
