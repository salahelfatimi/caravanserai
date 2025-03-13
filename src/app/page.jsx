'use client'
import Activitte from "@/components/pages/activite";
import Book from "@/components/pages/book";
import Header from "@/components/pages/header";
import Instagram from "@/components/pages/instagram";
import Restaurant from "@/components/pages/restaurant";
import ServiceList from "@/components/pages/service";
import Spa from "@/components/pages/spa";
import Suites from "@/components/pages/suites";
import Lenis from 'lenis'
import Image from "next/image";
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
        <Restaurant/>
        <Spa/>
        <Activitte/>
        <Instagram/>
    </div>
  );
}
