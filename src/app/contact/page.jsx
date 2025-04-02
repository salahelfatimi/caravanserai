
import ContactPage from "@/components/pages/contact/page";
export async function generateMetadata() {
    return {
      title: "Caravan Serai | Get in Touch with Us",
      description: " Reach out to Caravan Serai in Marrakesh for reservations, inquiries, or event bookings. Call, email, or visit us for an unforgettable experience.",
      alternates: {
        canonical: "/contact",
      },
      openGraph: {
        title: "Caravan Serai | Get in Touch with Us",
        description: " Reach out to Caravan Serai in Marrakesh for reservations, inquiries, or event bookings. Call, email, or visit us for an unforgettable experience.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
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
export default function Contact(){
    
    return(
        <div>
            <ContactPage/>
        </div>
    )
}