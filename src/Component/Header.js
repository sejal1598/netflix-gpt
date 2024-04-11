import React from 'react'
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { auth } from '../Utils/Firebase';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
     navigate("./error")
    });
  }
  return (
    <div className='absolute w-screen px-3 py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflixlogo' />
      {
        user &&(
        <div className='flex p-2'>
        <img className='w-12 h-12 ' src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaqNYQK1WRFEpMJWsfdINAdFs4zzqA5P9irAwyAgIrTK9m5zBO8eHj2ORc50V8FKbYtF4B0TCQqAS4qesDQnrkaBWQfkjC4.png?r=181" alt='' />
        <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
      </div>)}

    </div>
  )
}

export default Header