import { useContext } from "react"
import diabetesContext from "../utils/diabetesContext"

import { Button, Col, Form, Modal, Row } from "react-bootstrap"

function AddQuestionModal(props) {
  const { show, setShow, doctorId } = props
  const { addQuestion } = useContext(diabetesContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addQuestion(e, doctorId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                question
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="question" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
              Add Q
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddQuestionModal
