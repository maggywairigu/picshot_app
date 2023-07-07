import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc'
import bgvideo from "../assets/bgvideo.mp4"
import logo from "../assets/logo-white.png"

function login() {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video 
          src={bgvideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt="logo"/>
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin 
              clientId=''
              render={(renderProps) => (
                <button
                  type="button"
                  className='bg-mainColor'
                >
                  <FcGoogle />
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
