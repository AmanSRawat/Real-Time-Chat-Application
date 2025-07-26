import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-3xl font-bold'>Welcome Back</div>
      <div className='text-xl font-light mb-14'>Sign in to chat with others</div>
      <Input label='Email' name='email' type='email' placeholder='Enter Your Email' className='mb-6'/>
      <Input label='Password' name='password' type='password' placeholder='Enter Your Password' className='mb-14 '/>
      <Button label='Sign Up' className='cursor-pointer w-1/2 mb-4'/>

      <div>Did not have an account? <span className='text-blue-600 hover:text-blue-800 cursor-pointer underline '><Link to='/signup'>Sign up</Link></span></div>
    </div>
  )
}

export default SignIn
