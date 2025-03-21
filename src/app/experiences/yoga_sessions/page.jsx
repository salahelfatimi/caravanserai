import Book from "@/components/pages/book";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Rejuvenate Your Mind & Body",
      alternates: {
        canonical: "/experiences/yoga_sessions",
      },
      openGraph: {
        title: "Caravan Serai",
        description: "Find balance and relaxation with our yoga sessions at Caravan Serai Marrakech. Experience peace of mind and body in a serene setting with expert instructors. Book your session today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/experiences/yoga_sessions`,
        robots: {
          index: true,
          follow: true,
        },
        siteName: "Caravan Serai",
        images: [
          {
            url: `/opengraph-image.jpg`,
            secureUrl: `/opengraph-image.jpg`,
            width: 1200,
            height: 675,
            alt: "Caravan Serai",
          }
        ],
        type: "website",
  
      },
    }
}

export default function Yoga_sessions(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/experiences/yoga_sessions/yoga_sessions.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white"> Yoga Sessions at Caravan Serai Hotel & Spa</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Find Peace, Balance, and Wellness Amidst the Beauty of Marrakech</p>
                </div>
            </div>    
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/yoga/yoga.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Types of Yoga Sessions Offered</h2>
                    <p>Yoga is not just a physical practice; it’s a path to mental clarity and spiritual growth. Our yoga sessions are designed to help you reconnect with your mind, body, and soul. Held in a peaceful, natural setting, our yoga sessions offer an escape from the stresses of daily life, allowing you to refresh and recharge.</p>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">1 - Vinyasa Yoga</h3>
                        <p className=" text-sm" >A dynamic and flowing practice that synchronizes movement with breath. Ideal for those who enjoy an energetic and challenging workout, Vinyasa Yoga will help improve flexibility, strength, and mindfulness.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">2 - Hatha Yoga</h3>
                        <p className=" text-sm">Focuses on balance, breathing techniques, and physical postures. Hatha Yoga is perfect for beginners or those looking to deepen their understanding of yoga while promoting relaxation and mental clarity.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">3 - Restorative Yoga</h3>
                        <p className=" text-sm">If you’re looking for deep relaxation and stress relief, restorative yoga is ideal. This practice involves long-held postures supported by props, allowing the body to release tension and promote a state of deep relaxation.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className=" text-xl text-primary">4 - Meditative Yoga</h3>
                        <p className=" text-sm">Combine mindfulness with movement to cultivate inner peace. Meditative Yoga sessions focus on conscious breathing and meditation, helping you find a profound sense of calm.</p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
            </div>  
            <div className=" flex lg:flex-row flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2">
                    <Image src={'/img/experiences/yoga_sessions/yoga_sessions_1.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">- Group Yoga Sessions</h2>
                    <p>Join one of our group yoga sessions for a communal experience. Whether you’re practicing with friends or meeting new people, our group classes create a supportive and motivating environment.</p>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">- Private Yoga Sessions</h2>
                    <p>For a more personalized experience, opt for a private yoga session with one of our experienced instructors. Tailored to your specific needs and goals, private sessions are perfect for anyone seeking individualized attention.</p>
       
                </div>
            </div> 
        </div>
    )
}