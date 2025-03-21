import Activitte from "@/components/pages/activite";
import Book from "@/components/pages/book";
import Header from "@/components/pages/header";
import Instagram from "@/components/pages/instagram";
import Menu from "@/components/pages/menu";
import Restaurant from "@/components/pages/restaurant";
import ServiceList from "@/components/pages/service";
import Spa from "@/components/pages/spa";
import Suites_Page from "@/components/pages/suites_page";
import Suites_page_privees from "@/components/pages/suites_page_privees";

export async function generateMetadata() {
  return {
    title: "Caravan Serai Marrakesh  | Luxury Hotel & Spa Official Site ",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Caravan Serai",
      description: "Book your stay at Caravan Serai Marrakesh. Enjoy spa treatments, hammams, fine dining, and elegant accommodations in a serene oasis.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Caravan Serai",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Caravan Serai",
        }
      ],
      type: "website",

    },
  }
};


export default function Home() {
  return (
    <div className="  ">
        <Header/>
        <ServiceList/>
        <Suites_Page/>
        <div className="bg-top bg-[url(/img/bg-yellow.svg)] py-20 flex flex-col gap-4 bg-cover  px-4 ">
          <h2 className=" text-3xl md:text-5xl text-center font-boska font-bold  text-primary " >Book Your Stay at Caravan Serai Today</h2>
          <p className=" text-center">Escape to a world of tranquility and timeless beauty at Caravan Serai Marrakech. Whether for a romantic getaway, family retreat, or cultural adventure, our boutique hotel offers a truly unforgettable experience.</p>
          <Book/>
        </div>
        <Suites_page_privees/>
        <Restaurant/>
        <Spa/>
        <Activitte/>
        <Instagram/>
    </div>
  );
}
