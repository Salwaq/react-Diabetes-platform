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
import SendIcon from "@mui/icons-material/Send"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import ArticalModal from "../components/ArticalModal"
import TextField from "@mui/material/TextField"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import InfoIcon from "@mui/icons-material/Info"
import { Button, CardActionArea } from "@mui/material"
import ArticalRow from "../components/ArticalRow"

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
  const [show, setShow] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const { profile, articals } = useContext(diabetesContext)
  if (!profile) return <h1>Loading...</h1>

  const lastVisit = profile.visits[profile.visits.length - 1]
  const lastDate = new Date(lastVisit?.date)

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
                          <h6 style={{ backGround: "black" }}>Q: {question.question}</h6>
                        </span>
                        <h6>
                          A:<p>{question.answer}</p>
                        </h6>
                      </>
                    ))}
                  </Typography>
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}></Box>
            </Box>
          </Card>
        </div>
        <br></br>

        {/* Calculators */}
        <div id="cardRow">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cumulative Diabetes
                </Typography>{" "}
                <br />
                <Typography variant="body2" color="text.secondary">
                  should be on your mind daily to learn how to manage and treat your blood sugar on you own, which is
                  better for your health in the short and long term. The success of diabetes treatment depends on how
                  well you control your blood sugar.
                </Typography>
                <br />
                <br />
                <TextField
                  required
                  id="outlined-required"
                  label="HbA1c"
                  defaultValue={profile.infoPaitent?.CdAverage}
                />
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/5342565/pexels-photo-5342565.jpeg?auto=compress&cs=tinysrgb&dpr=2"
                  alt=" "
                  height="15"
                  loading="lazy"
                />
                <ImageListItemBar
                  title="below 5.7 percent"
                  subtitle="Normal"
                  actionIcon={
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about `}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/5469165/pexels-photo-5469165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=" "
                  loading="lazy"
                />
                <ImageListItemBar
                  title="	5.7 to 6.4 percent"
                  subtitle="Prediabetes"
                  actionIcon={
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about `}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://www.genengnews.com/wp-content/uploads/2020/08/Aug28_2020_Getty_1213259073_DiabetesTestingEquipment-scaled-e1598623827835.jpg"
                  alt=" "
                  loading="lazy"
                />
                <ImageListItemBar
                  title="	6.5 percent or above"
                  subtitle="Danger Diabetes"
                  actionIcon={
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about `}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </CardActionArea>
          </Card>
        </div>
      </Container>

      {/* side bar  */}
      <div class="container1">
        {" "}
        {articals.map(artical => {
          return (
            <>
              <ArticalRow artical={artical} />
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
