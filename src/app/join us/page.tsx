import React from 'react'
import Image from 'next/image';

const JoinUs = () => {
  return (
    <div className='w-[1411px] h-[929px] bg-backgroundw text-butttoncolor'>
      <div className='w-[380px] h-[833px] pl-[515.5px] pt-[0px]'>
       <Image src={'logo2.svg'} width={24} height={24} alt=''></Image>
       <p className='w-[231.22px] h-[31px] text-[18px] font-[700] mt-[29px] text-center'>BECOME A NIKE MEMBER</p>
       <p className='w-[282.08px] h-[60px] text-center text-[14px] font-[400] leading-[22px] text-grey8d mt-[29px] '>Create your Nike Member profile and get first access to the very best of Nike products inspiration and community</p>
       <button className='w-[324px] h-[40px] border-[1px] mt-[25px] rounded-md text-grey8d text-start'>Email address</button>
       <button className='w-[324px] h-[40px] border-[1px] mt-[13px] rounded-md text-grey8d text-start'>Password</button>
       <button className='w-[324px] h-[40px] border-[1px] mt-[13px] rounded-md text-grey8d text-start'>First Name</button>
       <button className='w-[324px] h-[40px] border-[1px] mt-[13px] rounded-md text-grey8d text-start'>Last Name</button>
       <button className='w-[324px] h-[40px] border-[1px] mt-[13px] rounded-md text-grey8d text-start '>Date of Birth</button>
       <p className='w-[301px] h-[14px] text-center text-[11px] font-[400] leading-[13.31px] text-grey8d mt-[7px] '>Get a Nike Member Reward every year on your Birthday</p>
       <button className='w-[324px] h-[40px] border-[1px] mt-[13px] rounded-md text-grey8d text-start'>India <Image src={'arrowd.svg'} width={10} height={7.14} alt='' className='ml-[300px] mt-[-12px]'></Image></button>
      <div className='grid grid-cols-2 gap-[170px]'>
       <button className='w-[153.89px] h-[40px] border-[1px] mt-[10px] rounded-md text-grey8d text-start '>Male</button>
       <button className='w-[153.89px] h-[40px] border-[1px] mt-[10px] rounded-md text-grey8d text-start '>Female</button>
      </div>
      <div className='w-[324px] h-[28px] mt-[20.34px] '>
      <Image src={'Rectangle.svg'} width={20} height={20} alt=''></Image>
      <p className='w-[247px] h-[28px] text-center text-[11px] font-[400] leading-[14px] text-grey8d mt-[-22px] ml-[14px] '>Sign up for emails to get updates from Nike on products offers and your Member benefits</p>
      </div>
      <p className='w-[309px] h-[30px] mt-[21.66px] ml-[35.44px] text-grey8d text-center text-[12px] leading-[16px]'>By creating an account you agree to Nike s <span className='underline underline-offset-2'>Privacy Policy </span> and <span className='underline underline-offset-2'> Terms of Use </span></p>
      <button className='w-[324px] h-[40px] border-[1px] bg-black rounded-md text-backgroundw mt-[30px] text-[15px] text-center'>JOIN US</button>
      <p className='w-[324px] h-[24px] mt-[21.66px] ml-[3.44px] text-grey8d text-center text-[11px] leading-[14px]'>Already a Member?  <span className=' text-butttoncolor underline underline-offset-2'>Sign In</span></p>
    </div>
      
    </div>
  )
}

export default JoinUs;
