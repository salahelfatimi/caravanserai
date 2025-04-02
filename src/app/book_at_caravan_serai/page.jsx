
import BookFull from "@/components/tools/bookFull";
export async function generateMetadata() {
    return {
      title: "Book Your Stay at Caravan Serai Today",
      alternates: {
        canonical: "/book_at_caravan_serai",
      },
      openGraph: {
        title: "Caravan Serai / Book Your Stay at Caravan Serai Today",
        description: " Reach out to Caravan Serai in Marrakesh for reservations, inquiries, or event bookings. Call, email, or visit us for an unforgettable experience.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/book_at_caravan_serai`,
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
            <BookFull/>
        </div>
    )
}