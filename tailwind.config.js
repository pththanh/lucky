/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        micro: "10px",
        icon: "11px",
        xxs: "12px",
        xs: "13px",
        s: "14px",
        ssm: "15px",
        sm: "16px",
        md: "18px",
        lg: "19px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "40px",
      },
      colors: {
        gray: "#585858",
        lightgray: "#f8f7f7",
      },
    },
  },
  plugins: [],
};
