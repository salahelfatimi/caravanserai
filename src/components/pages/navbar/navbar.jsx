'use client';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Calendar, Menu, X } from "lucide-react";
import menuItems from "@/components/data/menuItems";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navbarRef = useRef(null);
  const menuPanelRef = useRef(null); // Ref for the white div
  const closeButtonRef = useRef(null); // Ref for the close button
  const [openNav, setOpenNav] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const navbar = navbarRef.current;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbar, { backgroundColor: "#8f6448", duration: 0.5, color: "black" });
      } else {
        gsap.to(navbar, { backgroundColor: "transparent", duration: 0.5, color: "white" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu open/close animation
  useEffect(() => {
    const menuPanel = menuPanelRef.current;
    const closeButton = closeButtonRef.current;

    if (openNav) {
      // Open the menu panel (animate height from 0 to 100vh)
      gsap.fromTo(
        menuPanel,
        { height: 0 },
        { height: "100vh", duration: 0.5, ease: "power2.inOut" }
      );

      // Animate the close button in (fade in and scale up)
      gsap.fromTo(
        closeButton,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, delay: 0.3, ease: "power2.out" }
      );
    } else {
      // Close the menu panel (animate height from 100vh to 0)
      gsap.to(menuPanel, { height: 0, duration: 1, ease: "power2.inOut" });

      // Animate the close button out (fade out and scale down)
      gsap.to(closeButton, { opacity: 0, scale: 0, duration: 1, ease: "power2.in" });
    }
  }, [openNav]);

  return (
    <div>
      {/* Navbar */}
        <div ref={navbarRef} className="flex px-2 lg:px-20 flex-row items-center justify-between min-h-20 fixed top-0 right-0 left-0 z-30" >
            <button onClick={() => setOpenNav(!openNav)}>
            <Menu className="stroke-white" size={50} />
            </button>
            <div className="flex flex-row gap-6">
                <button className="bg-white text-lg font-medium text-primary px-6 py-2 flex items-center justify-center gap-2 rounded-full font-boska"> <Calendar size={20} /> Book Now </button>
            </div>
        </div>

        <div ref={menuPanelRef} className="fixed inset-0 bg-white h-0 overflow-y-auto z-30" >
            <div className="flex flex-row justify-between">
                <div className="lg:w-2/3 p-6 flex flex-col gap-10 w-full">
                    <div className=" flex flex-row justify-between items-center w-full">
                        <div ref={closeButtonRef} className="" style={{ opacity: 0, scale: 0 }}>
                            <button  onClick={() => setOpenNav(false)} className=" p-2 rounded-full  transition-colors border-2 border-primary"  > <X className=" stroke-primary" size={30} /> </button>
                        </div>
                        <Image src="/img/logo_text.png" height={500} width={500} alt="Caravan Serai" title="Caravan Serai" className=" w-48" />
                        <div className=" hidden lg:block"></div>
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
                        {menuItems.map((items, index) => (
                        <div key={index} className="">
                            <h3 className="font-semibold font-boska text-2xl lg:text-3xl text-primary">{index+1} -{items.title}</h3>
                            <ul className="pl-6 flex flex-col">
                            {items.links.map((ele, index) => (
                                <li key={index} className="font-light">
                                <Link href={ele.href} className=" text-sm lg:text-lg">- {ele.name}</Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>
              
                <div className="w-2/5 hidden lg:block h-screen bg-primary">
                    <Image width={1920} height={1080} src="/img/navbar/caravanserai_1.jpg" className="object-center h-screen object-cover" alt="Caravan Serai’s" title="Caravan Serai’s" />
                </div>
            </div>
        </div>
    </div>
  );
}