import React from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import SignupOptions from '../../components/SignupOptions'
import Navbar from "../../components/Navbar"

import linkedinLogo from "../../assets/btnImages/linkdinLogo.avif"
import googleLogo from "../../assets/btnImages/googleLogo.jpeg"
import githubLogo from "../../assets/btnImages/githubLogo.png"
import loginImg from "../../assets/signupImg.jpeg"

const Login = () => {
  return (
    <>
    <Navbar/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 flex-wrap' style={{ backgroundColor: "rgba(239, 244, 255)" }}>
        <div className='h-11/12'><img className='w-full h-full object-cover' src={loginImg}></img></div>
        <div className='h-10/12 w-11/12 my-5 p-5 shadow-2xl rounded-md bg-white'>
          <form className="p-5 flex flex-col justify-evenly">
              <h1 className="font-bold text-4xl mb-2">Log In</h1>
              <p className="text-gray-500 mb-10">Glad to see you again! Please log in to your account</p>
            <Input id="email" label="Email Address" placeholder="Enter your email address" type="email" />
            <Input id="password" label="Password" placeholder="Enter your password" type="password" />
            <div className="flex flex-row text-gray-500 w-full mt-1.5 items-center"><input type="checkbox"></input><p className="ml-2">Remember me</p><a className="text-blue-500 ml-auto cursor-pointer">Forgot Password?</a></div>
            <Button btnName="Log In" className="w-full mt-10"></Button>
            <p className="text-gray-500 text-center mt-1.2">or</p>
            <div className="justify-between w-full  mt-1.5  grid grid-cols-1 sm:grid-cols-3 gap-3">
              <SignupOptions img={googleLogo} btnName="Continue with Google" />
              <SignupOptions img={linkedinLogo} btnName="Continue with LinkedIn" />
              <SignupOptions img={githubLogo} btnName="Continue with Github" />
            </div>
            <p className=" text-gray-500 my-10">Don't have an account?<a className="text-blue-500 cursor-pointer">Sign Up</a></p>
          </form>


        </div>
      </div>
    </>
  )
}

export default Login