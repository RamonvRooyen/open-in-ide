import {
  Container,
  createTheme,
  CssBaseline,
  Select,
  ThemeProvider,
  Typography
} from "@mui/material"
import { useState } from "react"
import {darkTheme} from "~theme";

function IndexOptions() {
  const [data, setData] = useState("")

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography variant="body2">hi</Typography>
      </Container>
    </ThemeProvider>
  )
}

export default IndexOptions
