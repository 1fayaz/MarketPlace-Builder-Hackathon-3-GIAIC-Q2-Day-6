import React from 'react'
import Image from 'next/image';

const Home = () => {
  return (
   <div>
      <div className='w-[1440px] h-[5442.36px] bg-backgroundw'>
         
         <div className='h-[58px] bg-headergrey text-butttoncolor flex flex-col space-y-1 items-center'>
            <p className='font-[600]'>Hello Nike App</p>
            <p>Download the app to access everything Nike <span className='underline underline-offset-auto'> Get Your Great </span></p>
         </div>

          {/* image1 */}
         <div className='w-[1344px] h-[977px] text-butttoncolor'>
            <Image src={'./shoe1.svg'} width={1344} height={700} alt='' className='ml-[48px]' ></Image>
            <div className='w-[1008px] h-[229px] ml-[168px] mt-12'>
             <p className='h-[24px] text-[15px] text-[500] leading-[24px] flex justify-center'>First Look</p>
             <p className='h-[60px] text-[56px] text-[500] leading-[60px] mt-[28px] flex justify-center'>Nike Air Max Pulse</p>
             <p className='h-[48px] text-[15px] text-[400] leading-[24px] mt-[28px] flex justify-center'>Extreme comfort Hyper durable Max volume Introducing the Air Max Pulse    <br />   — designed to push you past your limits and help you go to the max</p>
            </div>
            <div className='flex space-x-5'>
            <button className=' w-[110.58px] h-[39px] bg-butttoncolor rounded-full text-backgroundw text-[15px] leading-[24px]  ml-[550px] '>Notify Me</button>
             <button className=' w-[138.16px] h-[39px] bg-butttoncolor rounded-full text-backgroundw text-[15px] leading-[24px] '>Shop Air Max</button>
            
            </div>

         </div>
         {/* images 3 */}

         <div className='w-[1400px] h-[604.36px] mt-[84px]  bg-backgroundw'>
            <div>
               <p className='h-[27px] ml-[48px] mt-[13px] font-[400] text-[22px] leading-[28px] text-butttoncolor'>Best of Air Max</p>
            </div>
            <div className='h-[48px] flex justify-end gap-[12.37px]'>
               <p className='h-[24px] text-[15px] leading-[24px] mt-[12px] ml-[7px] mr-[15px] text-butttoncolor'>Shop</p>
               <Image src={'larrow.svg'} width={24} height={24} alt=''></Image>
               <Image src={'rarrow.svg'} width={24} height={24} alt=''></Image>
            </div>
            
            <div className='w-[1440px] h-[540.36px] mt-[84px] gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
               <div className='w-[441px] h-[510.36px] ml-[48px]'>
                  <Image src={'./shoepulse.svg'} width={441.36} height={441.36} alt=''></Image>
                  <p className='h-[48px] mt-[21px] text-butttoncolor'>
                  Nike Air Max Pulse <br /><span className='text-grey75'>Women s Shoes</span>
                  </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px] flex justify-end mt-[-45px]'>₹ 13 995</p>
                  
               </div>
                   
               <div>
               <div className='w-[441px] h-[510.36px] ml-[48px]'>
                  <Image src={'shoepulse.svg'} width={441.36} height={441.36} alt=''></Image>
                  <p className='h-[48px] mt-[21px] text-butttoncolor'>
                  Nike Air Max Pulse <br /><span className='text-grey75' >Men s Shoes</span>
                  </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px] flex justify-end mt-[-45px]'>₹ 13 995</p>
                  </div>
               </div>

               <div>
               <div className='w-[441px] h-[510.36px] ml-[48px]'>
                  <Image src={'shoe97.svg'} width={441.36} height={441.36} alt=''></Image>
                  <p className='h-[48px] mt-[21px] text-butttoncolor'>
                  Nike Air Max 97 SE <br /><span className='text-grey75'>Men s Shoes</span>
                  </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px] flex justify-end mt-[-45px]'>₹ 16 995</p>
                  </div>
               </div>

            </div>
         </div>

         {/* image 1featured */}
         <div className='w-[1344px] h-[977px] mt-[84px] ml-[48px]'>
            <p className='h-[27px] text-[23px] text-butttoncolor leading-[28px] font-medium'>Featured</p>
            <Image src={'jog.svg'} width={1344} height={700} alt='' className='mt-[25px]'></Image>

            <div className='w-[1008px] h-[177px] ml-[168px] mt-[48px] text-butttoncolor'>
             <p className='h-[60px] text-[54px] text-[500] leading-[60px] mt-[48px] flex justify-center'>STEP INTO WHAT FEELS GOOD</p>
             <p className='h-[24px] text-[15px] text-[400] leading-[24px] mt-[24px] flex justify-center'>Cause everyone should know the feeling of running in that perfect pair</p>
            </div>
            <div className='flex justify-center'>
            <button className=' w-[152.42px] h-[39px] bg-butttoncolor rounded-full text-backgroundw text-[15px] leading-[24px]   '>Find Your Shoe</button>
            
            </div>
         </div>

         {/* gearup */}

         <div className='w-[1344px] h-[561px] mt-[84px] ml-[48px]'>
            <p className='h-[27px] text-[23px] text-butttoncolor leading-[28px] font-medium'>Gear Up</p>
            <div className='w-[666px] h-[509px] mt-[52px] ml-[48px] '>

             <div className='h-[48px] flex justify-end gap-[12px] '>
               <p className='h-[24px] text-[15px] leading-[24px] mt-[12px] ml-[7px] mr-[13px] text-butttoncolor'>Shop Men s</p>
               <Image src={'larrow.svg'} width={48} height={48} alt=''></Image>
               <Image src={'rarrow.svg'} width={48} height={48} alt=''></Image>
             </div>
             <div className='w-[666px] h-[447px] mt-[12px] gap-[12px] flex justify-end'>
              <div>
                <Image src={'drifitrun.svg'} width={300} height={300} alt=''></Image>
                <p className='h-[48px] mt-[21px] text-butttoncolor'>
                Nike Dri FIT ADV TechKnit Ultra <br /><span className='text-grey75'>Mens Short Sleeve</span><br /> <span className='text-grey75'> Running Top</span>
                  </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px]  mt-[-45px] ml-[231.53px] '>₹ 3 895</p>
              </div>

              <div>
                <Image src={'drifitmen.svg'} width={300} height={300} alt=''></Image>
                <p className='h-[48px] mt-[21px] text-butttoncolor'>
                 Nike Dri FIT Challenger <br /><span className='text-grey75'>Men s 18cm (approx) 2-</span><br /> <span className='text-grey75'> in-1 Versatile Shorts</span>
                </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px]  mt-[-45px] ml-[231.53px] '>₹ 2 495</p>
              </div>
            </div>
            <div className='h-[48px] flex justify-end gap-[12px]'>
               <p className='h-[24px] text-[15px] leading-[24px] mt-[12px] ml-[7px] mr-[13px] text-butttoncolor'>Shop Women s</p>
               <Image src={'larrow.svg'} width={48} height={48} alt=''></Image>
               <Image src={'rarrow.svg'} width={48} height={48} alt=''></Image>
             </div>
             <div className='w-[666px] h-[447px] mt-[12px] gap-[12px] flex justify-end'>
              <div>
                <Image src={'drifit.svg'} width={300} height={300} alt=''></Image>
                <p className='h-[48px] mt-[21px] text-butttoncolor'>
                Nike Dri-FIT ADV Run Division <br /><span className='text-grey75'>Women s Long-Sleeve </span><br /> <span className='text-grey75'>Running Top</span>
                  </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px]  mt-[-45px] ml-[231.53px] '>₹ 5 295</p>
              </div>

              <div>
                <Image src={'drifitmen.svg'} width={300} height={300} alt=''></Image>
                <p className='h-[48px] mt-[21px] text-butttoncolor'>
                Nike Fast <br /><span className='text-grey75'>Women s Mid-Rise 7/8 Running </span><br /> <span className='text-grey75'>Leggings with Pockets</span>
                </p>
                  <p className='h-[17px] text-[15px] text-butttoncolor leading-[24px]  mt-[-45px] ml-[231.53px] '>₹ 3 795</p>
              </div>
              </div>

            </div>
         </div>
         {/* dont miss */}
         <div className='w-[1344px] h-[977px] mt-[84px] ml-[48px]'>
            <p className='h-[27px] text-[23px] text-butttoncolor leading-[28px] font-medium'>Don t Miss</p>
            <Image src={'dontmiss.svg'} width={1344} height={700} alt='' className='mt-[25px]'></Image>

            <div className='w-[1008px] h-[177px] ml-[168px] mt-[48px] text-butttoncolor'>
             <p className='h-[60px] text-[52px] text-[500] leading-[60px] mt-[48px] flex justify-center'>FLIGHT ESSENTIALS</p>
             <p className='h-[24px] text-[15px] text-[400] leading-[24px] mt-[24px] flex justify-center'>Your built-to-last all-week wears—but with style only Jordan Brand can deliver</p>
            </div>
            <div className='flex justify-center'>
            <button className=' w-[80.38px] h-[39px] bg-butttoncolor rounded-full text-backgroundw text-[15px] leading-[24px] mt-[7.5px]   '>Shop</button>
            
            </div>
         </div>

         {/* the essentials */}

         <div className='w-[1344px] h-[592px] mt-[84px] ml-[48px]'>
            <p className='h-[27px] text-[23px] leading-[28px] text-butttoncolor'>The Essentials</p>
            <div className='w-[1356px] h-[540px] mt-[25px] flex justify-around'>
               <div>
                  <Image src={'menc.svg'} width={440} height={540} alt=''></Image>
                  <button className='w-[85.19px] h-[39px] ml-[48px] mt-[452.98px] absolute'>Mens</button>
               </div>
               <div className='w-[1356px] h-[540px] mt-[25px] '>
               <div>
                  <Image src={'womenc.svg'} width={440} height={540} alt=''></Image>
                  <button className='w-[85.19px] h-[39px] ml-[48px] mt-[452.98px] absolute'>Women s</button>
               </div>
               <div className='w-[1356px] h-[540px] mt-[25px] '>
               <div>
                  <Image src={'kidsc.svg'} width={440} height={540} alt=''></Image>
                  <button className='w-[85.19px] h-[39px] ml-[48px] mt-[452.98px] absolute'>Kids</button>
               </div>
               
               </div>
               </div>

            </div>

            <div className='w-[880px] h-[192px] mt-[84px]  flex flex-row'>
               <div>
               <h3 className='h-[17px] text-butttoncolor ml-[280px] '>Icons</h3>
               
                  <div className='w-[184px] h-[144px] mt-[24px] gap-[12px] ml-[280px] grid grid-rows-4'>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Air Force 1</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Huarache</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Air Max 90</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Air Max 95</p>
                  </div>
               </div>

               <div>
               <h3 className='h-[17px] text-butttoncolor ml-[280px] '>Shoes</h3>
               
                  <div className='w-[184px] h-[144px] mt-[24px] gap-[12px] ml-[280px] grid grid-rows-4'>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>All Shoes</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Custom Shoes</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Jordan Shoes</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Running Shoes</p>
                  </div>
               </div>

               <div>
               <h3 className='h-[17px] text-butttoncolor ml-[280px] '>Clothing</h3>
               
                  <div className='w-[184px] h-[144px] mt-[24px] gap-[12px] ml-[280px] grid grid-rows-4'>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>All Clothing</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Modest Wear</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Hoodies & Pullovers</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Shirts & Tops</p>
                  </div>
               </div>

               <div>
               <h3 className='h-[17px] text-butttoncolor ml-[280px] '>Kids</h3>
               
                  <div className='w-[184px] h-[144px] mt-[24px] gap-[12px] ml-[280px] grid grid-rows-4'>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Infant & Toddler Shoes</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Kids Jordan Shoes</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Hoodies & Pullovers</p>
                  <p className='h-[17px] text-[15px] leading-[24px]  text-grey75'>Kids Basketball Shoes</p>
                  </div>
               </div>

            </div>
          </div>


      </div>
    </div>
  )
};
export default Home ;