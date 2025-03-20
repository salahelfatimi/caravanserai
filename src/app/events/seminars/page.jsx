import Image from "next/image";
import Link from "next/link";

export default function Seminars(){
    return(
        <div>
            <div className=" relative h-screen bg-center flex flex-col text-center items-center justify-center">
                <Image src={'/img/events/seminar/seminar.jpg'} width={1920} height={1080} className=" absolute inset-0 h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col gap-4 container ">
                    <h1 className="font-boska font-medium text-3xl lg:text-8xl text-white">Seminars at Caravan Serai</h1>
                    <p className="text-center text-white mb-8 text-xs lg:text-xl">Host Your Next Seminar in a Stylish and Productive Setting</p>
                </div>
            </div>
            <div className=" bg-primary py-10  bg-cover bg-top bg-[url(/img/bg-yellow.svg)]">
               <p className=" container text-center text-white font-medium text-xs lg:text-base">At Caravan Serai, we provide the ideal environment for hosting seminars, workshops, and business conferences. Our venue combines modern facilities with traditional Moroccan charm, ensuring that your event is both productive and inspiring.</p>
            </div>
            <div className=" flex lg:flex-row-reverse flex-col items-center justify-center gap-3  bg-top bg-[url(/img/bg-yellow.svg)] ">
                <div className="lg:w-1/2 h-screen">
                    <Image src={'/img/events/seminar/seminar_1.jpg'} width={1920} height={1080} className="h-full  w-full object-cover" alt="Caravan Serai" title="Caravan Serai"/>
                </div>
                <div className=" lg:w-1/2 p-4 flex flex-col gap-4">
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Why Choose Caravan Serai for Your Seminar?</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li>Professional Environment – Our venue is equipped with modern amenities to support all your seminar needs, from high-quality audio-visual equipment to comfortable seating arrangements.</li>
                            <li>Inspiring Atmosphere – Located in the heart of Marrakech, our Moroccan-inspired setting will provide your attendees with a unique and refreshing environment.</li>
                            <li>Customizable Spaces – Whether you need a small intimate setting or a larger space for a bigger seminar, we offer flexible options to suit your event size and style.</li>
                            <li>Dedicated Event Team – Our experienced team will be there every step of the way, assisting with planning, setup, and ensuring everything runs smoothly.</li>
                            <li>Catering Options – Keep your attendees refreshed with our gourmet catering services, offering a variety of options for coffee breaks, lunch, and more.</li>
                        </ul>
                    </div>
                    <h2 className="font-boska font-medium text-2xl lg:text-4xl text-primary">Services We Offer</h2>
                    <div className="flex flex-col gap-4">
                        <ul className=" list-disc list-inside text-sm space-y-2">
                            <li>Seminar and Workshop Hosting – Perfect for corporate training, educational seminars, or specialized workshops.</li>
                            <li>Business Conferences – A professional space for large conferences and business networking events.</li>
                            <li>Networking Events – A stylish setting for networking opportunities, fostering collaboration and growth.</li>
                            <li>Team-building Events – Organize productive and engaging team-building activities to strengthen bonds within your team.</li>
                            <li>Product Launches – Showcase your brand and products in a unique and memorable environment.</li>
                        </ul>
                    </div>
                    <Link href="/contact" className=" text-center hover:bg-white hover:text-primary border-primary border duration-700 bg-primary w-full p-2 px-3 text-2xl font-medium text-white rounded-full">Book Your Seminar</Link>
                </div>
            </div>
        </div>
    )
}