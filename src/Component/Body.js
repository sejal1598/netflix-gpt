import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { addUser, removeUser } from '../Utils/userSlice';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Login';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />

    },

    {
      path: "/browse",
      element: <Browse />

    }
  ])
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoUrl } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoUrl:photoUrl}))
       
      } else {
        // User is signed out
        dispatch(removeUser())
     
      }
    });
  }, [])
  return (
    <>

      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body