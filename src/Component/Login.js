import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleButton = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div >
            <div className='absolute'>
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo' />
            </div>
            <form className='bg-black p-12 absolute w-3/12 my-36 m-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "sign Up"}</h1>
                {!isSignInForm && 
                <input type='text' placeholder='Full Name' 
                className='bg-gray-700 p-4 p-4 my-4 w-full ' 
                />}
                <input type='text' 
                className='bg-gray-700 p-4 p-4 my-4 w-full '
                 placeholder='email'
                  />
                <input type='password'
                 className='p-4 my-4 w-full bg-gray-700'
                  />
                <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>
                    {isSignInForm ? "Sign In" : "sign Up"}
                    </button>
                <p onClick={toggleButton} 
                className='py-4'>
                    {isSignInForm ? "New to netflix? sign up now" : "Already registered Sign In  now..."
                    }</p>
            </form>
        </div>
    )
}

export default Login