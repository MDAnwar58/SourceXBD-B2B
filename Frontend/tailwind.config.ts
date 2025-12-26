import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      flowbite.content(),
   ],
   theme: {
      screens: {
         xs6: "320px",
         xs5: "335px",
         xs4: "350px",
         xs3: "375px",
         xs2: "385px",
         xs: "425px",
         "3xs": "475px",
         "4xs": "525px",
         "6xs": "575px",
         "7xs": "625px",
         sm: "640px",
         "2sm": "675px",
         "3sm": "725px",
         "4sm": "750px",
         md: "768px",
         "2md": "805px",
         "3md": "850px",
         "4md": "885px",
         "5md": "925px",
         "6md": "975px",
         lg: "1024px",
         "2lg": "1075px",
         "3lg": "1125px",
         "4lg": "1150px",
         "5lg": "1175px",
         "6lg": "1220px",
         xl: "1280px",
         "1xl": "1325px",
         "1xl2": "1375px",
         "2xl": "1421px",
         "3xl": "1475px",
         "4xl": "1536px",
         "5xl": "1575px",
         "6xl": "1625px",
         "7xl": "1675px",
         "8xl": "1725px",
         "9xl": "1775px",
         "10xl": "1825px",
         "11xl": "1875px",
         "12xl": "1925px",
         "13xl": "1975px",
         "14xl": "2025px",
         "15xl": "2075px",
         "16xl": "2125px",
         "17xl": "2175px",
         "18xl": "2225px",
         "19xl": "2275px",
         "20xl": "2325px",
         "21xl": "2375px",
         "22xl": "2425px",
         "23xl": "2475px",
         "24xl": "2525px",
      },
      extend: {
         fontFamily: {},
         fontSize: {},
         fontWeight: {},
         lineHeight: {},
         letterSpacing: {},
         borderRadius: {},
         colors: {},
         spacing: {},
         width: {},
         minWidth: {},
         maxWidth: {},
         height: {},
         minHeight: {},
         maxHeight: {},
         outline: {
            none: ["2px solid transparent", "2px"], // Removes the default focus ring
         },
         boxShadow: {
            "hero-search":
               "-2px -2px 10px rgba(113, 113, 113, 0.25), 2px 2px 10px rgba(0, 0, 0, 0.25)",
            "hero-card":
               "2px 2px 10px 0px rgba(0, 0, 0, 0.35),-2px -2px 10px 0px rgba(101, 101, 101, 0.25)",
            card: "-2px -2px 10px 0px rgba(101, 101, 101, 0.25), 2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            "organisation-product-card":
               "-2px -2px 10px 0px rgba(101, 101, 101, 0.25), 2px 2px 10px 0px rgba(0, 0, 0, 0.25)",

            "sider-item": "var(--admin-sider-item-shadow)",
            "sider-item-subitem": "var(--admin-sider-item-subitem-shadow)",
            "sider-item-subitem-sub":
               "var(--admin-sider-item-subitem-sub-shadow)",
            "admin-card": "var(--admin-card-shadow)",
            "admin-sub-card": "var(--admin-card-subcard-shadow)",
            "admin-table-btn": "var(--admin-table-btn-shadow)",
            "admin-input": "var(--admin-input-shodow)",
            "admin-inset": "var(--admin-shadow-inset)",
            "admin-chat-left": "var(--admin-chat-right-box-shadow)",
            "admin-add": "var(--admin-shadow-add-inset)",
            "admin-xs": "var(--admin-shadow-xs)",
            "auth-card": "var(--auth-card-shadow)",
            "auth-social-btn": "var(--auth-social-btn-shadow)",
            "product-card": "var(--product-card)",
            "buyer-card": "var(--buyer-card)",
         },
         maskImage: {
            "circle-mask":
               "radial-gradient(circle at 200px 200px, transparent 100px, black 110px)",
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            "organisation-product-card-gradient":
               "linear-gradient(180deg, rgba(178, 178, 178, 1) 0%, rgba(255, 255, 255, 1) 100%)",
            // admin panel gradients config
            "gradient-sider-item":
               "linear-gradient(var(--admin-sider-item-background-gradient))",
            "blue-gradient": "linear-gradient(var(--admin-gradient-bg-color))", // Example gradient
            "blue-gradient-disable":
               "linear-gradient(var(--bg-180-dwg-with-opacity-0_5))", // Example gradient
            // auth config
            "auth-gradient": "linear-gradient(var(--auth-bg-gradient))",
            "auth-verify-code-btn":
               "linear-gradient(var(--auth-verify-code-btn-gradient))",
         },
         keyframes: {
            gradientTransition: {
               "0%": {
                  backgroundImage:
                     "linear-gradient(180deg, rgba(66, 133, 244, 1) 0%, rgba(85, 118, 179, 1) 100%)",
               },
               "100%": {
                  backgroundImage:
                     "linear-gradient(180deg, rgba(85, 118, 179, 1) 0%, rgba(66, 133, 244, 1) 100%)",
               },
            },
         },
         transitionDelay: {
            "100": "100ms",
            "200": "200ms",
            "300": "300ms",
            // Add more custom delays as needed
         },
         transformOrigin: {
            origin: "0 0", // Add your custom transform-origin
         },
      },
      variants: {
         extend: {
            ringWidth: ["focus"],
            ringColor: ["focus"],
         },
      },
   },
   plugins: [flowbite.plugin()],
};
export default config;
