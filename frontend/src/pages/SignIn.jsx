import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Form submitted for sign-in:', data);
  };

  return (
    <form onSubmit={handleSignIn} className='bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-3xl font-bold'>Welcome Back</div>
      <div className='text-xl font-light mb-14'>Sign in to chat with others</div>
      
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Enter Your Email'
        loginClassName= 'mb-6 bg-gray-50'
        value={data.email}
        onChange={handleInputChange}
      />
      <Input
        label='Password'
        name='password'
        type='password'
        placeholder='Enter Your Password'
        loginClassName= 'mb-6 bg-gray-50'
        value={data.password}
        onChange={handleInputChange}
      />

      <Button
        label='Sign In'
        type='submit'
        className='cursor-pointer w-1/2 mb-4'
      />

      <div>
        Did not have an account?{' '}
        <span className='text-blue-600 hover:text-blue-800 cursor-pointer underline'>
          <Link to='/signup'>Sign up</Link>
        </span>
      </div>
    </form>
  );
};

export default SignIn;