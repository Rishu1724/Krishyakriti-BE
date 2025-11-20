module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: '#009179',    // brighter green for primary action buttons
        accent: '#006A58',     // darker green for back button/icon
        stonetone: '#E7E1C6',  // subtle stone tone for card/section backgrounds
        textprimary: '#3C3B35' // primary text color
      }
    }
  },
  plugins: [],
};
