import { LandingPage } from "@/components/LandingPage";
import { faqs, siteConfig } from "@/lib/site";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.businessName,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      logo: `${siteConfig.url}/icon.svg`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "office",
          areaServed: "US-FL",
        },
        {
          "@type": "ContactPoint",
          telephone: siteConfig.mobile,
          contactType: "mobile",
          areaServed: "US-FL",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.businessName,
      image:
        "https://images.unsplash.com/photo-1632759145358-e5257fb6c5e5?auto=format&fit=crop&w=1200&q=85",
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceArea,
      },
      description:
        "Roof repair, replacement, storm damage assessment, and exterior protection services for homes and commercial properties in Tampa, Florida.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
