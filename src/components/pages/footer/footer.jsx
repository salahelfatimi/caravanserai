'use client'
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-primary bg-top bg-cover bg-[url(/img/bg-yellow.svg)]" >
            <div className=" flex lg:flex-row flex-col items-center justify-between container py-10 ">
                <Image src="/img/logo_white.png" height={500} width={500} alt="Caravan Serai" title="Caravan Serai" className=" w-40" />
                <div className="flex flex-col items-center lg:items-start gap-1">
                    <p className=" text-white font-serif text-lg font-bold  ">Info :</p>
                    <p className=" text-white font-serif  "><span>Location : </span>264 Ouled, Ben Rahmoune 40000</p>
                    <p className=" text-white font-serif  "><span>Phone : </span>05 24 35 41 76</p>
                    <p className=" text-white font-serif  "><span>Email : </span>info@caravanserai-marrakech.com</p>
                </div>
            </div>
            <div className=" bg-black py-6 ">
                <div className=" container flex flex-col-reverse gap-6 lg:flex-row items-center justify-between ">
                    <div >
                        <p className={`select-none flex  flex-col lg:flex-row gap-1   items-center font- capitalize text-center lg:text-start text-white `}> Copyright &copy; {new Date().getFullYear()} . Touts les droits sont réservés <span className=" text-primary   "> caravan serai </span> made by <Link href={'https://www.traficgenius.com/'} target="_blank" rel="noopener noreferrer" className=" underline underline-offset-4">trafic genius </Link>  </p>
                    </div>
                    <div className="flex gap-6">
                        <Instagram size={30} className=" stroke-[#fff]" />
                    </div>
                </div>
            </div>
        </div>
    )
}