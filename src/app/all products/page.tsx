import React from 'react'
import Image from 'next/image';

const AllProducts = () => {
  return (
      <div className='w-[1440px] h-[18095px] bg-backgroundw text-butttoncolor'>
        <div className='w-[1440px] h-[51px] pt-[16px]'>
         <p className='h-[32px] text-[24px] pt-[19.62px] ml-[48px] leading-[31.2px] text-butttoncolor flex justify-start'>New (500)</p>
         <div className='text-butttoncolor flex justify-end mt-[-10px]'>
         <p className='h-[28px]  text-[16px] leading-[28px] '>Hide Filters</p>
         <Image src={'custom.svg'} width={24} height={24} alt='' className='mr-[25px]'></Image>
         <p className='h-[17px] text-[15px] leaidng-[28px] ' >Sort By</p>
         <Image src={'arrowd2.svg'} width={24} height={24} alt='' className='mr-[48px]'></Image>
         </div>
        </div>

      <div className='w-[1440px] h-[5851px] mt-[15px] text-butttoncolor'>
         <div className='w-[260px] h-[849px]'>
            <div className='w-[192px]  '>
               <div className='w-[192px] h-[400.72px] gap-[14.59px] pt-[15px] grid grid-rows-12 '>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Shoes</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Sports Bras</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Tops & T-Shirts</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Hoodies & Sweatshirts</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Jackets</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Trousers & Tights</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Shorts</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Tracksuits</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Jumpsuits & Rompers</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Skirts & Dresses</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Socks</p>
                  <p className='h-[17px] text-[15px] leading-[21.6px] ml-[52px] '>Accessories & Equipment</p>
               </div>
               <br />
               <br />
                 <hr />
                
               <div className='w-[192px]  mt-[20px]'></div>
                <div className='w-[192px]  ml-[48px]'>
                 <p className='flex justify-start'>Gender</p>
                 <Image src={'arrowd2.svg'} width={14} height={14} alt='' className='rotate-180 ml-[114.13px] mt-[-20px]'></Image>

                </div>
                <div className='grid grid-rows-3 '>
                <div className='w-[196px] h-[108px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>Men</p>
                </div>

                <div className='w-[196px] mt-[-77px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>Women</p>
                </div>

                <div className='w-[196px] mt-[-150px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>Unisex</p>
                 <br />
                 <hr />
                </div>
               </div>

               <div className='w-[192px]  mt-[-180px]'></div>
                <div className='w-[188.16px]  ml-[48px]'>
                 <p className='flex justify-start'>Kids</p>
                 <Image src={'arrowd2.svg'} width={14} height={14} alt='' className='rotate-180 ml-[114.13px] mt-[-20px]'></Image>

                </div>
                <div className='grid grid-rows-3 '>
                <div className='w-[196px] h-[108px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>Boys</p>
                </div>

                <div className='w-[196px] mt-[-77px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>Girls</p>
                </div>
                 <hr className='mt-[-120px]'/>
                
               </div>
                
               <div className='w-[192px]  mt-[-180px]'></div>
                <div className='w-[188.16px]  ml-[48px]'>
                 <p className='flex justify-start'>Shop By Price</p>
                 <Image src={'arrowd2.svg'} width={14} height={14} alt='' className='rotate-180 ml-[114.13px] mt-[-20px]'></Image>

                </div>
                <div className='grid grid-rows-3 '>
                <div className='w-[196px] h-[108px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>Under ₹ 2 50000</p>
                </div>

                <div className='w-[196px] mt-[-77px]'>
                <Image src={'rectangle.svg'} width={20} height={20} alt='' className='ml-[46px] mt-[11px]'></Image>
                 <p className='ml-[76px] mt-[-22px]'>₹ 2 50100 - ₹ 7 50000</p>
                </div>
                 <hr className='mt-[-120px]'/>
                
               </div>

            </div>
                 
         </div>
        </div>
       {/* products */}
       
    </div>
  )
}

export default AllProducts;
