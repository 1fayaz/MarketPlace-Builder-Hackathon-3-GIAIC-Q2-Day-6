import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";


type Product = {
  _id : string;
  productName: string;
  description : string;
  price : number;
  imageUrl : string;
  status:string;
  colors:string;
  category:string

}

export default  async function Home () {
  const products : Product[] = await sanityFetch({query : allproducts})

  return (
    <div className="bg-backgroundw text-butttoncolor grid grid-cols-3 gap-[10px] gap-y-[18px] pl-[308px] pr-[56px] pt-[142px]">
      {
       products.map((product) => (
        <div className="w-[348px] h-[533px]" key={product._id}>
         <Image src={product.imageUrl} width={348} height={348} alt=""/>
         <h2 className="text-left text-[#9e3500] mt-[9px] font-[500px] text-[15px] leading-[28px]">{product.status}</h2>
         <h2 className="text-left font-[500px] text-[15px] leading-[28px] ">{product.productName}</h2>

         <h2 className="text-left font-[400px] text-grey75 text-[15px] leading-[24px] mt-[2px]">{product.colors}</h2>
         <h2 className="text-left font-[400px] text-[15px] text-grey75 leading-[24px] mt-[5px]">{product.category}</h2>
         <h2 className="text-left font-[500px] text-[15px] leading-[28px] mt-[19px]">MRP : ₹ {product.price}</h2>

        </div>
       ))
      }
    </div>
  )
}

