"use client";
import {Dancing_Script} from "next/font/google";
import '../Home/homestyle.css'

const showcaseFont = Dancing_Script({
    subsets: ["latin"]
})

export default function HomePage(){
    return(
        <div className="main">
            {/* SHOP HOME PAGE */}
            <div className="Home gap-[0.4rem]">
                <div className='show'>
                    <h1 className={`${showcaseFont.className} text-8xl text-[#2C3E50] w-[40rem] font-[400]`}>
                        Fragrance For Every Occasion.
                    </h1>
                    <p className={` text-[1.2rem] text-[#2C3E50] font-[100] w-[35rem]`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        In perspiciatis sapiente, facere quos odio reiciendis possimus nisi aperiam, 
                        nesciunt atque corrupti minima illo itaque explicabo tempora eveniet necessitatibus. 
                        Ratione, dignissimos.
                    </p>
                    <button className={`w-[8rem] h-[2.5rem] text-[1rem] rounded-[0.8rem] font-[600]`}>Shop Now</button>
                </div>
            </div>
            {/* SHOP CONTENT */}
            <div className="cont">
                <div className='flex justify-center items-center'>
                    <h1 className='text-2xl font-bold'>Our Products</h1>
                </div>
                {/* SHOP PRODUCTS */}
                <div className="items gap-[0.6rem] justify-center">
                    <div className='bg-[#ECF0F1] w-[14rem] h-[20rem] rounded-[0.4rem]'></div>
                    <div className='bg-[#ECF0F1] w-[14rem] h-[20rem] rounded-[0.4rem]'></div>
                    <div className='bg-[#ECF0F1] w-[14rem] h-[20rem] rounded-[0.4rem]'></div>
                </div>
            </div>
        </div>
    )
}