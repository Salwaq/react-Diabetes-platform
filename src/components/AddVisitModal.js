import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function AddVisitModal(props) {
  const { paitentId, show, setShow } = props
  const { addVisit } = useContext(diabetesContext)
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={e => addVisit(e, paitentId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Visit : </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Date
              </Form.Label>
              <Col md="8">
                <Form.Control name="date" type="datetime-local" placeholder="Select Date" required></Form.Control>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              Confirm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddVisitModal
