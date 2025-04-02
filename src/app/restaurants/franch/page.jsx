import Book from "@/components/pages/book";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Best French Cuisine",
      alternates: {
        canonical: "/restaurants/franch",
      },
      openGraph: {
        title: "Caravan Serai / Best French Cuisine",
        description: "Enjoy authentic French dishes at our restaurant in Morocco. Experience refined culinary delights with exceptional service and a warm ambiance. Book your table today!",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/restaurants/franch`,
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
export default function Franch(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/restaurant/restaurant_6.jpg'} loading="eager" width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">French Gastronomy at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Indulge in the elegance and refinement of French cuisine at Caravan Serai Restaurant. Our expertly crafted menu brings you the finest flavors of France, blending classic recipes with a touch of modern creativity. Experience a culinary journey filled with rich flavors, delicate textures, and exquisite presentation.</p>
                </div>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <Image src={'/img/restaurant/restaurant_1.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div >
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Signature French Dishes</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Foie Gras Maison</strong> – A luxurious and creamy foie gras served with toasted brioche and a hint of fig compote.</li>
                            <li><strong>French Onion Soup</strong> – A comforting, slow-cooked broth topped with caramelized onions, melted Gruyère cheese, and crispy bread.</li>
                            <li><strong>Filet de Bœuf au Poivre</strong> – A tender beef filet cooked to perfection, accompanied by a rich peppercorn sauce.</li>
                            <li><strong>Salmon en Papillote</strong> – Fresh salmon baked in parchment with aromatic herbs and a delicate lemon butter sauce.</li>
                            <li><strong>Niçoise Salad</strong> – A refreshing Mediterranean salad with tuna, olives, hard-boiled eggs, and crisp vegetables, drizzled with a light vinaigrette.</li>

                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">A Refined Dining Experience</h2>
                    <p>Step into a world of sophisticated charm, where the art of French dining comes to life. Our intimate ambiance, elegant table settings, and fine attention to detail create the perfect setting for a romantic dinner, business meeting, or special celebration.</p>
                    <span>Savor every bite as you sip on a perfectly paired glass of wine, bringing out the depth and complexity of our carefully curated dishes.</span>
                </div>
            </div>
            <div className=" flex flex-col   gap-10 py-20 bg-white bg-top bg-[url(/img/bg-yellow.svg)] ">
                <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
                <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
                <Book/>
            </div> 
            <div className=" flex lg:flex-row flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <Image src={'/img/restaurant/restaurant_8.jpg'} width={1920} height={1080} className="h-full  w-full object-bottom object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div >
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">French Desserts & Pastries</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li><strong>Crème Brûlée</strong> – A silky vanilla custard with a caramelized sugar crust that cracks with the perfect spoon tap.</li>
                            <li><strong>Moelleux au Chocolat </strong> –  A rich and indulgent chocolate lava cake, served with a scoop of vanilla ice cream.</li>
                            <li><strong>Tarte Tatin</strong> – A classic French upside-down caramelized apple tart, paired with fresh cream.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">An Unforgettable French Culinary Escape</h2>
                    <p>At Caravan Serai, we bring you the best of French gastronomy, combining authentic flavors, fresh ingredients, and exceptional service.</p>
                    <span>Join us for an extraordinary French dining experience, where every dish tells a story of elegance and passion.</span>
                </div>
            </div>
        </div>
    )
}