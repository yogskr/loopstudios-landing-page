/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        // Hero Pattern
        heroPatternMobile: "url('/images/mobile/image-hero.jpg')",
        heroPatternDesktop: "url('/images/desktop/image-hero.jpg')",
        // Project Background
        deepEarthMobile: "url('/images/mobile/image-deep-earth.jpg')",
        deepEarthDesktop: "url('/images/desktop/image-deep-earth.jpg')",
        nightArcadeMobile: "url('/images/mobile/image-night-arcade.jpg')",
        nightArcadeDesktop: "url('/images/desktop/image-night-arcade.jpg')",
        soccerTeamMobile: "url('/images/mobile/image-soccer-team.jpg')",
        soccerTeamDesktop: "url('/images/desktop/image-soccer-team.jpg')",
        theGridMobile: "url('/images/mobile/image-grid.jpg')",
        theGridDesktop: "url('/images/desktop/image-grid.jpg')",
        fromAboveMobile: "url('/images/mobile/image-from-above.jpg')",
        fromAboveDesktop: "url('/images/desktop/image-from-above.jpg')",
        pocketBorealisMobile: "url('/images/mobile/image-pocket-borealis.jpg')",
        pocketBorealisDesktop:
          "url('/images/desktop/image-pocket-borealis.jpg')",
        theCuriosityMobile: "url('/images/mobile/image-curiosity.jpg')",
        theCuriosityDesktop: "url('/images/desktop/image-curiosity.jpg')",
        fishEyeMobile: "url('/images/mobile/image-fisheye.jpg')",
        fishEyeDesktop: "url('/images/desktop/image-fisheye.jpg')",
      },
      textColor: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
