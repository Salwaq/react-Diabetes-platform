import { useContext, useState } from "react"
import AddQuestionModal from "../components/AddQuestionModal"
import diabetesContext from "../utils/diabetesContext"
import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import ArticalModal from "../components/ArticalModal"

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(-90deg)" : "rotate(-90deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

function PaitentProfile() {
  const [showArtical, setShowArtical] = useState(false)
  const [show, setShow] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const { profile, articals } = useContext(diabetesContext)
  if (!profile) return <h1>Loading...</h1>

  const lastVisit = profile.visits[profile.visits.length - 1]
  const lastDate = new Date(lastVisit.date)

  return (
    <div className="paitentProfile">
      <Container fixed>
        <div id="cardPaitent">
          <Card sx={{ maxWidth: 700 }} style={{ marginTop: 100 }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  src={profile.avatar}
                  sx={{ width: 100, height: 100 }}
                />
              }
            />
            <div id="card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {profile.MNR}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {profile.firstName} {profile.midName} {profile.lastName}
                </Typography>
                <Typography variant="body2">
                  <h5>{profile.gendar}</h5>
                </Typography>
                <Typography variant="body2">
                  <h5>{profile.email}</h5>
                </Typography>

                <Typography variant="body2">
                  <h6>
                    Name your doctor: {profile.doctor.firstName} {profile.doctor.lastName}
                  </h6>
                </Typography>
                <Typography variant="body2">
                  <h6>Phone Number: {profile.phoneNumber}</h6>
                </Typography>
                <Typography variant="body2">
                  <h6>You are smoking: {profile.smoking ? "yes" : "no"}</h6>
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>information file:</Typography>
                  <Typography paragraph>
                    <h6>Blood Type : {profile.infoPaitent?.bloodType}</h6>
                    <h6>Weight : {profile.infoPaitent?.weight}</h6>
                    <h6>Height : {profile.infoPaitent?.height}</h6>

                    <h6>Diabetes Type: {profile.infoPaitent?.diabetesType}</h6>
                  </Typography>
                  <Typography paragraph>
                    <h6>Visits:</h6>
                    {profile.visits.map(visit => {
                      const date = new Date(visit.date)

                      return <h6>{date.toDateString()}</h6>
                    })}
                  </Typography>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </div>
        <div id="cardRow">
          <Card sx={{ display: "flex", maxWidth: 400 }} id="cardPaitent">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Next Visit:
                </Typography>
                <Typography paragraph variant="subtitle1" color="text.secondary" component="div">
                  <h3>{lastDate.toDateString()} </h3>
                  {/* // const visitLen = arr.length
                // if (i === visitLen - 1) {
                //   // last one
                // } else {
                //   // not last one
                // }
              })}{" "} */}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://preview.pixlr.com/images/800wm/100/1/1001503340.jpg"
              alt=" "
            />
          </Card>

          <Card sx={{ display: "flex", maxWidth: 400 }} id="cardQuestion">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Questions & Answer
                </Typography>
                <Typography paragraph variant="subtitle1" color="text.secondary" component="div">
                  <Typography paragraph>
                    {profile.questions.map(question => (
                      <>
                        <span>
                          <h6>Q:</h6> <h6>{question.question}</h6>{" "}
                        </span>
                        <h6>A:</h6> <p>{question.answer}</p>
                      </>
                    ))}
                  </Typography>
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}></Box>
            </Box>
          </Card>
        </div>
        <Card sx={{ display: "flex", maxWidth: 700 }} id="cardPaitent">
          <h6>Cumulative Diabetes Average : {profile.infoPaitent?.CdAverage}</h6>
          {profile.infoPaitent?.cumulativeDiabetes?.map(cumulativeDiabete => {
            return <h6>{cumulativeDiabete.cumulativeDiabetes}:</h6>
          })}
        </Card>
      </Container>
      {/* side bar  */}
      <div class="container1">
        {" "}
        {articals.map(artical => {
          return (
            <>
              <Button className="buttonArtical" onClick={() => setShowArtical(true)}>
                {artical.title}
              </Button>

              <ArticalModal setShowArtical={setShowArtical} showArtical={showArtical} artical={artical} />
            </>
          )
        })}
        <AddQuestionModal show={show} setShow={setShow} doctorId={profile.doctor._id} />
        <Button variant="outlined" color="warning" endIcon={<SendIcon />} onClick={() => setShow(true)}>
          + Q?
        </Button>
      </div>
    </div>
  )
}

export default PaitentProfile
