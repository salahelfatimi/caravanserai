import Activitte from "@/components/pages/activite";
import Book from "@/components/pages/book";
import Header from "@/components/pages/header";
import Instagram from "@/components/pages/instagram";
import Restaurant from "@/components/pages/restaurant";
import ServiceList from "@/components/pages/service";
import Spa from "@/components/pages/spa";


export default function Home() {
  return (
    <div className="  ">
        <Header/>
        <ServiceList/>
        <div className="bg-top bg-[url(/img/bg-yellow.svg)] py-20 flex flex-col gap-4 bg-cover lg:bg-none container ">
          <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
          <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
          <Book/>
        </div>
        <Restaurant/>
        <Spa/>
        <Activitte/>
        <Instagram/>
    </div>
  );
}
