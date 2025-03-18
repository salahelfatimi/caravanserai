'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ArrowRight, BookA, Calendar1, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import BookFull from '../tools/bookFull';
import toast, { Toaster } from 'react-hot-toast';

export default function Book() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [fullName, setFullname] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [etaps,setEtaps]=useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAdultsChange = (delta) => {
        setAdults(prev => Math.max(1, prev + delta));
    };

    const handleChildrenChange = (delta) => {
        setChildren(prev => Math.max(0, prev + delta));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!fullName || !phone) {
            toast.error('Please fill in all required fields.');
            setIsSubmitting(false);
            return;
        }

        const reservationData = {
            startDate: startDate.toLocaleDateString(),
            endDate: endDate.toLocaleDateString(),
            adults,
            children,
            fullName,
            phone,
            email
        };

        try {
            const response = await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                toast.success('Reservation successfully !');
                setAdults(1)
                setChildren(0)
                setEmail('')
                setEndDate(new Date(new Date().setDate(new Date().getDate() + 1)))
                setEtaps(false)
                setFullname('')
                setPhone('')
                setStartDate(new Date())
            } else {
                toast.error('Failed to submit reservation.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while submitting the reservation.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=''>
            <Toaster position="bottom-right" reverseOrder={false}/>
            <div className=" ">
                <div className="min-h-[10rem] container w-full flex items-center flex-col justify-center ">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between container mx-auto border-4 border-primary  gap-20 p-4 px-10 shadow-2xl  bg-white lg:rounded-full">
                        <div className={` flex flex-col lg:flex-row justify-between mx-auto py-2 gap-20 ${etaps==false?'block':'hidden'}`}>
                            <div className="flex flex-col items-center justify-center ">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Arrival</h4>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center" dateFormat="dd MMMM" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h4 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Leaving</h4>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center" dateFormat="dd MMMM" />
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
                        </div>
                        <div className={` flex flex-col lg:flex-row justify-between mx-auto py-2 gap-20 ${etaps==true?'block':'hidden'}`}>
                            <div>
                                <h4 className={`after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Full Name</h4>
                                <input type="text" onChange={(e)=>(setFullname(e.target.value))} value={fullName} name="fullName" id=""  className="bg-transparent border-b-2 border-primary text-xl placeholder:text-2xl  font-serif text-black focus:outline-none w-full text-center pl-4 " />
                            </div>
                            <div>
                                <h4 className={`after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Telephone</h4>
                                <input type="tel" onChange={(e)=>(setPhone(e.target.value))} value={phone} name="phone" id=""  className="bg-transparent border-b-2 border-primary text-xl placeholder:text-2xl  font-serif text-black focus:outline-none w-full text-center pl-4 "/>
                            </div>
                            <div>
                                <h4 className={` text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Email</h4>
                                <input type="email" onChange={(e)=>(setEmail(e.target.value))} value={email} name="email" id=""  className="bg-transparent border-b-2 border-primary text-xl  placeholder:text-2xl font-serif text-black focus:outline-none w-full text-center pl-4 "/>
                            </div>
                            
                        </div>
                    </form>
                    <div className="container w-full flex flex-row items-center justify-center gap-3 mx-auto px-4 mt-6">
                        <button onClick={()=>(setEtaps(false))} className={`${etaps==true?'block':'hidden'} flex flex-row-reverse gap-2 items-center bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            Back <ChevronLeft />
                        </button>
                        <button onClick={()=>(setEtaps(true))} className={`${etaps==false?'block':'hidden'} flex items-center gap-2 bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            Suivant <ChevronRight />
                        </button>
                        
                        <button type="submit" onClick={handleSubmit} disabled={isSubmitting} className={` ${etaps==true?'block':'hidden'} flex flex-row-reverse gap-2 items-center bg-primary font-bold capitalize lg:text-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            {isSubmitting ? 'Booking...' : 'Book Now'} <Calendar1 />
                        </button>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
}