import Image from "next/image";

export default function Loading() {
    return (
      <>
        <div className={`fixed  inset-0 flex items-center justify-center bg-white  duration-1000 transition z-[70] `}>
            <Image src="/img/Logo_single.png" height={500} width={500} alt="Caravan Serai" title="Caravan Serai" className="w-48 animate-bounce " />
            <span className=" text-primary flex font-boska  items-center justify-center  font-extrabold  gap-3 md:text-5xl text-4xl ">
              caravanserai
            </span>
        </div>
      </>
    );
  }