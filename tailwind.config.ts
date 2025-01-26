import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
          headergrey:'#f5f5f5',
          headerbar:'#cccccc',
          footertext:'#7e7e7e',
          grey75:'#757575',
          grey8d:'#8d8d8d',
          greybc:'#bcbcbc',
          greyf7:'#f7f7f7',
          butttoncolor:'#111111',
          arrowbuttonr:'#e5e5e5',
          arrowbuttonl:'#f5f5f5',
          backgroundw:'#ffffff',    
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
    },
  },
  plugins: [],
} satisfies Config;
