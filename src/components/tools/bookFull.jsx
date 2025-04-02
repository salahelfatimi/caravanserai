'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {  Calendar1, ChevronLeft, ChevronRight, Info, Minus, Plus, X } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

export default function BookFull() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
    const [adults, setAdults] = useState(1);
    const [fullName, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [suites, setSuites] = useState('');
    const [maxPeople, setMaxPeople] = useState(0); 
    const [etaps, setEtaps] = useState(false);
    const [showExtraPersonMessage, setShowExtraPersonMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validation, setValidation] = useState(false);
    const [showAlert, setShowAlert] = useState(false); 
    const [isNonRefundable, setIsNonRefundable] = useState(false); // State for non-refundable checkbox

    const handleAdultsChange = (delta) => {
        const newAdults = Math.max(1, adults + delta);
        if (newAdults > maxPeople) {
            if (suites === "Suites piscines privées - 170 €" && adults<3 || suites === "Suites supérieures - 130 €" && adults<3) {
                setShowAlert(true); 
            } else {
                toast.error("This suite does not allow more than the maximum number of people.");
            }
        } else {
            setShowExtraPersonMessage(false);
            setAdults(newAdults);
        }
    };
    const handleSuiteChange = (value) => {
        setSuites(value);
        setShowExtraPersonMessage(false);
        const suiteMaxPeople = { "Suites classiques - 85 €": 2, "Suites juniors - 110 €": 2, "Suites supérieures - 130 €": 2, "Suites triples - 145 €": 3, "Suites piscines privées - 170 €": 2, };
        const maxPeopleForSuite = suiteMaxPeople[value] || 0; 
        setMaxPeople(maxPeopleForSuite);
        setAdults(maxPeopleForSuite);
    };
    const handleConfirmExtraPerson = () => {
        setAdults(adults + 1); 
        setShowExtraPersonMessage(true);
        setShowAlert(false); 
    };

    const handleCancelExtraPerson = () => {
        setShowAlert(false); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidation(true);
        setIsSubmitting(true);

        if (!fullName || !phone || !email || !suites) {
            toast.error('Please fill in all required fields.');
            setIsSubmitting(false);
            return;
        }

        // Check if the non-refundable checkbox is checked
        if (!isNonRefundable) {
            toast.error('Please agree to the non-refundable policy.');
            setIsSubmitting(false);
            return;
        }

        const reservationData = {
            startDate: startDate.toLocaleDateString(),
            endDate: endDate.toLocaleDateString(),
            suites,
            adults,
            showExtraPersonMessage,
            fullName,
            phone,
            email,
            isNonRefundable, // Include the non-refundable flag
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
                toast.success('Reservation successfully made!');
                setAdults(1);
                setEmail('');
                setEndDate(new Date(new Date().setDate(new Date().getDate() + 1)));
                setEtaps(false);
                setFullname('');
                setPhone('');
                setSuites('');
                setStartDate(new Date());
                setMaxPeople(0);
                setShowExtraPersonMessage(false);
                setIsNonRefundable(false); // Reset the non-refundable checkbox
            } else {
                toast.error('Failed to submit reservation.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while submitting the reservation.');
        } finally {
            setIsSubmitting(false);
            setValidation(false);
        }
    };



    return (
        <div  className='min-h-screen flex flex-col items-center justify-center z-50 bg-[url("/img/header.png")]'>
            <Toaster position="bottom-right" reverseOrder={false}/>
            <div className="  space-y-5 container py-24">
                <h1 className=" text-2xl md:text-5xl text-center font-boska font-bold  text-white " >Book Your Stay at Caravan Serai Today</h1>
                <div className="min-h-[10rem] container flex items-center flex-col justify-center ">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full  justify-between container mx-auto border-4 border-primary  gap-20 p-4 px-10 shadow-2xl  bg-white ">
                        <div className={` flex flex-col  justify-between mx-auto py-2 gap-20 ${etaps==false?'block':'hidden'}`}>
                            <div className="flex flex-col items-center justify-center ">
                                <h3 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Arrival</h3>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center" dateFormat="dd MMMM" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Leaving</h3>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center" dateFormat="dd MMMM" />
                            </div>
                            <div>
                                <h3 className={`after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Suites</h3>
                                <select onChange={(e) => handleSuiteChange(e.target.value)} name="Suites" id=" " value={suites} className={`bg-transparent border-b-2 ${validation && !suites ? 'border-red-500' : 'border-primary'} text-lg pb-1 placeholder:text-2xl text-black focus:outline-none w-full pl-4`} >
                                    <option value="">Choose a suite</option>
                                    <option value="Suites classiques - 85 €">Suites classiques - 85 € | 2 people</option>
                                    <option value="Suites juniors - 110 €">Suites juniors - 110 € | 2 people</option>
                                    <option value="Suites supérieures - 130 €">Suites supérieures - 130 € | 2 people</option>
                                    <option value="Suites triples - 145 €">Suites triples - 145 € | 3 people</option>
                                    <option value="Suites piscines privées - 170 €">Suites piscines privées - 170 € | 2 people</option>
                                </select>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Adults</h3>
                                <div className="flex flex-row items-center justify-center ">
                                    <button type="button" onClick={() => handleAdultsChange(-1)}><Minus /></button>
                                    <input type="number" name="Adults" value={adults} onChange={(e) => setAdults(e.target.value)} className="bg-transparent text-2xl lg:text-4xl font-serif text-black focus:outline-none w-full text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                    <button type="button" onClick={() => handleAdultsChange(1)}><Plus /></button>
                                </div>
                            </div>
                        </div>
                        <div className={` flex flex-col  justify-between mx-auto py-2 gap-20 ${etaps==true?'block':'hidden'}`}>
                            <div>
                                <h3 className={`after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Full Name</h3>
                                <input type="text" onChange={(e) => setFullname(e.target.value)} value={fullName} name="fullName" id="" className={` ${validation && !fullName ? 'border-red-500' : 'border-primary'} bg-transparent border-b-2 border-primary text-lg placeholder:text-2xl text-black focus:outline-none w-full text-center pl-4`} />
                            </div>
                            <div>
                                <h3 className={`after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Telephone</h3>
                                <input type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} name="phone" id="" className={` ${validation && !phone ? 'border-red-500' : 'border-primary'} bg-transparent border-b-2 border-primary text-lg placeholder:text-2xl text-black focus:outline-none w-full text-center pl-4`} />
                            </div>
                            <div>
                                <h3 className={` after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Email</h3>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="" className={` ${validation && !email ? 'border-red-500' : 'border-primary'} bg-transparent border-b-2 border-primary text-lg placeholder:text-2xl text-black focus:outline-none w-full text-center pl-4`} />
                            </div>
                            <div className="flex items-center justify-center ">
                                <input
                                    type="checkbox"
                                    id="nonRefundable"
                                    checked={isNonRefundable}
                                    onChange={(e) => setIsNonRefundable(e.target.checked)}
                                    className="mr-2"
                                />
                                <label htmlFor="nonRefundable" className="text-primary ">
                                    I agree to the <span className="text-red-500">non-refundable</span> policy
                                </label>
                            </div>
                        </div>
                        
                    </form>
                    
                    {showExtraPersonMessage && (
                            <p className="text-white mt-2 rounded text-sm font-medium  text-center bg-red-500 p-2">Adding a third person will incur an additional charge.</p>
                    )}
                    <div className="container w-full flex flex-row items-center justify-center gap-3 mx-auto px-4 mt-6">
                        <button onClick={()=>(setEtaps(false))} className={`${etaps==true?'block':'hidden'} flex flex-row-reverse gap-2 items-center bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            Back <ChevronLeft />
                        </button>
                        <button onClick={()=>(setEtaps(true))} className={`${etaps==false?'block':'hidden'} flex items-center gap-2 bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            Suivant <ChevronRight />
                        </button>
                        
                        <button type="submit" onClick={handleSubmit} disabled={isSubmitting} className={` ${etaps==true?'block':'hidden'}  flex items-center gap-2 bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            {isSubmitting ? 'Booking...' : 'Book Now'} <Calendar1 />
                        </button>
                    </div>
                    {showAlert && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-96">
                                <Info size={40} className="text-primary mb-4 " />
                                <h2 className=" font-bold text-primary mb-4">Extra Person Charge</h2>
                                <p className="text-gray-700 text-sm mb-6 text-center">Adding an extra person will incur an additional charge. Do you want to proceed?</p>
                                <div className="flex justify-end gap-4">
                                    <button onClick={handleCancelExtraPerson} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" > Cancel </button>
                                    <button onClick={handleConfirmExtraPerson} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark" > Confirm </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}