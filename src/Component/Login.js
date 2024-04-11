import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../Utils/Validation'
import { auth } from "../Utils/Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addUser } from '../Utils/userSlice';



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    const handleValidation = (e) => {
        e.preventDefault();
        const message = checkValidation(email.current.value, password.current.value)
        console.log(message);
        setErrorMessage(message)
        console.log(email.current.value)
        console.log(password.current.value)


        if (message) return;
        // Attempt sign in or sign up
        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: "name.current.value", photoURL: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }).then(() => {
                        console.log("Sign up successful:", user);
                        const { uid, email, displayName, photoUrl } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoUrl }))

                        navigate("/browse")
                        setErrorMessage(null); // Clear any previous error messages
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });



                })
                .catch((error) => {
                    // Handle sign up errors
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);

                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in successfully
                    const user = userCredential.user;
                    console.log("Sign in successful:", user);
                    navigate("/browse")
                    setErrorMessage(null); // Clear any previous error messages
                })
                .catch((error) => {
                    // Handle sign in errors
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }
    }

    const toggleButton = () => {
        setIsSignInForm(!isSignInForm)

    }
    return (
        <div >
            <div className='absolute'>
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='logo' />
            </div>
            <form onSubmit={handleValidation} className='bg-black p-12 absolute w-3/12 my-36 m-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "sign Up"}</h1>
                {!isSignInForm &&
                    <input ref={name} type='text' placeholder='Full Name'
                        className='bg-gray-700 p-4 p-4 my-4 w-full '
                    />}
                <input ref={email} type='text'
                    className='bg-gray-700 p-4 p-4 my-4 w-full '
                    placeholder='email'
                />
                <input ref={password} type='password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
                <button type='submit' className='bg-red-700 p-4 my-6 w-full rounded-lg'>
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