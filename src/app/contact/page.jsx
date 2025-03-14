'use client'
import ContactPage from "@/components/pages/contact/page";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Contact(){
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
            <ContactPage/>
        </div>
    )
}