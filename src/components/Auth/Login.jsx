import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("Email is ",email);
        // console.log("Password is ",password);
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    };
  return (
    <div className='  h-screen w-screen flex items-center justify-center'>
        <div className='border-2 border-emerald-400 rounded-xl p-20'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
             required className='border-2 outline-none border-emerald-600 rounded-full py-3 px-8 bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
              required className='mt-4 border-2 outline-none border-emerald-600 rounded-full py-3 px-8 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter Password' />
            <button className='mt-5 border-2 outline-none border-emerald-300 bg-emerald-600 rounded-lg py-2 px-6  text-gray-200' >Login</button>
            </form>
        </div>
    </div>
  )
};

export default Login