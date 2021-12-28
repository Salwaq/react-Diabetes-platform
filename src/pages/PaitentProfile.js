import { useContext, useState } from "react"
import { Col, Row } from "react-bootstrap"
import AddQuestionModal from "../components/AddQuestionModal"
import diabetesContext from "../utils/diabetesContext"
import { Link } from "react-router-dom"

function PaitentProfile() {
  const [show, setShow] = useState(false)
  const { profile, logout } = useContext(diabetesContext)
  if (!profile) return <h1>Loading...</h1>
  return (
    <>
      <Row>
        <Col md="4">
          <img
            variant="top"
            src={profile.avatar}
            width="100%"
            style={{ borderRadius: "10px", margin: "20px" }}
            alt=" "
          />
        </Col>
        <Col>
          <h1>
            {profile.firstName}
            {profile.midName} {profile.lastName}
          </h1>
          <p>{profile.email}</p>
          <h2>{profile.MNR}</h2>
          <p>
            {profile.doctor.firstName} {profile.doctor.lastName}
          </p>
          <p>{profile.gendar}</p>
          <p>{profile.phoneNumber}</p>
          <p>{profile.smoking}</p>
          <p>{profile.infoPaitent.bloodType}</p>
          <p>{profile.infoPaitent.weight}</p>
          <p>{profile.infoPaitent.height}</p>
          <p>{profile.infoPaitent.diabetesType}</p>
          <p>{profile.infoPaitent.CdAverage}</p>

          {profile.questions.map(question => (
            <>
              <h4>{question.question}</h4>
              <h6>{question.answer}</h6>
            </>
          ))}

          {profile.visits.map(visit => {
            const date = new Date(visit.date)

            return <h6>{date.toDateString()}</h6>
          })}

          {profile.infoPaitent.cumulativeDiabetes?.map(cumulativeDiabete => {
            return <h6>{cumulativeDiabete.cumulativeDiabetes}</h6>
          })}
        </Col>
      </Row>
      <button onClick={() => setShow(true)}> ADD Q?</button>

      <AddQuestionModal show={show} setShow={setShow} doctorId={profile.doctor._id} />

      <Link to="/" onClick={logout}>
        <button> logout</button>
      </Link>
    </>
  )
}

export default PaitentProfile
