import React from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import SignupOptions from '../../components/SignupOptions'
import Navbar from "../../components/Navbar"

import linkedinLogo from "../../assets/btnImages/linkdinLogo.avif"
import googleLogo from "../../assets/btnImages/googleLogo.jpeg"
import githubLogo from "../../assets/btnImages/githubLogo.png"
import signupImg from "../../assets/signupImg.jpeg"

const Signup = () => {
  return (
    <>
    <Navbar/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 flex-wrap' style={{ backgroundColor: "rgba(239, 244, 255)" }}>
        <div className='h-[90%]'><img className='w-full h-full object-cover' src={signupImg}></img>
        <p className="text-center text-gray-500">Already have an account<a className="text-blue-500 cursor-pointer">Log in</a></p></div>
        <div className='h-[90%] w-5/6 max-w-3xl mx-auto my-5 p-5 shadow-2xl rounded-md bg-white'>
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-5 p-5">
            <div className="col-span-2">
              <h1 className="font-bold text-4xl mb-2">Sign Up</h1>
              <p className="text-gray-500">Create your account to get started</p>
            </div>
            <h4 className="font-bold">I want to join as</h4>
            <div className="flex flex-col md:flex-row justify-evenly gap-6 col-span-2 px-2">
              <div className='flex flex-1 flex-row justify-evenly  items-center px-2 border rounded-md border-gray-500 h-30 relative'>
                <label htmlFor="freelancer" className="flex flex-1 items-center">
                  <input className="absolute left-5 top-3 text-2xl" type="radio" name="role" id="freelancer"></input>
                </label>
              
                <div className="size-12 rounded-full bg-blue-500/50 ml-2 cursor-pointer"></div>
                <div className="ml-4">
                  <h2 className="font-bold">Freelancer</h2>
                  <p className="text-gray-500">Find work and connect with clients</p>
                </div>
              </div>
              <div className='flex flex-1 flex-row justify-evenly  items-center px-2 border rounded-md border-gray-500 h-30 relative'>
                <label htmlFor="client" className="flex flex-1 items-center">
                  <input className="absolute left-5 top-3 text-2xl bg-green-500" type="radio" id="client" name="role"></input>
                </label>
              
                <div className="size-12 rounded-full bg-green-500/50 ml-2 cursor-pointer"></div>
                <div className="ml-4">
                  <h2 className="font-bold">Client</h2>
                  <p className="text-gray-500">Find work and connect with clients</p>
                </div>
              </div>

              <div className='flex flex-1 flex-row justify-evenly  items-center px-2 border rounded-md border-gray-500 h-30 relative'>
                <label htmlFor="admin" className="flex flex-1 items-center">
                  <input className="absolute left-5 top-3 text-2xl" type="radio" name="role" id="admin"></input>
                </label>
              
                <div className="size-12 rounded-full bg-orange-500/50 ml-2"></div>
                <div className="ml-4">
                  <h2 className="font-bold">Admin</h2>
                  <p className="text-gray-500">Find work and connect with clients</p>
                </div>
              </div>
            </div>
            <Input id="name" label="Full Name" placeholder="Enter your full name" type="text" />
            <Input id="email" label="Email" placeholder="Enter your email" type="email" />
            <Input id="password" label="Password" placeholder="Create a password" type="password" />
            <Input id="conPassword" label="Confirm Password" placeholder="Confirm your password" type="password" />
            <Input id="phoneNum" label="Phone Number(Optional)" placeholder="Enter your phone number" type="tel" required={false} className="col-span-2"></Input>
            <div className="flex flex-row text-gray-500 w-full justify-items-start mt-1.5 col-span-2"><input type="checkbox"></input><p className="w-full ml-2">I agree to the <a className="text-blue-500 cursor-pointer">Terms of Service</a> and <a className="text-blue-500 cursor-pointer">Privacy Policy</a></p></div>
            <Button btnName="Create Account" className='w-full col-span-2'></Button>
            <p className="col-span-2 text-gray-500 text-center mt-1.2">or sign up with</p>
            <div className="justify-between w-full  mt-1.5 col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <SignupOptions img={googleLogo} btnName="Google" />
              <SignupOptions img={linkedinLogo} btnName="Linkedin" />
              <SignupOptions img={githubLogo} btnName="Github" />
            </div>
            <p className="col-span-2 text-gray-500 mb-2">By signing up, you agree to our <a className="text-blue-500 cursor-pointer">Terms of Service</a> and <a className="text-blue-500 cursor-pointer">Privacy Policy.</a></p>
          </form>


        </div>
      </div>
    </>
  )
}

export default Signup