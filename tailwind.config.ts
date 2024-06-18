import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ['outfit',]
    },
    extend: {
      screens: {
        "s(1600)": { max: "1600px" },

        "s(1365)": { max: "1365px" },

        "s(1440)": { max: "1440px" },

        "s(1280)": { max: "1280px" },

        "s(1100)": { max: "1100px" },

        "s(999)": { max: "999px" },

        "s(767)": { max: "767px" },

        "s(640)": { max: "640px" },

        "s(415)": { max: "415px" },

        "s(480)": { max: "480px" },

        "s(400)": { max: "400px" },

        "s(350)": { max: "350px" },
      },
      fontSize: {
        72: '4.5em',
        64: '4em',
        52: '3.25em',
        42: '2.625em',
        38: '2.375em',
        32: '2em',
        28: '1.75em',
        26: '1.625em',
        24: '1.5em',
        20: '1.25em',
        18: '1.125em',
        16: '1em',
        14: '0.875em'
      },
      colors: {
        theme: {
          black: '#333333',
          green: '#99B898',
          ivory: '#FEFFEA',
          orange: '#FF8966',
          yellow: '#FCFC62',
          pink: '#E84A5F',
          gray: '#C9C9C9',
          darkGray: '#F8F9FC'
        },
        // bw
        'black': '#000',
        'white': '#fff',
      },
      boxShadow: {
        buttonShadow: '4px 4px 0px 0px #000000'
      },
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
