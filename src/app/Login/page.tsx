import React from 'react'
import Image from 'next/image';

const Login = () => {
  return (
    <div className='w-[1440px]  bg-backgroundw text-butttoncolor'>
      <div className='w-[380px] h-[489px] ml-[530px]'></div>
      <Image src={'logo2.svg'} width={78.47} height={78.47} alt=''></Image>  
      <p className='w-[186.5px] h-[57px] text-[18px] leading-[26px] font-[700]'>YOUR ACCOUNT FOR EVERYTHING NIKE</p>
      <button className='w-[324px] h-[40px] border-[1px] rounded-md text-grey8d text-start'>Email address</button>
      <br />
      <button className='w-[324px] h-[40px] border-[1px] rounded-md text-grey8d text-start mt-[13px]'>Password</button>
      <Image src={'check2.svg'} width={20} height={20} alt='' className='mt-[23px] '></Image>
      <p className=''>Keep me signed in</p>
      <p className='text-greybc'>Forgotten your password?</p>
      <p className='text-grey8d'>By logging in you agree to Nike s <span className='underline underline-offset-2'> Privacy Policy</span><span> <br /> and <span className='underline underline-offset-2'>Terms of Use</span></span></p>
      <button className='w-[324px] h-[40px] border-[1px] bg-black rounded-md text-backgroundw mt-[13px] text-[11px] text-center'>SIGN IN</button>
      <p className='text-grey8d mt-[20px]'>Not a Member?  <span className='underline underline-offset-2 text-butttoncolor'>Join Us</span> </p>
       
    </div>
  )
}

export default Login;
