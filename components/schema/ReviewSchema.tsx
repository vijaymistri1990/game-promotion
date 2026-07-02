import React from "react";

interface ReviewSchemaProps {
  ratingValue: string;
  ratingCount: string;
  name: string;
}

export default function ReviewSchema({ ratingValue, ratingCount, name }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: ratingCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
