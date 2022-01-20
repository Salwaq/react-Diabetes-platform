import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { AppBar } from "@mui/material"
function Footer() {
  return (
    <AppBar position="relative" sx={{ zIndex: theme => theme.zIndex.drawer + 1, top: "auto", bottom: 0 }}>
      <footer id="Footer">
        <section id="sectionFooter">
          <h4>About</h4>
          The Capstone Project from salwa alqurashi , Solve the patient's problem, tracking on cumulative diabetes , and
          communicate with his doctor as quickly as possible.
        </section>
        <section id="sectionFooter">
          <h4>Arownd the web</h4>
          <div id="icon">
            <a href="https://github.com/Salwaq/react-Diabetes-platform">
              <GitHubIcon fontSize="large" color="info" />
            </a>
            <TwitterIcon fontSize="large" />
          </div>
        </section>
        <section id="sectionFooter">
          <h4>Location</h4>
          <LocationOnOutlinedIcon />
          Al Bahah , King Abdul Aziz City for Science and Technology
        </section>
      </footer>
    </AppBar>
  )
}

export default Footer
