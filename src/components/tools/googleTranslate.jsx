"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Script from "next/script";

const languages = [
  { label: "English", value: "en", flag: "/flags/en.png" },
  { label: "French", value: "fr", flag: "/flags/fr.png" },
  { label: "Spanish", value: "es", flag: "/flags/es.png" },
  { label: "German", value: "de", flag: "/flags/de.png" },
];
function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages: languages.map((lang) => lang.value).join(","),
    },
    "google_translate_element"
  );
}

export default function GoogleTranslate({ prefLangCookie }) {
  const [langCookie, setLangCookie] = useState(prefLangCookie || "en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onChange = (value) => {
    setLangCookie(value);
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
    document.cookie = `googtrans=/auto/${value}; path=/;`;
  };

  useEffect(() => {
    const googtrans = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="))
      ?.split("=")[1];
    const selectedLang = googtrans?.split("/")[2] || "en";
    setLangCookie(selectedLang);

    // Initialize Google Translate
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div id="google_translate_element" style={{ visibility: "hidden", width: "1px", height: "1px" }} ></div>
      <div className="relative select-none flex items-center justify-center">
        <div onClick={() => setOpen(!open)} className="cursor-pointer  bg-white border border-primary text-white  p-1 " >
          <Image src={ languages.find((lang) => lang.value === langCookie)?.flag || "/flags/en.png" } alt={langCookie} className="w-14 min-w-14 object-cover" width={100} height={100} />
        </div>
        <div className={`absolute bottom-14 border border-primary ${open ? "block" : "hidden" }`} >
          {languages.map((lang) => (
            <div key={lang.value} onClick={() => { onChange(lang.value); setOpen(!open); }} className={`${lang.value === langCookie ? "bg-primary" : "bg-white" }  hover:text-white cursor-pointer flex items-center gap-2 p-2  hover:bg-primary duration-500`} >
              <Image src={lang.flag} alt={lang.label} width={100} height={100} className="w-14 min-w-14 object-cover" />
            </div>
          ))}
        </div>
      </div>
      <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"strategy="afterInteractive"/>
    </div>
  );
}
