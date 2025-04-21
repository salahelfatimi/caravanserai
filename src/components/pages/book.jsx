'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar1, ChevronLeft, ChevronRight, Info, Minus, Plus, User } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

const specialPeriodStart = new Date(2025, 11, 24); // 24/12/2025
const specialPeriodEnd = new Date(2026, 0, 4); // 03/01/2026

const specialPrices = {
    "Suites classiques": "Suites classiques - 140 €",
    "Suites juniors": "Suites juniors - 160 €",
    "Suites supérieures": "Suites supérieures - 190 €",
    "Suites triples": "Suites triples - 220 €",
    "Suites piscines privées": "Suites piscines privées - 250 €",
};

export default function Book() {
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
    const [isNonRefundable, setIsNonRefundable] = useState(false);
    const [showMinStayAlert, setShowMinStayAlert] = useState(false);

    // MAX PEAPEL THTA HE CAN ROOM TAKE 
    const handleAdultsChange = (delta) => {
        const newAdults = Math.max(1, adults + delta);
        if (newAdults > maxPeople) {
            if (suites === "Suites piscines privées - 170 €" && adults < 3 || suites === "Suites supérieures - 130 €" && adults < 3 || suites === "Suites piscines privées - 250 €" && adults < 3 || suites === "Suites supérieures - 190 €" && adults < 3) {
                setShowAlert(true);
            } else {
                toast.error("This suite does not allow more than the maximum number of people.");
            }
        } else {
            setShowExtraPersonMessage(false);
            setAdults(newAdults);
        }
    };

    // CHANGE PRICE WITH SPECIAL DAY THAT  24/12/2025 TO 03/01/2026
    const handleSuiteChange = (value) => {
        setShowExtraPersonMessage(false);
        const suiteBaseName = value.split(" - ")[0]; 
        const isSpecialPeriod = startDate >= specialPeriodStart && startDate <= specialPeriodEnd;
        const updatedSuite = isSpecialPeriod? specialPrices[suiteBaseName] || value: value;
        setSuites(updatedSuite);
        const suiteMaxPeople = {
            "Suites classiques - 140 €": 2,
            "Suites juniors - 160 €": 2,
            "Suites supérieures - 190 €": 2,
            "Suites triples - 220 €": 3,
            "Suites piscines privées - 250 €": 2,
            "Suites classiques - 85 €": 2,
            "Suites juniors - 110 €": 2,
            "Suites supérieures - 130 €": 2,
            "Suites triples - 145 €": 3,
            "Suites piscines privées - 170 €": 2,
        };

        const maxPeopleForSuite = suiteMaxPeople[updatedSuite] || 0;
        setMaxPeople(maxPeopleForSuite);
        setAdults(maxPeopleForSuite);
    };

    // ALERT THAT SHOW THAT IF YOU ADD PRESONE WITLL CHARGE  MORE THEN THAT PRICE
    const handleConfirmExtraPerson = () => {
        setAdults(adults + 1);
        setShowExtraPersonMessage(true);
        setShowAlert(false);
    };
    const handleCancelExtraPerson = () => {
        setShowAlert(false);
    };

    // SEND EMAIL TO CLIENT IN EMAIL
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidation(true);
        setIsSubmitting(true);

        if (!fullName || !phone || !email || !suites) {
            toast.error("Please fill in all required fields.");
            setIsSubmitting(false);
            return;
        }

        if (!isNonRefundable) {
            toast.error("Please agree to the non-refundable policy.");
            setIsSubmitting(false);
            return;
        }
        const isSpecialPeriodStart = startDate >= specialPeriodStart && startDate <= specialPeriodEnd;
        const isSpecialPeriodEnd =endDate > specialPeriodEnd;
        if (isSpecialPeriodStart && isSpecialPeriodEnd) {
            toast("Your booking starts within the special period and ends outside it. Special period rates will apply for the entire stay.");
        }

        if (isSpecialPeriodStart) {
            const stayDuration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); 
            if (stayDuration < 3) {
                setShowMinStayAlert(true);
                setIsSubmitting(false);
                return;
            }
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
            isNonRefundable,
        };

        try {
            const response = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                toast.success("Reservation successfully made!");
                setAdults(1);
                setEmail("");
                setEndDate(new Date(new Date().setDate(new Date().getDate() + 1)));
                setEtaps(false);
                setFullname("");
                setPhone("");
                setSuites("");
                setStartDate(new Date());
                setMaxPeople(0);
                setShowExtraPersonMessage(false);
                setIsNonRefundable(false); 
            } else {
                toast.error("Failed to submit reservation.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred while submitting the reservation.");
        } finally {
            setIsSubmitting(false);
            setValidation(false);
        }
    };


    return (
        <div id='book' className=''>
            <Toaster position="bottom-right" reverseOrder={false} />
            <div className=" ">
                <div className="min-h-[10rem] container w-fit flex items-center flex-col justify-center   ">
                    {showExtraPersonMessage && (<p className="text-white mb-2 rounded text-sm font-medium  text-center bg-red-500 p-2 ">Adding a third person will incur an additional charge.</p>)}
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center border-4 border-primary  p-4  shadow-2xl bg-white lg:rounded-full ">
                        <div className={`flex flex-col lg:flex-row justify-between mx-auto py-2 px-10 gap-10 ${etaps == false ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col items-center justify-center ">
                                <h3 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Arrival</h3>
                                <DatePicker selected={startDate} onChange={(date) => { setStartDate(date); setEndDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); }} className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center" dateFormat="dd/MM/YY" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className={`text-primary text-lg lg:text-xl mb-2 font-medium font-serif`}>Leaving</h3>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="bg-transparent text-2xl lg:text-4xl font-serif w-full text-black focus:outline-none text-center" dateFormat="dd/MM/YY" />
                            </div>
                            <div>
                                <h3 className={`after:ml-0.5 after:text-red-500 after:content-['*'] text-primary text-lg lg:text-xl mb-2 font-medium font-serif text-center`}>Suites</h3>
                                <select onChange={(e) => handleSuiteChange(e.target.value)} name="Suites" id=" " value={suites} className={`bg-transparent border-b-2 ${validation && !suites ? "border-red-500" : "border-primary" } text-lg pb-1 placeholder:text-2xl text-black focus:outline-none w-full pl-4`} >
                                    <option value="">Choose a suite</option>
                                    {Object.values(
                                        startDate >= specialPeriodStart && startDate <= specialPeriodEnd? specialPrices: 
                                            {
                                                "Suites classiques - 85 €": "Suites classiques - 85 €",
                                                "Suites juniors - 110 €": "Suites juniors - 110 €",
                                                "Suites supérieures - 130 €": "Suites supérieures - 130 €",
                                                "Suites triples - 145 €": "Suites triples - 145 €",
                                                "Suites piscines privées - 170 €": "Suites piscines privées - 170 €",
                                            }).map((suite) => (<option key={suite} value={suite}>{suite}</option>))}
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
                        <div className={`flex flex-col lg:flex-row justify-between mx-auto py-2 px-10 gap-20 ${etaps == true ? 'block' : 'hidden'}`}>
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
                        </div>

                    </form>
                    <div className="flex items-center justify-center mt-4">
                        <input type="checkbox" id="nonRefundable" checked={isNonRefundable} onChange={(e) => setIsNonRefundable(e.target.checked)} className="mr-2" />
                        <label htmlFor="nonRefundable" className="text-primary ">
                            I agree to the <span className="text-red-500">non-refundable</span> policy
                        </label>
                    </div>

                    <div className="container w-full flex flex-row items-center justify-center gap-3 mx-auto px-4 mt-6">
                        <button onClick={() => setEtaps(false)} className={`${etaps == true ? 'block' : 'hidden'} flex flex-row-reverse gap-2 items-center bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            Back <ChevronLeft />
                        </button>
                        <button onClick={() => setEtaps(true)} className={`${etaps == false ? 'block' : 'hidden'} flex items-center gap-2 bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
                            Suivant <ChevronRight />
                        </button>

                        <button type="submit" onClick={handleSubmit} disabled={isSubmitting} className={` ${etaps == true ? 'block' : 'hidden'}  flex items-center gap-2 bg-primary font-bold capitalize lg:ttext-lg text-white py-2 px-6 rounded-full hover:bg-white hover:text-primary border-2 border-primary transition duration-300`}>
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

                    {showMinStayAlert && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-96">
                                <Info size={40} className="text-primary mb-4" />
                                <h2 className="font-bold text-primary mb-4">Minimum Stay Required</h2>
                                <p className="text-gray-700 text-sm mb-6 text-center">
                                    During the special period (24/12 to 03/01), a minimum stay of 3 nights is required. Please adjust your booking dates.
                                </p>
                                <button onClick={() => setShowMinStayAlert(false)} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
                                    OK
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}