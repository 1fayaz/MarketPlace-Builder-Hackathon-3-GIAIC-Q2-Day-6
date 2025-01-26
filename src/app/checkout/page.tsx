import React from 'react'
import Image from 'next/image';

const Checkout = () => {
  return (
    <div className='w-[1411px] pl-[289px] h-[2499px]  bg-backgroundw text-butttoncolor'>
      {/* header */}
      <div className='w-[1411px] h-[72.8px]'>
         <Image src={'logo2.svg'} alt='' width={64} height={21.75} className='ml-[91px]'></Image>
         <div className='flex flex-row justify-end mt-[-50px]'>
          <p className='text-[14px] leading-[24px] text-right'>000 800 100 9538</p>
         <Image src={'msg2.svg'} alt='' width={20} height={20} className='ml-[46px]'></Image>
         <Image src={'bag2.svg'} alt='' width={20} height={20} className='ml-[40px] mr-[5px]'></Image>
          </div>
      </div>

      <div className='w-[880px] h-[2376px] flex justify-around'>
         {/* order */}
         <div className='w-[440px] h-[2206px] flex flex-col'>
            <p className=' leading-[24px] text-[21px] font-bold'>How would you like to get your order?</p>
            <p className='text-grey75 leading-[24px] text-[15px] mt-[4px]'>Customs regulation for India require a copy of the recipient s <br /> KYC The address on the KYC needs to match the shipping <br /> address Our courier will contact you via SMS/email to obtain <br />a copy of your KYC The KYC will be stored securely and <br />used solely for the purpose of clearing customs (including <br />sharing it with customs officials) for all orders and returns If <br /> your KYC does not match your shipping address please click <br /> the link for more information <span className='underline underline-offset-auto'>Learn More</span> </p>
             <div className='rounded-lg border-butttoncolor border-2 flex flex-row w-[440px] h-[82px]'>
             <Image src={'deliverit.svg'} width={24} height={24} alt='' className=' ml-[10px] mt-[-5px]'/>
             <p className='mt-[27px] ml-[24px]'>Deliver It</p>
             </div>
             <p className='text-[21px] font-bold leading-[24px] mt-[44px]'>Enter your name and address:</p>
             <button className='w-[440px] h-[56px] mt-[28px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>First Name</button>
             <button className='w-[440px] h-[56px] mt-[32px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Last Name</button>
             <p className='text-[11px] leading-[24px] text-grey75 ml-[16px]'>We do not ship to PO boxes</p>
             <button className='w-[440px] h-[56px] mt-[32px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Address Line 1</button>
             <button className='w-[440px] h-[56px] mt-[8px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Address Line 2</button>
             <button className='w-[440px] h-[56px] mt-[48px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Address Line 3</button>
             <div className='grid grid-cols-2 grid-rows-2'>
             <button className='w-[211.19px] h-[56px] mt-[48px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Postal Code</button>
             <button className='w-[211.19px] h-[56px] mt-[48px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Locality</button>
             <button className='w-[211.19px] h-[56px] mt-[48px] text-grey8d text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>State/Territory <Image src={'arrowd2.svg'} width={6} height={12} alt='' className='flex justify-items-end'></Image></button>
             <button className='w-[211.19px] h-[56px] mt-[48px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>India</button>
             </div>
             <div className='w-[440px] h-[104px]  mt-3'>
             <Image src={'rectangle.svg'} width={24} height={24} alt='' className=' '/>
             <p className='mt-[-25px] ml-[30px] '>Save this address to my profile</p>
             <Image src={'rectangle2.svg'} width={24} height={24} alt='' className='mt-[32px] '/>
             <p className='mt-[-25px] ml-[30px]'>Make this my preferred address</p>
             </div>
             <p className='text-[21px] font-bold leading-[24px] mt-[30px]'>What s your contact information?</p>
             <button className='w-[440px] h-[56px] mt-[28px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Last Name</button>
             <p className='text-[11px] leading-[24px] text-grey75 ml-[16px]'>A confirmation email will be sent after checkout</p>
             
             <button className='w-[440px] h-[56px] mt-[28px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>Phone Number</button>
             <p className='text-[11px] leading-[24px] text-grey75 ml-[16px]'>A carrier might contact you to confirm delivery</p>

             <p className='text-[21px] font-bold leading-[24px] mt-[36px]'>What s your PAN?</p>
             <button className='w-[440px] h-[56px] mt-[28px] text-[16px] leading-[24px] text-start rounded-md border-headerbar border-[2px] '>PAN</button>
             <p className='text-[11px] leading-[24px] text-grey75 ml-[16px]'>Enter your PAN to enable payment with UPI Net Banking or local card methods</p>
             
             <div className='w-[440px] h-[104px]  mt-3'>
             <Image src={'rectangle.svg'} width={24} height={24} alt='' className=' '/>
             <p className='mt-[-25px] ml-[30px] text-[12px] text-grey8d  '>Save PAN details to Nike Profile</p>
             <Image src={'rectangle.svg'} width={24} height={24} alt='' className='mt-[67px] '/>
             <p className='text-[12px] text-grey8d mt-[-25px] ml-[30px]'>I have read and consent to eShopWorld processing my information in <br /> accordance with the <span> Privacy Statement </span> and <span>Cookie Policy</span> eShopWorld <br />is a trusted Nike partner</p>
             </div>
             <button className='w-[440px] h-[60px] text-[15px] leading-[28px] text-center text-grey75 bg-arrowbuttonl rounded-full mt-[71px]'>Continue</button>
             <br />
             <hr />
             <p className='text-[21px] font-[500] leading-[24px] mt-[21px] mb-[40px]'>Delivery</p>
             <hr />
             <p className='text-[21px] font-[500] leading-[24px] text-grey75 mt-[21px] mb-[32px]'>Shipping</p>
             <hr />
             <p className='text-[21px] font-[500] leading-[24px] text-grey75 mt-[21px] mb-[32px]'>Billing</p>
             <hr />
             <p className='text-[21px] font-[500] leading-[24px] text-grey75 mt-[21px] mb-[32px]'>Payment</p>
             
         </div>
         <div className='w-[320px] h-[721px] ml-[120px]'>
            <p className='w-[106.37px] text-[21px] leading-[33px] font-[400]'>Order Summary</p>
            <p className='w-[320.06px] text-grey8d text-[15px] text leading-[33px] font-[400]'>Subtotal <span className='text-[14px] leading-[28px] mt-[25px] ml-[180px] text-left font-[400]'>₹ 20 89000</span></p>
         <p className='text-[15px] leading-[33px] text-grey8d font-[400] mb-[21px]'>Delivery/Shipping <span className='text-[15px] leading-[28px] ml-[163.58px] text-left font-[400]'>Free</span></p>
         <hr />
         <p className='w-[334px] text-[15px] leading-[33px] mt-[19.5px] mb-[18.5px] font-[400]'>Total <span className='text-[15px] leading-[28px] ml-[199.62px] text-left font-[400]'>₹ 20 89000</span></p>
         <hr />
         <p className='text-[9px] leading-[24px] mt-[18px]'>(The total reflects the price of your order including all duties and taxes)</p>
         <p className='text-[15px] leading-[24px] font-bold mt-[26px]'>Arrives Mon 27 Mar - Wed 12 Apr</p>
         <div>
            <div className='w-[320px] h-[208px] flex flex-row gap-[12px] mt-[8px]'>
               <div><Image src={'drifitrun.svg'} width={208} height={208} alt=''></Image></div>
               <div className=''>
               <p className='text-[13px] leading-[24px]'>Nike Dri-FIT <br /> ADV TechKnit <br /> Ultra Mens <br />Short-Sleeve <br /> Running Top</p>
               <p className='text-[13px] text-grey8d '>Qty 1</p>
               <p className='text-[13px] text-grey8d '>Size L</p>
               <p className='text-[13px] text-grey8d '>₹ 3 89500</p>
               </div>

            </div>

            <div className='w-[320px] h-[208px] flex flex-row gap-[12px] mt-[13px]'>
               <div><Image src={'shoe97.svg'} width={208} height={208} alt=''></Image></div>
               <div className=''>
               <p className='text-[13px] leading-[24px]'>Nike Air Max <br /> 97 SE Men s <br /> Shoes</p>
               <p className='text-[13px] text-grey8d '>Qty 1</p>
               <p className='text-[13px] text-grey8d '>Size UK 8</p>
               <p className='text-[13px] text-grey8d '>₹ 16 99500</p>
               </div>

            </div>
         </div>
         </div>

      </div>
      
    </div>
  )
}

export default Checkout;
