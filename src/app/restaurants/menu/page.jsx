import Menu from "@/components/pages/menu";
import Image from "next/image";

export default function Page() {
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/restaurant/restaurant_3.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Carte / Menu – Caravan Serai Restaurant</h1>
                </div>
            </div>
            <Menu/>
        </div>
        
    )
}