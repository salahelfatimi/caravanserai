'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Gsap(){
     useEffect(() => {
    gsap.to('.box', {
        scrollTrigger: {trigger:'.box', toggleActions:'restart none none none',start:'top butttom', markers:true}, 
        
        duration:2,
        height:500
    });},[])
    return(
        <div>
            <div className=" h-screen bg-black">
            <div className=" w-52 h-52 bg-white ">


            </div>

        </div>
        <div className=" h-screen bg-black">
            <div className="box w-52 h-0 bg-white ">


            </div>

        </div>
        </div>
        
    )
}