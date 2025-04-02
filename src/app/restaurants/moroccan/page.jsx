import Book from "@/components/pages/book";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Best Moroccan Cuisine",
      alternates: {
        canonical: "/restaurants/moroccan",
      },
      openGraph: {
        title: "Caravan Serai / Best Moroccan Cuisine",
        description: "Experience authentic Moroccan flavors at our restaurant in Morocco. Enjoy traditional dishes, exquisite service, and a warm ambiance. Book your table today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants/moroccan`,
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

export default function Moroccan(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/restaurant/restaurant_3.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Authentic Moroccan Cuisine at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Immerse yourself in the rich flavors of Morocco with our carefully crafted dishes at Caravan Serai Restaurant. Our Moroccan dining experience is a journey through tradition, taste, and hospitality, offering an exquisite selection of dishes prepared with fresh, locally sourced ingredients and authentic spices.</p>
                </div>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover " about="Caravan Serai" title="Caravan Serai" > 
                        <source src="/vid/restaurant/restaurant_1.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Signature Moroccan Dishes</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Tagines</strong> – Slow-cooked to perfection, our aromatic tagines combine tender meats, fresh vegetables, and signature Moroccan spices for an unforgettable taste.</li>
                            <li><strong>Couscous Royale</strong> – A must-try dish featuring steamed semolina, succulent lamb or chicken, and a medley of vegetables, served with a rich, flavorful broth.</li>
                            <li><strong>Grilled Mechoui</strong> – Traditional Moroccan-style roasted lamb, seasoned with herbs and slow-cooked for a juicy and tender finish.</li>
                            <li><strong>Harira Soup</strong> – A warm and comforting soup made with tomatoes, lentils, chickpeas, and Moroccan spices, often enjoyed as a starter.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">A Feast for the Senses</h2>
                    <p>At Caravan Serai, we believe that dining is an experience, not just a meal. Our restaurant is designed to transport you into the heart of Morocco, with warm, elegant decor, traditional music, and an ambiance that evokes the charm of a Marrakech riad.</p>
                    <span>Enjoy your meal in a serene courtyard or our beautifully decorated indoor space, where the scents of saffron, cinnamon, and cumin fill the air, promising a gastronomic journey like no other.</span>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
            </div> 
            <div className=" flex lg:flex-row flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover" about="Caravan Serai" title="Caravan Serai">
                        <source src="/vid/restaurant/restaurant_3.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Moroccan Tea & Desserts</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Mint Tea</strong> – No Moroccan meal is complete without the famous Atay (Moroccan mint tea), a symbol of hospitality and tradition.</li>
                            <li><strong>Pastilla au Lait</strong> – A delicate Moroccan pastry with layers of crispy phyllo, creamy milk, and a hint of orange blossom.</li>
                            <li><strong>Fresh Seasonal Fruits</strong> – Enjoy a refreshing selection of local fruits, carefully chosen to complement your meal.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">A Culinary Experience to Remember</h2>
                    <p>Whether you’re looking for a romantic dinner, a family gathering, or an authentic Moroccan feast, Caravan Serai Restaurant offers an unforgettable experience.</p>
                    <span>Join us for a taste of Morocco, where tradition meets elegance in every bite.</span>
                </div>
            </div>
        </div>
    )
}