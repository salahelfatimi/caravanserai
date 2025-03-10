'use client'
import Activitte from "@/components/pages/activite";
import Header from "@/components/pages/header";
import ScrollSection from "@/components/pages/scrollSection";
import Suites from "@/components/pages/Suites";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className=" ">
        <Header/>
        <ScrollSection/>
        <Suites/>
        <Activitte/>
    </div>
  );
}
