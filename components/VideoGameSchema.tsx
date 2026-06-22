import React from "react";

const GAMES = {
  valorant: {
    name: "Valorant",
    description: "A 5v5 character-based tactical shooter.",
    genre: "Tactical Shooter",
    url: "https://iv7-s.com/?game=valorant",
  },
  "aviator-pro": {
    name: "Aviator Pro",
    description: "The ultimate real cash crash game.",
    genre: "Crash Game",
    url: "https://iv7-s.com/?game=aviator-pro",
  },
  "dragon-tiger": {
    name: "Dragon Tiger",
    description: "Fast-paced casino card game.",
    genre: "Casino",
    url: "https://iv7-s.com/?game=dragon-tiger",
  },
  "teen-patti": {
    name: "Teen Patti",
    description: "Popular Indian card game for real cash.",
    genre: "Card Game",
    url: "https://iv7-s.com/?game=teen-patti",
  },
};

export default function VideoGameSchema({
  gameParam,
}: {
  gameParam?: string | string[] | undefined;
}) {
  const gameKey =
    typeof gameParam === "string" ? gameParam.toLowerCase() : null;
  const gameData = gameKey ? GAMES[gameKey as keyof typeof GAMES] : null;

  // If a specific game is selected, output schema for that game
  if (gameData) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: gameData.name,
      description: gameData.description,
      genre: gameData.genre,
      url: gameData.url,
      applicationCategory: "Game",
      operatingSystem: "Any",
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  // Else output schema for ALL games
  const allSchemas = Object.values(GAMES).map((g) => ({
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: g.name,
    description: g.description,
    genre: g.genre,
    url: g.url,
    applicationCategory: "Game",
    operatingSystem: "Any",
  }));

  return (
    <>
      {allSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
