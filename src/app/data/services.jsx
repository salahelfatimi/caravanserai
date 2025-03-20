import { 
    Leaf, Utensils, Flower, Waves, Bus, Dumbbell, Accessibility, Baby, Martini, Croissant, Coffee, ShoppingBag, 
    ShieldCheck, ParkingSquare, ConciergeBell, Wifi, Languages, Ban, WashingMachine, Bell, Shield, Car, Medal 
} from "lucide-react";

const services = [
    { title: "Sustainable Stays", description: "Eco-friendly hospitality at its best.", icon: Leaf },
    { title: "On-Site Restaurant", description: "Delicious meals just a step away.", icon: Utensils },
    { title: "Luxury Spa", description: "Relax, unwind, and rejuvenate.", icon: Flower }, // Alternative for Spa
    { title: "Outdoor Pool", description: "Take a refreshing swim in the open air.", icon: Waves }, // Alternative for Pool
    { title: "Airport Shuttle", description: "Convenient transport to and from the airport.", icon: Bus },
    // { title: "Fitness Center", description: "Stay in shape even on vacation.", icon: Dumbbell },
    // { title: "Accessibility", description: "Facilities designed for all guests.", icon: Accessibility },
    // { title: "Baby-Sitting", description: "Professional childcare services.", icon: Baby },
    { title: "Bar & Drinks", description: "Enjoy crafted cocktails and local wines.", icon: Martini },
    { title: "Breakfast Buffet", description: "Start your day with a delicious buffet.", icon: Croissant },
    // { title: "Free Coffee & Tea", description: "Complimentary drinks anytime.", icon: Coffee },
    { title: "Gift Shop", description: "Souvenirs and essentials in one place.", icon: ShoppingBag },
    { title: "Safety Certified", description: "Strict security and health measures.", icon: ShieldCheck },
    { title: "Free Parking", description: "Hassle-free parking for guests.", icon: ParkingSquare },
    { title: "Concierge Service", description: "Personalized assistance for your stay.", icon: ConciergeBell },
    { title: "Free Wi-Fi", description: "Stay connected anytime, anywhere.", icon: Wifi },
    { title: "Multilingual Staff", description: "Service in multiple languages.", icon: Languages },
    // { title: "Non-Smoking Rooms", description: "Smoke-free environment for comfort.", icon: Ban },
    // { title: "Laundry Service", description: "Keep your clothes fresh and clean.", icon: WashingMachine }, // Alternative for Laundry
    { title: "Room Service", description: "Delicious meals delivered to your door.", icon: Bell },
    { title: "Security Certified", description: "Your safety is our priority.", icon: Shield },
    // { title: "Valet Parking", description: "Let us take care of your car.", icon: Car },
    { title: "Athlete-Friendly", description: "Facilities perfect for sports teams.", icon: Medal }
];

export default services;

