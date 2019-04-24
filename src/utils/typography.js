import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  scaleRatio: 2,
  headerFontFamily: [
    "acumin-pro",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "interstate-mono",
    "SFMono-Regular",
    "Consolas",
    "Roboto Mono",
    "Droid Sans Mono",
    "Liberation Mono",
    "Menlo",
    "Courier",
    "monospace",
  ],
  headerWeight: "normal",
  // See below for the full list of options.
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
