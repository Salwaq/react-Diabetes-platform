import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"
function AddCdModal(props) {
  const { paitentId, show, setShow } = props
  const { addCd } = useContext(diabetesContext)
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={e => addCd(e, paitentId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add cumulative Diabetes: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                cumulative Diabetes
              </Form.Label>
              <Col md="8">
                <Form.Control type="number" name="cumulativeDiabetes" required />
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

export default AddCdModal
