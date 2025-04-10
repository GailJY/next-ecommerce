'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/31460088/pexels-photo-31460088.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  },
  {
    id: 2,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/13277976/pexels-photo-13277976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  }
]


const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((slide, index) => (
          <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h2 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h2>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">Shop now</button>
              </Link>
            </div>
            <div className="relative h-1/2 xl:w-1/2 xl:h-full">
              <Image src={slide.img} alt={slide.title} fill sizes="100%" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {
          slides.map((slide, index) => {
            return (
              <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} key={slide.id} onClick={() => setCurrent(index)}>
                {current === index && (
                  <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                )}
              </div>
            )
          })
        }
      </div>

    </div>
  )
}


export default Slider