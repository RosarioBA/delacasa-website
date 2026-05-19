import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Takeaway from "@/components/Takeaway";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "De La Casa",
  description: "Fresh pasta bar in Frogner, Oslo. Build your own pasta with your choice of sauce and toppings.",
  url: "https://www.delacasapastabar.com",
  telephone: "+4792833275",
  email: "info@delacasapastabar.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Frognerveien 35A",
    addressLocality: "Oslo",
    postalCode: "0264",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.9175,
    longitude: 10.7151,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "22:00",
    },
  ],
  servesCuisine: "Pasta",
  priceRange: "$$",
  image: "https://www.delacasapastabar.com/pastas.jpg",
  sameAs: [
    "https://www.instagram.com/delacasa_pastabar/",
    "https://www.facebook.com/delacasaioslo/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="flex flex-col">
        <Hero />
        <Welcome />
        <Takeaway />
      </main>
    </>
  );
}
