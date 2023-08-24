/* 
--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
Default: 400
Semi-bold: 600
Bold: 700

- Line heights
Default: 1
Small: 1.05
Paragraph default: 1.6

--- 02 COLORS 
http://maketintsandshades.com/

- Primary: 
- Tints: 
- Shades: 
- Accents:
- Greys:

--- 05 SHADOWS

--- 06 BORDER-RADIUS
Small: 2px
Primary: 4px
Large: 6px
XLarge: 8px

--- 07 WHITESPACE

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

*/
const base = 16;
const factors = [
  0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12, 16, 24, 32, 40, 48,
];

const styles = {
  "colors": {
    white: "#fff",
    "bg-primary": "rgb(228,234,241)",
    "border-primary": "rgb(209,215,224)",
    "text-primary": "#222",
    "text-light": "#4C4B4B", // davys gray
    "text-onyx": "#3B3B3B", // onyx
    "dark-blue": "rgb(20,30,43)",
    "dark-blue-hover": "rgb(20, 41, 46)",
    "teal-blue": "#307586",
    "teal-blue-hover": "#2D6A7A",
    "grey-primary": "#333",
    "grey-light": "rgb(242,246,248)",
    "persian-green": "#14A995",
    grey: ["#222121", "#383737", "#4e4d4d", "#646464", "#7a7a7a", "#919090", "#a7a6a6", "#bdbcbc", "#d3d3d3", "#e9e9e9"]
    // grey: ["#0a0a0a", "#111111", "#181717", "#1f1e1e", "#222121", "#4e4d4d", "#7a7a7a", "#a7a6a6", "#d3d3d3"]
  },
  "border-radius": {
    small: "2px",
    primary: "4px",
    large: "6px",
    xlarge: "8px",
  },
  spacing: {
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    32: '32px',
    36: "36px",
    48: "48px",
    96: "96px",
  },
  breakpoints: {
    400: "400px",
    800: "800px",
    900: "900px",
    1000: "1000px",
  },
  // mq: (breakpoints => breakpoints.map(bp => `@media (min-width: ${bp}px)`))([400, 600, 900, 1000]),
  mq: (breakpoints => breakpoints.reduce(makeMediaQueries, {} as MediaQueries))([400, 600, 900, 1000]),
  fontSizes: {
    "title-sm": "20px",
    "title-md": "24px",
    "title-lg": "30px",
  },
  utils: {
    flexRow: {
      display: "flex",
      "flex-direction": "row",
    },
    align: {
      alignItems: "center",
    },
  },
};

const formStyles = {
  general: {
    color: styles.colors["dark-blue"],
    display: "flex",
    "flex-direction": "column",
    marginBottom: styles.spacing[24],
    gap: styles.spacing[4],
  },

  label: {
    fontSize: styles.spacing[12],
    fontWeight: 400,
    color: styles.colors["dark-blue"],
  },

  inputField: {
    height: styles.spacing[36],
    backgroundColor: styles.colors["bg-primary"],
    border: "1px transparent solid",
    borderRadius: styles["border-radius"].primary,
    padding: "0 8px",
    margin: "4px 0 0 0",
    "&:focus": {
      border: `1px ${styles.colors['border-primary']} solid`,
      outline: "none",
    },
  },

  submitBtn: {
    border: "none",
    display: "inline-block",
    marginTop: "6px",
    width: "100%",
    height: "48px",
    borderRadius: styles["border-radius"].primary,
    color: styles.colors["bg-primary"],
    backgroundColor: styles.colors["dark-blue"],
    fontWeight: 600,
    letterSpacing: "1.5px",
    "cursor": "pointer",
    "&:hover": {
      backgroundColor: "red",
    },
    "&:active": {
      transform: "translate(0, 1px)",
    },
  },

  submitBtnSuccess: {
    border: "none",
    display: "inline-block",
    marginTop: "6px",
    width: "100%",
    height: "48px",
    borderRadius: styles["border-radius"].primary,
    color: styles.colors["bg-primary"],
    backgroundColor: "green",
    fontWeight: 600,
    letterSpacing: "1.5px",
    "cursor": "pointer",
  },
}

export { styles, formStyles };

interface MediaQueries {
  [key: number ]: string 
}

function makeMediaQueries(acc: MediaQueries, bp: number) { 
  acc[bp] = `@media (min-width: ${bp}px)`
  return acc
}