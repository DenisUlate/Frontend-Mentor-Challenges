/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      marineBlue: "hsl(213, 96%, 18%)",
      purplishBlue: "hsl(243, 100%, 62%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      lightBlue: "hsl(206, 94%, 87%)",
      strawberryRed: "hsl(354, 84%, 57%)",
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      whiteNeutral: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "bg-image-mobile": "url('assets/images/bg-sidebar-mobile.svg')",
        "bg-image-desktop": "url('assets/images/bg-sidebar-desktop.svg')",
        "logo-arcade": "url('assets/images/icon-arcade.svg')",
        "logo-advance": "url('assets/images/icon-advanced.svg')",
        "logo-pro": "url('assets/images/icon-pro.svg')",
      },
    },
  },
  plugins: [],
};
