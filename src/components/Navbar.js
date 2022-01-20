import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Avatar, Button } from "@mui/material"

import { Link } from "react-router-dom"
import { useContext } from "react"
import diabetesContext from "../utils/diabetesContext"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
})
export default function Navbar() {
  const { logout } = useContext(diabetesContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Avatar
              alt="Profile Picture"
              src="https://i.pinimg.com/originals/23/b5/56/23b5564845a40fffb18302a3ae040241.png"
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DIABETES PLATFORM
            </Typography>
            {localStorage.tokenDiabetes ? (
              <Link to="/" onClick={logout}>
                <Button color="primary"> logout</Button>
              </Link>
            ) : null}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  )
}
