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
        heroPatternMobile: "url('./src/assets/images/mobile/image-hero.jpg')",
        heroPatternDesktop: "url('./src/assets/images/desktop/image-hero.jpg')",
        // Project Background
        deepEarthMobile:
          "url('./src/assets/images/mobile/image-deep-earth.jpg')",
        deepEarthDesktop:
          "url('./src/assets/images/desktop/image-deep-earth.jpg')",
        nightArcadeMobile:
          "url('./src/assets/images/mobile/image-night-arcade.jpg')",
        nightArcadeDesktop:
          "url('./src/assets/images/desktop/image-night-arcade.jpg')",
        soccerTeamMobile:
          "url('./src/assets/images/mobile/image-soccer-team.jpg')",
        soccerTeamDesktop:
          "url('./src/assets/images/desktop/image-soccer-team.jpg')",
        theGridMobile: "url('./src/assets/images/mobile/image-grid.jpg')",
        theGridDesktop: "url('./src/assets/images/desktop/image-grid.jpg')",
        fromAboveMobile:
          "url('./src/assets/images/mobile/image-from-above.jpg')",
        fromAboveDesktop:
          "url('./src/assets/images/desktop/image-from-above.jpg')",
        pocketBorealisMobile:
          "url('./src/assets/images/mobile/image-pocket-borealis.jpg')",
        pocketBorealisDesktop:
          "url('./src/assets/images/desktop/image-pocket-borealis.jpg')",
        theCuriosityMobile:
          "url('./src/assets/images/mobile/image-curiosity.jpg')",
        theCuriosityDesktop:
          "url('./src/assets/images/desktop/image-curiosity.jpg')",
        fishEyeMobile: "url('./src/assets/images/mobile/image-fisheye.jpg')",
        fishEyeDesktop: "url('./src/assets/images/desktop/image-fisheye.jpg')",
      },
      textColor: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
