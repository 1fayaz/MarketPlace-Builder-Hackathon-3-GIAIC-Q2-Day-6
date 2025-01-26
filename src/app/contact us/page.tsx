import React from 'react'
import Image from 'next/image';

function ContactUs() {
  return (
    <div className='w-[1428px] h-[213vh] pt-[48px] bg-backgroundw text-butttoncolor'>
      <div className='w-[1440px] h-[132px]  justify-items-center '>
         <p className='text-[32px] leading-[36px] font-[500]   '>GET HELP</p>
         <br />
         <button className='w-[457.33px] h-[56px]  text-start border-2 pt-2 pl-2 border-grey75 text-grey75 text-[15px] rounded-md '>What can we help you with? <span><Image src={'search2.svg'} width={24} height={18} alt='' className='mt-[-25px] ml-[421.33px]'></Image></span></button>
      </div>
      
      
      <div className='w-[1309px] h-[1098px] flex justify-between'>
        {/* FAQs */}
        <div className='w-[939.75px] h-[1042px] mt-[28px] pl-[28px] '>
          <p className='text-[28px] leading-[32px] font-bold mt-[28px]'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</p>
          <p className='text-[15px] leading-[28px] mt-[38px]'>We want to make buying your favourite Nike shoes and gear online fast and easy and we accept the following payment options:</p>
          <p className='text-[16px] leading-[28px] ml-[32px] mt-[31px]'>Visa Mastercard Diners Club Discover American Express Visa Electron Maestro</p>
          <p className='text-[15px] leading-[28px] ml-[32px] mt-[23px]'>If you enter your PAN information at checkout you ll be able to pay for your order with PayTM or a local credit or debit card</p>
          <p className='text-[16px] leading-[28px] ml-[32px] mt-[23px]'>Apple Pay</p>
          <p className='text-[16px] leading-[28px]  mt-[28px]'> <span className='font-semibold underline underline-offset-auto'> Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout If you re not already a Member <span className='font-semibold underline underline-offset-auto'>join <br />us</span> today</p>
          <button className=' w-[110.58px] h-[39px] bg-butttoncolor rounded-full text-backgroundw text-[15px] leading-[24px]   mt-[16px]  '>JOIN US</button>
          <button className=' w-[138.16px] h-[39px] bg-butttoncolor rounded-full text-backgroundw text-[15px] leading-[24px] ml-[16px] '>SHOP NIKE</button>
          <p className='text-[20px] leading-[24px] mt-[21px] font-bold'>FAQs</p>
          <p className='text-[20px] leading-[24px] mt-[17px] font-bold'>Does my card need international purchases enabled?</p>
          <p className='text-[16px] leading-[28px] mt-[5px]  '>Yes we recommend asking your bank to enable international purchases on your card You will be notified at checkout <br />if international purchases need to be enabled</p>
          <p className='text-[15px] leading-[28px] mt-[21px] '>Please note some banks may charge <span className='font-semibold underline underline-offset-auto' >a small transaction fee</span> for international orders</p>
          <p className='text-[15px] leading-[28px] mt-[27px] font-bold'>Can I pay for my order with multiple methods?<br /> <span className='text-[15px] font-normal leading-[28px]'>No payment for Nike orders can t be split between multiple payment methods</span></p>
          <p className='text-[15px] leading-[28px] mt-[20px] font-bold'>What payment method is accepted for SNKRS orders?<br /> <span className=' font-normal leading-[28px]'>You can use any accepted credit card to pay for your SNKRS order</span></p>
          <p className='text-[16px] leading-[28px] mt-[20px] font-bold'>Why don t I see Apple Pay as an option?<br /> <span className=' font-normal leading-[28px]'>To see Apple Pay as an option in the Nike App or on Nike com you ll need to use a compatible Apple device running the latest <br /> OS be signed in to your iCloud account and have a supported card in your Wallet Additionally you ll need to use Safari to use <br /> Apple Pay on Nikecom</span></p>
          <p className='text-[15px] leading-[28px] mt-[25px]'>Was this answer helpful?</p>
          <div className='flex flex-row'>
          <Image src={'thumbup.svg'} width={30} height={30} alt='' className='mt-[6px]'></Image> 
          <Image src={'thumbdo.svg'} width={30} height={30} alt='' className=''></Image>
          </div>
          <p className='text-[16px] leading-[24px] mt-[21px] font-bold text-grey75'>RELATED</p>
          <p className='text-[16px] leading-[28px] underline underline-offset-auto mt-[25px] ml-[32px] font-bold '>WHAT ARE NIKE S DELIVERY OPTIONS?</p>
          <p className='text-[16px] leading-[28px] underline underline-offset-auto mt-[23px] ml-[32px] font-bold '>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
        </div>
        

        {/* logo and text */}
        <hr className='rotate-180 w-[1px] mt-[45px] h-[1100px]  bg-greybc'/>
        <div className='w-[313.25px] h-[1042px] flex justify-center text-butttoncolor shadow-l '>
          <div className='felx justify-items-center'>
         <p className='text-[28px] leading-[32px] mt-[52px] font-medium '>CONTACT US</p>
        <Image src={'mob.svg'} width={64} height={64} alt='' className='mt-[34px]'></Image>
         <p className='text-[16px] leading-[24px] mt-[29px] font-bold'>000 800 919 0566</p>
         <p className='text-[16px] leading-[24px]  text-center '>Products & Orders: 24 hours a day<br /> 7 days a week <br />
         Company Info & Enquiries: 07:30 - <br />16:30 Monday - Friday</p>
        <Image src={'msg.svg'} width={64} height={64} alt='' className='mt-[53px]'></Image>
         <p className='text-[15px] leading-[24px] mt-[29px] font-bold'>24 hours a day</p>
         <p className='text-[15px] leading-[28px] '>7 days a week</p>
        <Image src={'email.svg'} width={64} height={64} alt='' className='mt-[53px]'></Image>
         <p className='text-[15px] leading-[24px] mt-[29px] font-bold'>We ll reply within</p>
         <p className='text-[15px] leading-[28px] '>five business days</p>
        <Image src={'location2.svg'} width={64} height={64} alt='' className='mt-[53px]'></Image>
         <p className='text-[15px] leading-[24px] mt-[29px] font-bold'>STORE LOCATOR</p>
         <p className='text-[15px] leading-[28px] '>Find Nike retail stores near you</p>

         </div>
         
      </div>
    </div>
    </div>
  )
};

export default ContactUs;

