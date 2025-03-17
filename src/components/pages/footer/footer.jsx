import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer(){
    return(

        <div className="bg-primary bg-top bg-[url(/img/bg-yellow.svg)]" >
            <div className=" flex lg:flex-row flex-col items-center justify-between container py-10 ">
                <Image src="/img/logo_white.png" height={500} width={500} alt="Caravan Serai" title="Caravan Serai" className=" w-40" />
                <div className="flex flex-col items-center lg:items-start gap-1">
                    <p className=" text-white font-serif text-lg font-bold  ">Info :</p>
                    <p className=" text-white font-serif  "><span>Location : </span>264 Ouled, Ben Rahmoune 40000</p>
                    <p className=" text-white font-serif  "><span>Phone : </span>05243-54176</p>
                    <p className=" text-white font-serif  "><span>Email : </span>info@caravanserai-marrakech.com</p>
                </div>
            </div>
            <div className=" bg-black py-6 ">
                <div className=" container flex flex-col-reverse gap-6 lg:flex-row items-center justify-between ">
                    <div >
                        <p className={`select-none flex  flex-col lg:flex-row gap-1  font-boska  items-center font-semibold capitalize text-center lg:text-start text-white `}> Copyright &copy; {new Date().getFullYear()} . Touts les droits sont réservés <span className=" text-primary   "> caravan serai </span> </p>
                    </div>
                    <div className="flex gap-6">
                        <Instagram size={30} className=" stroke-[#fff]" />
                    </div>
                </div>
               
            </div>
        </div>
       
    )
}