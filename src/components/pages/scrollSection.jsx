"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat_Alternates } from "next/font/google";
const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Customize based on your design
  display: 'swap',
})

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/floating_1.jpg",
  "/floating_2.jpg",
  "/floating_16.jpg",
  "/floating_3.jpg",
  "/floating_4.jpg",
  "/floating_5.jpg",
  "/floating_15.jpg",
  "/floating_6.jpg",
  "/floating_7.jpg",
  "/floating_8.jpg",
  "/floating_9.jpg",
  "/floating_18.jpg",
  "/floating_10.jpg",
  "/floating_11.jpg",
  "/floating_12.jpg",
  "/floating_13.jpg", 
  
];

export default function ScrollSection() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    const imagesHeight = container.scrollHeight;
    const sectionHeight = trigger.clientHeight;

    gsap.set(container, { y: 0 });

    ScrollTrigger.create({
      trigger: trigger,
      pin: true,
      scrub: true,
      start: "top top",
      end: `+=${imagesHeight - sectionHeight}`,
      onUpdate: (self) => {
        gsap.to(container, {
          y: -self.progress * (imagesHeight - sectionHeight),
          ease: "none",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="relative bg-primary h-screen mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center"
      ref={triggerRef}
    >
      {/* Left side - Scrolling Images */}
      <div className="w-full md:w-1/2 h-full overflow-hidden">
        <div ref={containerRef} className="relative w-full gap-10 flex-col flex">
          {images.map((src, index) => (
            <div key={index} className="w-full h-full flex items-center justify-center">
              <img
                src={`/img/scrollSection/${src}`}
                alt={`Floating image ${index + 1}`}
                className="rounded-3xl shadow-lg max-h-full max-w-full md:max-h-[80vh] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Text content (static) */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="font-boska font-bold text-white text-4xl md:text-6xl leading-tight">
          Your Moroccan Escape Awaits!
        </h2>
        <p className={` ${montserratAlternates.className} font-boska text-white text-xs md:text-lg leading-relaxed max-w-[90%] md:max-w-[70%]`}>
          Caravan Serai is more than a hotel — it’s a gateway into the soul of Marrakech. Tucked away between ancient palms and sun-kissed courtyards, it’s a place where stories unfold with every sunset. Here, tradition whispers through mosaic walls, the scent of orange blossoms drifts in the air, and every corner invites you to pause, breathe, and belong.
        </p>
        <button className="bg-white hover:bg-primary border-2 border-white hover:text-white duration-700 text-primary text-2xl font-boska px-8 py-2">
          Book Now
        </button>
      </div>
    </div>
  );
}
