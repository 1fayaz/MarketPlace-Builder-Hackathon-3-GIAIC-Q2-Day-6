import React from 'react'
import Image from 'next/image';

const Cart = () => {
  return (
    <div className='w-[200vh] h-[200vh] bg-backgroundw text-butttoncolor'>
      <div className='w-[1100px] h-[547px] pt-[40px] pl-[198px] flex justify-around'>
       <div className='w-[733.33px] h-[547.89px]'>
         <div className='w-[717px] h-[62.89px] bg-greyf7 '>
            <p className='text-[13px] leading-[14px] font-bold text-start pt-[14px] ml-[8px]'>Free Delivery</p>
            <p className='text-[13px] leading-[24px] text-start mt-[11px] ml-[8px]'>Applies to orders of ₹ 14 00000 or more <span className='text-[11px] leading-[24px] underline underline-offset-auto  mt-[1px] ml-[18px]'>View details</span></p>
         </div>
            <p className='text-[13px] leading-[14px] font-bold text-start mt-[15px] ml-[8px]'>BAG</p>
          <div className='w-[717.33px] h-[436px] mt-[1px] ml-[8px]'>
            {/* cart 1 */}
            <div className='w-[717.33px] h-[170px] flex flex-row '>
               <Image src={'drifitrun.svg'} width={150} height={150} alt='' className='mt-[25px]'></Image>
               <div className='w-[537.33px] h-[170px] mt-[24px] ml-[30px]'>
                  <p className='text-[15px] leading-[28px] font-bold'>Nike Dri-FIT ADV TechKnit Ultra <span className='text-[15px] leading-[28px] font-[400] ml-[180.8px]'>MRP: ₹ 3 89500</span></p>
                  <p className='text-[15px] leading-[28px] font-[400] text-grey75 '>Men s Short-Sleeve Running Top </p>
                  <p className='text-[15px] leading-[28px] font-[400] text-grey75 '>Ashen Slate/Cobalt Bliss </p>
                  <p className='text-[15px] leading-[28px] font-[400] text-grey75 '>Size <span className='text-[15px] leading-[28px] font-[400] ml-[0.2px]'>L</span> <span className='text-[15px] leading-[28px] font-[400] ml-[45px]'>Quantity </span> 1<span></span>  </p>
                  <div className='flex flex-row gap-[16px] mt-[28px]'>
                  <Image src={'heart.svg'} width={24} height={24} alt='' className=''></Image>
                  <Image src={'bin.svg'} width={24} height={24} alt='' ></Image>
                  </div>

               </div>
            </div>
            <br />
            <br />
            <hr />
            <div className='w-[717.33px] h-[170px] flex flex-row '>
               <Image src={'shoe97.svg'} width={150} height={150} alt='' className='mt-[25px]'></Image>
               <div className='w-[537.33px] h-[170px] mt-[24px] ml-[30px]'>
                  <p className='text-[15px] leading-[28px] font-bold'>Nike Air Max 97 SE <span className='text-[15px] leading-[28px] font-[400] ml-[270.22px]'>MRP: ₹ 16 99500</span></p>
                  <p className='text-[15px] leading-[28px] font-[400] text-grey75 '>Men s Shoes </p>
                  <p className='text-[15px] leading-[28px] font-[400] text-grey75 '>Flat Pewter/Light Bone/Black/White</p>
                  <p className='text-[15px] leading-[28px] font-[400] text-grey75 '>Size <span className='text-[15px] leading-[28px] font-[400] ml-[0.2px]'>8</span> <span className='text-[15px] leading-[28px] font-[400] ml-[45px]'>Quantity </span> 1<span></span>  </p>
                  <div className='flex flex-row gap-[16px] mt-[28px]'>
                  <Image src={'heart.svg'} width={24} height={24} alt='' className=''></Image>
                  <Image src={'bin.svg'} width={24} height={24} alt='' ></Image>
                  </div>

               </div>
            </div>
            <br />
            <br />
            <hr />
          </div>
       </div>
       <div className='w-[350.67px] h-[295px] gap-[8px] '>
         <p className='font-bold text-[21px] leading-[33px]'>Summary</p>
         <p className='w-[334px] text-[15px] leading-[33px] font-[400]'>Subtotal <span className='text-[14px] leading-[28px] mt-[25px] ml-[195px] text-left font-[400]'>₹ 20 89000</span></p>
         <p className='text-[15px] leading-[33px] font-[400] mb-[20px]'>Estimated Delivery & Handling <span className='text-[15px] leading-[28px] ml-[88.25px] text-left font-[400]'>Free</span></p>
         <hr />
         <p className='w-[334px] text-[15px] leading-[33px] mt-[20px] mb-[17px] font-[400]'>Total <span className='text-[15px] leading-[28px] ml-[216.3px] text-left font-[400]'>₹ 20 89000</span></p>
         <hr />
         <button className='bg-butttoncolor w-[334.67px] h-[60px] rounded-full text-headergrey mt-[32px] text-center'>Member Checkout</button>
       </div>

      </div>
      
    </div>
  )
};

export default Cart;
