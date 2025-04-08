import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);



  return (
    <div>
      <Image src="/menu.png"  alt="" width={28} height={28} className="cursor-pointer" onClick={() => {setOpen((prev) => !prev)}} />
    
      {
        open && (
          <div className="">
            <Link href="/">HomePage</Link>
          </div>
        )
      }
    </div>
  )
}


export default Menu