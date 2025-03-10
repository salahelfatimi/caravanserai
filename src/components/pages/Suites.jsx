'use client'
import Image from "next/image";
import { Montserrat_Alternates } from 'next/font/google' 
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { use, useEffect, useState } from "react";
const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Customize based on your design
    display: 'swap',
  })
export default function Suites() {
    const [selected, setSelected] = useState('majorelle')
    console.log(selected)
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ stopOnInteraction:false ,speed: 1, delay: 5000 }),
    ])
    const ClickButtonSelect = (name) => {
        setSelected(name)
    }
    useEffect(() => {
        ClickButtonSelect(selected)
    },[])

    return(
        <div className="relative h-screen bg-white flex flex-col-reverse lg:flex-row-reverse  gap-10 lg:gap-0 items-center">
                <div className=" flex flex-col gap-10 items-start justify-center md:w-1/2 mx-auto container "> 
                    <h2 className="text-6xl text-center font-boska font-medium text-primary  ">Suites & Rooms</h2>
                    <div className="flex flex-col justify-start gap-4 w-full  items-start">
                        <button onClick={()=>(ClickButtonSelect('chambre_double_classique'))} className={`${montserratAlternates.className} text-start font-medium text-sm lg:text-xl hover:bg-primary hover:text-white hover:px-4  duration-700 ${ selected=='chambre_double_classique'&&' bg-primary text-white px-4 '}`} >Chambre Double Classique</button>
                        <button onClick={()=>(ClickButtonSelect('suite'))} className={`${montserratAlternates.className} text-start font-medium text-sm lg:text-xl hover:bg-primary hover:text-white hover:px-4  duration-700 ${ selected=='suite'&&' bg-primary text-white px-4 '}`} >Suite</button>
                        <button onClick={()=>(ClickButtonSelect('suite_superieure'))} className={`${montserratAlternates.className} font-medium text-sm lg:text-xl hover:bg-primary hover:text-white hover:px-4  duration-700 ${ selected=='suite_superieure'&&' bg-primary text-white px-4 '}`} >Suite Supérieure</button>
                        <button onClick={()=>(ClickButtonSelect('majorelle'))} className={`${montserratAlternates.className} text-start font-medium text-sm lg:text-xl hover:bg-primary hover:text-white hover:px-4  duration-700 ${ selected=='majorelle'&&' bg-primary text-white px-4 '}`} >Suite King avec Piscine Privée - Majorelle</button>
                        <button onClick={()=>(ClickButtonSelect('beldi'))} className={`${montserratAlternates.className} text-start font-medium text-sm lg:text-xl hover:bg-primary hover:text-white hover:px-4  duration-700 ${ selected=='beldi'&&' bg-primary text-white px-4 '}`} >Suite Lit King-Size avec Piscine Privée - Beldi</button>
                        <button onClick={()=>(ClickButtonSelect('suite_triple'))} className={`${montserratAlternates.className} text-start font-medium text-sm lg:text-xl hover:bg-primary hover:text-white hover:px-4  duration-700 ${ selected=='suite_triple'&&' bg-primary text-white px-4 '}`} >Suite Triple</button>

                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className=" overflow-hidden relative"  ref={emblaRef}>
                        <div  className="flex transition-transform ease-out duration-700">
                            {[1,2,3,4].map((ele, index) => (
                                <div key={index} className=" relative  min-w-full w-full">
                                    <Image  src={`/img/suites&rooms/${selected}/${selected}_${index+1}.jpg`} title={selected} alt={selected} className="  object-cover object-center md:h-screen h-[30rem] min-w-full w-full"  width={1920} height={1080}  />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
          
        </div>
    )
}