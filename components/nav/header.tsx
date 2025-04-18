"use client"
import Image from "next/image"
import logo from "../nav/image/Logo.png"
import { Poppins } from "next/font/google"
import "../nav/headerstyle.css"

const contFont =  Poppins({
    subsets: ["latin"],
    weight:"300"
})

export default function PageHeader(){
    return(
        <div className="header">
            <Image src={logo} alt="logo" className="w-[8rem] h-[4rem]"/>
            <ul className={`${contFont.className}`}>
                <li><a>Home</a></li>
                <li><a>Shop</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}