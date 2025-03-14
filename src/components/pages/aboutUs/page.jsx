import Image from "next/image";

export default function AboutUsPage(){
    return(
        <div>
            <div className=" relative h-[60rem] bg-center flex flex-col text-center items-center justify-center" >
                <Image src={'/img/aboutUs/about_us_1.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-bottom object-cover"/>
                <div className=" absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className=" relative z-20 flex flex-col gap-4 container">
                    <h1 className="font-boska font-medium text-6xl lg:text-8xl text-white" >About Caravan Serai</h1>
                    <p className="text-center text-white mb-8 lg:text-xl">Located in the heart of Marrakech’s Palmeraie, Caravan Serai is a luxurious boutique hotel inspired by the historic caravanserais, where travelers once rested on their journeys across the desert. Our 4-star hotel blends traditional Moroccan charm with modern comforts, offering a tranquil escape from the bustling city.</p>
                </div>
            </div>
        </div>
    )
}