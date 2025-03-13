'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Minus, Plus } from "lucide-react";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});

export default function Book() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleAdultsChange = (delta) => {
        setAdults(prev => Math.max(1, prev + delta));
    };

    const handleChildrenChange = (delta) => {
        setChildren(prev => Math.max(0, prev + delta));
    };

    return (
        <div className=''>
            <div className="bg-primary py-10 bg-cover bg-[url(/img/bg.svg)] ">
                <div className="min-h-[10rem] container w-full flex items-center flex-col justify-center">
                    <h2 className="text-5xl font-semibold uppercase text-white text-center mb-6 font-boska">Book Your Stay</h2>
                    <form className="flex flex-col md:flex-row justify-between container mx-auto gap-20 p-4 px-10 shadow-2xl  bg-white lg:rounded-full">
                        <div className="flex flex-col items-center justify-center">
                            <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Arrival</h4>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center"
                                dateFormat="dd MMMM"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Departure</h4>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center"
                                dateFormat="dd MMMM"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Adults</h4>
                            <div className="flex flex-row items-center justify-center gap-6">
                                <button type="button" onClick={() => handleAdultsChange(-1)}><Minus /></button>
                                <input type="number" name="Adults" value={adults} onChange={(e)=>(setAdults(e.target.value))} className="bg-transparent text-2xl lg:text-4xl font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                <button type="button" onClick={() => handleAdultsChange(1)}><Plus /></button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Children</h4>
                            <div className="flex flex-row items-center justify-center gap-6">
                                <button type="button" onClick={() => handleChildrenChange(-1)}><Minus /></button>
                                <input type="number" name="Children" value={children} onChange={(e)=>(setChildren(e.target.value))}  className="bg-transparent text-2xl lg:text-4xl font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                <button type="button" onClick={() => handleChildrenChange(1)}><Plus /></button>
                            </div>
                        </div>
                    </form>
                    <div className="container w-full flex items-center justify-center mx-auto px-4 mt-6">
                        <button className={` ${montserratAlternates.className} bg-white font-bold capitalize text-2xl text-primary py-2 px-6 rounded-full hover:bg-primary hover:text-white border-2 border-white transition duration-300`}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}