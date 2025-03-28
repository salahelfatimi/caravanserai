'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { GoogleAnalytics, GoogleTagManager } from "./google";

export default function MessageCookies() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCookiesDecision = (accepted) => {
    setCookiesAccepted(accepted);
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookiesAccepted", accepted);
      const event = new CustomEvent("cookiesConsentChanged", { detail: accepted });
      window.dispatchEvent(event);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("cookiesAccepted");
      if (savedPreference !== null) {
        setCookiesAccepted(savedPreference === "true");
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  }, []);

    return (
      <>
        {isVisible && (
            <div className="fixed z-40 bottom-4  left-4 mr-4  rounded flex flex-col  justify-start items-start gap-4 bg-white p-4 ">
              <div>
                <p className=" font-bold text-primary  ">cookies consentement</p>
                <p className="text-xs text-start "> Ce site utilise des cookies pour améliorer votre expérience. <br /> Consultez notre{" "} <Link href="/privacy-policy" className="text-primary underline hover:text-primary" > politique de confidentialité </Link> . </p>
              </div>
              <div className="flex gap-4 ">
                <button className="bg-primary text-xs text-white font-semibold py-2 px-4 rounded hover:bg-transparent border-2 border-primary hover:text-primary transition" onClick={() => handleCookiesDecision(true)} > Accepter </button>
                <button className="bg-gray-600 text-xs text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition" onClick={() => handleCookiesDecision(false)} > Refuser </button>
              </div>
              </div>
        )}
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
          </>
      </>
    );
  }