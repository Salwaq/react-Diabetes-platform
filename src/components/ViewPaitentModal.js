import { Button, ListGroup, Modal } from "react-bootstrap"
function ViewPaitentModal(props) {
  const { setShow, show, paitent } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>View Paitent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Name</strong> {paitent.firstName} {paitent.midName} {paitent.lastName}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>MNR:</strong> {paitent.MNR}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>photo:</strong>{" "}
              <img src={paitent.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt=" " />
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Gender</strong> {paitent.gendar}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Smoking?</strong> {paitent.smoking ? "yes" : "no"}
            </ListGroup.Item>

            {/* <ListGroup.Item>
              <strong>questions and answer:</strong>
              <ListGroup.Item>
                <ListGroup>
                  {paitent.questions.map(question => (
                    <ListGroup.Item>
                      <span style={{ marginLeft: 10 }}>{question.question}</span>

                      <span style={{ marginLeft: 10 }}>{question.answer}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup.Item> */}
            {paitent.infoPaitent ? (
              <ListGroup.Item>
                <strong>infoPaitent:</strong>
                <ListGroup>
                  <ListGroup.Item>
                    <h6>Blood Type : {paitent.infoPaitent?.bloodType}</h6>
                    <h6>Weight : {paitent.infoPaitent?.weight}</h6>
                    <h6>Height : {paitent.infoPaitent?.height}</h6>
                    <h6>Diabetes Type: {paitent.infoPaitent?.diabetesType}</h6>
                    <h6> cumulative Diabetes Average: {paitent.infoPaitent.CdAverage}</h6>

                    {/* <ListGroup>
                      {paitent.infoPaitent.cumulativeDiabetes.map(cumulativeDiabete => (
                        <ListGroup.Item>
                          <span style={{ marginLeft: 10 }}>{cumulativeDiabete.cumulativeDiabetes}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup> */}
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            ) : null}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewPaitentModal
