import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = () => {

    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
        />
      </div>

      <form className="w-1/4 opacity-75 absolute p-12 bg-black my-36 mx-auto right-0 left-0">
        <h1 className='text-white mx-2'>{isSignInForm ? "Sign  In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 m-2 rounded-lg w-[220px] text-black' />}
        <input type='text' placeholder='Email/Phone Number' className='p-2 m-2 rounded-lg w-[220px] text-black' />

        
        <input type='password' placeholder='Password' className='p-2 m-2 rounded-lg w-[220px]' />
        <div className='ml-2'>
          <input type='checkbox' />
          <span className='text-white ml-1 text-sm'>Remember Me</span>
        </div>
 
        <button className='text-white bg-red-600 p-2 m-2 w-[220px] rounded-lg' >{isSignInForm ? "Sign  In" : "Sign Up"}</button>
        <p className='text-white text-sm cursor-pointer ml-2' onClick={toggleSignForm}> {isSignInForm ? "New To Netflix? Sign Up Now" : "Already registered? Sign In"}</p>
      </form>


    </div>
  )
}

export default Login