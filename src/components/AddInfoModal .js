import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"
function AddInfoModal(props) {
  const { paitentId, show, setShow } = props
  const { addInfo } = useContext(diabetesContext)
  return (
    <>
      {" "}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={e => addInfo(e, paitentId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add information: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                bloodType
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="bloodType" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                weight
              </Form.Label>
              <Col md="8">
                <Form.Control type="number" name="weight" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                height
              </Form.Label>
              <Col md="8">
                <Form.Control type="number" name="height" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                diabetesType
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="diabetesType" required />
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

export default AddInfoModal
