"use client"

import { WixClientContext } from "@/context/wixContext";
import { useContext, useEffect } from "react";
import Slider from "@/components/Slider";
const HomePage = () => {
  const wixClient = useContext(WixClientContext);
  console.log(wixClient)
  useEffect(()=> {

    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res)
    }

    getProducts()
  },[wixClient])


  return (
    <div className=''>

      <Slider/>
    </div>
  )
}

export default HomePage