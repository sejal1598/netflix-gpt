import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div >
        <div className='absolute'>
            <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo'/>
        </div>
        <form className='bg-black p-12 absolute w-3/12 my-36 m-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold py-4'>Sign In</h1>
            <input type='text' className='bg-gray-700 p-4 p-4 my-4 w-full ' placeholder='email'/>
            <input type='password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>Sign In</button>
        </form>
    </div>
  )
}

export default Login