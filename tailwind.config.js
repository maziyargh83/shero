/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          P1: "#3E1F90",
          P2: "#754BE4",
          P3: "#9E81EC",
          P4: "#E3DBFA",
          P5: "#F2F0FE",
        },
        green: {
          G1: "#31B3B5",
          G2: "#5ACEC2",
          G3: "#C0F2ED",
          G4: "#D7F7F3",
          G5: "#DAF8F4",
          G6: "#DBFAE4",
        },
        blue: {
          B1: "#6CB9FF",
          B2: "#B7DBFC",
          B3: "#B7DBFC",
          B4: "#E8FBFF",
        },
        red: {
          R1: "#E8FBFF",
          R2: "#FF7878",
          R3: "#FFACA7",
          R4: "#FBCBC5",
          R5: "#FFEBEB",
        },
        gray: {
          G1: "#2A3551",
          G2: "#3F4962",
          G3: "#555D74",
          G4: "#6A7285",
          G5: "#7F8696",
          G6: "#959AA8",
          G7: "#AAAEB9",
          G8: "#BFC2CB",
          G9: "#D4D7DC",
          G10: "#EAEBEE",
          G11: "#F2F4FB",
        },
        background: {
          light: "#F3F3F6",
        },
      },
    },
  },
  plugins: [],
};
