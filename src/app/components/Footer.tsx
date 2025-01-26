import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className='w-[1440px] h-[331px]'>
         <div className='w-[1372px] h-[213px] mt-[40px]'>
         {/* footer texts 1 */}
         <div className='w-[1029px] h-[213px] felx flex-row '>
            <div className='w-[245.25px] h-[169.63px] ml-[6px] '>
               <p className=' h-[16px] p-4 font-[400] text-[10px] text-[bgcolor] leading-[32.67px] '>FIND A Store</p>
               <p className=' h-[16px] p-4 font-[400] text-[10px] text-[bgcolor] leading-[32.67px] '>Become A Member</p>
               <p className=' h-[16px] p-4 font-[400] text-[10px] text-[bgcolor] leading-[32.67px] '>SIGN UP FOR EMAIL</p>
               <p className=' h-[16px] p-4 font-[400] text-[10px] text-[bgcolor] leading-[24px] '>Send Us Feedback</p>
               <p className=' h-[16px] p-4 font-[400] text-[9px] text-[bgcolor] leading-[32.67px] '>STUDENTS DISCOUNTS</p>
               

            </div>

            {/* footer text 2 */}
            <div className='w-[245.25px] h-[169.63px] '>
               <p className=' h-[16px] p-4 font-[400] text-[10px] text-[bgcolor] leading-[24px] '>Get Help</p>
               <p className=' h-[14px] p-4 font-[400] text-[11px] text-footertext leading-[28px] '>Order Status</p>
               <p className=' h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px] '>Delivery</p>
               <p className=' h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px] '>Returns</p>
               <p className=' h-[14px] p-4 font-[400] text-[11px] text-footertext leading-[28px] '>Payment Options</p>
               <p className=' h-[14px] p-4 font-[400] text-[11px] text-footertext leading-[28px] '>Contact Us On Nike.com Inquiries</p>
               <p className=' h-[14px] p-4 font-[400] text-[11px] text-footertext leading-[28px] '>Contact Us On All Other Inquiries</p>
            </div>

             {/* footer text 3 */}
            <div className='w-[245.25px] h-[151px] '>
               <p className=' h-[16px] p-4 font-[400] text-[10px] text-[bgcolor] leading-[24px] '>About Nike</p>
               <p className=' h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px] '>News</p>
               <p className=' h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px] '>Careers</p>
               <p className=' h-[14px] p-4 font-[400] text-[11px] text-footertext leading-[28px] '>Investors</p>
               <p className=' h-[14px] p-4 font-[400] text-[11px] text-footertext leading-[28px] '>Sustainability</p>
            </div>

            
         </div>

         {/* footer Logo */}
           <div className='w-[337px] h-[37px] flex justify-end gap-6'>
            <div><Image src='./x.svg' width={30} height={30} alt=''></Image></div>
            <div><Image src='./face.svg' width={30} height={30} alt=''></Image></div>
            <div><Image src='./you.svg' width={30} height={30} alt=''></Image></div>
            <div><Image src='./insta.svg' width={30} height={30} alt=''></Image></div>


           </div>

         </div>

            {/* footer Location */}
         <div className='w-[1372px] h-[62px] mt-[269px]'>
            <div className='w-[672px] h-[32px] mt-[12px] ml-[8px]'></div>
            <div className='mt-[19px]'>
               <Image src='location.svg' width={18} height={15} alt='' className='p-1'></Image>
               <p className='w-[26px] h-[12px] font-[400] text-[12px] leading-[12px] p-2'>India</p>
               <p className='w-[200.48px] h-[14px] font-[400] text-[11px] text-footertext p-4 leading-[12px] '>© 2023 Nike Inc All Rights Reserved</p>
            </div>

            <div className='w-[680px] h-[46px] ml-[686px] flex align-text-bottom'>
               <p className='h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px]'>Guides</p>
               <p className='h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px]'>Terms of Sale</p>
               <p className='h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px]'>Terms of Use</p>
               <p className='h-[14px] p-4 font-[400] text-[12px] text-footertext leading-[28px]'>Nike Privacy Policy</p>

            </div>

         </div>

      </div>
    </div>
  )
}

export default Footer;