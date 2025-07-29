import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSignUp = (e) => {
    e.preventDefault(); 
    console.log('Form submitted with data:', data);
  };

  return (
    <form onSubmit={handleSignUp} className='bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-3xl font-bold'>Welcome</div>
      <div className='text-xl font-light mb-14'>Sign up to chat with others</div>
      
      <Input
        label='Full Name'
        name='name'
        type='text'
        placeholder='Enter Your Name'
        loginClassName='mb-6 bg-gray-50'
        value={data.name}
        onChange={handleInputChange}
      />
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Enter Your Email'
        loginClassName='mb-6 bg-gray-50'
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
        label='Sign Up'
        type='submit'
        className='cursor-pointer w-1/2 mb-4'
      />

      <div>
        Already have an account?{' '}
        <span className='text-blue-600 hover:text-blue-800 cursor-pointer underline'>
          <Link to='/signin'>Sign In</Link>
        </span>
      </div>
    </form>
  );
};

export default SignUp;