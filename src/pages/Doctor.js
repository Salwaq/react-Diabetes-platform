import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"
import { Link } from "react-router-dom"
function Doctor() {
  const { profileDr, logout } = useContext(diabetesContext)
  if (!profileDr) return <h1>Loading...</h1>
  return (
    <>
      <h1>i'm DR</h1>

      <>
        <Row>
          <Col md="4">
            <img
              variant="top"
              src={profileDr.avatar}
              width="100%"
              style={{ borderRadius: "10px", margin: "20px" }}
              alt=" "
            />
          </Col>
          <Col>
            <h1>
              {profileDr.firstName} {profileDr.lastName}
            </h1>
            <h6>{profileDr.email}</h6>

            {profileDr.paitents.map(paitent => (
              <>
                <h4>
                  Paitents:
                  <h6>
                    {paitent.firstName} {paitent.midName} {paitent.lastName}
                  </h6>
                  <p>{paitent.MNR}</p>
                  {paitent.questions.map(question => (
                    <h1>{question.question}</h1>
                  ))}
                </h4>

                <h1>Visits:</h1>
                {profileDr.visits.map(visit => {
                  const date = new Date(visit.date)

                  return (
                    <h6>
                      {date.toUTCString()} {visit.idPaitent.firstName} {visit.idPaitent.midName}{" "}
                      {visit.idPaitent.lastName} {visit.idPaitent.MNR}
                    </h6>
                  )
                })}
              </>
            ))}
          </Col>
        </Row>
        <Link to="/" onClick={logout}>
          <button> logout</button>
        </Link>
      </>
    </>
  )
}
export default Doctor
