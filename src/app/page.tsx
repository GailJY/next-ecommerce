"use client"

import { WixClientContext } from "@/context/wixContext";
import { useContext, useEffect } from "react";
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
    <div className=''>HomePage</div>
  )
}

export default HomePage