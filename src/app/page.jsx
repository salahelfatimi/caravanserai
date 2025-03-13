'use client'
import Activitte from "@/components/pages/activite";
import Book from "@/components/pages/book";
import Header from "@/components/pages/header";
import Instagram from "@/components/pages/instagram";
import Restaurant from "@/components/pages/restaurant";
import ScrollSection from "@/components/pages/scrollSection";
import ServiceList from "@/components/pages/service";
import Spa from "@/components/pages/spa";
import Suites from "@/components/pages/suites";
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
    <div className="  ">
        <Header/>
        <ServiceList/>
        <Suites/>
        <Book/>
        <Spa/>
        <Activitte/>
        <Restaurant/>
        <Instagram/>
        {/* <ScrollSection/>
        <Suites/>
        <Activitte/>
        <Restaurant/> */}
    </div>
  );
}
