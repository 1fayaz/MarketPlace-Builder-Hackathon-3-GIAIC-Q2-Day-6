import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='bg-bgcolor w-[1440px] h-[96px]'>
      <div className='w-[1440px] h-[36px] bg-headergrey '>
          <Image src={'logo1.svg'} width={24} height={24} alt='' className='mx-[48px]'></Image>
          
          <ul className='my-[-18px] flex  justify-end text-black'>
            <li className='flex space-x-16 justify-between'>Find a Store</li>
            <li className='flex space-x-16 justify-between'>|</li>
            <li className='flex space-x-16 justify-between'>Help</li>
            <li className='flex space-x-16 justify-between'>|</li>
            <li className='flex space-x-16 justify-between'>Join Us</li>
            <li className='flex space-x-16 justify-between'>| </li>
            <li className='flex  space-x-16justify-between'>Sign In</li>
          </ul>
       </div>

       <div className='w-[1440px] h-[60px]'>
          <Image src={'logo2.svg'} width={78.47} height={78.47} alt='' className='mx-[38.26px]'></Image>
        <div className='w-[1211px] h-[60px]'>
          <div className='flex justify-end items-center'>
             <button className='w-[180px] h-[40px] bg-headergrey text-headerbar rounded-full'>Search</button>
          </div>
          <div className='w-[760px] h-[60px] mt-[4px]'>
            <button className='font-medium text-[16px] space-x-6 leading-6 flex text-center text-black '>New & Featured</button>
            <button className='font-medium text-[16px] space-x-6 leading-6 flex text-center text-black '>Men</button>
            <button className='font-medium text-[16px] space-x-6 leading-6 flex text-center text-black '>Women</button>
            <button className='font-medium text-[16px] space-x-6 leading-6 flex text-center text-black '>Kids</button>
            <button className='font-medium text-[16px] space-x-6 leading-6 flex text-center text-black '>Sale</button>
            <button className='font-medium text-[16px] space-x-6 leading-6 flex text-center text-black '>SNKRS</button>
          </div>
        
        </div>

      </div>
       
    </div>
  )
}

export default Header;
