/* 
SYSTEMS

--- 01 TYPOGRAPHY (px)

12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60 / 72 / 96 / 120 / 144 / 180

--- 02 COLORS
--- 03 BORDERS
--- 04 SPACING
--- 05 BREAKPOINTS

*/ 

export const spacing = {
  0: "0",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  36: "36px",
  48: "48px",
  96: "96px",
  128: "128px",
};

export const breakpoints = {
  400: "400px",
  600: "600px",
  900: "900px",
  1000: "1000px",
};

export const mq = (breakpoints => breakpoints.reduce(makeMediaQueries, {} as MediaQueries))(Object.keys(breakpoints).map(Number))
// export const mq = (breakpoints => breakpoints.reduce(makeMediaQueries, {} as MediaQueries))([400, 600, 900, 1000])

export const styles = {
  typography: {
    "title-sm": "20px",
    "title-md": "24px",
    "title-lg": "30px",
  },
  colors: {
    white: "#fff",
    black: "#000",
    red: "#A31621",
    "bg-primary": "rgb(228,234,241)",
    "text-primary": "#222",
    "text-light": "#999",
    "dark-blue": "rgb(20,30,43)",
    "dark-blue-hover": "rgba(20,41,50)",
    "green-primary": "#14A995",
    "border-primary": "rgb(209,215,224)",
  },
  "border-radius": {
    small: spacing[2],
    primary: spacing[4],
    large: spacing[6],
    xlarge: spacing[8],
  },

  /* whitespace */
  spacing,
};

export const utils = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    "flex-direction": "row",
},
  flexCol: {
    display: "flex",
    "flex-direction": "column",
  },
  align: {
    alignItems: "center",
  },
};


interface MediaQueries {
  [key: number ]: string 
}

function makeMediaQueries(acc: MediaQueries, bp: number) { 
  acc[bp] = `@media (min-width: ${bp}px)`
  return acc
}