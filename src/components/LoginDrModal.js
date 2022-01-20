import { useContext } from "react"
import { Form, Col, Row, Button, Modal } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function LoginDrModal(props) {
  const { show, setShow } = props
  const { loginDr } = useContext(diabetesContext)

  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={loginDr}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              email
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default LoginDrModal
