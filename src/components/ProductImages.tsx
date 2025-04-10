'use client';
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/30959912/pexels-photo-30959912.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/21752128/pexels-photo-21752128.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
]

const ProductImages = () => {

  const [index, setIndex] = useState(0)

  return (
    <div className="">
      <div className="h-[500px] relative ">
        <Image src={images[index].url} alt="" fill sizes="50vw" className="object-cover rounded-e-md" />
      </div>
      <div className="flex justify-start gap-4 mt-8">

        {images.map((img,idx) => {
          return(
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer hover:border-2 border-neutral-900" key={img.id} onClick={()=> setIndex(idx)}>
            <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-e-md" />
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductImages