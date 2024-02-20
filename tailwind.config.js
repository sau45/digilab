/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-custom-color': '#151C39', // Define your custom color
        'input-custom-color':"#2C3A58",
        'box-background-custom':"#1B2C4F",
        "custom-blue":"#409BEE",
        "custom-background-color":"#1B2C4F",
        "custom-dark-background-color":"#2C3A58",
        "custom-notification-background-color":"#2C3A58",
        "doctor-dashboard-custom-background-color":"#111729",
        "active-patient-background-color":"#1C2A4E"
      },
      minWidth:{
        "custom-min-width":"7rem"
      },
      height:{
        "custom-height":"28rem",
        "22rem":"22rem"
      },
      width:{
        "23rem":"23rem",
        "89%":"89%"
      }
    },
  },
  plugins: [],
};
