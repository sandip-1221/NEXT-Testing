// // components/LogoRow.js
// export default function LogoRow() {
//   const logos = [
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//     { src: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg", alt: "SONOS" },
//   ];

//   return (
//     <div className="bg-black text-gray-400 py-8 overflow-hidden">
//       <p className="text-center text-xs tracking-widest mb-6">
//         POWERING THE BEST FRONTEND TEAMS
//       </p>

//       {/* Marquee wrapper */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex w-max animate-marquee">
//           {[...logos, ...logos].map(({ src, alt }, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={alt}
//               className="h-8 mx-8 object-contain"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// components/TextMarquee.js
// components/TextMarquee.js

export default function TextMarquee() {
  const brands = [
    "SONOS",
    "Spotify",
    "OpenAI",
    "Zapier",
    "Patreon",
    "Auth0",
    "IMDb",
  ];

  return (
    <div className="bg-black text-gray-400 py-8 overflow-hidden group relative">
      <p className="text-center text-xs tracking-widest mb-6">
        POWERING THE BEST FRONTEND TEAMS
      </p>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling text */}
        <div className="flex animate-marquee w-max">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-lg font-medium mx-8 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


