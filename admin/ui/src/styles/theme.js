import { createTheme } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import colors from '../styles/_export.scss'

const primaryPalette = {
  main: colors.primary
}

const secondaryPalette = {
  main: colors.secondary
}

const tertiaryPalette = {
  main: colors.tertiary
}

const blackPalette = {
  main: colors.black
}

export const appTheme = createTheme({
  palette: {
    primary: primaryPalette,
    secondary: secondaryPalette,
    tertiary: tertiaryPalette,
    black: blackPalette
  }
})