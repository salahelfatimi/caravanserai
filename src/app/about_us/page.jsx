import AboutUsPage from "@/components/pages/aboutUs/page";

export async function generateMetadata() {
    return {
      title: "Luxury Retreat in Marrakesh",
      alternates: {
        canonical: "/about_us",
      },
      openGraph: {
        title: "Caravan Serai / Luxury Retreat in Marrakesh",
        description: "Discover Caravan Serai, a tranquil oasis in Marrakesh offering luxury stays, spa treatments, fine dining, and authentic Moroccan hospitality.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about_us`,
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

export default function AboutUs(){
  
    return(
        <div>
            <AboutUsPage/>
        </div>
    )
}