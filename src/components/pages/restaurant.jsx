"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Customize based on your design
  display: 'swap',
});

gsap.registerPlugin(ScrollTrigger);

const images = [
  "restaurant_1.jpg",
  "restaurant_2.jpg",
  "restaurant_3.jpg",
  "restaurant_4.jpg",
  "restaurant_5.jpg",
  "restaurant_6.jpg",
  // "restaurant_7.jpg",
];

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".imageRestaurant");

    // Calculate the total scroll distance based on the height of each image
    let totalScrollDistance =0;
    images.forEach((image) => {
      totalScrollDistance += image.offsetHeight;
    });

    // Log the total scroll distance for debugging
    console.log(`Total scroll distance: ${totalScrollDistance}px`);

    // GSAP animation to scroll the images
    gsap.to(imageContainerRef.current, {
      y: -totalScrollDistance, // Scroll to the end of all images
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Start when the top of the section hits the top of the viewport
        end: `+=${totalScrollDistance}`, // End after scrolling the total distance
        scrub: 1, // Smooth scrubbing effect
        pin: true, // Pin the section while scrolling
        anticipatePin: 1, // Improve pinning behavior
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="  pb-20 lg:pb-0 bg-white h-screen  p-4 lg:p-8 flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 items-center justify-center">
      {/* Left side - Scrolling Images */}
      <div className="h-full  lg:w-1/2 overflow-hidden">
        <div ref={imageContainerRef} className="relative gap-10 flex-col flex">
          {images.map((src, index) => (
            <div key={index} className="imageRestaurant">
              <Image
                width={6000}
                height={3376}
                quality={50}
                src={`/img/restaurant/${src}`}
                alt={`Floating ${index + 1}`}
                className="rounded-3xl lg:h-full h-[50vh] w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Text content (static) */}
      <div className="w-full lg:w-1/2  flex flex-col gap-4 items-center justify-center text-center">
            <h2 className="font-boska font-bold text-primary text-4xl lg:text-6xl leading-tight">
                A Culinary Journey – Taste the Essence of Morocco
            </h2>
            <p className={` ${montserratAlternates.className} font-boska text-black text-xs lg:text-lg leading-relaxed max-w-[90%] lg:max-w-[70%]`}>
                Indulge in a sensory feast at Caravan Serai’s restaurant, where authentic Moroccan flavors meet refined culinary artistry. From fragrant tagines to delicate pastries, every dish is crafted with fresh, locally sourced ingredients and a touch of tradition. <br />
                Sip on refreshing mint tea, savor the richness of Moroccan spices, and let each bite transport you to a world of culinary delight. Whether dining under the stars or in our elegant indoor space, every meal is an experience to remember.
            </p>
            <button className="bg-primary hover:bg-white border-2 border-primary hover:text-primary duration-700 text-white text-2xl font-boska px-8 py-2">
            Book Now
            </button>
      </div>
    </div>
  );
}