import { useContext, useState } from "react"
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"
import RowPaitents from "../components/RowPaitents"
import QuestionRow from "../components/QuestionRow"

function Doctor() {
  const { profileDr } = useContext(diabetesContext)
  if (!profileDr) return <h1>Loading...</h1>

  return (
    <>
      <Container style={{ marginBottom: 300 }}>
        <Tabs id="controlled-tab-example" className="mb-3" style={{ marginTop: 70 }}>
          <Tab eventKey="profile" title="Profile">
            <Col md="4">
              <img
                variant="top"
                src={profileDr.avatar}
                width="100%"
                style={{ borderRadius: "10px", margin: "20px" }}
                alt=" "
              />
              <h1>
                DR: {profileDr.firstName} {profileDr.lastName}
              </h1>
              Email: <h6>{profileDr.email}</h6>
            </Col>
          </Tab>
          <Tab eventKey="paitents" title="Paitents">
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>photo</th>
                      <th>full Name</th>
                      <th> question</th>
                      <th> action</th>
                      <th> </th>
                    </tr>
                  </thead>
                  {profileDr.paitents.map(paitent => (
                    <>
                      <RowPaitents paitent={paitent} />
                    </>
                  ))}
                </Table>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="visits" title="Visits">
            {profileDr.visits.map(visit => {
              const date = new Date(visit.date)
              // date.sort((a, b) => b.date - a.date)
              return (
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>{date.toUTCString()}</td>
                      <td>
                        {visit.idPaitent.firstName} {visit.idPaitent.midName} {visit.idPaitent.lastName}{" "}
                      </td>
                      <td>{visit.idPaitent.MNR}</td>
                    </tr>
                  </tbody>
                </Table>
              )
            })}
          </Tab>
          <Tab eventKey="question" title="question">
            {/* {paitent.questions.map(question => (
                              <h1>{question.question}</h1>
                            ))} */}

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Q?</th>
                  <th>answer</th>
                </tr>
              </thead>

              <tbody>
                {profileDr.questions.map(question => {
                  return <QuestionRow question={question} />
                })}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Container>
    </>
  )
}
export default Doctor
