import React from 'react';

interface CustomInputProps {
  placeholder?: string;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, type }) => {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder}
      className="border border-gray-300 p-2 w-full"
    />
  );
};

export default CustomInput;
