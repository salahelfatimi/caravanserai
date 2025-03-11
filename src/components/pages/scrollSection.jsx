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
  "caravanserai_1.png",
  "caravanserai_2.png",
  "caravanserai_3.png",
  "caravanserai_4.png",
  "caravanserai_5.png",
  "caravanserai_6.png",
  "caravanserai_7.png",
  "caravanserai_8.png",
  "caravanserai_9.png",
  "caravanserai_10.png",
];

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".image");

    // Calculate the total scroll distance based on the height of each image
    let totalScrollDistance = 0;
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
    <div ref={sectionRef} className="relative sactionDiv pb-20 lg:pb-0 bg-primary h-screen mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center">
      {/* Left side - Scrolling Images */}
      <div className="h-full w-full lg:w-1/2 overflow-hidden">
        <div ref={imageContainerRef} className="relative gap-10 flex-col flex ">
          {images.map((src, index) => (
            <div key={index} className="image ">
              <Image
                width={500}
                height={500}
                quality={50}
                src={`/img/scrollSection/${src}`}
                alt={`Floating ${index + 1}`}
                className="rounded-3xl lg:h-[90vh] h-[50vh] w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Text content (static) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="font-boska font-bold text-white text-4xl lg:text-6xl leading-tight">
          Your Moroccan Escape Awaits!
        </h2>
        <p className={`${montserratAlternates.className} font-boska text-white text-xs lg:text-lg leading-relaxed max-w-[90%] lg:max-w-[70%]`}>
          Caravan Serai is more than a hotel — it’s a gateway into the soul of Marrakech. Tucked away between ancient palms and sun-kissed courtyards, it’s a place where stories unfold with every sunset. Here, tradition whispers through mosaic walls, the scent of orange blossoms drifts in the air, and every corner invites you to pause, breathe, and belong.
        </p>
        <button className="bg-white hover:bg-primary border-2 border-white hover:text-white duration-700 text-primary text-2xl font-boska px-8 py-2">
          Book Now
        </button>
      </div>
    </div>
  );
}