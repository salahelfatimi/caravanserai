'use client'
import AboutUsPage from "@/components/pages/aboutUs/page";
import Lenis from "lenis";
import { useEffect } from "react";

export default function AboutUs(){
    useEffect( () => {
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    return(
        <div>
            <AboutUsPage/>
        </div>
    )
}