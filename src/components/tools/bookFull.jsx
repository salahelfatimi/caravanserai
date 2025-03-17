'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Minus, Plus } from "lucide-react";

export default function BookFull() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [fullName, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const handleAdultsChange = (delta) => {
        setAdults(prev => Math.max(1, prev + delta));
    };

    const handleChildrenChange = (delta) => {
        setChildren(prev => Math.max(0, prev + delta));
    };
    document.body.classList.add("overflow-hidden");

    return (
        <div className=' fixed inset-0 z-50  '>
            <div className="bg-primary py-10 min-h-screen flex items-center justify-center bg-cover bg-[url(/img/bg.svg)] overflow-y-auto ">
                <div className="min-h-[10rem] container w-full flex items-center flex-col justify-center">
                    <form className="flex  flex-col  justify-between container mx-auto gap-6 p-4 px-10 shadow-2xl  bg-white ">
                                <div>
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Full Name</h4>
                                    <input type="text" onChange={(e)=>(setFullname(e.target.value))} value={fullName} name="fullName" id=""  className="bg-transparent border-b-2 border-primary text-xl placeholder:text-2xl  font-serif text-black focus:outline-none w-full text-center pl-4 " />
                                </div>
                                <div>
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Email</h4>
                                    <input type="email" onChange={(e)=>(setEmail(e.target.value))} value={email} name="email" id=""  className="bg-transparent border-b-2 border-primary text-xl  placeholder:text-2xl font-serif text-black focus:outline-none w-full text-center pl-4 "/>
                                </div>
                                <div>
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Telephone</h4>
                                    <input type="tel" onChange={(e)=>(setPhone(e.target.value))} value={phone} name="phone" id=""  className="bg-transparent border-b-2 border-primary text-xl placeholder:text-2xl  font-serif text-black focus:outline-none w-full text-center pl-4 "/>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Arrival</h4>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bg-transparent text-2xl  font-serif w-full text-black focus:outline-none text-center" dateFormat="dd MMMM" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Departure</h4>
                                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="bg-transparent text-2xl  font-serif w-full text-black focus:outline-none text-center" dateFormat="dd MMMM" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Adults</h4>
                                    <div className="flex flex-row items-center justify-center gap-6">
                                        <button type="button" onClick={() => handleAdultsChange(-1)}><Minus /></button>
                                        <input type="number" name="Adults" value={adults} onChange={(e)=>(setAdults(e.target.value))} className="bg-transparent text-2xl  font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                        <button type="button" onClick={() => handleAdultsChange(1)}><Plus /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Children</h4>
                                    <div className="flex flex-row items-center justify-center gap-6">
                                        <button type="button" onClick={() => handleChildrenChange(-1)}><Minus /></button>
                                        <input type="number" name="Children" value={children} onChange={(e)=>(setChildren(e.target.value))}  className="bg-transparent text-2xl  font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                        <button type="button" onClick={() => handleChildrenChange(1)}><Plus /></button>
                                    </div>
                                </div>
                    </form>
                    <div className="container w-full flex items-center justify-center mx-auto px-4 mt-6">
                        <button className={` bg-white font-bold capitalize text-2xl text-primary py-2 px-6 rounded-full hover:bg-primary hover:text-white border-2 border-white transition duration-300`}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}