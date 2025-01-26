import React from 'react'
import Image from 'next/image';

const ProductDetail = () => {
  return (
    <div className='w-[1440px] h-[1173px] text-butttoncolor bg-backgroundw flex flex-row'>
      <Image src={'force1pl.svg'} width={653} height={653} alt='' className='pt-[158px] ml-[98px]'></Image>
      <div className='w-[376px] h-[1041px] ml-[137px] '>
         <p className='text-[48px] leading-[48px] mt-[335px]'>Nike Air Force 1 PLT AF ORM</p>
         <p className='text-[15px] leading-[28px] font-[400] mt-[34px]'>Turn style on its head with this crafted take on the Air Jordan 1 Mid Its inside out-inspired construction including unique layering and exposed foam accents ups the ante on this timeless Jordan Brand silhouette Details like the deco stitching on the Swoosh add coveted appeal while the unexpected shading rich mixture of materials and aged midsole aesthetic give this release an artisan finish</p>
         <p className='text-[36px] leading-[26px] mt-[32px]'>₹ 8 69500</p>
         <button className='bg-butttoncolor w-[174.42px] h-[44px] text-backgroundw rounded-full mt-[26px] '><Image src={'cart.svg'} width={29} height={29} alt='' className=''></Image> Add To Cart</button>
      </div>
       
    </div>
  )
}

export default ProductDetail;
